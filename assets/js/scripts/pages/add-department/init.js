function init() {
  //init department select [pages/inint.js function]
  initDepartmentsSelect("#department-name");

  //init color picker
  const colorPicker = initColorPicker("#department-color-picker");

  //set color form element and text color form element when user picks a color
  colorPicker.on("save", (color, instance) => {
    let hexColor = color.toHEXA().toString();
    let textcolor = getTextColor(hexColor);
    $("#department-color").val(hexColor);
    $("#department-textcolor").val(textcolor);
  });

  //init working hours repeater [pages/inint.js function]
  initWorkingHoursRepeater(
    ".departments-workinghours-repeater",
    ".department-schedule-day"
  );

  //disable key input on input time
  $('input[type="time"]').keydown(function (event) {
    return false;
  });
}
