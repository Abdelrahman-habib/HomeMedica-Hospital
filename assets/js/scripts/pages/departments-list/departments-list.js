let table;

function displayTable(departments) {
  departments = append_dropdown_menu(departments);
  table = $("#departments-table").DataTable({
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
        title: "departments list",
        exportOptions: {
          columns: ":visible",
        },
        className: "border-0 rounded btn-light-primary ml-1 mb-1",
      },
    ],
    data: departments,
    columnDefs: [
      {
        orderable: false,
        searchable: false,
        className: "not-selectable",
        targets: 11,
      },
      { orderable: false, searchable: false, visible: false, targets: 0 },
      {
        render: function (data, type, row) {
          return `<span class="badge" style="background-color: ${data[0]}; color: ${data[1]}">Color</span>`;
        },
        targets: 2,
      },
      {
        render: function (data, type, row) {
          if (data[0] == true) {
            //open
            return `<span class="badge badge-success mr-1"">Open</span> <small>from ${data[1]} to ${data[2]}</small>`;
          } else {
            //closed
            return `<span class="badge badge-danger mr-1"">Closed</span>`;
          }
        },
        targets: [3, 4, 5, 6, 7, 8, 9],
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
  const hospitalDepartmentsList =
    await window.firebase.getHospitalDepartmentsList();
  displayTable(hospitalDepartmentsList);
  if (unblock) $("#departments-list-section").unblock();
}

function reloadTable() {
  $("#departments-list-section").block({
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

function removeTableRow(row) {
  table.row(row).remove().draw();
}

function append_dropdown_menu(departments) {
  for (let i = 0; i < departments.length; i++) {
    let dropdown = `<div class="dropdown">
          <span class="bx bx-dots-vertical-rounded font-medium-3 dropdown-toggle nav-hide-arrow cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu"></span>
          <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item edit-department text-secondary" data-departmentid="${departments[i][0]}" data-departmentname="${departments[i][1]}" href="#"><i class="bx bx-edit-alt mr-1"></i> edit</a>
              <a class="dropdown-item delete-department text-secondary" data-departmentid="${departments[i][0]}" data-departmentname="${departments[i][1]}"  data-departmentrow="${i}" href="#"><i class="bx bx-trash mr-1"></i> delete</a>
          </div>
      </div>`;

    departments[i].push(dropdown);
  }
  return departments;
}

$("table").on("click", ".edit-department", function () {
  window.open(
    `edit-department.html?departmentID=${$(this).data("departmentid")}`,
    "_self",
    ""
  );
});

$("table").on("click", ".delete-department", function () {
  let departmentID = $(this).data("departmentid");
  let section = $("#department-list-section");
  let tr = $(this).parents("tr");
  Swal.fire({
    title: `are you sure you want to delete ${departmentID} department?`,
    text: "once you delete a department's record all its data and its closely related data like doctors hours and appointments are gone forever",
    type: "warning",
    showCancelButton: true,
    width: "850px",
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
      const deleted = await window.firebase.deleteHospitalDepartment(
        departmentID
      );
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
          text: "an error occured occurred while trying to delete a department's record , make sure you are connected to the internet and try again.",
          confirmButtonClass: "btn btn-secondary",
          confirmButtonText: "Ok",
        });
      }
    }
  });
});

$('a[data-action="reloadTable"]').on("click", reloadTable);

getTableData();
