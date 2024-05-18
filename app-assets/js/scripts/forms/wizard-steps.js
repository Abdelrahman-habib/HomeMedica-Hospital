//       Validate steps wizard      //
// ----------------------------------
function goToCustomStep(step) {
  console.log();
  let currentStep = this.steps("getCurrentIndex");

  if (currentStep < step) {
    while (currentStep !== step) {
      this.steps("next");
      currentStep++;
    }
  } else if (currentStep > step) {
    while (currentStep !== step) {
      this.steps("previous");
      currentStep--;
    }
  }
}

jQuery.fn.StepsForm = function (config) {
  let stepsValidation = this;
  let form = stepsValidation.show();
  this.goToCustomStep = goToCustomStep;
  stepsValidation.steps({
    headerTag: "h6",
    bodyTag: "fieldset",
    transitionEffect: "fade",
    titleTemplate: '<span class="step">#index#</span> #title#',
    labels: {
      finish: config.finish,
    },
    onStepChanging: function (event, currentIndex, newIndex) {
      // Allways allow previous action even if the current form is not valid!
      if (currentIndex > newIndex) {
        return true;
      }
      form.validate().settings.ignore = ":disabled,:hidden";
      return form.valid();
    },
    onFinishing: function (event, currentIndex) {
      form.validate().settings.ignore = ":disabled";
      return form.valid();
    },
    onFinished: config.onFinished,
  });

  // Initialize validation
  stepsValidation.validate({
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
    rules: config.rules,
  });
  setupWizard();
  config.ready();
  return this;
};

// live Icon color change on state change
$(document).ready(function () {
  $(".current").find(".step-icon").addClass("bx bx-time-five");
  $(".current").find(".fonticon-wrap .livicon-evo").updateLiviconEvo({
    strokeColor: "#5A8DEE",
  });
});

function setupWizard() {
  // Icon change on state
  // if click on next button icon change
  $(".actions [href='#next']").click(function () {
    $(".done")
      .find(".step-icon")
      .removeClass("bx bx-time-five")
      .addClass("bx bx-check-circle");
    $(".current")
      .find(".step-icon")
      .removeClass("bx bx-check-circle")
      .addClass("bx bx-time-five");
    // live icon color change on next button's on click
    $(".current").find(".fonticon-wrap .livicon-evo").updateLiviconEvo({
      strokeColor: "#5A8DEE",
    });
    $(".current")
      .prev("li")
      .find(".fonticon-wrap .livicon-evo")
      .updateLiviconEvo({
        strokeColor: "#39DA8A",
      });
  });
  $(".actions [href='#previous']").click(function () {
    // live icon color change on next button's on click
    $(".current").find(".fonticon-wrap .livicon-evo").updateLiviconEvo({
      strokeColor: "#5A8DEE",
    });
    $(".current")
      .next("li")
      .find(".fonticon-wrap .livicon-evo")
      .updateLiviconEvo({
        strokeColor: "#adb5bd",
      });
  });
  // if click on  submit   button icon change
  $(".actions [href='#finish']").click(function () {
    $(".done")
      .find(".step-icon")
      .removeClass("bx-time-five")
      .addClass("bx bx-check-circle");
    $(".last.current.done")
      .find(".fonticon-wrap .livicon-evo")
      .updateLiviconEvo({
        strokeColor: "#39DA8A",
      });
  });
  // add primary btn class
  $('.actions a[role="menuitem"]').addClass("btn btn-primary");
  $('.icon-tab [role="menuitem"]').addClass("glow ");
  $('.wizard-vertical [role="menuitem"]')
    .removeClass("btn-primary")
    .addClass("btn-light-primary");
}
