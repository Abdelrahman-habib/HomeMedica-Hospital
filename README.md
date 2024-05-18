# HomeMedica Hospital Interface

## Functionality and Purpose

### Functionality

The hospital interface is an integral component of the HomeMedica project, designed to streamline interactions between patients, doctors, and hospital staff. Key functionalities include:

1. **Appointment Management:** Facilitates the booking of appointments by patients and the management of these bookings by hospital staff. It allows hospitals to view, schedule, and update appointment details.
2. **Patient Interaction:** Enables hospital staff to communicate with patients via text chat to address inquiries and finalize appointment details.
3. **Medical History Access:** Provides doctors and hospital staff with access to comprehensive patient medical histories, including previous diagnoses, treatments, and ongoing health issues.
4. **Emergency Response:** Features an SOS call system where patients can send emergency alerts, which the hospital can respond to immediately by viewing the patient's location and medical details.
5. **Hospital Administration:** Allows administrators to manage doctors' schedules, departmental information, and other operational details via a hospital table interface.

### Purpose

The primary purpose of the hospital interface is to enhance the efficiency of hospital operations and improve patient care by:

1. **Reducing Administrative Work:** Automates the reservation process, minimizing the manual workload for hospital staff involved in appointment scheduling and patient information management.
2. **Improving Patient Care:** Ensures that doctors and medical staff have immediate access to relevant patient data, enabling better-informed medical decisions and personalized care.
3. **Enhancing Communication:** Facilitates seamless communication between patients and hospital staff, ensuring that patients receive timely information and support.
4. **Emergency Handling:** Provides a rapid response mechanism for emergencies, improving patient safety and outcomes during critical situations.

By addressing these needs, the hospital interface aims to create a more organized, responsive, and patient-centric healthcare environment.

## Running the Electron Code for the Hospital Interface

To run the Electron application for the hospital interface, follow these steps:

### Setting Up the Project

1. **Clone the Repository:**
   Clone the HomeMedica repository from your version control system.

```bash
git clone https://github.com/Abdelrahman-habib/HomeMedica-Hospital.git
```

2. **Install Dependencies:**
   Install the necessary Node.js dependencies.

```bash
npm install
```

### Running the Application

After setting up the project, you can run the Electron application using the following command:

```bash
npm start
```

This command will start the Electron application, and you should see the hospital interface window.

## Building the Application

To build the application for distribution, you can use the Electron Packager or Electron Builder. For example, using Electron Packager:

```bash
Copy code
npm install electron-packager --save-dev
npx electron-packager . HomeMedicaHospital --platform=win32 --arch=x64 --out=dist/
```

This command packages the application for Windows (you can adjust the platform and architecture as needed).

## Additional Notes

**for the project to run you have to replace the scripts/firebase/serviceAccount.json file with your own firebase service account.**

## Conclusion

The hospital interface of HomeMedica aims to modernize hospital operations, enhance patient care, and improve communication between patients and healthcare providers. By leveraging Electron for the desktop application, it ensures a seamless and efficient user experience.
