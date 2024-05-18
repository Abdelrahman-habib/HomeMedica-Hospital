function displayDoctorData(patientsPrescriptions) {
  $("#patients-prescriptions-table").DataTable({
    dom: "Q<'table-tools'B<'t2'fl>>rtip",
    buttons: [
      {
        popoverTitle: "Visibility control",
        extend: "colvis",
        collectionLayout: "two-column",
        className: "border-0 rounded btn-light-primary mr-1 mb-1",
      },
      {
        extend: "copyHtml5",
        exportOptions: {
          columns: [0, ":visible"],
        },
        className: "border-0 rounded btn-light-primary mr-1 mb-1",
      },
      {
        extend: "print",
        title: "patients prescriptions list",
        exportOptions: {
          columns: ":visible",
        },
        className: "border-0 rounded btn-light-primary ml-1 mb-1",
      },
    ],
    data: patientsPrescriptions,
    columns: [
      {
        data: "id",
        title: "id",
        orderable: false,
        searchable: false,
        visible: false,
      },
      {
        data: "doctorID",
        title: "doctorID",
        orderable: false,
        searchable: false,
        visible: false,
      },
      {
        data: "patientID",
        title: "patientID",
        orderable: false,
        searchable: false,
        visible: false,
      },
      {
        data: "doctorName",
        title: "doctor",
        render: function (data, type, row) {
          return `<span title="view ${data} profile" class="view-doctor text-primary cursor-pointer" data-doctorID="${row.doctorID}" >${data}</span>`;
        },
      },
      {
        data: "patientName",
        title: "patient name",
      },
      {
        data: "patientAge",
        title: "patient age",
      },
      {
        data: "patientGender",
        title: "patient gender",
      },
      {
        data: "date",
        title: "prescription date",
      },
      {
        data: "diagnosis",
        title: "diagnosis",
      },
      {
        data: "drugs",
        title: "drugs",
      },
    ],
    select: {
      selector: "td:not(.not-selectable)",
    },
    bDestroy: true,
    initComplete: function () {
      let btns = $(".dt-buttons button");
      btns.removeClass("btn-secondary");
    },
  });
}

async function getTableData(unblock) {
  const patientsPrescriptionsList =
    await window.firebase.getPatientPrescriptions(
      new URL(window.location.href).searchParams.get("patientId")
    );
  console.log(patientsPrescriptionsList);
  displayDoctorData(patientsPrescriptionsList);
  if (unblock) $("#patients-prescriptions-list-section").unblock();
}
$("table").on("click", ".view-doctor", function () {
  //   console.log($(this).data("doctorid"));
  window.open(`doctor.html?doctorId=${$(this).data("doctorid")}`, "_self", "");
});

getTableData();

function reloadTable() {
  $("#patients-prescriptions-list-section").block({
    message:
      'getting data...<div class="bx bx-revision icon-spin font-medium-2"></div>',
    overlayCSS: {
      backgroundColor: "#fff",
      opacity: 0.8,
      cursor: "wait",
    },
    css: {
      border: 0,
      padding: 0,
      backgroundColor: "transparent",
    },
  });
  getTableData(true);
}

$('a[data-action="reloadTable"]').on("click", reloadTable);
