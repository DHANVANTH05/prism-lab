import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Sun, Moon, Phone, Mail, MapPin } from "lucide-react";

/* ── Actual IIT Guwahati logo using the uploaded image ── */
function IITGLogo({ size = 52 }) {
  return (
    <img
      src="/images/iitg-logo.jpg"
      alt="IIT Guwahati"
      style={{ width: size, height: size, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
      onError={e => {
        /* fallback SVG if image not found */
        e.target.style.display = "none";
        e.target.nextSibling && (e.target.nextSibling.style.display = "flex");
      }}
    />
  );
}

/* ── PRISM Lab logo using the uploaded image ── */
function PRISMLabLogo({ height = 40 }) {
  return (
    <img
      src="/images/prism-logo.jpg"
      alt="PRISM Lab"
      style={{ height, objectFit: "contain", flexShrink: 0 }}
      onError={e => {
        e.target.style.display = "none";
        e.target.nextSibling && (e.target.nextSibling.style.display = "flex");
      }}
    />
  );
}

/* Fallback triangle if prism-logo.png missing */
function PRISMTriangle({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44">
      <polygon points="22,4 40,38 4,38" fill="none" stroke="var(--text-primary)" strokeWidth="2"/>
      <line x1="22" y1="4" x2="22" y2="38" stroke="var(--text-primary)" strokeWidth="1.5" opacity="0.5"/>
      <line x1="13" y1="21" x2="31" y2="21" stroke="var(--text-primary)" strokeWidth="1.5" opacity="0.5"/>
    </svg>
  );
}

export function Navbar({ dark, setDark }) {
  const [peopleOpen, setPeopleOpen] = useState(false);
  const closeTimer = useRef(null);
  const loc = useLocation();

  const isActive = (path) => loc.pathname === path;
  const isPeopleActive = ["/people/lab-director","/people/students","/people/alumni"].includes(loc.pathname);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setPeopleOpen(true);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setPeopleOpen(false), 200);
  };

  const linkStyle = (path) => ({
    fontSize: 15,
    fontWeight: isActive(path) ? 600 : 400,
    color: isActive(path) ? "var(--text-primary)" : "var(--text-secondary)",
    textDecoration: "none",
    transition: "color 0.2s",
    whiteSpace: "nowrap",
  });

  return (
    <nav style={{
      background: "var(--navbar-bg)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--border-light)",
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
    }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px", height: 96, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, flexShrink: 0 }}>
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <PRISMLabLogo height={72} />
          </Link>
          <div style={{ width: 1, height: 56, background: "var(--border)" }} />
          <a href="https://www.iitg.ac.in" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center" }}>
            <IITGLogo size={72} />
          </a>
        </div>

        {/* ── Nav links ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <Link to="/" style={linkStyle("/")}>Home</Link>

          {/* People dropdown — fixed with proper hover zone */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setPeopleOpen(o => !o)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", gap: 5,
                fontSize: 15, fontWeight: isPeopleActive ? 600 : 400,
                color: isPeopleActive ? "var(--text-primary)" : "var(--text-secondary)",
                fontFamily: "Inter, sans-serif", padding: "8px 0",
              }}
            >
              People <ChevronDown size={14} style={{ transform: peopleOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>

            {/* Invisible bridge so mouse can travel to dropdown */}
            <div style={{ position: "absolute", top: "100%", left: 0, right: 0, height: 8, background: "transparent" }} />

            {peopleOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 8px)", left: 0,
                background: dark ? "#0d1a30" : "#ffffff",
                border: "1px solid var(--border)", borderRadius: 10,
                padding: "8px 0", minWidth: 170, zIndex: 500,
                boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
              }}>
                {[
                  { label: "Lab Director", path: "/people/lab-director" },
                  { label: "Students", path: "/people/students" },
                  { label: "Alumni", path: "/people/alumni" },
                ].map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setPeopleOpen(false)}
                    style={{
                      display: "block", padding: "10px 20px", fontSize: 14,
                      color: isActive(item.path) ? "var(--accent)" : "var(--text-secondary)",
                      textDecoration: "none", fontWeight: isActive(item.path) ? 600 : 400,
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { label: "Infrastructure", path: "/infrastructure" },
            { label: "Research", path: "/research" },
            { label: "Publications", path: "/publications" },
            { label: "News", path: "/news" },
            { label: "Gallery", path: "/gallery" },
          ].map(l => <Link key={l.path} to={l.path} style={linkStyle(l.path)}>{l.label}</Link>)}

          <button onClick={() => setDark(!dark)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-secondary)", display: "flex", alignItems: "center", padding: 6 }}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "var(--footer-bg)", borderTop: "1px solid var(--border-light)", padding: "60px 32px 28px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 52, marginBottom: 44 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <img
                src="/images/prism-logo.jpg"
                alt="PRISM Lab"
                style={{ height: 200, objectFit: "contain" }}
              />
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>Contact</h4>
            <div style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.9 }}>
              <div style={{ fontWeight: 600, color: "var(--text-secondary)" }}>Dr. Satyajit Das</div>
              <div>Assistant Professor</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6 }}><Phone size={12} /> +91 361 2583271</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}><Mail size={12} /> prism@iitg.ac.in</div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 6, marginTop: 6 }}><MapPin size={15} style={{ marginTop: 4, flexShrink: 0 }} /> Dept. of CSE, IIT Guwahati, Assam – 781039</div>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>Quick Links</h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px" }}>
              {[
                { label: "Home", path: "/" }, { label: "Research", path: "/research" },
                { label: "Students", path: "/people/students" }, { label: "Publications", path: "/publications" },
                { label: "Alumni", path: "/people/alumni" }, { label: "News", path: "/news" },
                { label: "Infrastructure", path: "/infrastructure" }, { label: "Gallery", path: "/gallery" },
              ].map(l => (
                <Link key={l.path} to={l.path} style={{ fontSize: 15, color: "var(--text-muted)", textDecoration: "none" }}>{l.label}</Link>
              ))}
              <a href="https://www.iitg.ac.in/cse/" target="_blank" rel="noreferrer" style={{ fontSize: 13, color: "var(--text-muted)", textDecoration: "none", gridColumn: "1/-1" }}>↗ IIT Guwahati CSE Department</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: 20, textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "var(--text-faint)" }}>© {new Date().getFullYear()} PRISM Lab, IIT Guwahati. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({ label, title, subtitle }) {
  return (
    <div style={{ background: "linear-gradient(180deg,#0d1a35 0%,var(--bg-primary) 100%)", padding: "106px 32px 52px", textAlign: "center" }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
        <span style={{ width: 32, height: 1, background: "var(--accent)", display: "block" }} />
        {label}
        <span style={{ width: 32, height: 1, background: "var(--accent)", display: "block" }} />
      </div>
      <h1 style={{ fontSize: 48, fontWeight: 700, color: "var(--text-primary)", marginBottom: subtitle ? 16 : 0 }}>{title}</h1>
      {subtitle && <p style={{ fontSize: 16, color: "var(--text-secondary)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>{subtitle}</p>}
    </div>
  );
}
