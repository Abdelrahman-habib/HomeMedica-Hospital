const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("firebase", {
  infoNotification: (callback) => ipcRenderer.on("infoNotification", callback),
  appointment: (callback) => ipcRenderer.on("appointment", callback),
  errorNotification: (callback) =>
    ipcRenderer.on("errorNotification", callback),
  successNotification: (callback) =>
    ipcRenderer.on("successNotification", callback),
  warningNotification: (callback) =>
    ipcRenderer.on("warningNotification", callback),
  handleMessageUpdate: (callback) => ipcRenderer.on("MessageUpdate", callback),
  addTableEvent: (callback) => ipcRenderer.on("addTableEvent", callback),
  handleAddChat: (callback) => ipcRenderer.on("addChat", callback),
  handleAddToChatSidebar: (callback) =>
    ipcRenderer.on("AddToChatSidebar", callback),
  saveMessage: (...args) => ipcRenderer.invoke("saveMessage", ...args),
  getPatientPrescriptions: (...args) =>
    ipcRenderer.invoke("getPatientPrescriptions", ...args),
  getDoctor: (...args) => ipcRenderer.invoke("getDoctor", ...args),
  getHospitalDepartment: (...args) =>
    ipcRenderer.invoke("getHospitalDepartment", ...args),
  editHospitalDoctor: (...args) =>
    ipcRenderer.invoke("editHospitalDoctor", ...args),
  editHospitalDepartment: (...args) =>
    ipcRenderer.invoke("editHospitalDepartment", ...args),
  deleteHospitalDepartment: (...args) =>
    ipcRenderer.invoke("deleteHospitalDepartment", ...args),
  deleteHospitalDoctor: (...args) =>
    ipcRenderer.invoke("deleteHospitalDoctor", ...args),
  addHospitalDepartment: (...args) =>
    ipcRenderer.invoke("addHospitalDepartment", ...args),
  addHospitalDoctor: (...args) =>
    ipcRenderer.invoke("addHospitalDoctor", ...args),
  addDoctorHours: (...args) => ipcRenderer.invoke("addDoctorHours", ...args),
  editDoctorHours: (...args) => ipcRenderer.invoke("editDoctorHours", ...args),
  removeDoctorHours: (...args) =>
    ipcRenderer.invoke("removeDoctorHours", ...args),
  markSOSAsResponded: (...args) =>
    ipcRenderer.invoke("markSOSAsResponded", ...args),
  getContacts: () => ipcRenderer.invoke("getContacts"),
  getChats: () => ipcRenderer.invoke("getChats"),
  getSOSsList: () => ipcRenderer.invoke("getSOSsList"),
  getDoctorsList: () => ipcRenderer.invoke("getDoctorsList"),
  getMedicalSpecialties: () => ipcRenderer.invoke("getMedicalSpecialties"),
  getDoctorTypes: () => ipcRenderer.invoke("getDoctorTypes"),
  getDepartmentsList: () => ipcRenderer.invoke("getDepartmentsList"),
  getHospitalDepartmentsList: () =>
    ipcRenderer.invoke("getHospitalDepartmentsList"),
  getPatientsList: () => ipcRenderer.invoke("getPatientsList"),
  getPatient: (...args) => ipcRenderer.invoke("getPatient", ...args),
  getHospitalTable: () => ipcRenderer.invoke("getHospitalTable"),
  handleNewSOS: (callback) => ipcRenderer.on("newSOS", callback),
  handleSOSDeleted: (callback) => ipcRenderer.on("SOSDeleted", callback),
  getAppointments: () => ipcRenderer.invoke("getAppointments"),
  getHospitalInfo: () => ipcRenderer.invoke("getHospitalInfo"),
  getAppointment: (event, appointmentID) =>
    ipcRenderer.invoke("getAppointment", appointmentID),
});
