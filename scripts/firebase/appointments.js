const path = require("path");
const { app } = require(path.join(__dirname, "init"));
const { getFirestore } = require("firebase-admin/firestore");
const { ipcMain } = require("electron");

const appMainWindow = require(path.join(
  __dirname,
  "..",
  "electron",
  "mainWindow"
)).get();
const { sendAppNotification } = require(path.join(
  __dirname,
  "..",
  "electron",
  "notifications"
));
const { formatAppointmentData } = require(path.join(
  __dirname,
  "dataFormatters"
));

const db = getFirestore(app);
let appointments = {};

//////////////////////////////////
//***** firebase structure ****//
////////////////////////////////

/*
RESERVATIONS -->    
                    Cardiology         -->  
                    Dentistry               OFFLINE        --->       
                    Ophthalmology           ONLINE                    DOCS     -->   
                    Orthopaedics                                                     SATURDAY  --->   
                    Pediatrics                                                       THURSDAY         T66sy3i0Cye26You3FySKwkwY1h2
                        .                                                              .                             .
                        .                                                              .                             .
                        .                                                              .                             .
                    

where T66sy3i0Cye26You3FySKwkwY1h2 is an appointment request with the following structure :
T66sy3i0Cye26You3FySKwkwY1h2 = {
    bookerID:"T66sy3i0Cye26You3FySKwkwY1h2"
    endTime:"2022-07-16 15:23:00.000"
    isFinished:false
    speciality:"Cardiologist"
    timeStamp:July 16, 2022 at 2:08:56 PM UTC+2
}
*/

//////////////////////////////////
//********** listeners ********//
////////////////////////////////

// listen to new departments in the RESERVATIONS collection for each department we want to invoke a function
// this function will go through each day document in [department]/OFFLINE/DOCS and attach another listener
// that other listener should listen to the [department]/OFFLINE/DOCS/[day] for new appointments request and notify the rendere proccess for any update

const listenToReservations = () => {
  const reservationsRef = db.collection("RESERVATIONS");
  reservationsRef.onSnapshot(
    (departmentsSnapshot) => {
      departmentsSnapshot.forEach((department) => {
        listenToDepartmentsAppointments(department.id);
      });
    },
    (err) => {
      console.log(`Encountered error: ${err}`);
      sendAppNotification(err, "Encountered error [code app1ltr]", {
        type: "error",
      });
    }
  );
};

// init a department's day listener
const listenToDepartmentsAppointments = (department) => {
  let days = [
    "SATURDAY",
    "SUNDAY",
    "MONDAY",
    "TUESDAAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
  ];
  for (let day of days) {
    listenToDayAppointment(department, day);
  }
};

// listens to day appointments for a certain department
const listenToDayAppointment = (department, day) => {
  const dayDocumentRef = db
    .collection("RESERVATIONS")
    .doc(department)
    .collection("OFFLINE")
    .doc("DOCS")
    .collection(day)
    .where("isFinished", "==", false);

  dayDocumentRef.onSnapshot(
    (appointmentsSnapshot) => {
      appointmentsSnapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          if (
            change.doc.data().timeStamp.toDate() >=
            new Date(Date.now() - 3 * 60000)
          ) {
            sendAppNotification(
              "📅 New Appointment",
              `requesting a ${change.doc.data().speciality} at ${change.doc
                .data()
                .timeStamp.toDate()
                .toLocaleString()} `,
              { type: "info" }
            );
          }

          appMainWindow.webContents.send(
            "appointment",
            formatAppointmentData(change.doc),
            department
          );
          addAppointment(formatAppointmentData(change.doc, department), day);
        }
      });
      // appointmentsSnapshot.forEach(appointment=> {
      //   addAppointment(formatAppointmentData(appointment, department));
      // });
    },
    (err) => {
      console.log(`Encountered error: ${err}`);
      sendAppNotification(err, "Encountered error  [code app1ltda]", {
        type: "error",
      });
    }
  );
};

function addAppointment(appointment, day) {
  appointments[`${day}${appointment.id}${appointment.departmentID}`] =
    appointment;
}

const getAppointments = () => {
  return Object.values(appointments);
};

const getAppointment = (appointmentID) => {
  return appointments[appointmentID];
};

//////////////////////////////////
//************ main ***********//
////////////////////////////////

listenToReservations();
ipcMain.handle("getAppointments", getAppointments);
ipcMain.handle("getAppointment", getAppointment);
