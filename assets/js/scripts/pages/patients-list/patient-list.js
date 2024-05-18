function displayDoctorData(patients) {
  patients = append_dropdown_menu(patients);
  $("#patients-table").DataTable({
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
        title: "patients list",
        exportOptions: {
          columns: ":visible",
        },
        className: "border-0 rounded btn-light-primary ml-1 mb-1",
      },
    ],
    data: patients,
    columns: [
      {
        title: "id",
        orderable: false,
        searchable: false,
        visible: false,
      },
      { title: "username" },
      { title: "profile image" },
      { title: "phoneNumber" },
      { title: "email" },
      {
        title: "control",
        orderable: false,
        searchable: false,
        className: "not-selectable",
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
  const patientsList = await window.firebase.getPatientsList();
  displayDoctorData(patientsList);
  if (unblock) $("#patients-list-section").unblock();
}

getTableData();

function reloadTable() {
  $("#patients-list-section").block({
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

function append_dropdown_menu(patients) {
  for (let i = 0; i < patients.length; i++) {
    let dropdown = `<div class="dropdown">
          <span class="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu"></span>
          <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item view-patient-prescriptions text-secondary" data-patientid="${patients[i][0]}" data-patientname="${patients[i][1]}" href="#"><i class="bx bx-detail mr-1"></i> view prescriptions</a>
              
          </div>
      </div>`;

    patients[i].push(dropdown);
  }
  return patients;
}

$("table").on("click", ".view-patient-prescriptions", function () {
  window.open(
    `patient-prescriptions.html?patientId=${$(this).data("patientid")}`,
    "_self",
    ""
  );
});

$('a[data-action="reloadTable"]').on("click", reloadTable);
