const form = "#edit-department-form";
// takes form data and formats working days to be in the form of workingDays:{DAY:{from:"HH:MM", to:"HH:MM"},DAY:...}
function formatDepartmentFormData(data) {
  //data =  {
  //     "name": "Breast Screening",
  //     "price": "120.00"
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
    price: data.price,
    color: data.color,
    textColor: data.textcolor,
    workingHours: workingHours,
  };
}

async function editDepartment() {
  $(form).block({
    message:
      'editing department data...<div class="bx bx-revision icon-spin font-medium-2"></div>',
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
  console.log(departmentData);
  window.firebase
    .editHospitalDepartment(departmentData)
    .then((edited) => {
      {
        if (edited) {
          $(form).unblock();
          toastr.success(
            `Department "${departmentData.name}" was edited successfuly.`,
            "Edited",
            {
              timeOut: 3000,
            }
          );
        } else {
          $(form).unblock();
          toastr.error(
            `an error occured occurred while trying to edit "${departmentData.name}" data.`,
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
        `an error occured occurred while trying to edit "${departmentData.name}" data. ${error}`,
        "Operation Failed",
        {
          timeOut: 5000,
        }
      );
    });
}
$(".edit-department").on("click", (e) => {
  e.preventDefault();
  if ($(form).valid()) {
    editDepartment();
  }
});
