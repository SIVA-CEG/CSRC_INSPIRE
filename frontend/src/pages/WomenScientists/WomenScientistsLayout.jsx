import React, { useState } from 'react';
import './WomenScientistsLayout.css';

/* ─────────────────────────────────────────────
   Navigation tree — same as DST Faculty
───────────────────────────────────────────── */
const NAV = [
  {
    key: 'ws-profile',
    label: 'Profile',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
  },

  {
    key: 'ws-myProjects',
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
      { key: 'ws-sanctioned',   label: 'Sanctioned Projects' },
      { key: 'ws-ctdt',         label: 'CTDT Proceedings'    },
      { key: 'ws-projectStaff', label: 'Project Staff'       },
      { key: 'ws-requestForms', label: 'Request Forms'       },
      { key: 'ws-zbaSlip',      label: 'Payment Claims'      },
    ],
  },
];

/* All child keys under My Projects */
const MY_PROJECTS_KEYS = new Set([
  'ws-sanctioned', 'ws-ctdt', 'ws-projectStaff',
  'ws-requestForms', 'ws-reappropriationDashboard', 'ws-reappropriation',
  'ws-reappropriationHistory', 'ws-projectExtensionDashboard',
  'ws-projectExtension', 'ws-projectExtensionHistory', 'ws-zbaSlip',
]);

const PAGE_TITLES = {
  'ws-profile':                   'Profile',
  'ws-endorsements':              'Endorsements',
  'ws-sanctioned':                'Sanctioned Projects',
  'ws-ctdt':                      'CTDT Proceedings',
  'ws-projectStaff':              'Project Staff',
  'ws-staffDetails':              'Staff Details',
  'ws-appointmentOrders':         'Appointment Orders',
  'ws-requestForms':              'Request Forms',
  'ws-reappropriationDashboard':  'Reappropriation',
  'ws-reappropriation':           'New Reappropriation',
  'ws-reappropriationHistory':    'Reappropriation History',
  'ws-projectExtensionDashboard': 'Project Extension',
  'ws-projectExtension':          'New Extension Request',
  'ws-projectExtensionHistory':   'Extension History',
  'ws-zbaSlip':                   'Payment Claims',
};

/* ─────────────────────────────────────────────
   Sidebar
───────────────────────────────────────────── */
const WSSidebar = ({ activePage, onNavigate, collapsed, onClose }) => {
  const [openGroup, setOpenGroup] = useState(
    MY_PROJECTS_KEYS.has(activePage) ? 'ws-myProjects' : null
  );

  const toggleGroup = (key) =>
    setOpenGroup(prev => (prev === key ? null : key));

  const handleLeafClick = (key) => {
    onNavigate(key);
    if (onClose) onClose();
  };

  return (
    <aside
      className={`ws-sidebar ${collapsed ? 'collapsed' : ''}`}
      aria-label="Women Scientists navigation"
    >
      {/* User card */}
      <div className="ws-sidebar-user-card">
        <div className="ws-sidebar-avatar" aria-hidden="true">WS</div>
        {!collapsed && (
          <div className="ws-sidebar-user-info">
            <span className="ws-sidebar-user-name">Women Scientist</span>
            <span className="ws-sidebar-user-id">WOS Scheme · CSRC</span>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="ws-sidebar-nav">
        {!collapsed && (
          <span className="ws-sidebar-section-label" aria-hidden="true">
            NAVIGATION
          </span>
        )}

        {NAV.map(item => {
          const isActive    = activePage === item.key;
          const isGroupOpen = openGroup === item.key;
          const childActive = item.key === 'ws-myProjects' &&
            MY_PROJECTS_KEYS.has(activePage);

          if (item.children) {
            return (
              <div key={item.key} className="ws-sidebar-group">
                <button
                  className={`ws-sidebar-item group-toggle
                    ${childActive  ? 'child-active' : ''}
                    ${isGroupOpen  ? 'open'         : ''}`}
                  onClick={() => toggleGroup(item.key)}
                  title={collapsed ? item.label : undefined}
                  aria-expanded={isGroupOpen}
                >
                  <span className="ws-sidebar-item-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  {!collapsed && (
                    <>
                      <span className="ws-sidebar-item-label">{item.label}</span>
                      <svg
                        className={`ws-sidebar-chevron ${isGroupOpen ? 'rotated' : ''}`}
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
                  <div className="ws-sidebar-children" role="list">
                    {item.children.map(child => (
                      <button
                        key={child.key}
                        role="listitem"
                        className={`ws-sidebar-child-item ${activePage === child.key ? 'active' : ''}`}
                        onClick={() => handleLeafClick(child.key)}
                      >
                        <span className="ws-child-dot" aria-hidden="true"/>
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
              className={`ws-sidebar-item ${isActive ? 'active' : ''}`}
              onClick={() => handleLeafClick(item.key)}
              title={collapsed ? item.label : undefined}
            >
              <span className="ws-sidebar-item-icon" aria-hidden="true">
                {item.icon}
              </span>
              {!collapsed && (
                <span className="ws-sidebar-item-label">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Brand footer */}
      {!collapsed && (
        <div className="ws-sidebar-brand-footer">
          <div className="ws-sidebar-brand-seal" aria-hidden="true">AU</div>
          <div className="ws-sidebar-brand-text">
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
const WSNavbar = ({ activePage, onLogout, onMenuToggle }) => {
  const pageTitle = PAGE_TITLES[activePage] || 'Dashboard';

  return (
    <header className="ws-navbar">
      {/* Left */}
      <div className="ws-navbar-left">
        <button
          className="ws-navbar-menu-btn"
          onClick={onMenuToggle}
          aria-label="Toggle sidebar"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6"  x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>

        <div className="ws-navbar-au-seal" aria-label="Anna University">AU</div>
        <span className="ws-navbar-au-name">Anna University</span>
        <span className="ws-navbar-divider" aria-hidden="true"/>
        <span className="ws-navbar-page-title">{pageTitle}</span>
      </div>

      {/* Right */}
      <div className="ws-navbar-right">
        <nav className="ws-navbar-links" aria-label="Quick navigation">
          <button className="ws-navbar-link active">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Home
          </button>

          <button className="ws-navbar-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
            Profile
          </button>

          <button className="ws-navbar-link ws-notification-btn" aria-label="Notifications">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 01-3.46 0"/>
            </svg>
            Notifications
            <span className="ws-notif-dot" aria-label="New notifications"/>
          </button>
        </nav>

        <button className="ws-navbar-logout-btn" onClick={onLogout}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Logout
        </button>

        <div className="ws-navbar-csrc-logo" aria-label="CSRC">CSRC</div>
      </div>
    </header>
  );
};

/* ─────────────────────────────────────────────
   WomenScientistsLayout  (main export)
───────────────────────────────────────────── */
const WomenScientistsLayout = ({ activePage, onNavigate, onLogout, children }) => {
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
    <div className={`ws-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="ws-sidebar-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <WSSidebar
        activePage={activePage}
        onNavigate={onNavigate}
        collapsed={sidebarCollapsed}
        onClose={() => setMobileOpen(false)}
      />

      <div className="ws-main-col">
        <WSNavbar
          activePage={activePage}
          onLogout={onLogout}
          onMenuToggle={toggleSidebar}
        />

        <main className="ws-content">
          {children}
        </main>
      </div>

    </div>
  );
};

export default WomenScientistsLayout;