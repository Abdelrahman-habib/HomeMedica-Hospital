function displayTable(SOSs) {
  SOSs = appendRespondButton(SOSs);
  $("#SOSs-table").DataTable({
    dom: "<'table-tools'<'t2'fl>>rtip",
    // buttons: [
    //   {
    //     popoverTitle: "Visibility control",
    //     extend: "colvis",
    //     collectionLayout: "two-column",
    //     className: "border-0 rounded btn-light-primary mr-1 mb-1",
    //   },
    //   {
    //     extend: "copyHtml5",
    //     exportOptions: {
    //       columns: [0, ":visible"],
    //     },
    //     className: "border-0 rounded btn-light-primary mr-1 mb-1",
    //   },
    //   {
    //     extend: "print",
    //     title: "SOSs list",
    //     exportOptions: {
    //       columns: ":visible",
    //     },
    //     className: "border-0 rounded btn-light-primary ml-1 mb-1",
    //   },
    // ],
    data: SOSs,
    columns: [
      {
        title: "id",
        orderable: false,
        searchable: false,
        visible: false,
      },
      { title: "userID", orderable: false, searchable: false, visible: false },
      {
        title: "Profile",
        render: function (data, type, row) {
          return `<div class=""><img class="rounded" src="${data}" alt="Profile Picture" width="45"></div>`;
        },
      },
      { title: "Patient" },
      { title: "Date" },
      {
        title: "Location",
        render: function (data, type, row) {
          return `<div class="d-flex justify-content-center"><a title="open in google maps" class="btn btn-icon btn-light-primary glow table-button" target="_blank" href="https://www.google.com/maps/search/?api=1&query=${data[0]},${data[1]}"><span class='bx bx-map font-medium-6' ></span></a></div>`;
        },
      },
      {
        title: "responded",
        render: function (data, type, row) {
          if (data) {
            return `<div class="d-flex justify-content-center"><div class="badge badge-light-success"><span class="bx bx-mark font-medium-6"></span></div></div>`;
          } else {
            return `<div class="d-flex justify-content-center"><div class="badge badge-light-danger"><span class="bx bx-x font-medium-6"></span></div></div>`;
          }
        },
      },
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
  const SOSsList = await window.firebase.getSOSsList();
  displayTable(SOSsList);
  if (unblock) $("#SOSs-list-section").unblock();
}
window.firebase.handleNewSOS((event, SOSData) => {
  getTableData();
});
getTableData();

function reloadTable() {
  $("#SOSs-list-section").block({
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

function appendRespondButton(SOSs) {
  for (let i = 0; i < SOSs.length; i++) {
    let button = `<div class="d-flex justify-content-center"><a class="respond-SOS btn btn-success glow table-button" data-sosid="${SOSs[i][0]}" data-patient="${SOSs[i][3]}" href="#"><span class='bx bx-check pr-1'></span> Mark as responded</a>`;

    SOSs[i].push(button);
  }
  return SOSs;
}

$("table").on("click", ".respond-SOS", function () {
  let patient = $(this).data("patient");
  let SOSID = $(this).data("sosid");
  Swal.fire({
    title: `are you sure you want to mark: ${patient} SOS call as responded?`,
    text: "marking it as responded will delete the SOS's record.",
    type: "warning",
    width: "50%",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Mark",
    cancelButtonText: "Cancel",
    confirmButtonClass: "btn btn-success glow",
    cancelButtonClass: "btn btn-light ml-1",
    buttonsStyling: false,
  }).then(async function (result) {
    if (result.value) {
      console.log(SOSID);
      const marked = await window.firebase.markSOSAsResponded(SOSID);
      if (marked) {
        markSuccessCallback(patient);
      } else {
        markFailCallback(error, SOS_name);
      }
    }
  });
});

function markSuccessCallback(SOS_name) {
  Swal.fire({
    type: "success",
    title: "Marked",
    text: `SOS: ${SOS_name} has been marked responded successfuly`,
    confirmButtonClass: "btn btn-success",
    confirmButtonText: "Ok",
  });
  getTableData();
}

function markFailCallback(error, SOS_name) {
  console.log(error);
  Swal.fire({
    type: "error",
    title: "operation Failed",
    text: `an error occurred when trying to mark: ${SOS_name} as responded`,
    confirmButtonClass: "btn btn-secondary",
    confirmButtonText: "Ok",
  });
}

$('a[data-action="reloadTable"]').on("click", reloadTable);
