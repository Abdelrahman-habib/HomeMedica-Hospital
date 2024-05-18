const form = ".wizard-validation";

const config = {
  ready: initPage,
  finish: "Add",
  onFinished: addDoctor,
  rules: {
    name: {
      required: true,
      personName: true,
      normalizer: function (value) {
        return $.trim(value);
      },
    },
    phone: {
      phoneEG: true,
      personName: false,
      normalizer: function (value) {
        return $.trim(value);
      },
    },
    birthDate: {
      personName: false,
      normalizer: function (value) {
        return $.trim(value);
      },
    },
    email: {
      email: true,
      normalizer: function (value) {
        return $.trim(value);
      },
    },
    password: {
      required: true,
      password: true,
      personName: false,
      normalizer: function (value) {
        return $.trim(value);
      },
    },
  },
};
const wizard = $(form).StepsForm(config);

async function addDoctor() {
  $(form).block({
    message:
      'adding doctor...<div class="bx bx-revision icon-spin font-medium-2"></div>',
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
  let doctorData = getFormDataAll($(form));
  console.log(doctorData);
  const added = window.firebase
    .addHospitalDoctor(doctorData)
    .then((added) => {
      {
        if (added) {
          $(form).unblock();
          $(form).trigger("reset");
          toastr.success(
            `Doctor "${doctorData.name}" was added successfuly.`,
            "Added",
            {
              timeOut: 3000,
            }
          );
          wizard.goToCustomStep(0);
        } else {
          $(form).unblock();
          toastr.error(
            `an error occured occurred while trying to add "${doctorData.name}".`,
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
