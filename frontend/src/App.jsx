import React, { useState } from 'react';
import './App.css';

/* ── Login ── */
import LoginPage from './pages/Login/LoginPage';

/* ══════════════════════════════════
   DST FACULTY imports
══════════════════════════════════ */
import DSTFacultyLayout         from './pages/DSTFaculty/DSTFacultyLayout';
import DSTProfilePage           from './pages/DSTFaculty/ProfilePage';

import DSTProjectsPage          from './pages/DSTFaculty/MyProjects/ProjectsPage';
import DSTSanctionedList        from './pages/DSTFaculty/MyProjects/SanctionedList';
import DSTCTDTPage              from './pages/DSTFaculty/MyProjects/ctdt/CTDTPage';
import DSTProjectStaffPage      from './pages/DSTFaculty/MyProjects/projectstaff/ProjectStaffPage';
import DSTStaffDetails          from './pages/DSTFaculty/MyProjects/projectstaff/StaffDetails';
import DSTAppointmentOrders     from './pages/DSTFaculty/MyProjects/projectstaff/AppointmentOrders';
import DSTRequestFormsPage      from './pages/DSTFaculty/MyProjects/requestforms/RequestFormsPage';
import DSTReappropriationDashboard  from './pages/DSTFaculty/MyProjects/requestforms/ReappropriationDashboard';
import DSTReappropriationPage       from './pages/DSTFaculty/MyProjects/requestforms/ReappropriationPage';
import DSTReappropriationHistory    from './pages/DSTFaculty/MyProjects/requestforms/ReappropriationHistory';
import DSTProjectExtensionDashboard from './pages/DSTFaculty/MyProjects/requestforms/ProjectExtensionDashboard';
import DSTProjectExtensionPage      from './pages/DSTFaculty/MyProjects/requestforms/ProjectExtensionPage';
import DSTProjectExtensionHistory   from './pages/DSTFaculty/MyProjects/requestforms/ProjectExtensionHistory';
import DSTZBASlipPage           from './pages/DSTFaculty/MyProjects/zbaslip/ZBASlipPage';

/* ══════════════════════════════════
   WOMEN SCIENTISTS imports
══════════════════════════════════ */
import WomenScientistsLayout    from './pages/WomenScientists/WomenScientistsLayout';
import WSProfilePage            from './pages/WomenScientists/ProfilePage';

import WSProjectsPage           from './pages/WomenScientists/MyProjects/ProjectsPage';
import WSSanctionedList         from './pages/WomenScientists/MyProjects/SanctionedList';
import WSCTDTPage               from './pages/WomenScientists/MyProjects/ctdt/CTDTPage';
import WSProjectStaffPage       from './pages/WomenScientists/MyProjects/projectstaff/ProjectStaffPage';
import WSStaffDetails           from './pages/WomenScientists/MyProjects/projectstaff/StaffDetails';
import WSAppointmentOrders      from './pages/WomenScientists/MyProjects/projectstaff/AppointmentOrders';
import WSRequestFormsPage       from './pages/WomenScientists/MyProjects/requestforms/RequestFormsPage';
import WSReappropriationDashboard  from './pages/WomenScientists/MyProjects/requestforms/ReappropriationDashboard';
import WSReappropriationPage       from './pages/WomenScientists/MyProjects/requestforms/ReappropriationPage';
import WSReappropriationHistory    from './pages/WomenScientists/MyProjects/requestforms/ReappropriationHistory';
import WSProjectExtensionDashboard from './pages/WomenScientists/MyProjects/requestforms/ProjectExtensionDashboard';
import WSProjectExtensionPage      from './pages/WomenScientists/MyProjects/requestforms/ProjectExtensionPage';
import WSProjectExtensionHistory   from './pages/WomenScientists/MyProjects/requestforms/ProjectExtensionHistory';
import WSZBASlipPage            from './pages/WomenScientists/MyProjects/zbaslip/ZBASlipPage';


/* ══════════════════════════════════
    CMRG STUDENTS imports
══════════════════════════════════ */

import CMRGStudentsLayout    from './pages/CMRGStudents/CMRGStudentsLayout';
import CMRGProfilePage            from './pages/CMRGStudents/ProfilePage';

import CMRGProjectsPage           from './pages/CMRGStudents/MyProjects/ProjectsPage';
import CMRGSanctionedList         from './pages/CMRGStudents/MyProjects/SanctionedList';
import CMRGCTDTPage               from './pages/CMRGStudents/MyProjects/ctdt/CTDTPage';
import CMRGProjectStaffPage       from './pages/CMRGStudents/MyProjects/projectstaff/ProjectStaffPage';
import CMRGStaffDetails           from './pages/CMRGStudents/MyProjects/projectstaff/StaffDetails';
import CMRGAppointmentOrders      from './pages/CMRGStudents/MyProjects/projectstaff/AppointmentOrders';
import CMRGRequestFormsPage       from './pages/CMRGStudents/MyProjects/requestforms/RequestFormsPage';
import CMRGReappropriationDashboard  from './pages/CMRGStudents/MyProjects/requestforms/ReappropriationDashboard';
import CMRGReappropriationPage       from './pages/CMRGStudents/MyProjects/requestforms/ReappropriationPage';
import CMRGReappropriationHistory    from './pages/CMRGStudents/MyProjects/requestforms/ReappropriationHistory';
import CMRGProjectExtensionDashboard from './pages/CMRGStudents/MyProjects/requestforms/ProjectExtensionDashboard';
import CMRGProjectExtensionPage      from './pages/CMRGStudents/MyProjects/requestforms/ProjectExtensionPage';
import CMRGProjectExtensionHistory   from './pages/CMRGStudents/MyProjects/requestforms/ProjectExtensionHistory';
import CMRGZBASlipPage            from './pages/CMRGStudents/MyProjects/zbaslip/ZBASlipPage';

/* ══════════════════════════════════
   DST STUDENTS (placeholder)
══════════════════════════════════ */
import DSTStudentsLayout        from './pages/DSTStudents/DSTStudentsLayout';

/* ─────────────────────────────────────────────
   DST FACULTY route renderer
───────────────────────────────────────────── */
const renderDSTPage = (page, navigate) => {
  switch (page) {
    case 'profile':                    return <DSTProfilePage />;
    case 'projects':                   return <DSTProjectsPage          onNavigate={navigate} />;
    case 'sanctioned':                 return <DSTSanctionedList        onNavigate={navigate} />;
    case 'ctdt':                       return <DSTCTDTPage              onNavigate={navigate} />;
    case 'projectStaff':               return <DSTProjectStaffPage      onNavigate={navigate} />;
    case 'staffDetails':               return <DSTStaffDetails          onNavigate={navigate} />;
    case 'appointmentOrders':          return <DSTAppointmentOrders     onNavigate={navigate} />;
    case 'requestForms':               return <DSTRequestFormsPage      onNavigate={navigate} />;
    case 'reappropriationDashboard':   return <DSTReappropriationDashboard  onNavigate={navigate} />;
    case 'reappropriation':            return <DSTReappropriationPage       onNavigate={navigate} />;
    case 'reappropriationHistory':     return <DSTReappropriationHistory    onNavigate={navigate} />;
    case 'projectExtensionDashboard':  return <DSTProjectExtensionDashboard onNavigate={navigate} />;
    case 'projectExtension':           return <DSTProjectExtensionPage      onNavigate={navigate} />;
    case 'projectExtensionHistory':    return <DSTProjectExtensionHistory   onNavigate={navigate} />;
    case 'zbaSlip':                    return <DSTZBASlipPage           onNavigate={navigate} />;
    default:                           return <DSTProfilePage />;
  }
};

/* ─────────────────────────────────────────────
   WOMEN SCIENTISTS route renderer
   ws- prefix is stripped before switching
───────────────────────────────────────────── */
const renderWSPage = (page, navigate) => {
  const key = page.startsWith('ws-') ? page.slice(3) : page;

  switch (key) {
    case 'profile':                    return <WSProfilePage />;
    case 'projects':                   return <WSProjectsPage           onNavigate={navigate} />;
    case 'sanctioned':                 return <WSSanctionedList         onNavigate={navigate} />;
    case 'ctdt':                       return <WSCTDTPage               onNavigate={navigate} />;
    case 'projectStaff':               return <WSProjectStaffPage       onNavigate={navigate} />;
    case 'staffDetails':               return <WSStaffDetails           onNavigate={navigate} />;
    case 'appointmentOrders':          return <WSAppointmentOrders      onNavigate={navigate} />;
    case 'requestForms':               return <WSRequestFormsPage       onNavigate={navigate} />;
    case 'reappropriationDashboard':   return <WSReappropriationDashboard  onNavigate={navigate} />;
    case 'reappropriation':            return <WSReappropriationPage       onNavigate={navigate} />;
    case 'reappropriationHistory':     return <WSReappropriationHistory    onNavigate={navigate} />;
    case 'projectExtensionDashboard':  return <WSProjectExtensionDashboard onNavigate={navigate} />;
    case 'projectExtension':           return <WSProjectExtensionPage      onNavigate={navigate} />;
    case 'projectExtensionHistory':    return <WSProjectExtensionHistory   onNavigate={navigate} />;
    case 'zbaSlip':                    return <WSZBASlipPage            onNavigate={navigate} />;
    default:                           return <WSProfilePage />;
  }
};


const renderCMRGPage = (page, navigate) => {
  const key = page.startsWith('cmrg-') ? page.slice(5) : page;

  switch (key) {
    case 'profile':                    return <CMRGProfilePage />;
    case 'projects':                   return <CMRGProjectsPage           onNavigate={navigate} />;
    case 'sanctioned':                 return <CMRGSanctionedList         onNavigate={navigate} />;
    case 'ctdt':                       return <CMRGCTDTPage               onNavigate={navigate} />;
    case 'projectStaff':               return <CMRGProjectStaffPage       onNavigate={navigate} />;
    case 'staffDetails':               return <CMRGStaffDetails           onNavigate={navigate} />;
    case 'appointmentOrders':          return <CMRGAppointmentOrders      onNavigate={navigate} />;
    case 'requestForms':               return <CMRGRequestFormsPage       onNavigate={navigate} />;
    case 'reappropriationDashboard':   return <CMRGReappropriationDashboard  onNavigate={navigate} />;
    case 'reappropriation':            return <CMRGReappropriationPage       onNavigate={navigate} />;
    case 'reappropriationHistory':     return <CMRGReappropriationHistory    onNavigate={navigate} />;
    case 'projectExtensionDashboard':  return <CMRGProjectExtensionDashboard onNavigate={navigate} />;
    case 'projectExtension':           return <CMRGProjectExtensionPage      onNavigate={navigate} />;
    case 'projectExtensionHistory':    return <CMRGProjectExtensionHistory   onNavigate={navigate} />;
    case 'zbaSlip':                    return <CMRGZBASlipPage            onNavigate={navigate} />;
    default:                           return <CMRGProfilePage />;
  }
};


/* ─────────────────────────────────────────────
   App
───────────────────────────────────────────── */
const App = () => {
  const [role, setRole] = useState('login');
  const [page, setPage] = useState('profile');

  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
    switch (selectedRole) {
      case 'dstFaculty':      setPage('profile');    break;
      case 'womenScientists': setPage('ws-profile'); break;
      case 'dstStudents':     setPage('profile');    break;
      case 'cmrgStudents':    setPage('cmrg-profile'); break;
      default: break;
    }
  };

  const handleLogout = () => {
    setRole('login');
    setPage('profile');
  };

  const navigate = (target) => setPage(target);

  if (role === 'login') {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (role === 'dstFaculty') {
    return (
      <DSTFacultyLayout
        activePage={page}
        onNavigate={navigate}
        onLogout={handleLogout}
      >
        {renderDSTPage(page, navigate)}
      </DSTFacultyLayout>
    );
  }

  if (role === 'womenScientists') {
    return (
      <WomenScientistsLayout
        activePage={page}
        onNavigate={navigate}
        onLogout={handleLogout}
      >
        {renderWSPage(page, navigate)}
      </WomenScientistsLayout>
    );
  }

  if (role === 'cmrgStudents') {
    return (
      <CMRGStudentsLayout
        activePage={page}
        onNavigate={navigate}
        onLogout={handleLogout}
      >
        {renderCMRGPage(page, navigate)}
      </CMRGStudentsLayout>
    );
  }

  if (role === 'dstStudents') {
    return <DSTStudentsLayout onLogout={handleLogout} />;
  }

  return <LoginPage onLogin={handleLogin} />;
};

export default App;