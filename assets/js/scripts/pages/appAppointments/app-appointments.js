const getCalendarColors = (calendarID) => {
  return window.HospitalDepartmentsList.filter(
    (department) => department[0] == calendarID
  )[0][2];
};

// check if appointment exists in calendar
const appointmentExists = (appointment, department) => {
  return false;
  return cal.getEvent(appointment, department) ? true : false;
};

const createAppointment = (appointment) => {
  if (!appointmentExists(appointment.id, appointment.departmentID)) {
    window.firebase
      .getPatient(appointment.patientID)
      .then((patient) => {
        const [color, textColor] = getCalendarColors(appointment.departmentID);
        cal.createEvents([
          {
            id: appointment.id,
            calendarId: appointment.departmentID,
            title: patient[1],
            start: appointment.start,
            end: appointment.end,
            category: "time",
            isVisible: true,
            color: textColor,
            backgroundColor: color,
            dragBackgroundColor: color,
            borderColor: color,
            raw: {
              appointment: appointment,
              patient: patient,
            },
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

const removeAppointment = (eventID, calendarID) => {
  cal.deleteEvent(eventID, calendarID);
};

window.firebase.appointment((event, appointment) => {
  createAppointment(appointment);
});

document.addEventListener(
  "appointmentAppReady",
  async function (e) {
    sessionStorage.appointmentsBadgeNumber = 0;
    const appointments = await window.firebase.getAppointments();
    console.log(appointments);

    for (let appointment of Object.values(appointments)) {
      createAppointment(appointment);
    }
  },
  false
);
