import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Shield, Lock, Cpu, Globe, RefreshCw, Network, ArrowRight, Phone, Mail, Zap, ChevronRight, User } from "lucide-react";
import { director, phd, projectStaff, sciAdmin, mtech, interns, alumni, researchAreas, fundedProjects, publications, infrastructure, newsItems } from "./data";
import { PageHeader, Footer } from "./Layout";

const iconMap = {
  network: <Network size={18} color="var(--accent)"/>,
  shield: <Shield size={18} color="var(--accent)"/>,
  cpu: <Cpu size={18} color="var(--accent)"/>,
  zap: <Zap size={18} color="var(--accent)"/>,
  lock: <Lock size={18} color="var(--accent)"/>,
  refresh: <RefreshCw size={18} color="var(--accent)"/>,
};

/* ─── Person Card — LARGER ─── */
function PersonCard({ person }) {
  const isPlaceholder = person.placeholder || !person.name;
  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
      {/* Photo box — taller */}
      <div style={{ width: "100%", aspectRatio: "3/3.5", background: "var(--bg-secondary)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {!isPlaceholder && person.photo ? (
          <img src={person.photo} alt={person.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} onError={e => { e.target.style.display = "none"; }} />
        ) : (
          <User size={52} color="var(--text-faint)" />
        )}
      </div>
      {/* Info */}
      <div style={{ padding: "16px 16px 14px" }}>
        {isPlaceholder ? (
          <div style={{ fontSize: 13, color: "var(--text-faint)", fontStyle: "italic" }}>To be added</div>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3 }}>{person.name}</span>
              {person.batch && <span style={{ fontSize: 10, background: "rgba(74,222,128,0.15)", color: "var(--accent)", padding: "2px 7px", borderRadius: 5, fontWeight: 600, flexShrink: 0, marginLeft: 6, whiteSpace: "nowrap" }}>{person.batch}</span>}
            </div>
            {person.role && !person.batch && <div style={{ fontSize: 12, color: "var(--accent)", fontWeight: 600, marginBottom: 4 }}>{person.role}</div>}
            {person.affiliation && <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 3, lineHeight: 1.45 }}>{person.affiliation}</p>}
            {person.prev && <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 3, fontStyle: "italic", lineHeight: 1.4 }}>{person.prev}</p>}
            {person.topic && <p style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 5, lineHeight: 1.4 }}>{person.topic}</p>}
            {person.homeInstitution && <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }}>🏫 {person.homeInstitution}</p>}
            {person.period && <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }}>📅 {person.period}</p>}
            {person.email
              ? <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 4 }}><Mail size={11} color="var(--text-faint)" /><span style={{ fontSize: 11, color: "var(--text-muted)", wordBreak: "break-all" }}>{person.email}</span></div>
              : <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 4 }}><Mail size={11} color="var(--text-faint)" /><span style={{ fontSize: 11, color: "var(--text-faint)", fontStyle: "italic" }}>—</span></div>
            }
          </>
        )}
      </div>
    </div>
  );
}

/* ─── People Section Group ─── */
function PeopleGroup({ title, count, children }) {
  return (
    <div style={{ marginBottom: 52 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22, paddingBottom: 12, borderBottom: "1px solid var(--border-light)" }}>
        <ChevronRight size={18} color="var(--accent)" />
        <span style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)" }}>{title}</span>
        {count !== undefined && <span style={{ fontSize: 12, background: "rgba(74,222,128,0.12)", color: "var(--accent)", padding: "2px 10px", borderRadius: 12, fontWeight: 600 }}>{count}</span>}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
        {children}
      </div>
    </div>
  );
}

/* ─── Tag ─── */
function Tag({ children, accent }) {
  return (
    <span style={{ fontSize: 12, padding: "3px 10px", border: `1px solid ${accent ? "rgba(74,222,128,0.25)" : "var(--border)"}`, borderRadius: 12, color: accent ? "var(--accent)" : "var(--tag-color)", background: accent ? "rgba(74,222,128,0.08)" : "var(--tag-bg)" }}>
      {children}
    </span>
  );
}


/* ─── Animated Count Stat ─── */
function CountStat({ end, suffix, label, index }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const delay = index * 150;
          setTimeout(() => {
            const timer = setInterval(() => {
              current += increment;
              if (current >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, index]);

  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        padding: "24px 16px",
        borderRight: index === 3 ? "none" : "1px solid var(--border-light)",
      }}
    >
      <div style={{
        fontSize: 60,
        fontWeight: 800,
        color: "var(--text-primary)",
        lineHeight: 1,
        fontVariantNumeric: "tabular-nums",
      }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: 15, color: "var(--text-muted)", marginTop: 12, letterSpacing: "0.02em" }}>
        {label}
      </div>
    </div>
  );
}

/* ════════════════════ HOME PAGE ════════════════════ */
export function HomePage() {
  return (
    <>
      {/* ── Hero with video background ── */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 72, position: "relative", overflow: "hidden", background: "#050d1a" }}>

        {/* VIDEO BACKGROUND — place your .mp4 file as public/hero-bg.mp4 */}
        <video
          autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.55, zIndex: 0 }}
          onError={e => e.target.style.display = "none"}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay gradient on top of video */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,13,26,0.3) 0%, rgba(5,13,26,0.6) 100%)", zIndex: 1 }} />

        {/* Fallback circuit grid (shows when no video) */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(59,130,246,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.07) 1px,transparent 1px)", backgroundSize: "60px 60px", zIndex: 0 }} />

        {/* Circuit dots */}
        {[{top:"18%",left:"3%"},{top:"28%",left:"12%"},{top:"55%",left:"4%"},{top:"22%",right:"4%"},{top:"38%",right:"3%"},{top:"62%",right:"8%"},{top:"72%",left:"18%"},{top:"70%",right:"5%"}].map((p,i) => (
          <div key={i} style={{ position:"absolute", width:7, height:7, borderRadius:"50%", background:"rgba(100,160,255,0.6)", boxShadow:"0 0 10px rgba(100,160,255,0.8)", zIndex: 2, ...p }} />
        ))}

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
          {/* IIT badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(74,222,128,0.4)", borderRadius: 50, padding: "6px 20px", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: "#4ade80", textTransform: "uppercase", marginBottom: 40 }}>
            IIT Guwahati · Department of CSE
          </div>

          {/* PRISM — full page width */}
          <h1 style={{
            fontSize: "clamp(250px, 30vw, 450px)",
            fontWeight: 900,
            color: "white",
            lineHeight: 0.85,
            letterSpacing: "-0.02em",
            textAlign: "center",
            marginBottom: 48,
            width: "100%",
            padding: "0 16px",
          }}>
            PRISM
          </h1>

          <p style={{ fontSize: 24, color: "rgba(255,255,255,0.85)", marginBottom: 12, textAlign: "center", fontWeight: 400 }}>
            Power-aware Resilient Intelligent Secure Machines
          </p>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginBottom: 52, textAlign: "center", maxWidth: 500, lineHeight: 1.7 }}>
            Designing intelligent, secure, and energy-aware systems for the next generation of computing
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <Link to="/research" style={{ background: "#4ade80", color: "#0a1628", fontWeight: 700, fontSize: 16, padding: "14px 28px", borderRadius: 50, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              Explore Research <ArrowRight size={18} />
            </Link>
            <Link to="/publications" style={{ background: "transparent", color: "white", fontWeight: 500, fontSize: 16, padding: "14px 28px", borderRadius: 50, border: "1px solid rgba(255,255,255,0.3)", textDecoration: "none" }}>
              View Publications
            </Link>
          </div>
        </div>
      </section>

      {/* Stats — full width, animated */}
      <div style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)", padding: "48px 0" }}>
        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
          {[
            { end: 20, suffix: "+", label: "Publications" },
            { end: 5,  suffix: "+", label: "Researchers" },
            { end: 3,  suffix: "",  label: "Active Projects" },
            { end: 2,  suffix: "",  label: "Patent Filed" },
          ].map((s, i) => (
            <CountStat key={s.label} end={s.end} suffix={s.suffix} label={s.label} index={i} />
          ))}
        </div>
      </div>

      {/* About + Research Areas */}
      <section style={{ background: "var(--bg-primary)", padding: "88px 32px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: "var(--accent)", display: "block" }} /> About the Lab
            </div>
            <h2 style={{ fontSize: 38, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.15, marginBottom: 28 }}>Advancing Secure Systems Research</h2>
            {[
              "PRISM Lab focuses on the design of next-generation computing systems that are energy-efficient, secure, resilient, and intelligent by construction. We conduct research at the intersection of computer architecture, embedded systems, reconfigurable computing, AI acceleration, edge intelligence, hardware security, and cyber-physical systems.",
              "Our work aims to develop computing platforms that efficiently support modern AI workloads while ensuring robustness against failures, attacks, and real-world deployment constraints. We explore innovations across the full system stack from hardware architecture and compiler support to secure deployment, intelligent sensing, and trustworthy edge AI.",
              "The broader vision of PRISM Lab is to enable sustainable, dependable, and secure intelligent machines for applications in healthcare, agriculture, autonomous systems, IoT, cybersecurity, and next-generation AI infrastructure."
            ].map((p, i) => <p key={i} style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.85, textAlign: "justify", marginBottom: 18 }}>{p}</p>)}
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 12, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 22 }}>
              <span style={{ width: 28, height: 1, background: "var(--accent)", display: "block" }} /> Our Research Areas <span style={{ width: 28, height: 1, background: "var(--accent)", display: "block" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {researchAreas.map(a => (
                <div key={a.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "18px 20px", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(74,222,128,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{iconMap[a.icon]}</div>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>{a.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Director */}
      <section style={{ background: "var(--section-alt)", padding: "88px 32px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 12, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>
            <span style={{ width: 28, height: 1, background: "var(--accent)", display: "block" }} /> Principal Investigator <span style={{ width: 28, height: 1, background: "var(--accent)", display: "block" }} />
          </div>
          <h2 style={{ fontSize: 44, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", marginBottom: 52 }}>Lab Director</h2>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 18, padding: "44px 52px", display: "flex", gap: 44, maxWidth: 960, margin: "0 auto" }}>
            <div style={{ flexShrink: 0 }}>
              <div style={{ width: 160, height: 190, borderRadius: 14, overflow: "hidden", background: "var(--bg-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {director.photo ? <img src={director.photo} alt={director.name} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top" }} /> : <User size={60} color="var(--text-faint)" />}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: 26, fontWeight: 700, color: "var(--text-primary)", marginBottom: 5 }}>{director.name}</h3>
              <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 4 }}>{director.role}</p>
              <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>{director.dept}</p>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: 20, textAlign: "justify" }}>{director.bio}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
                {director.tags.map(t => <Tag key={t}>{t}</Tag>)}
              </div>
              <div style={{ display: "flex", gap: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}><Phone size={14} color="#ef4444" /><span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{director.phone}</span></div>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}><Mail size={14} color="var(--text-muted)" /><span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{director.email}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News preview */}
      <section style={{ background: "var(--bg-primary)", padding: "72px 32px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Current Updates</div>
              <h2 style={{ fontSize: 30, fontWeight: 700, color: "var(--text-primary)" }}>News &amp; Announcements</h2>
            </div>
            <Link to="/news" style={{ fontSize: 14, color: "var(--text-muted)", border: "1px solid var(--border)", borderRadius: 7, padding: "7px 15px", textDecoration: "none" }}>All News →</Link>
          </div>
          {newsItems[0].youtube && (
            <div style={{ marginBottom: 18, background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--border-light)", display: "flex", alignItems: "center", gap: 10 }}>
                <Cpu size={13} color="var(--text-muted)" />
                <span style={{ fontSize: 13, color: "var(--text-muted)" }}>NPTEL Course Review – Advanced Technical Learning Initiative by IIT Guwahati and PRISM Lab</span>
              </div>
              <div style={{ position: "relative", paddingBottom: "38%" }}>
                <iframe src={newsItems[0].youtube} title="PRISM Lab" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} allowFullScreen />
              </div>
            </div>
          )}
          {newsItems.slice(1, 3).map((item, i) => (
            <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "20px 24px", display: "flex", gap: 20, marginBottom: 12 }}>
              <div style={{ flexShrink: 0, minWidth: 32 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1 }}>{item.date.split(" ")[0]}</div>
                <div style={{ fontSize: 11, color: "var(--text-faint)" }}>{item.date.split(" ")[1]}</div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.type}</div>
                <p style={{ fontSize: 15, fontWeight: 500, color: "var(--text-primary)", marginBottom: 10, lineHeight: 1.5 }}>{item.title}</p>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {item.tags.map(t => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join */}
      <div style={{ background: "linear-gradient(135deg,#0d1a35 0%,#0a1628 100%)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 32px", textAlign: "center" }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: "white", marginBottom: 14 }}>Join the PRISM Family</h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginBottom: 36, maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.7 }}>
          We welcome motivated students from CSE, ECE, and EEE backgrounds. Openings available for B.Tech projects, M.Tech theses, and PhD positions.
        </p>
      </div>

      <Footer />
    </>
  );
}

/* ════════════════════ LAB DIRECTOR PAGE ════════════════════ */
export function LabDirectorPage() {
  return (
    <>
      <PageHeader label="Principal Investigator" title="Lab Director" />
      <section style={{ background: "var(--bg-primary)", padding: "68px 32px", minHeight: "60vh" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 18, padding: "48px 52px", display: "flex", gap: 44 }}>
            <div style={{ flexShrink: 0 }}>
              <div style={{ width: 170, height: 200, borderRadius: 14, overflow: "hidden", background: "var(--bg-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {director.photo ? <img src={director.photo} alt={director.name} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top" }} /> : <User size={64} color="var(--text-faint)" />}
              </div>
              <p style={{ fontSize: 11, color: "var(--text-faint)", textAlign: "center", marginTop: 8, fontStyle: "italic" }}>Photo coming soon</p>
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: 30, fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}>{director.name}</h2>
              <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 5 }}>{director.role}</p>
              <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 22 }}>{director.dept}</p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: 24, textAlign: "justify" }}>{director.bio}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginBottom: 24 }}>
                {director.tags.map(t => <Tag key={t}>{t}</Tag>)}
              </div>
              <div style={{ display: "flex", gap: 32 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Phone size={15} color="#ef4444" /><span style={{ fontSize: 15, color: "var(--text-secondary)" }}>{director.phone}</span></div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Mail size={15} color="var(--text-muted)" /><span style={{ fontSize: 15, color: "var(--text-secondary)" }}>{director.email}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

/* ════════════════════ STUDENTS PAGE ════════════════════ */
export function StudentsPage() {
  return (
    <>
      <PageHeader label="People" title="Current Students" subtitle="Our talented team of researchers driving innovation in cybersecurity and secure systems design." />
      <section style={{ background: "var(--bg-primary)", padding: "64px 32px", minHeight: "60vh" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <PeopleGroup title="PhD Scholars" count={phd.length}>
            {phd.map(p => <PersonCard key={p.name} person={p} />)}
          </PeopleGroup>
          <PeopleGroup title="Project Staff" count={projectStaff.filter(p => !p.placeholder).length}>
            {projectStaff.map((p, i) => <PersonCard key={p.name || i} person={p} />)}
          </PeopleGroup>
          <PeopleGroup title="Scientific Administrative Assistants" count={sciAdmin.filter(p => !p.placeholder).length}>
            {sciAdmin.map((p, i) => <PersonCard key={i} person={p} />)}
          </PeopleGroup>
          <PeopleGroup title="M.Tech Students" count={mtech.length}>
            {mtech.map(p => <PersonCard key={p.name} person={p} />)}
          </PeopleGroup>
          <PeopleGroup title="Interns" count={interns.length}>
            {interns.map(p => <PersonCard key={p.name} person={p} />)}
          </PeopleGroup>
        </div>
      </section>
      <Footer />
    </>
  );
}

/* ════════════════════ ALUMNI PAGE ════════════════════ */
export function AlumniPage() {
  return (
    <>
      <PageHeader label="Alumni" title="Alumni Network" subtitle="PRISM Lab alumni information will be updated as students graduate." />
      <section style={{ background: "var(--bg-primary)", padding: "64px 32px", minHeight: "60vh" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
            {alumni.map((p, i) => <PersonCard key={i} person={p} />)}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

/* ════════════════════ INFRASTRUCTURE PAGE ════════════════════ */
export function InfrastructurePage() {
  return (
    <>
      <PageHeader label="Facilities" title="Infrastructure" subtitle="State-of-the-art research infrastructure enabling cutting-edge work in hardware security, cryptography, and cybersecurity." />
      <section style={{ background: "var(--bg-primary)", padding: "64px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 64 }}>
            {infrastructure.map(item => (
              <div key={item.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14, padding: "26px 28px" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>{item.category}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 16, textAlign: "justify" }}>{item.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  {item.tools.map(t => (
                    <li key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-muted)" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />{t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", padding: "48px 0" }}>
            <h2 style={{ fontSize: 30, fontWeight: 700, color: "var(--text-primary)", marginBottom: 14 }}>Access &amp; Collaboration</h2>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", marginBottom: 28, maxWidth: 520, margin: "0 auto 28px", lineHeight: 1.7 }}>PRISM Lab infrastructure is available to all lab members and affiliated researchers. For equipment access or collaborative research opportunities, please contact the lab.</p>
            <button style={{ background: "var(--accent)", color: "#0a1628", fontWeight: 700, fontSize: 15, padding: "13px 28px", borderRadius: 50, border: "none", cursor: "pointer" }}>Request Access</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

/* ════════════════════ RESEARCH PAGE ════════════════════ */
export function ResearchPage() {
  return (
    <>
      <PageHeader label="Research & Innovation" title="Research" subtitle="Our research spans the full spectrum of secure systems — from silicon-level hardware to application-layer protocols." />
      <section style={{ background: "var(--bg-primary)", padding: "64px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 64 }}>
            {researchAreas.map(area => (
              <div key={area.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14, padding: "26px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(74,222,128,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>{iconMap[area.icon]}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>{area.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 16, textAlign: "justify" }}>{area.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {area.tags.map(t => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "var(--text-primary)", marginBottom: 10 }}>Funded Projects &amp; Collaborations</h2>
            <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 36 }}>Our research is supported by prestigious national and international funding agencies and industry partners.</p>
          </div>
          <div style={{ maxWidth: 620, margin: "0 auto" }}>
            {fundedProjects.map(p => (
              <div key={p.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14, padding: "26px 28px" }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 10 }}>{p.funder}</div>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 10, lineHeight: 1.7 }}>{p.title}</p>
                <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>Project No: {p.projectNo}</p>
                <span style={{ background: "var(--accent)", color: "#0a1628", fontSize: 13, fontWeight: 700, padding: "5px 14px", borderRadius: 20 }}>{p.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

/* ════════════════════ PUBLICATIONS PAGE ════════════════════ */
export function PublicationsPage() {
  const [filter, setFilter] = useState("All Publications");
  const filters = ["All Publications","Journal Publications","Conference Publications","Workshop Publications"];
  const filtered = filter === "All Publications" ? publications : publications.filter(p => {
    if (filter === "Journal Publications") return p.type === "Journal";
    if (filter === "Conference Publications") return p.type === "Conference";
    return p.type === "Workshop";
  });
  const years = [...new Set(filtered.map(p => p.year))].sort((a,b) => b-a);

  return (
    <>
      <PageHeader label="Research Output" title="Publications" subtitle="Peer-reviewed papers published in top venues in security, cryptography, and systems research." />
      <section style={{ background: "var(--bg-primary)", padding: "48px 32px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 10, marginBottom: 40, flexWrap: "wrap", justifyContent: "center" }}>
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{ fontSize: 13, fontWeight: 500, padding: "8px 18px", borderRadius: 22, border: "none", cursor: "pointer", background: filter === f ? "var(--accent)" : "var(--bg-card)", color: filter === f ? "#0a1628" : "var(--text-secondary)", fontFamily: "Inter, sans-serif", border: "1px solid var(--border)" }}>{f}</button>
            ))}
          </div>
          {years.map(year => {
            const pubs = filtered.filter(p => p.year === year);
            return (
              <div key={year} style={{ marginBottom: 44 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
                  <h3 style={{ fontSize: 26, fontWeight: 700, color: "var(--text-primary)" }}>{year}</h3>
                  <span style={{ fontSize: 13, color: "var(--text-faint)" }}>{pubs.length} paper{pubs.length !== 1 ? "s" : ""}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {pubs.map((pub, i) => (
                    <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "20px 22px", display: "flex", gap: 18 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--bg-secondary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        <span style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 700 }}>{pub.type === "Journal" ? "J" : "C"}</span>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 14, marginBottom: 5 }}>
                          <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.5 }}>{pub.title}</h4>
                          <Tag accent={pub.type === "Journal"}>{pub.type}</Tag>
                        </div>
                        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 5 }}>{pub.authors}</p>
                        <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5, marginBottom: pub.doi ? 9 : 0 }}>{pub.venue}</p>
                        {pub.doi && <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: "var(--accent)", textDecoration: "none" }}>↗ DOI: {pub.doi}</a>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

/* ════════════════════ NEWS PAGE ════════════════════ */
export function NewsPage() {
  return (
    <>
      <PageHeader label="Latest Updates" title="News & Events" subtitle="Stay updated on our latest research milestones, awards, events, and lab announcements." />
      <section style={{ background: "var(--bg-primary)", padding: "64px 32px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
          {newsItems.map((item, i) => (
            <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
              <div style={{ padding: "24px 28px" }}>
                <div style={{ fontSize: 13, color: "var(--text-faint)", marginBottom: 12 }}>📅 {item.date}</div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12, lineHeight: 1.5 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 16 }}>{item.desc}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {item.tags.map(t => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
              {item.youtube && (
                <div style={{ position: "relative", paddingBottom: "42%", background: "#000" }}>
                  <iframe src={item.youtube} title={item.title} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} allowFullScreen />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

/* ════════════════════ GALLERY PAGE ════════════════════ */
export function GalleryPage() {
  return (
    <>
      <PageHeader label="Gallery" title="Life at PRISM Lab" subtitle="Moments from our research, events, and team activities." />
      <section style={{ background: "var(--bg-primary)", padding: "64px 32px", minHeight: "50vh" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
            {["IIT Guwahati Campus","Team Meet","Academic Visit","Lab Setup","Conference","Research Work"].map(label => (
              <div key={label} style={{ aspectRatio: "16/10", borderRadius: 12, background: "var(--bg-card)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 14, color: "var(--text-faint)" }}>{label}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 14, color: "var(--text-faint)", marginTop: 28 }}>No images in this category yet.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
