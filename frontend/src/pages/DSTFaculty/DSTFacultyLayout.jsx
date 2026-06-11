import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import './DSTFacultyLayout.css';

/* ─────────────────────────────────────────────
   Mobile overlay + layout shell only.
   All nav logic lives in Navbar / Sidebar.
───────────────────────────────────────────── */
const DSTFacultyLayout = ({ activePage, onNavigate, onLogout, children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen,       setMobileOpen]       = useState(false);

  const toggleSidebar = () => {
    /* Desktop: collapse/expand. Mobile: open/close drawer. */
    if (window.innerWidth <= 900) {
      setMobileOpen(p => !p);
    } else {
      setSidebarCollapsed(p => !p);
    }
  };

  return (
    <div className={`dst-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <Sidebar
        activePage={activePage}
        onNavigate={onNavigate}
        collapsed={sidebarCollapsed}
        onClose={() => setMobileOpen(false)}
      />

      {/* Main column */}
      <div className="dst-main-col">
        <Navbar
          activePage={activePage}
          onLogout={onLogout}
          onMenuToggle={toggleSidebar}
        />

        <main className="dst-content">
          {children}
        </main>
      </div>

    </div>
  );
};

export default DSTFacultyLayout;