import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  darkMode?: boolean;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = "md",
  darkMode = false,
  showSubtitle = true,
}) => {
  return (
    <Link to="/" className="logo-container" aria-label="GE Trading PLC Home">
      {/* 
        Specified Logo Requirement:
        "the logo to be GE trading plc with and the logo is GE the G is black and the E is orange"
      */}
      <div className={`logo-badge size-${size} ${darkMode ? "dark-mode" : ""}`}>
        <span
          className="letter-g"
          style={{ color: darkMode ? "#ffffff" : "#111827" }}
        >
          G
        </span>
        <span className="letter-e" style={{ color: "#ff6b00" }}>
          E
        </span>
      </div>

      <div className="logo-text-group">
        <span
          className="logo-company-name"
          style={{
            color: darkMode ? "#ffffff" : "#111827",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}
        >
          GE TRADING
          <span
            className="plc-tag"
            style={{ color: "#ff6b00", marginLeft: "4px" }}
          >
            PLC
          </span>
        </span>
        {showSubtitle && (
          <span
            className="logo-tagline"
            style={{
              color: darkMode ? "#94a3b8" : "#78716c",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              fontWeight: 600,
            }}
          >
            FURNITURE & LIVING
          </span>
        )}
      </div>
    </Link>
  );
};

export default Logo;
