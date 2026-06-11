import CMRGStudentsLayout from "./CMRGStudentsLayout";

const renderCMRGPage = (page, navigate) => {
  const key = page.startsWith('cmrg-') ? page.slice(3) : page;

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