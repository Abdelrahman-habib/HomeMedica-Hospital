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

function initPage() {
  //init date  picker
  initDatePicker();

  //init specialtiy select [pages/inint.js function]
  initMedicalSpecialtiesSelect("#doctor-specialty");

  //init type select [pages/inint.js function]
  initDoctorTypesSelect("#doctor-type");
}
