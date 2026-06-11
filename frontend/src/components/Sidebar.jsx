import React, { useState } from 'react';
import './Sidebar.css';

/* ─────────────────────────────────────────────
   Navigation tree — mirrors App.jsx ROUTES
───────────────────────────────────────────── */
const NAV = [
  {
    key: 'profile',
    label: 'Profile',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
  },
  {
    key: 'myProjects',
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
      { key: 'sanctioned',   label: 'Sanctioned Projects' },
      { key: 'ctdt',         label: 'CTDT Proceedings'    },
      { key: 'projectStaff', label: 'Project Staff'       },
      { key: 'requestForms', label: 'Request Forms'       },
      { key: 'zbaSlip',      label: 'Payment Claims'      },
    ],
  },
];

/* child keys that belong to "My Projects" */
const MY_PROJECTS_KEYS = new Set([
  'sanctioned', 'ctdt', 'projectStaff',
  'requestForms', 'reappropriationDashboard', 'reappropriation',
  'reappropriationHistory', 'projectExtensionDashboard',
  'projectExtension', 'projectExtensionHistory', 'zbaSlip',
]);

const Sidebar = ({ activePage, onNavigate, collapsed, onClose }) => {
  /* Keep group open if any child is currently active */
  const [openGroup, setOpenGroup] = useState(
    MY_PROJECTS_KEYS.has(activePage) ? 'myProjects' : null
  );

  const toggleGroup = (key) =>
    setOpenGroup(prev => (prev === key ? null : key));

  const handleLeafClick = (key) => {
    onNavigate(key);
    if (onClose) onClose();
  };

  return (
    <aside
      className={`dst-sidebar ${collapsed ? 'collapsed' : ''}`}
      aria-label="Main navigation"
    >

      {/* ── User card ── */}
      <div className="sidebar-user-card">
        <div className="sidebar-avatar" aria-hidden="true">BP</div>
        {!collapsed && (
          <div className="sidebar-user-info">
            <span className="sidebar-user-name">Dr. S. Balasivanandha Prabu</span>
            <span className="sidebar-user-id">User ID: 62300</span>
          </div>
        )}
      </div>

      {/* ── Nav items ── */}
      <nav className="sidebar-nav">
        {!collapsed && (
          <span className="sidebar-section-label" aria-hidden="true">
            NAVIGATION
          </span>
        )}

        {NAV.map(item => {
          const isActive    = activePage === item.key;
          const isGroupOpen = openGroup === item.key;
          const childActive = item.children?.some(c =>
            c.key === activePage || MY_PROJECTS_KEYS.has(activePage)
          ) && item.key === 'myProjects';

          /* ── Group item (has children) ── */
          if (item.children) {
            return (
              <div key={item.key} className="sidebar-group">
                <button
                  className={`sidebar-item group-toggle
                    ${childActive  ? 'child-active' : ''}
                    ${isGroupOpen  ? 'open'         : ''}`}
                  onClick={() => toggleGroup(item.key)}
                  title={collapsed ? item.label : undefined}
                  aria-expanded={isGroupOpen}
                >
                  <span className="sidebar-item-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  {!collapsed && (
                    <>
                      <span className="sidebar-item-label">{item.label}</span>
                      <svg
                        className={`sidebar-chevron ${isGroupOpen ? 'rotated' : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </>
                  )}
                </button>

                {!collapsed && isGroupOpen && (
                  <div className="sidebar-children" role="list">
                    {item.children.map(child => (
                      <button
                        key={child.key}
                        role="listitem"
                        className={`sidebar-child-item ${activePage === child.key ? 'active' : ''}`}
                        onClick={() => handleLeafClick(child.key)}
                      >
                        <span className="child-dot" aria-hidden="true"/>
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          /* ── Leaf item ── */
          return (
            <button
              key={item.key}
              className={`sidebar-item ${isActive ? 'active' : ''}`}
              onClick={() => handleLeafClick(item.key)}
              title={collapsed ? item.label : undefined}
            >
              <span className="sidebar-item-icon" aria-hidden="true">
                {item.icon}
              </span>
              {!collapsed && (
                <span className="sidebar-item-label">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* ── Brand footer ── */}
      {!collapsed && (
        <div className="sidebar-brand-footer">
          <div className="sidebar-brand-seal" aria-hidden="true">AU</div>
          <div className="sidebar-brand-text">
            <span>Anna University</span>
            <span>CSRC · INSPIRE</span>
          </div>
        </div>
      )}

    </aside>
  );
};

export default Sidebar;