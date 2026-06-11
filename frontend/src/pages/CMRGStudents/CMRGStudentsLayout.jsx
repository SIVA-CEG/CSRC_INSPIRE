import React, { useState } from 'react';
import './CMRGStudentsLayout.css';

/* ─────────────────────────────────────────────
   Navigation tree — same as DST Faculty / WS
───────────────────────────────────────────── */
const NAV = [
  {
    key: 'cmrg-profile',
    label: 'Profile',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
  },
  {
    key: 'cmrg-myProjects',
    label: 'My Projects',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    children: [
      { key: 'cmrg-sanctioned',   label: 'Sanctioned Projects' },
      { key: 'cmrg-ctdt',         label: 'CTDT Proceedings'    },
      { key: 'cmrg-projectStaff', label: 'Project Staff'       },
      { key: 'cmrg-requestForms', label: 'Request Forms'       },
      { key: 'cmrg-zbaSlip',      label: 'Payment Claims'      },
    ],
  },
];

const MY_PROJECTS_KEYS = new Set([
  'cmrg-sanctioned', 'cmrg-ctdt', 'cmrg-projectStaff',
  'cmrg-requestForms', 'cmrg-reappropriationDashboard', 'cmrg-reappropriation',
  'cmrg-reappropriationHistory', 'cmrg-projectExtensionDashboard',
  'cmrg-projectExtension', 'cmrg-projectExtensionHistory', 'cmrg-zbaSlip',
]);

const PAGE_TITLES = {
  'cmrg-profile':                   'Profile',
  'cmrg-endorsements':              'Endorsements',
  'cmrg-sanctioned':                'Sanctioned Projects',
  'cmrg-ctdt':                      'CTDT Proceedings',
  'cmrg-projectStaff':              'Project Staff',
  'cmrg-staffDetails':              'Staff Details',
  'cmrg-appointmentOrders':         'Appointment Orders',
  'cmrg-requestForms':              'Request Forms',
  'cmrg-reappropriationDashboard':  'Reappropriation',
  'cmrg-reappropriation':           'New Reappropriation',
  'cmrg-reappropriationHistory':    'Reappropriation History',
  'cmrg-projectExtensionDashboard': 'Project Extension',
  'cmrg-projectExtension':          'New Extension Request',
  'cmrg-projectExtensionHistory':   'Extension History',
  'cmrg-zbaSlip':                   'Payment Claims',
};

/* ─────────────────────────────────────────────
   Sidebar
───────────────────────────────────────────── */
const CMRGSidebar = ({ activePage, onNavigate, collapsed, onClose }) => {
  const [openGroup, setOpenGroup] = useState(
    MY_PROJECTS_KEYS.has(activePage) ? 'cmrg-myProjects' : null
  );

  const toggleGroup = (key) =>
    setOpenGroup(prev => (prev === key ? null : key));

  const handleLeafClick = (key) => {
    onNavigate(key);
    if (onClose) onClose();
  };

  return (
    <aside
      className={`cmrg-sidebar ${collapsed ? 'collapsed' : ''}`}
      aria-label="CMRG Students navigation"
    >
      {/* User card */}
      <div className="cmrg-sidebar-user-card">
        <div className="cmrg-sidebar-avatar" aria-hidden="true">CM</div>
        {!collapsed && (
          <div className="cmrg-sidebar-user-info">
            <span className="cmrg-sidebar-user-name">CMRG Student</span>
            <span className="cmrg-sidebar-user-id">CMRG Scheme · CSRC</span>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="cmrg-sidebar-nav">
        {!collapsed && (
          <span className="cmrg-sidebar-section-label" aria-hidden="true">
            NAVIGATION
          </span>
        )}

        {NAV.map(item => {
          const isActive    = activePage === item.key;
          const isGroupOpen = openGroup === item.key;
          const childActive = item.key === 'cmrg-myProjects' &&
            MY_PROJECTS_KEYS.has(activePage);

          if (item.children) {
            return (
              <div key={item.key} className="cmrg-sidebar-group">
                <button
                  className={`cmrg-sidebar-item group-toggle
                    ${childActive  ? 'child-active' : ''}
                    ${isGroupOpen  ? 'open'         : ''}`}
                  onClick={() => toggleGroup(item.key)}
                  title={collapsed ? item.label : undefined}
                  aria-expanded={isGroupOpen}
                >
                  <span className="cmrg-sidebar-item-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  {!collapsed && (
                    <>
                      <span className="cmrg-sidebar-item-label">{item.label}</span>
                      <svg
                        className={`cmrg-sidebar-chevron ${isGroupOpen ? 'rotated' : ''}`}
                        viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </>
                  )}
                </button>

                {!collapsed && isGroupOpen && (
                  <div className="cmrg-sidebar-children" role="list">
                    {item.children.map(child => (
                      <button
                        key={child.key}
                        role="listitem"
                        className={`cmrg-sidebar-child-item ${activePage === child.key ? 'active' : ''}`}
                        onClick={() => handleLeafClick(child.key)}
                      >
                        <span className="cmrg-child-dot" aria-hidden="true"/>
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <button
              key={item.key}
              className={`cmrg-sidebar-item ${isActive ? 'active' : ''}`}
              onClick={() => handleLeafClick(item.key)}
              title={collapsed ? item.label : undefined}
            >
              <span className="cmrg-sidebar-item-icon" aria-hidden="true">
                {item.icon}
              </span>
              {!collapsed && (
                <span className="cmrg-sidebar-item-label">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Brand footer */}
      {!collapsed && (
        <div className="cmrg-sidebar-brand-footer">
          <div className="cmrg-sidebar-brand-seal" aria-hidden="true">AU</div>
          <div className="cmrg-sidebar-brand-text">
            <span>Anna University</span>
            <span>CSRC · INSPIRE</span>
          </div>
        </div>
      )}
    </aside>
  );
};

/* ─────────────────────────────────────────────
   Navbar
───────────────────────────────────────────── */
const CMRGNavbar = ({ activePage, onLogout, onMenuToggle }) => {
  const pageTitle = PAGE_TITLES[activePage] || 'Dashboard';

  return (
    <header className="cmrg-navbar">
      {/* Left */}
      <div className="cmrg-navbar-left">
        <button
          className="cmrg-navbar-menu-btn"
          onClick={onMenuToggle}
          aria-label="Toggle sidebar"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6"  x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>

        <div className="cmrg-navbar-au-seal" aria-label="Anna University">AU</div>
        <span className="cmrg-navbar-au-name">Anna University</span>
        <span className="cmrg-navbar-divider" aria-hidden="true"/>
        <span className="cmrg-navbar-page-title">{pageTitle}</span>
      </div>

      {/* Right */}
      <div className="cmrg-navbar-right">
        <nav className="cmrg-navbar-links" aria-label="Quick navigation">
          <button className="cmrg-navbar-link active">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Home
          </button>

          <button className="cmrg-navbar-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
            Profile
          </button>

          <button className="cmrg-navbar-link cmrg-notification-btn" aria-label="Notifications">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 01-3.46 0"/>
            </svg>
            Notifications
            <span className="cmrg-notif-dot" aria-label="New notifications"/>
          </button>
        </nav>

        <button className="cmrg-navbar-logout-btn" onClick={onLogout}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Logout
        </button>

        <div className="cmrg-navbar-csrc-logo" aria-label="CSRC">CSRC</div>
      </div>
    </header>
  );
};

/* ─────────────────────────────────────────────
   CMRGStudentsLayout  (main export)
───────────────────────────────────────────── */
const CMRGStudentsLayout = ({ activePage, onNavigate, onLogout, children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen,       setMobileOpen]       = useState(false);

  const toggleSidebar = () => {
    if (window.innerWidth <= 900) {
      setMobileOpen(p => !p);
    } else {
      setSidebarCollapsed(p => !p);
    }
  };

  return (
    <div className={`cmrg-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="cmrg-sidebar-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <CMRGSidebar
        activePage={activePage}
        onNavigate={onNavigate}
        collapsed={sidebarCollapsed}
        onClose={() => setMobileOpen(false)}
      />

      <div className="cmrg-main-col">
        <CMRGNavbar
          activePage={activePage}
          onLogout={onLogout}
          onMenuToggle={toggleSidebar}
        />

        <main className="cmrg-content">
          {children}
        </main>
      </div>

    </div>
  );
};

export default CMRGStudentsLayout;