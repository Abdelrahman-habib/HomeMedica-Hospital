blockForm();
let colorPicker;
function initSelects() {
  //init color picker
  colorPicker = initColorPicker("#department-color-picker");

  //set color form element and text color form element when user picks a color
  colorPicker.on("save", (color, instance) => {
    let hexColor = color.toHEXA().toString();
    let textcolor = getTextColor(hexColor);
    $("#department-color").val(hexColor);
    $("#department-textcolor").val(textcolor);
  });

  //disable key input on input time
  $('input[type="time"]').keydown(function (event) {
    return false;
  });
}

function initValidation() {
  const rules = {
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
  };
  $("#edit-department-form").validate({
    ignore: "input[type=hidden]", // ignore hidden fields
    errorClass: "danger",
    successClass: "success",
    errorElement: "div",
    highlight: function (element, errorClass) {
      $(element).removeClass(errorClass);
    },
    unhighlight: function (element, errorClass) {
      $(element).removeClass(errorClass);
    },
    errorPlacement: function (error, element) {
      error.insertAfter($(element).next().get(0));
    },
    rules: rules,
  });
  $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
  $(".next-tab").on("click", () => {
    return $("#edit-department-form").valid();
  });
}

async function displayDepartmentData(departmentData, unblock) {
  initSelects();
  $("#department-name").val(departmentData[1]);
  $("#department-color").val(departmentData[2][0]);
  $("#department-textcolor").val(departmentData[2][1]);
  $("#department-price").val(departmentData[10]);
  colorPicker.on("init", (instance) => {
    colorPicker.setColor(departmentData[2][0]);
  });

  let days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  for (let index = 3; index < 10; index++) {
    //if department open
    if (departmentData[index][0]) {
      let day = days[index - 3];
      //switch = on {switch intial state is off}
      $(`#${day}`).click();
      $(`#${day}From`).val(departmentData[index][1]);
      $(`#${day}To`).val(departmentData[index][2]);
    }
  }
  initValidation();
  if (unblock) $("#edit-department-form").unblock();
}

async function getDepartmentData(unblock) {
  const departmentData = await window.firebase.getHospitalDepartment(
    new URL(window.location.href).searchParams.get("departmentID")
  );
  console.log(departmentData);
  if (departmentData) {
    displayDepartmentData(departmentData, unblock);
  } else {
    toastr.error(
      `couldn't retrieve department data this is likely caused by a connection error.`,
      "Operatin failed",
      {
        timeOut: 5000,
      }
    );
  }
}

function blockForm() {
  $("#edit-department-form").block({
    message:
      'getting department data...<div class="bx bx-revision icon-spin font-medium-2"></div>',
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
}
getDepartmentData(true);
