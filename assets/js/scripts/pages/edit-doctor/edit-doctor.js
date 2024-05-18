const form = "#edit-doctor-form";

async function editDoctor() {
  $(form).block({
    message:
      'editing doctor data...<div class="bx bx-revision icon-spin font-medium-2"></div>',
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
  let doctorData = getFormData($(form));
  console.log(doctorData);
  window.firebase
    .editHospitalDoctor(doctorData)
    .then((edited) => {
      {
        if (edited) {
          $(form).unblock();
          toastr.success(
            `Doctor "${doctorData.name}" was edited successfuly.`,
            "edited",
            {
              timeOut: 3000,
            }
          );
        } else {
          $(form).unblock();
          toastr.error(
            `an error occured occurred while trying to edit "${doctorData.name}" data.`,
            "Operation Failed",
            {
              timeOut: 5000,
            }
          );
        }
      }
    })
    .catch((error) => {
      $(form).unblock();
      toastr.error(
        `an error occured occurred while trying to add "${doctorData.name}". ${error}`,
        "Operation Failed",
        {
          timeOut: 5000,
        }
      );
    });
}
$(".edit-doctor").on("click", (e) => {
  e.preventDefault();
  if ($(form).valid()) {
    editDoctor();
  }
});
