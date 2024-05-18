let table;
function displayTable(doctors) {
  doctors = append_dropdown_menu(doctors);
  console.log(doctors);
  table = $("#doctors-table").DataTable({
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
        title: "doctors list",
        exportOptions: {
          columns: ":visible",
        },
        className: "border-0 rounded btn-light-primary ml-1 mb-1",
      },
    ],
    data: doctors,
    columns: [
      {
        title: "id",
        orderable: false,
        searchable: false,
        visible: false,
      },
      { title: "name" },
      { title: "specialty" },
      { title: "type" },
      { title: "phone" },
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
  const doctorsList = await window.firebase.getDoctorsList();
  displayTable(doctorsList);
  if (unblock) $("#doctors-list-section").unblock();
}

function removeTableRow(row) {
  table.row(row).remove().draw();
}

getTableData();

function reloadTable() {
  $("#doctors-list-section").block({
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

function append_dropdown_menu(doctors) {
  for (let i = 0; i < doctors.length; i++) {
    let dropdown = `<div class="dropdown">
        <span class="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu"></span>
        <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item edit-doctor text-secondary" data-doctorid="${doctors[i][0]}" data-doctorname="${doctors[i][1]}" href="#"><i class="bx bx-edit-alt mr-1"></i> edit</a>
            <a class="dropdown-item delete-doctor text-secondary" data-doctorid="${doctors[i][0]}" data-doctorname="${doctors[i][1]}" href="#"><i class="bx bx-trash mr-1"></i> delete</a>
        </div>
    </div>`;

    doctors[i].push(dropdown);
  }
  return doctors;
}

$("table").on("click", ".edit-doctor", function () {
  window.open(
    `edit-doctor.html?doctorId=${$(this).data("doctorid")}`,
    "_self",
    ""
  );
});

$("table").on("click", ".delete-doctor", function () {
  let doctor_name = $(this).data("doctorname");
  let doctor_id = $(this).data("doctorid");
  let section = $("#doctors-list-section");
  let tr = $(this).parents("tr");
  Swal.fire({
    title: `are you sure you want to delete: ${doctor_name}?`,
    text: "once you delete a doctor's record it's gone forever",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
    confirmButtonClass: "btn btn-danger",
    cancelButtonClass: "btn btn-primary ml-1",
    buttonsStyling: false,
  }).then(async function (result) {
    if (result.value) {
      blockItem(section, "deleteing...");
      const deleted = await window.firebase.deleteHospitalDoctor(doctor_id);
      if (deleted) {
        removeTableRow(tr);
        section.unblock();
        Swal.fire({
          type: "success",
          title: "deleted",
          text: `delete completed`,
          confirmButtonClass: "btn btn-success",
          confirmButtonText: "Ok",
        });
      } else {
        section.unblock();
        Swal.fire({
          type: "error",
          title: "operation failed",
          text: "an error occured occurred while trying to delete a doctor's record , make sure you are connected to the network and try again.",
          confirmButtonClass: "btn btn-secondary",
          confirmButtonText: "Ok",
        });
      }
    }
  });
});

$('a[data-action="reloadTable"]').on("click", reloadTable);
