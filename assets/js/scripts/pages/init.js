async function initMedicalSpecialtiesSelect(selector) {
  const medicalSpecialties = await window.firebase.getMedicalSpecialties();
  if (medicalSpecialties) {
    $(selector).select2({
      placeholder: "pick a medical specialty",
      data: medicalSpecialties,
      width: "100%",
    });
  } else {
    toastr.error(
      "an error occured while trying to get medical specialties list, refresh the page and try again",
      "operation failed",
      {
        timeOut: 5000,
      }
    );
  }
}

async function initDoctorTypesSelect(selector) {
  const doctorTypes = await window.firebase.getDoctorTypes();
  if (doctorTypes) {
    $(selector).select2({
      placeholder: "pick a doctor Type",
      data: doctorTypes,
      width: "100%",
    });
  } else {
    toastr.error(
      "an error occured while trying to get doctor types list, refresh the page and try again",
      "operation failed",
      {
        timeOut: 5000,
      }
    );
  }
}

function getHospitalDepartmentOpenDays(departmentList, department) {
  console.log(departmentList, department);
  let days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  let departmentOpenDays = {};
  let i = 0;
  departmentList
    .find((departmentData) => departmentData[1] == department)
    .slice(3)
    .forEach((day) => {
      if (day[0]) {
        //open
        departmentOpenDays[days[i]] = {
          from: day[1],
          to: day[2],
        };
      }
      i++;
    });
  console.log(departmentOpenDays);
  return departmentOpenDays;
}

function initDepartmentDayTimeSelect(
  selector,
  daySelect,
  timeFromSelect,
  timeToSelect
) {
  $(selector).on("select2:select", function (e) {
    let selectedDepartment = $(this).val();
    $(timeFromSelect).val(null).prop("disabled", true);
    $(timeToSelect).val(null).prop("disabled", true);
    let openDays = getHospitalDepartmentOpenDays(
      window.departmentsList,
      selectedDepartment
    );
    if ($(daySelect).data("select2")) {
      $(daySelect)
        .prop("disabled", false)
        .select2("destroy")
        .empty()
        .select2({
          placeholder: "pick a day",
          data: Object.keys(openDays),
          width: "100%",
        })
        .val(null)
        .trigger("change");
    } else {
      $(daySelect)
        .prop("disabled", false)
        .empty()
        .select2({
          placeholder: "pick a day",
          data: Object.keys(openDays),
          width: "100%",
        })
        .val(null)
        .trigger("change");
    }
    $(daySelect).on("select2:select", function (e) {
      let selectedDay = openDays[e.params.data.text];
      $(timeFromSelect)
        .prop("disabled", false)
        .attr("min", selectedDay.from)
        .val(selectedDay.from);
      $(timeFromSelect).attr("max", selectedDay.to);
      $(timeToSelect)
        .attr("disabled", false)
        .val(selectedDay.to)
        .attr("min", selectedDay.from);
      $(timeToSelect).attr("max", selectedDay.to);
    });
  });
}

async function initHospitalDepartmentsSelect(
  selector,
  daySelect,
  timeFromSelect,
  timeToSelect
) {
  const departmentsList = await window.firebase.getHospitalDepartmentsList();
  window.departmentsList = departmentsList;
  if (departmentsList) {
    $(selector).select2({
      placeholder: "pick a hospital department",
      data: departmentsList.map(function (x) {
        return { id: x[0], text: x[1], color: x[2][0], textColor: x[2][1] };
      }),
      width: "100%",
    });
    if (daySelect && timeFromSelect && timeToSelect) {
      initDepartmentDayTimeSelect(
        selector,
        daySelect,
        timeFromSelect,
        timeToSelect,
        departmentsList
      );
    }
  } else {
    toastr.error(
      "an error occured while trying to get hospital departments list, refresh the page and try again",
      "operation failed",
      {
        timeOut: 5000,
      }
    );
  }
}

async function initHospitalDoctorsSelect(selector) {
  const doctorsList = await window.firebase.getDoctorsList();
  window.doctorsList = doctorsList;
  if (doctorsList) {
    $(selector).select2({
      placeholder: "pick a doctor",
      data: doctorsList.map(function (x) {
        return { id: x[0], text: x[1] };
      }),
      width: "100%",
    });
  } else {
    toastr.error(
      "an error occured while trying to get doctors list, make sure you are connected to the internet, refresh the page, and try again.",
      "operation failed",
      {
        timeOut: 5000,
      }
    );
  }
}
async function initDepartmentsSelect(selector) {
  const departmentsList = await window.firebase.getDepartmentsList();
  if (departmentsList) {
    $(selector).select2({
      placeholder: "pick a hospital department",
      data: departmentsList,
      width: "100%",
    });
  } else {
    toastr.error(
      "an error occured while trying to get hospital departments list, refresh the page and try again",
      "operation failed",
      {
        timeOut: 5000,
      }
    );
  }
}

async function initHospitalDepartmentsRepeater(
  repeaterSelector,
  selectSelector
) {
  const departmentsList = await window.firebase.getHospitalDepartmentsList();
  if (departmentsList) {
    $(repeaterSelector).repeater({
      initEmpty: true,
      show: function () {
        $(this)
          .find("input,select,textarea")
          .not("[type=submit]")
          .jqBootstrapValidation();
        $(this)
          .find(selectSelector)
          .select2({
            placeholder: "pick a hospital department",
            data: departmentsList.map(function (x) {
              return x[0];
            }),
            width: "100%",
          });
        $(this).find(".doctor-schedule-day").select2({
          placeholder: "pick a day",
          width: "100%",
        });
        $(this).find(".tinytimepicker").timepicker();
        $(this).slideDown();
      },
      hide: function (deleteElement) {
        let elem = $(this);
        Swal.fire({
          title: "Are you sure you want to delete this item from the list?",
          text: "",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "delete",
          cancelButtonText: "cancel",
          confirmButtonClass: "btn btn-danger",
          cancelButtonClass: "btn btn-primary ml-1",
          buttonsStyling: false,
        }).then(function (result) {
          if (result.value) {
            elem.slideUp(deleteElement, function name(params) {
              elem.remove();
            });
          }
        });
      },
    });
  } else {
    toastr.error(
      "an error occured while trying to get hospital departments list, refresh the page and try again",
      "operation failed",
      {
        timeOut: 5000,
      }
    );
  }
}
async function initDepartmentsRepeater(repeaterSelector, selectSelector) {
  const departmentsList = await window.firebase.getDepartmentsList();
  if (departmentsList) {
    $(repeaterSelector).repeater({
      initEmpty: true,
      show: function () {
        $(this)
          .find("input,select,textarea")
          .not("[type=submit]")
          .jqBootstrapValidation();
        $(this).find(selectSelector).select2({
          placeholder: "pick a hospital department",
          data: departmentsList,
          width: "100%",
        });
        $(this).find(".doctor-schedule-day").select2({
          placeholder: "pick a day",
          width: "100%",
        });
        $(this).find(".tinytimepicker").timepicker();
        $(this).slideDown();
      },
      hide: function (deleteElement) {
        let elem = $(this);
        Swal.fire({
          title: "Are you sure you want to delete this item from the list?",
          text: "",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "delete",
          cancelButtonText: "cancel",
          confirmButtonClass: "btn btn-danger",
          cancelButtonClass: "btn btn-primary ml-1",
          buttonsStyling: false,
        }).then(function (result) {
          if (result.value) {
            elem.slideUp(deleteElement, function name(params) {
              elem.remove();
            });
          }
        });
      },
    });
  } else {
    toastr.error(
      "an error occured while trying to get hospital departments list, refresh the page and try again",
      "operation failed",
      {
        timeOut: 5000,
      }
    );
  }
}
function initWorkingHoursRepeater(repeaterSelector, selector) {
  $(repeaterSelector).repeater({
    initEmpty: true,
    show: function () {
      $(this)
        .find("input,select,textarea")
        .not("[type=submit]")
        .jqBootstrapValidation();
      $(this).find(selector).select2({
        placeholder: "pick a day",
        width: "100%",
      });
      // $(this).find(".tinytimepicker").timepicker();
      $(this).slideDown();
    },
    hide: function (deleteElement) {
      let elem = $(this);
      Swal.fire({
        title: "Are you sure you want to delete this item from the list?",
        text: "",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "delete",
        cancelButtonText: "cancel",
        confirmButtonClass: "btn btn-danger",
        cancelButtonClass: "btn btn-primary ml-1",
        buttonsStyling: false,
      }).then(function (result) {
        if (result.value) {
          elem.slideUp(deleteElement, function name(params) {
            elem.remove();
          });
        }
      });
    },
  });
}

function initTinyTimepicker(selector) {
  $(selector).timepicker();
}
function initColorPicker(selector) {
  return Pickr.create({
    el: selector,
    theme: "classic",
    appClass: "color-picker",
    swatches: [
      "#5A8DEE",
      "#475F7B",
      "#39DA8A",
      "#FF5B5C",
      "#FDAC41",
      "#00CFDD",
      "#b3c0ce",
      "#010103",
      "#f6ddeb",
      "#ffffff",
      "#29345c",
      "#605156",
      "#f9ac1c",
      "#452733",
      "#82408c",
      "#8ea1c0",
      "#089c5a",
      "#e0c909",
      "#ee1903",
    ],

    components: {
      // Main components
      preview: true,
      opacity: false,
      hue: true,

      // Input / output Options
      interaction: {
        hex: true,
        rgba: false,
        hsla: false,
        hsva: false,
        cmyk: false,
        input: true,
        clear: false,
        save: true,
      },
    },
  });
}
