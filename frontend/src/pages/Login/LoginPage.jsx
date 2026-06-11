import React, { useState } from 'react';
import './LoginPage.css';
import FacultyRegistrationPage from '../Login/FacultyRegistrationPage';


const ROLES = [
  {
    key: 'dstFaculty',
    label: 'DST INSPIRE Faculty',
    short: 'Faculty',
    desc: 'Research faculty managing DST INSPIRE grants, projects, and expenditure claims.',
    initials: 'DF',
    colorClass: 'role-blue',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 14c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4z"/>
        <circle cx="12" cy="8" r="4"/>
        <path d="M17 3l1.5 1.5L17 6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 4.5h-3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: 'dstStudents',
    label: 'DST INSPIRE Students',
    short: 'Students',
    desc: 'INSPIRE scholarship holders tracking fellowship disbursements and progress reports.',
    initials: 'DS',
    colorClass: 'role-teal',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3L2 8l10 5 10-5-10-5z" strokeLinejoin="round"/>
        <path d="M6 10.5v5c2 2 8 2 12 0v-5" strokeLinecap="round"/>
        <path d="M22 8v5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    key: 'womenScientists',
    label: 'Women Scientists',
    short: 'Women Scientists',
    desc: 'WOS scheme recipients managing project submissions, reports, and fund utilisation.',
    initials: 'WS',
    colorClass: 'role-violet',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="4"/>
        <path d="M12 12v8M9 17h6" strokeLinecap="round"/>
        <path d="M7 20c0-2.8 2.2-5 5-5s5 2.2 5 5" strokeLinecap="round"/>
      </svg>
    ),
  },

  {
  key: 'cmrgStudents',
  label: 'CMRG Students',
  short: 'CMRG',
  desc: 'CMRG project students managing project activities, claims, reports, and fund utilization.',
  initials: 'CS',
  colorClass: 'role-green',
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3L2 8l10 5 10-5-10-5z" strokeLinejoin="round"/>
      <path d="M6 10.5v5c2 2 8 2 12 0v-5" strokeLinecap="round"/>
      <circle cx="12" cy="15" r="2"/>
    </svg>
  ),
},
  
];

const LoginPage = ({ onLogin }) => {
  const [selected, setSelected]   = useState(null);
  const [userId, setUserId]       = useState('');
  const [password, setPassword]   = useState('');
  const [showPass, setShowPass]   = useState(false);
  const [error, setError]         = useState('');
  const [loading, setLoading]     = useState(false);
const [showRegister, setShowRegister] = useState(false);

  const handleRoleSelect = (key) => {
    setSelected(key);
    setError('');
    setUserId('');
    setPassword('');
  };

  const handleBack = () => {
    setSelected(null);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!userId.trim()) { setError('User ID is required.'); return; }
    if (!password.trim()) { setError('Password is required.'); return; }

    setLoading(true);
    /* Simulate network delay — replace with real API call */
    setTimeout(() => {
      setLoading(false);
      /* Demo: any credentials pass. Wire real auth here. */
      onLogin(selected);
    }, 900);
  };
const facultyRoles = [
  'dstFaculty',
  'womenScientists',
  'cmrgStudents'
];

  const activeRole = ROLES.find(r => r.key === selected);
if (showRegister && selected) {
  return (
    <div style={{ minHeight: '100vh', background: '#F5F7FA' }}>
      <div
        style={{
          padding: '20px 30px',
          background: '#fff',
          borderBottom: '1px solid #E5EAF0',
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}
      >
        <button
          className="back-btn"
          onClick={() => setShowRegister(false)}
        >
          ← Back to Login
        </button>

        <h2 style={{ margin: 0 }}>
          New User Registration
        </h2>
      </div>

      {facultyRoles.includes(selected) ? (
        <FacultyRegistrationPage />
      ) : (
        <Profile registrationMode />
      )}
    </div>
  );
}
  return (
    <div className="login-page">

      {/* ── Left panel ── */}
      <div className="login-left">
        <div className="login-left-inner">
          <div className="login-brand">
            <div className="brand-logo-row">
              {/* Anna University seal placeholder */}
              <div className="brand-seal" aria-label="Anna University seal">AU</div>
              <div className="brand-text">
                <span className="brand-university">Anna University</span>
                <span className="brand-csrc">CSRC · Centre for Sponsored Research &amp; Consultancy</span>
              </div>
            </div>
          </div>

          <div className="login-hero-text">
            <h1>DST INSPIRE<br />Portal</h1>
            <p>Manage grants, track milestones, and submit claims — all in one place.</p>
          </div>

          <div className="login-scheme-badges">
            <span className="scheme-badge">INSPIRE Faculty Award</span>
            <span className="scheme-badge">SHE Scholarship</span>
            <span className="scheme-badge">WOS-A · WOS-B</span>
          </div>

          <div className="login-footer-note">
            Powered by CSRC, Anna University · Chennai 600 025
          </div>
        </div>
      </div>

      {/* ── Right panel ── */}
      <div className="login-right">
        <div className="login-card">

          {!selected ? (
            /* ── Step 1: Role selection ── */
            <>
              <div className="login-card-header">
                <h2>Sign in to INSPIRE</h2>
                <p>Choose your role to continue</p>
              </div>

              <div className="role-list">
                {ROLES.map(role => (
                  <button
                    key={role.key}
                    className={`role-card ${role.colorClass}`}
                    onClick={() => handleRoleSelect(role.key)}
                  >
                    <div className="role-icon-wrap">
                      {role.icon}
                    </div>
                    <div className="role-card-text">
                      <span className="role-card-label">{role.label}</span>
                      <span className="role-card-desc">{role.desc}</span>
                    </div>
                    <svg className="role-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* ── Step 2: Credential form ── */
            <>
              <div className="login-card-header">
                <button className="back-btn" onClick={handleBack} aria-label="Back to role selection">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                  Back
                </button>

                <div className={`active-role-pill ${activeRole.colorClass}`}>
                  <div className="active-role-icon">{activeRole.icon}</div>
                  <span>{activeRole.label}</span>
                </div>

                <h2>Welcome back</h2>
                <p>Enter your credentials to access the portal</p>
              </div>

              <form className="login-form" onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                  <label htmlFor="userId">User ID</label>
                  <input
                    id="userId"
                    type="text"
                    placeholder="e.g. 62300"
                    value={userId}
                    onChange={e => setUserId(e.target.value)}
                    autoComplete="username"
                    autoFocus
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="password">Password</label>
                  <div className="password-wrap">
                    <input
                      id="password"
                      type={showPass ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      className="pass-toggle"
                      onClick={() => setShowPass(p => !p)}
                      aria-label={showPass ? 'Hide password' : 'Show password'}
                    >
                      {showPass ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
                          <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
                          <line x1="1" y1="1" x2="23" y2="23"/>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="login-error" role="alert">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    {error}
                  </div>
                )}

                <div className="form-actions">
  <a href="#" className="forgot-link">
    Forgot password?
  </a>

  <div className="login-action-group">
    <button
      type="button"
      className="register-btn"
      onClick={() => setShowRegister(true)}
    >
      Register
    </button>

    <button
      type="submit"
      className={`login-submit-btn ${activeRole.colorClass} ${loading ? 'loading' : ''}`}
      disabled={loading}
    >
      {loading ? (
        <span className="spinner" aria-label="Signing in…" />
      ) : (
        <>Sign in as {activeRole.short}</>
      )}
    </button>
  </div>
</div>
              </form>
            </>
          )}
        </div>

        <div className="login-right-footer">
          For access issues contact CSRC at <strong>csrc@annauniv.edu</strong>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;