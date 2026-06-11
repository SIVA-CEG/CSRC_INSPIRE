import React from 'react';
import './Navbar.css';

const PAGE_TITLES = {
  profile:                   'Profile',
  endorsements:              'Endorsements',
  sanctioned:                'Sanctioned Projects',
  ctdt:                      'CTDT Proceedings',
  projectStaff:              'Project Staff',
  staffDetails:              'Staff Details',
  appointmentOrders:         'Appointment Orders',
  requestForms:              'Request Forms',
  reappropriationDashboard:  'Reappropriation',
  reappropriation:           'New Reappropriation',
  reappropriationHistory:    'Reappropriation History',
  projectExtensionDashboard: 'Project Extension',
  projectExtension:          'New Extension Request',
  projectExtensionHistory:   'Extension History',
  zbaSlip:                   'Payment Claims',
};

const Navbar = ({ activePage, onLogout, onMenuToggle }) => {
  const pageTitle = PAGE_TITLES[activePage] || 'Dashboard';

  return (
    <header className="dst-navbar">

      {/* ── Left ── */}
      <div className="navbar-left">
        <button
          className="navbar-menu-btn"
          onClick={onMenuToggle}
          aria-label="Toggle sidebar"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6"  x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>

        <div className="navbar-au-seal" aria-label="Anna University">AU</div>
        <span className="navbar-au-name">Anna University</span>

        <span className="navbar-divider" aria-hidden="true"/>
        <span className="navbar-page-title">{pageTitle}</span>
      </div>

      {/* ── Right ── */}
      <div className="navbar-right">

        <nav className="navbar-links" aria-label="Quick navigation">
          <button className="navbar-link active">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Home
          </button>

          <button className="navbar-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
            Profile
          </button>

          <button className="navbar-link notification-btn" aria-label="Notifications">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 01-3.46 0"/>
            </svg>
            Notifications
            <span className="notif-dot" aria-label="New notifications"/>
          </button>
        </nav>

        <button className="navbar-logout-btn" onClick={onLogout}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Logout
        </button>

        <div className="navbar-csrc-logo" aria-label="CSRC">CSRC</div>
      </div>

    </header>
  );
};

export default Navbar;