const form = ".wizard-validation";

const wizardConfig = {
  finish: "Add",
  onFinished: addDepartment,
  rules: {
    price: {
      required: false,
      money: true,
      normalizer: function (value) {
        return $.trim(value);
      },
    },
    ".department-schedule-to": {
      required: true,
      HHMM: true,
      normalizer: function (value) {
        return $.trim(value);
      },
    },
    ".department-schedule-from": {
      required: true,
      HHMM: true,
      normalizer: function (value) {
        return $.trim(value);
      },
    },
  },
  ready: init,
};

const wizard = $(form).StepsForm(wizardConfig);

// takes form data and formats working days to be in the form of workingDays:{DAY:{from:"HH:MM", to:"HH:MM"},DAY:...}
function formatDepartmentFormData(data) {
  //data =  {
  //     "name": "Breast Screening",
  //     "description": "",
  //     "color": "",
  //     "textcolor": "",
  //     "SaturdayFrom": "08:00",
  //     "SaturdayTo": "14:00",
  //     "SundayFrom": "08:00",
  //     "SundayTo": "14:00",
  //     "MondayFrom": "08:00",
  //     "MondayTo": "14:00",
  //     "TuesdayFrom": "08:00",
  //     "TuesdayTo": "14:00",
  //     "WednesdayFrom": "08:00",
  //     "WednesdayTo": "14:00",
  //     "ThursdayFrom": "08:00",
  //     "ThursdayTo": "14:00",
  //     "FridayFrom": "08:00",
  //     "FridayTo": "14:00"
  // }
  let workingHours = {};
  let days = [
    "SATURDAY",
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
  ];
  for (let i = 0; i < days.length; i++) {
    workingHours[days[i]] = {
      open: data[titleCase(days[i])] === "on",
      from: data[`${titleCase(days[i])}From`],
      to: data[`${titleCase(days[i])}To`],
    };
  }

  return {
    name: data.name,
    description: data.description,
    color: data.color,
    textColor: data.textcolor,
    price: data.price,
    workingHours: workingHours,
  };
}

async function addDepartment() {
  $(form).block({
    message:
      'adding department...<div class="bx bx-revision icon-spin font-medium-2"></div>',
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
  let departmentData = formatDepartmentFormData(getFormDataAll($(form)));

  const added = await window.firebase.addHospitalDepartment(departmentData);
  if (added) {
    $(form).unblock();
    $(form).trigger("reset");
    toastr.success(
      `Department "${departmentData.name}" was added successfuly.`,
      "Added",
      {
        timeOut: 3000,
      }
    );
    wizard.goToCustomStep(0);
  } else {
    $(form).unblock();
    toastr.error(
      `an error occured occurred while trying to add "${departmentData.name}".`,
      "Operation Failed",
      {
        timeOut: 5000,
      }
    );
  }
}
