function initPage() {
  //init departments select [pages/inint.js function]
  initHospitalDepartmentsSelect(
    ".assign-hours-department",
    ".assign-hours-day",
    ".assign-hours-from",
    ".assign-hours-to"
  );

  //init doctors select [pages/inint.js function]
  initHospitalDoctorsSelect(".assign-hours-doctor");

  //disable key input on input time
  $('input[type="time"]').keydown(function (event) {
    return false;
  });
}
initPage();
