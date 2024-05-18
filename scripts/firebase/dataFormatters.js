function _removeNotations(stringObject) {
  return stringObject.replace(/\{*\}*"*'*/gi, "").replace(",", "<br>");
}
function _getDrugsAsString(drugs) {
  let drugsFormatted = "";
  drugs.forEach((drug) => {
    drugsFormatted += `💊 - Name : ${drug.medicineName}<br>notes : ${drug.notes}<br>dose : ${drug.dose}<br>row : ${drug.row}<br>`;
  });
  return drugsFormatted;
}

function formatDoctorData(id, doctor) {
  return [
    id,
    doctor.name,
    doctor.specialty,
    doctor.type,
    doctor.phone,
    doctor.email,
  ];
}
function formatDoctorDataAll(id, doctor) {
  return [
    id,
    doctor.name,
    doctor.phone,
    doctor.address,
    doctor.birthDate,
    doctor.additionalInfo,
    doctor.specialty,
    doctor.type,
    doctor.email,
  ];
}

function formatMessageData(id, message) {
  return {
    text: message.text,
    sender: message.sender,
    timestamp: String(message.timestamp.toDate().toLocaleTimeString("en-US")),
  };
}
function formatMedicalSpecialtiesData(medicalSpecialties) {
  return medicalSpecialties.data().specialties;
}

function formatDoctorTypesData(doctorTypes) {
  return doctorTypes.data().types;
}
function formatDepartmentsData(Departments) {
  return Departments.data().departments;
}
function formatHospitalDepartmentsData(hospitalDepartment) {
  return [
    hospitalDepartment.id,
    hospitalDepartment.data().name,
    [hospitalDepartment.data().color, hospitalDepartment.data().textColor],
    [
      hospitalDepartment.data().workingHours.SATURDAY.open,
      hospitalDepartment.data().workingHours.SATURDAY.from,
      hospitalDepartment.data().workingHours.SATURDAY.to,
    ],
    [
      hospitalDepartment.data().workingHours.SUNDAY.open,
      hospitalDepartment.data().workingHours.SUNDAY.from,
      hospitalDepartment.data().workingHours.SUNDAY.to,
    ],
    [
      hospitalDepartment.data().workingHours.MONDAY.open,
      hospitalDepartment.data().workingHours.MONDAY.from,
      hospitalDepartment.data().workingHours.MONDAY.to,
    ],
    [
      hospitalDepartment.data().workingHours.TUESDAY.open,
      hospitalDepartment.data().workingHours.TUESDAY.from,
      hospitalDepartment.data().workingHours.TUESDAY.to,
    ],
    [
      hospitalDepartment.data().workingHours.WEDNESDAY.open,
      hospitalDepartment.data().workingHours.WEDNESDAY.from,
      hospitalDepartment.data().workingHours.WEDNESDAY.to,
    ],
    [
      hospitalDepartment.data().workingHours.THURSDAY.open,
      hospitalDepartment.data().workingHours.THURSDAY.from,
      hospitalDepartment.data().workingHours.THURSDAY.to,
    ],
    [
      hospitalDepartment.data().workingHours.FRIDAY.open,
      hospitalDepartment.data().workingHours.FRIDAY.from,
      hospitalDepartment.data().workingHours.FRIDAY.to,
    ],
    hospitalDepartment.data().price,
  ];
}
function formatMessageSentResult(sent, message, localID) {
  if (sent) {
    return {
      success: sent,
      message: {
        text: message.text,
        sender: message.sender,
        timestamp: String(
          message.timestamp.toDate().toLocaleTimeString("en-US")
        ),
      },
      localID: localID,
    };
  } else {
    return {
      success: sent,
      localID: localID,
    };
  }
}

function formatPatientData(id, patient) {
  return [
    id,
    patient.username,
    `<div class="avatar m-auto"><img src="${patient.imageUrl}" alt="avtar image" class="a" width="32" height="32"></div>`,
    patient.phoneNumber,
    patient.email,
  ];
}

function formatSOSData(SOSDoc) {
  return [
    SOSDoc.id,
    SOSDoc.data().userID,
    SOSDoc.data().imageUrl,
    SOSDoc.data().username,
    SOSDoc.data().timeStamp.toDate().toDateString(),
    [SOSDoc.data().latitude, SOSDoc.data().longitude],
    SOSDoc.data().responded,
  ];
}

function formatDoctorsHoursData(day, department, doctorsHours) {
  return {
    day: day,
    department: department,
    id: `${doctorsHours.doctorID}${doctorsHours.from},${doctorsHours.to}`,
    doctorID: doctorsHours.doctorID,
    from: doctorsHours.from,
    to: doctorsHours.to,
  };
}

function formatPrescriptionData(id, data) {
  const [doctorID, patientID] = id.split("-");
  const regex = /Timestamp\(seconds=([0-9]*),\snanoseconds=([0-9]*)\)/g;
  const [seconds] = data.date.matchAll(regex);
  return {
    id: id,
    doctorID: doctorID,
    patientID: patientID,
    doctorName: data.doctorName,
    patientName: data.patientName,
    patientAge: data.age,
    patientGender: data.sex,
    date: new Date(seconds[1] * 1000 + seconds[2] / 1000000).toLocaleString(),
    diagnosis: data.diagnosis,
    drugs: _getDrugsAsString(data.drugs),
  };
}

function formatAppointmentData(appointment, department) {
  const appointmentData = appointment.data();
  return {
    id: appointment.id,
    patientID: appointmentData.bookerID,
    start: appointmentData.timeStamp.toDate(),
    end: new Date(appointmentData.endTime),
    departmentID: department,
  };
}
function formatHospitalData(hospitalInfo) {
  const hospitalInfoData = hospitalInfo.data();
  return {
    name: hospitalInfoData.name,
    email: hospitalInfoData.email,
    about: hospitalInfoData.about,
    phone: hospitalInfoData.phone,
  };
}
module.exports.formatDoctorData = formatDoctorData;
module.exports.formatMessageData = formatMessageData;
module.exports.formatMessageSentResult = formatMessageSentResult;
module.exports.formatMedicalSpecialtiesData = formatMedicalSpecialtiesData;
module.exports.formatDoctorTypesData = formatDoctorTypesData;
module.exports.formatHospitalDepartmentsData = formatHospitalDepartmentsData;
module.exports.formatDepartmentsData = formatDepartmentsData;
module.exports.formatPatientData = formatPatientData;
module.exports.formatSOSData = formatSOSData;
module.exports.formatDoctorsHoursData = formatDoctorsHoursData;
module.exports.formatPrescriptionData = formatPrescriptionData;
module.exports.formatDoctorDataAll = formatDoctorDataAll;
module.exports.formatAppointmentData = formatAppointmentData;
module.exports.formatHospitalData = formatHospitalData;
