var cal;
let departmentCalendars;
const Calendar = tui.Calendar;

function CalendarInfo() {
  this.id = null;
  this.name = null;
  this.checked = true;
  this.color = null;
  this.bgColor = null;
  this.borderColor = null;
}

function showEditModal(event) {
  $("#appointment-patient").val(event.raw.patient[1]);
  $("#appointment-department").val(event.raw.appointment.departmentID);
  $("#appointment-start-date").val(
    event.raw.appointment.start.toLocaleString()
  );
  $("#appointment-end-date").val(event.raw.appointment.end.toLocaleString());
  let appointmentStatus =
    event.raw.appointment.end < new Date() ? "Expired" : "On-Going";
  $("#appointment-status").val(appointmentStatus);
  let modal = $("#appointment-details-modal");

  modal.modal("show");
}

function getDataAction(target) {
  return target.dataset
    ? target.dataset.action
    : target.getAttribute("data-action");
}

// get hospital department form firebase then create a calendars for each department
async function getCalendars() {
  const HospitalDepartmentsList =
    await window.firebase.getHospitalDepartmentsList();
  window.HospitalDepartmentsList = HospitalDepartmentsList;
  return createCalendars(HospitalDepartmentsList);
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
      `<div class="sidebar-calendars-item">
        <label>
          <input type="checkbox" class="tui-full-calendar-checkbox-round" value="${calendar.id}" checked>
          <span style="border-color: ${calendar.borderColor}; background-color: ${calendar.borderColor};"></span>
          <span>${calendar.name}</span>
        </label>
      </div>
      `
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

// A listener for click the menu
function onClickMenu(e) {
  let target = $(e.target).closest('[role="menuitem"]')[0];
  let action = getDataAction(target);
  let options = cal.getOptions();
  let viewName = "";
  // on click of dropdown button change calendar view
  switch (action) {
    case "toggle-daily":
      viewName = "day";
      break;
    case "toggle-weekly":
      viewName = "week";
      break;
    case "toggle-monthly":
      options.month.visibleWeeksCount = 0;
      options.month.isAlways6Week = false;
      viewName = "month";
      break;
    case "toggle-weeks2":
      options.month.visibleWeeksCount = 2;
      viewName = "month";
      break;
    case "toggle-weeks3":
      options.month.visibleWeeksCount = 3;
      viewName = "month";
      break;
    case "toggle-narrow-weekend":
      options.month.narrowWeekend = !options.month.narrowWeekend;
      options.week.narrowWeekend = !options.week.narrowWeekend;
      viewName = cal.getViewName();

      target.querySelector("input").checked = options.month.narrowWeekend;
      break;
    case "toggle-start-day-1":
      options.month.startDayOfWeek = options.month.startDayOfWeek ? 0 : 1;
      options.week.startDayOfWeek = options.week.startDayOfWeek ? 0 : 1;
      viewName = cal.getViewName();

      target.querySelector("input").checked = options.month.startDayOfWeek;
      break;
    case "toggle-workweek":
      options.month.workweek = !options.month.workweek;
      options.week.workweek = !options.week.workweek;
      viewName = cal.getViewName();

      target.querySelector("input").checked = !options.month.workweek;
      break;
    default:
      break;
  }
  cal.setOptions(options, true);
  cal.changeView(viewName, true);

  setDropdownCalendarType();
  setRenderRangeText();
}

// on click of next and previous button view change
function onClickNavi(e) {
  let action = getDataAction(e.target);
  switch (action) {
    case "move-prev":
      cal.prev();
      break;
    case "move-next":
      cal.next();
      break;
    case "move-today":
      cal.today();
      break;
    default:
      return;
  }
  setRenderRangeText();
}

// calendar type set on dropdown button
function setDropdownCalendarType() {
  let calendarTypeName = document.getElementById("calendarTypeName");
  let calendarTypeIcon = document.getElementById("calendarTypeIcon");
  let options = cal.getOptions();
  let type = cal.getViewName();
  let iconClassName;

  if (type === "day") {
    type = "Daily";
    iconClassName = "bx bx-calendar-alt mr-25";
  } else if (type === "week") {
    type = "Weekly";
    iconClassName = "bx bx-calendar-event mr-25";
  } else if (options.month.visibleWeeksCount === 2) {
    type = "2 weeks";
    iconClassName = "bx bx-calendar-check mr-25";
  } else if (options.month.visibleWeeksCount === 3) {
    type = "3 weeks";
    iconClassName = "bx bx-calendar-check mr-25";
  } else {
    type = "Monthly";
    iconClassName = "bx bx-calendar mr-25";
  }
  calendarTypeName.innerHTML = type;
  calendarTypeIcon.className = iconClassName;
}

function setRenderRangeText() {
  let renderRange = document.getElementById("renderRange");
  let options = cal.getOptions();
  let viewName = cal.getViewName();
  let html = [];
  if (viewName === "day") {
    html.push(moment(cal.getDate().getTime()).format("YYYY-MM-DD"));
  } else if (
    viewName === "month" &&
    (!options.month.visibleWeeksCount || options.month.visibleWeeksCount > 4)
  ) {
    html.push(moment(cal.getDate().getTime()).format("YYYY-MM"));
  } else {
    html.push(moment(cal.getDateRangeStart().getTime()).format("YYYY-MM-DD"));
    html.push("-");
    html.push(moment(cal.getDateRangeEnd().getTime()).format(" MM.DD"));
  }
  renderRange.innerHTML = html.join("");
}

resizeThrottled = tui.util.throttle(function () {
  cal.render();
}, 50);

function setEventListener() {
  $(".menu-navigation").on("click", onClickNavi);
  $('.dropdown-menu [role="menuitem"]').on("click", onClickMenu);
  $(".sidebar-calendars").on("change", onChangeCalendars);
  window.addEventListener("resize", resizeThrottled);
}

async function initCalendarApp() {
  departmentCalendars = await getCalendars();
  const container = document.getElementById("calendar");
  const WEEK_OPTIONS = {
    eventView: ["time"],
    taskView: false,
  };

  const THEME = {
    common: {
      border: "1px solid #DFE3E7",
      backgroundColor: "white",
      holiday: {
        color: "#FF5B5C",
      },
      saturday: {
        color: "#304156",
      },
      dayname: {
        color: "#304156",
        borderLeft: "1px solid transparent",
        fontSize: "1rem",
      },
    },
    week: {
      dayGridSchedule: {
        borderRadius: "4px",
      },
      timegridSchedule: {
        borderRadius: "4px",
      },
    },
  };
  const options = {
    usageStatistics: false,
    week: WEEK_OPTIONS,
    calendars: departmentCalendars,
    isReadOnly: true,
    gridSelection: false,
    useFormPopup: false,
    useDetailPopup: false,
    theme: THEME,
  };

  cal = new Calendar(container, options);

  cal.on("clickEvent", ({ event, nativeEvent }) => {
    showEditModal(event);
    return false;
  });

  //**********************************//

  setSidebarCalendarList(departmentCalendars);
  setDropdownCalendarType();
  setRenderRangeText();
  setEventListener();

  //*********************************//

  const event = new Event("appointmentAppReady");
  document.dispatchEvent(event);
}
initCalendarApp();
