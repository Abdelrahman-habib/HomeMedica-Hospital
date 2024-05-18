function getDayDate(dayName) {
  days = {
    Saturday: "1",
    Sunday: "2",
    Monday: "3",
    Tuesday: "4",
    WednesDay: "5",
    Thursday: "6",
    Friday: "7",
  };
  return days[titleCase(dayName)];
}

function getCalendarColors(calendarID) {
  return window.departmentsList.filter(
    (department) => department[0] == calendarID
  )[0][2];
}

function getDoctorName(doctorID) {
  return window.doctorsList.filter((doctor) => doctor[0] == doctorID)[0][1];
}

window.firebase.addTableEvent((event, doctorsListEvents) => {
  doctorsListEvents.forEach((eventData) => {
    let [color, textColor] = getCalendarColors(eventData.department);
    let doctorName = getDoctorName(eventData.doctorID);

    cal.createEvents([
      {
        id: eventData.id,
        calendarId: eventData.department,
        title: doctorName,
        start: `2022-01-0${getDayDate(eventData.day)}T${eventData.from}:00`,
        end: `2022-01-0${getDayDate(eventData.day)}T${eventData.to}:00`,
        category: "time",
        isVisible: true,
        color: textColor,
        backgroundColor: color,
        dragBackgroundColor: color,
        borderColor: color,
        raw: {
          calendarId: eventData.department,
          doctorID: eventData.doctorID,
          day: titleCase(eventData.day),
          from: eventData.from,
          to: eventData.to,
        },
      },
    ]);
  });
});

function removeTableEvent(eventID, calendarID) {
  cal.deleteEvent(eventID, calendarID);
}
function createTableEvent(data, eventID, doctorName, color, textColor) {
  if (data["assign-hours-department"]) {
    let [color, textColor] = getCalendarColors(data["assign-hours-department"]);
    let doctorName = getDoctorName(data["assign-hours-doctor"]);
    cal.createEvents([
      {
        id: eventID,
        calendarId: data["assign-hours-department"],
        title: doctorName,
        start: `2022-01-0${getDayDate(data["assign-hours-day"])}T${
          data["assign-hours-from"]
        }:00`,
        end: `2022-01-0${getDayDate(data["assign-hours-day"])}T${
          data["assign-hours-to"]
        }:00`,
        category: "time",
        isVisible: true,
        color: textColor,
        backgroundColor: color,
        dragBackgroundColor: color,
        borderColor: color,
        raw: {
          calendarId: data["assign-hours-department"],
          doctorID: data["assign-hours-doctor"],
          day: data["assign-hours-day"],
          from: data["assign-hours-from"],
          to: data["assign-hours-to"],
        },
      },
    ]);
  } else {
    let [color, textColor] = getCalendarColors(data["edit-hours-department"]);
    let doctorName = getDoctorName(data["edit-hours-doctor"]);
    cal.createEvents([
      {
        id: eventID,
        calendarId: data["edit-hours-department"],
        title: doctorName,
        start: `2022-01-0${getDayDate(data["edit-hours-day"])}T${
          data["edit-hours-from"]
        }:00`,
        end: `2022-01-0${getDayDate(data["edit-hours-day"])}T${
          data["edit-hours-to"]
        }:00`,
        category: "time",
        isVisible: true,
        color: textColor,
        backgroundColor: color,
        dragBackgroundColor: color,
        borderColor: color,
        raw: {
          calendarId: data["edit-hours-department"],
          doctorID: data["edit-hours-doctor"],
          day: data["edit-hours-day"],
          from: data["edit-hours-from"],
          to: data["edit-hours-to"],
        },
      },
    ]);
  }
}

// adds doctor working Hours to firebase
async function addDoctorHours(data) {
  let doctorHoursData = {
    doctor: data["assign-hours-doctor"],
    department: data["assign-hours-department"],
    day: data["assign-hours-day"],
    from: data["assign-hours-from"],
    to: data["assign-hours-to"],
  };
  let result = await window.firebase.addDoctorHours(doctorHoursData);
  return result;
}
// adds doctor working Hours to firebase
async function editDoctorHours(data, editData) {
  let doctorHoursData = {
    doctor: data["edit-hours-doctor"],
    department: data["edit-hours-department"],
    day: data["edit-hours-day"],
    from: data["edit-hours-from"],
    to: data["edit-hours-to"],
  };
  let result = await window.firebase.editDoctorHours(doctorHoursData, editData);
  return result;
}
$(".assign-hours-submit").on("click", () => {
  let form = $(".assign-hours-form");
  let modal = $("#assign-hours-modal");
  if (form.valid()) {
    assignHoursFormValid(form, modal);
  }
});

$(".delete-doctor-hours").on("click", () => {
  let form = $(".edit-hours-form");
  let modal = $("#edit-hours-modal");
  let editData = {
    id: form.data("editID"),
    department: form.data("editDepartment"),
    day: form.data("editDay"),
    from: form.data("editFrom"),
    to: form.data("editTo"),
    doctorID: form.data("editDoctor"),
  };
  Swal.fire({
    title: "are you sure you want to delete this?",
    text: "deleted data can't be recoverd it's gone forever",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
    confirmButtonClass: "btn btn-danger",
    cancelButtonClass: "btn btn-primary ml-1",
    buttonsStyling: false,
  }).then(async function (result) {
    if (result.value) {
      blockItem(modal, "deleteing...");
      const deleted = await window.firebase.removeDoctorHours(editData);
      if (deleted) {
        removeTableEvent(editData.id, editData.department);
        modal.unblock();
        modal.modal("hide");
        $(form).trigger("reset");
        Swal.fire({
          type: "success",
          title: "deleted",
          text: `delete completed`,
          confirmButtonClass: "btn btn-success",
          confirmButtonText: "Ok",
        });
      } else {
        modal.unblock();
        Swal.fire({
          type: "error",
          title: "operation failed",
          text: "an error occured occurred while trying to assign hours, make sure you are connected to the network and try again.",
          confirmButtonClass: "btn btn-secondary",
          confirmButtonText: "Ok",
        });
      }
    }
  });
});

$(".edit-hours-submit").on("click", () => {
  let form = $(".edit-hours-form");
  let modal = $("#edit-hours-modal");
  let editData = {
    id: form.data("editID"),
    department: form.data("editDepartment"),
    day: form.data("editDay"),
    from: form.data("editFrom"),
    to: form.data("editTo"),
    doctorID: form.data("editDoctor"),
  };

  if (form.valid()) {
    editHoursFormValid(form, modal, editData);
  }
});

async function assignHoursFormValid(form, modal) {
  blockItem(modal, "assigning");
  let data = getFormData(form);

  let dataID = await addDoctorHours(data);
  if (dataID) {
    modal.unblock();
    modal.modal("hide");
    $(form).trigger("reset");
    toastr.success(
      `assigend ${data["assign-hours-day"]} from ${data["assign-hours-from"]} to ${data["assign-hours-to"]} to doctor.`,
      "Assigning completed",
      {
        timeOut: 3000,
      }
    );
    createTableEvent(data, dataID);
  } else {
    modal.unblock();
    toastr.error(
      `an error occured occurred while trying to assign hours, make sure you are connected to the network and try again.`,
      "Operation Failed",
      {
        timeOut: 5000,
      }
    );
  }
}

async function editHoursFormValid(form, modal, editData) {
  blockItem(modal, "assigning");
  let data = getFormData(form);
  console.log(data);
  let dataID = await editDoctorHours(data, editData);
  if (dataID) {
    removeTableEvent(editData.id, editData.department);
    modal.unblock();
    modal.modal("hide");
    $(form).trigger("reset");
    toastr.success(
      `assigend ${data["edit-hours-day"]} from ${data["edit-hours-from"]} to ${data["edit-hours-to"]} to doctor.`,
      "edit completed",
      {
        timeOut: 3000,
      }
    );
    createTableEvent(data, dataID);
  } else {
    modal.unblock();
    toastr.error(
      `an error occured occurred while trying to edit doctor hours, make sure you are connected to the network and try again. ".`,
      "Operation Failed",
      {
        timeOut: 5000,
      }
    );
  }
}
