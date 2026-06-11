import React, { useState } from "react";
import "./DSTStudentsLayout.css";
import Profile from "./Profile";
import FundingSanctions from "./FundingSanctions";
import FellowshipClaims from "./FellowshipClaims/FellowshipClaims";
import HRAClaims from "./HRAClaims/HRAClaims";
import ArrearClaims from "./ArrearClaims/ArrearClaims";
import Beneficiaries from "./Beneficiaries";
import ZBASlip from "./ZBASlip";

const navItems = [
  { key: "profile", label: "Profile" },
  { key: "funding-sanctions", label: "Funding Sanctions" },
  { key: "fellowship-claims", label: "Fellowship Claims" },
  { key: "hra-claims", label: "HRA Claims" },
  { key: "arrear-claims", label: "Arrear Claims" },
  { key: "beneficiaries", label: "Beneficiaries" },
  { key: "zba-slip", label: "ZBA Slip" },
];

const pageMap = {
  profile: <Profile />,
  "funding-sanctions": <FundingSanctions />,
  "fellowship-claims": <FellowshipClaims />,
  "hra-claims": <HRAClaims />,
  "arrear-claims": <ArrearClaims />,
  beneficiaries: <Beneficiaries />,
  "zba-slip": <ZBASlip />,
};

export default function DSTStudentsLayout() {
  const [activePage, setActivePage] = useState("profile");

  return (
    <div className="dst-students-layout">
      {/* Sidebar */}
      <aside className="dst-sidebar">
        <div className="dst-sidebar-header">
          <span className="dst-sidebar-logo">DST INSPIRE</span>
          <span className="dst-sidebar-sub">Student Portal</span>
        </div>
        <nav className="dst-sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={`dst-nav-item ${activePage === item.key ? "active" : ""}`}
              onClick={() => setActivePage(item.key)}
            >
              <span className="dst-nav-dot" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dst-main-content">
        {pageMap[activePage]}
      </main>
    </div>
  );
}