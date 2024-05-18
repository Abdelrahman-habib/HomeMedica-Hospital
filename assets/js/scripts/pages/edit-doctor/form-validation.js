(function (window, document, $) {
  "use strict";

  // Input, Select, Textarea validations except submit button
  // add a name validation method
  jQuery.validator.addMethod(
    "personName",
    function (value, element) {
      return this.optional(element) || /^(?![ .]+$)[a-zA-Z .]*$/.test(value);
    },
    "⚠ A name must begin with a letter and can only contain letters and spaces."
  );
  jQuery.validator.addMethod(
    "phoneEG",
    function (value, element) {
      return (
        this.optional(element) ||
        /^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/.test(value)
      );
    },
    "⚠ enter a valid phone number [eg numbers only]"
  );
  jQuery.validator.addMethod(
    "HHMM",
    function (value, element) {
      return (
        this.optional(element) ||
        /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(value)
      );
    },
    "⚠ enter a valid time (HH:MM)"
  );
  jQuery.validator.addMethod(
    "password",
    function (value, element) {
      return (
        this.optional(element) ||
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value)
      );
    },
    "⚠ Passwords must be at minimum, 8 characters and contain at least a symbol, upper and lower case letters and a number."
  );
})(window, document, jQuery);
