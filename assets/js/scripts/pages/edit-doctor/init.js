blockForm();

function initDatePicker() {
  let eighteenYearsAgo = new Date(
    new Date().setFullYear(new Date().getFullYear() - 18)
  );

  let hundredYearsAgo = new Date(
    new Date().setFullYear(new Date().getFullYear() - 100)
  );

  $("#doctor-birthDate").pickadate({
    selectYears: true,
    selectMonths: true,
    min: [
      hundredYearsAgo.getFullYear(),
      hundredYearsAgo.getMonth() + 1,
      hundredYearsAgo.getDate(),
    ],
    max: [
      eighteenYearsAgo.getFullYear(),
      eighteenYearsAgo.getMonth() + 1,
      eighteenYearsAgo.getDate(),
    ],
  });
}

async function initSelects() {
  //init specialtiy select [pages/inint.js function]
  //and
  //init type select [pages/inint.js function]
  await Promise.all([
    initMedicalSpecialtiesSelect("#doctor-specialty"),
    initDoctorTypesSelect("#doctor-type"),
  ]);
}

function initValidation() {
  const rules = {
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
  };
  $("#edit-doctor-form").validate({
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
    return $("#edit-doctor-form").valid();
  });
}

async function displayDoctorData(doctorData, unblock) {
  await initSelects();
  initDatePicker();
  $("#doctor-id").val(doctorData[0]);
  $("#doctor-name").val(doctorData[1]);
  $("#doctor-phone").val(doctorData[2]);
  $("#doctor-address").val(doctorData[3]);
  $("#doctor-birthDate").val(doctorData[4]);
  $("#doctor-additional-information").val(doctorData[5]);
  $("#doctor-specialty").val(doctorData[6]).trigger("change");
  $("#doctor-type").val(doctorData[7]).trigger("change");
  initValidation();
  if (unblock) $("#edit-doctor-form").unblock();
}

async function getDoctorData(unblock) {
  const doctorData = await window.firebase.getDoctor(
    new URL(window.location.href).searchParams.get("doctorId")
  );
  console.log(doctorData);
  displayDoctorData(doctorData, unblock);
}

function blockForm() {
  $("#edit-doctor-form").block({
    message:
      'getting doctor data...<div class="bx bx-revision icon-spin font-medium-2"></div>',
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
getDoctorData(true);
