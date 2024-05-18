const Calendar = tui.Calendar;
var cal;

function CalendarInfo() {
  this.id = null;
  this.name = null;
  this.checked = true;
  this.color = null;
  this.bgColor = null;
  this.borderColor = null;
}

function showEditModal(event) {
  let form = $(".edit-hours-form");
  let departmentSelect = $(".edit-hours-department");
  let doctorSelect = $(".edit-hours-doctor");
  let daySelect = $(".edit-hours-day");
  let fromInput = $(".edit-hours-from");
  let toInput = $(".edit-hours-to");
  let modal = $("#edit-hours-modal");
  form.data("editID", event.id);
  form.data("editDepartment", event.raw.calendarId);
  form.data("editDay", event.raw.day);
  form.data("editFrom", event.raw.from);
  form.data("editTo", event.raw.to);
  form.data("editDoctor", event.raw.doctorID);
  departmentSelect
    .val(event.raw.calendarId)
    .trigger("change")
    .trigger("select2:select");
  doctorSelect.val(event.raw.doctorID).trigger("change");
  daySelect.prop("disabled", false).val(event.raw.day).trigger("change");
  fromInput.prop("disabled", false).val(event.raw.from);
  toInput.prop("disabled", false).val(event.raw.to);
  modal.modal("show");
}

// get hospital department form firebase then create a calendars for each department
async function getCalendars() {
  const HospitalDepartmentsList =
    await window.firebase.getHospitalDepartmentsList();
  return createCalendars(HospitalDepartmentsList);
}
function getEvents() {
  window.firebase.getHospitalTable();
}

//takes departmentData and returns a calendar
function createCalendar(departmentData) {
  //for departmentData structure see dataFormatters.js[formatHospitalDepartmentsData]
  let calendar = new CalendarInfo();
  calendar.id = String(departmentData[0]);
  calendar.name = departmentData[1];
  calendar.bgColor = departmentData[2][0];
  calendar.dragBgColor = departmentData[2][0];
  calendar.borderColor = departmentData[2][0];
  calendar.color = departmentData[2][1];
  return calendar;
}

function createCalendars(departmentsList) {
  let Calendars = [];
  departmentsList.forEach((departmentData) => {
    let Calendar = createCalendar(departmentData);
    Calendars.push(Calendar);
  });
  return Calendars;
}

function setSidebarCalendarList(CalendarList) {
  let calendarList = document.getElementById("calendarList");
  let html = [];
  CalendarList.forEach(function (calendar) {
    html.push(
      '<div class="sidebar-calendars-item"><label>' +
        '<input type="checkbox" class="tui-full-calendar-checkbox-round" value="' +
        calendar.id +
        '" checked>' +
        '<span style="border-color: ' +
        calendar.borderColor +
        "; background-color: " +
        calendar.borderColor +
        ';"></span>' +
        "<span>" +
        calendar.name +
        "</span>" +
        "</label></div>"
    );
  });
  calendarList.innerHTML = html.join("\n");
  ////////////////////////////////////////
  // calendar sidebar scrollbar
  if ($(".sidebar").length > 0) {
    let sidebar = new PerfectScrollbar(".sidebar", {
      wheelPropagation: false,
    });
  }
  // sidebar menu toggle
  $(".sidebar-toggle-btn").on("click", function () {
    $(".sidebar").toggleClass("show");
    $(".app-content-overlay").toggleClass("show");
  });
  // on click Overlay hide sidebar and overlay
  $(".app-content-overlay, .sidebar-new-schedule-btn").on("click", function () {
    $(".sidebar").removeClass("show");
    $(".app-content-overlay").removeClass("show");
  });
  $(window).on("resize", function () {
    // sidebar and overlay hide if screen resize
    if ($(window).width() < 991) {
      $(".sidebar").removeClass("show");
      $(".app-content-overlay").removeClass("show");
    }
  });
}
function getDayName(dateStr, locale) {
  let date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "short" });
}
async function initCalendarApp() {
  const departmentCalendars = await getCalendars();
  const departmentsEvents = getEvents();
  const container = document.getElementById("calendar");
  const DEFAULT_WEEK_OPTIONS = {
    startDayOfWeek: 6,
    dayNames: [],
    narrowWeekend: false,
    workweek: false,
    showNowIndicator: true,
    showTimezoneCollapseButton: false,
    timezonesCollapsed: false,
    eventView: ["time"],
    taskView: false,
  };
  const options = {
    usageStatistics: false,
    week: DEFAULT_WEEK_OPTIONS,
    defaultView: "week",
    calendars: departmentCalendars,
    isReadOnly: true,
    template: {
      weekDayName(model) {
        if (model.dayName === getDayName(new Date())) {
          return `<div class="d-flex justify-content-center"><span class="calendar text-danger weekday-name">${model.dayName}</span></div>`;
        }
        return `<div class="d-flex justify-content-center"><span class="calendar text-secondary weekday-name">${model.dayName}</span></div>`;
      },
      task(event) {
        console.log(event);
        return `<span style="color: red;"></span>`;
      },
      timegridNowIndicatorLabel({ time }) {
        return `current time: ${time}`;
      },
    },
  };

  cal = new Calendar(container, options);

  cal.setOptions({
    gridSelection: false,
    useFormPopup: false,
    useDetailPopup: false,
  });

  cal.setDate("2022-01-01");

  cal.on("clickEvent", ({ event, nativeEvent }) => {
    /*
    {
    "id": "2pyHr0mcrGh6r2J5z7VMFsJ8Sw2308:00,14:00",
    "calendarId": "Cardiology",
    "title": "Dr Ahmed Said",
    "body": "",
    "isAllday": false,
    "start": {
        "tzOffset": null,
        "d": {
            "d": "2022-01-01T06:00:00.000Z"
        }
    },
    "end": {
        "tzOffset": null,
        "d": {
            "d": "2022-01-01T12:00:00.000Z"
        }
    },
    "goingDuration": 0,
    "comingDuration": 0,
    "location": "",
    "attendees": [],
    "category": "time",
    "dueDateClass": "",
    "recurrenceRule": "",
    "state": "Busy",
    "isVisible": true,
    "isPending": false,
    "isFocused": false,
    "isReadOnly": false,
    "isPrivate": false,
    "color": "#000000",
    "backgroundColor": "#FF5B5C",
    "dragBackgroundColor": "#FF5B5C",
    "borderColor": "#FF5B5C",
    "customStyle": {},
    "raw": null
}
    */
    showEditModal(event);
    return false;
  });
  //**********************************//
  function findCalendar(id) {
    let found;

    departmentCalendars.forEach(function (calendar) {
      if (calendar.id === id) {
        found = calendar;
      }
    });

    return found || departmentCalendars[0];
  }

  function refreshScheduleVisibility() {
    let calendarElements = Array.prototype.slice.call(
      document.querySelectorAll("#calendarList input")
    );

    departmentCalendars.forEach(function (calendar) {
      cal.setCalendarVisibility(calendar.id, calendar.checked);
    });

    cal.render(true);

    calendarElements.forEach(function (input) {
      let span = input.nextElementSibling;
      span.style.backgroundColor = input.checked
        ? span.style.borderColor
        : "transparent";
    });
  }

  // view all checkbox initialize
  function onChangeCalendars(e) {
    let calendarId = e.target.value;
    let checked = e.target.checked;
    let viewAll = document.querySelector(".sidebar-calendars-item input");
    let calendarElements = Array.prototype.slice.call(
      document.querySelectorAll("#calendarList input")
    );
    let allCheckedCalendars = true;

    if (calendarId === "all") {
      allCheckedCalendars = checked;

      calendarElements.forEach(function (input) {
        let span = input.parentNode;
        input.checked = checked;
        span.style.backgroundColor = checked
          ? span.style.borderColor
          : "transparent";
      });

      departmentCalendars.forEach(function (calendar) {
        calendar.checked = checked;
      });
    } else {
      findCalendar(calendarId).checked = checked;

      allCheckedCalendars = calendarElements.every(function (input) {
        return input.checked;
      });

      if (allCheckedCalendars) {
        viewAll.checked = true;
      } else {
        viewAll.checked = false;
      }
    }
    refreshScheduleVisibility();
  }
  setSidebarCalendarList(departmentCalendars);
  resizeThrottled = tui.util.throttle(function () {
    cal.render();
  }, 50);
  function setEventListener() {
    window.addEventListener("resize", resizeThrottled);
    $(".sidebar-calendars").on("change", onChangeCalendars);
    // $(".sidebar-new-schedule-btn").on("click", createNewSchedule);
  }
  setEventListener();
}
initCalendarApp();
