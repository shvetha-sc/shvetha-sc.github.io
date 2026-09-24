import React, { useState } from "react";

const SANS = "'Space Grotesk', ui-sans-serif, system-ui, sans-serif";

const C = {
  ink: "#F2F7F6",
  body: "#C4D3D4",
  mist: "#9FB6B9",
  faint: "#728C90",
  glowCyan: "#57E6D9",
  glowWarm: "#FFB27A",
  glowViolet: "#B78CF0",
};

const SECTIONS = [
  { id: "about", label: "about" },
  { id: "work", label: "CV" },
  { id: "other", label: "Other" },
  { id: "contact", label: "contact" },
];

const WL0 = 390, WL1 = 700;
const FRAUNHOFER = [
  { nm: 393.4, s: 3, id: "Ca II K" },
  { nm: 396.8, s: 3, id: "Ca II H" },
  { nm: 410.2, s: 1, id: "Hδ" },
  { nm: 430.8, s: 2, id: "G band" },
  { nm: 434.0, s: 1, id: "Hγ" },
  { nm: 486.1, s: 2, id: "Hβ" },
  { nm: 517.3, s: 3, id: "Mg b" },
  { nm: 527.0, s: 1, id: "Fe" },
  { nm: 589.3, s: 3, id: "Na D" },
  { nm: 656.3, s: 3, id: "Hα" },
  { nm: 686.7, s: 2, id: "O₂ telluric" },
];

export default function Portfolio() {
  const [active, setActive] = useState("about");

  return (
    <div style={{ position: "relative", minHeight: "100vh", color: C.ink, fontFamily: SANS, fontWeight: 400, overflow: "hidden", background: "linear-gradient(180deg,#101a2e 0%,#0b1420 55%,#070d15 100%)" }}>
      <style>{`
        @keyframes drift {
          0%   { transform: translate(0,0);                 opacity:.02 }
          50%  { transform: translate(var(--dx), var(--dy)); opacity:.07 }
          100% { transform: translate(0,0);                 opacity:.02 }
        }
        @keyframes glowfloat {
          0%   { transform: translate(0,0) }
          50%  { transform: translate(var(--fx), var(--fy)) }
          100% { transform: translate(0,0) }
        }
        @media (prefers-reduced-motion: reduce){ .mote,.glow{animation:none !important} }
        .mote{ position:absolute; border-radius:999px; filter:blur(.5px); will-change:transform,opacity; animation:drift var(--dur,11s) ease-in-out infinite; }
        .glow{ position:absolute; border-radius:50%; will-change:transform; animation:glowfloat var(--gdur,30s) ease-in-out infinite; }
        .navcol{ flex:1; background:transparent; border:none; cursor:pointer; padding:6px 0; font-family:${SANS}; font-size:16.5px; font-weight:500; letter-spacing:.3px; text-transform:capitalize; color:${C.faint}; transition:color .2s ease, transform .2s ease, text-shadow .2s ease; }
        .navcol:hover{ color:${C.ink}; text-shadow:0 0 10px ${C.glowCyan}77; }
        .navcol.on{ color:${C.ink}; font-weight:600; text-shadow:0 0 8px ${C.glowCyan}55; }
        .navcol:focus-visible{ outline:2px solid ${C.glowCyan}; outline-offset:3px; border-radius:6px; }
        @keyframes orbitspin { to { transform: rotate(360deg) } }
        .orbits{ display:flex; gap:56px; justify-content:center; padding-top:8px; }
        .orbit-col{ display:flex; flex-direction:column; align-items:center; gap:14px; font-size:15px; font-weight:600; color:${C.mist}; text-decoration:none; transition:color .2s ease; }
        .orbit-col:hover{ color:${C.ink}; }
        .orbit{ position:relative; width:84px; height:84px; }
        .orbit .ring{ position:absolute; inset:0; border-radius:50%; border:1px dashed rgba(183,156,240,0.4); }
        .orbit .ic{ position:absolute; inset:13px; border-radius:50%; border:1px solid rgba(143,178,182,0.25); display:flex; align-items:center; justify-content:center; transition:box-shadow .25s ease, border-color .25s ease; }
        .orbit .sat{ position:absolute; inset:0; }
        .orbit .sat b{ position:absolute; left:50%; top:-4px; margin-left:-4px; width:8px; height:8px; border-radius:50%; background:#F4D58A; box-shadow:0 0 6px 0 #F4D58A; }
        .orbit-col:hover .sat{ animation:orbitspin 2.4s linear infinite; }
        .orbit-col:hover .ic{ border-color:${C.glowViolet}; box-shadow:0 0 14px -4px ${C.glowViolet}; }
        .orbit-col:focus-visible{ outline:2px solid ${C.glowViolet}; outline-offset:4px; border-radius:10px; }
        .orbits-panel{ display:inline-block; border:1px solid rgba(143,178,182,0.18); border-radius:18px; padding:30px 48px; background:rgba(255,255,255,0.02); }
        .talkrow{ display:grid; grid-template-columns:62px 1fr auto; gap:14px 18px; align-items:baseline; }
        @media (max-width: 700px){
          .talkrow{ grid-template-columns:62px 1fr; gap:4px 14px; }
          .talkrow > span:last-child{ grid-column:2; white-space:normal !important; }
        }
        .photogrid{ display:grid; grid-template-columns:repeat(auto-fill,minmax(230px,1fr)); gap:22px; margin-top:20px; }
        .cvcols{ display:grid; grid-template-columns:1fr 1fr; gap:38px; }
        .cvcols .col2{ padding-left:38px; border-left:1px solid rgba(143,178,182,0.14); }
        @media (max-width: 900px){
          .cvcols{ grid-template-columns:1fr; gap:30px; }
          .cvcols .col2{ padding-left:0; padding-top:30px; border-left:none; border-top:1px solid rgba(143,178,182,0.14); }
        }
        @media (max-width: 560px){
          .wm-name{ font-size:13.5px !important; letter-spacing:1.5px !important; margin:0 4px !important; }
          .wm-rule{ width:20px !important; }
          .navcol{ font-size:15px; }
          .orbits{ gap:28px !important; }
          .orbits-panel{ padding:22px 20px !important; }
        }
      `}</style>

      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "fixed", inset: 0, backgroundImage: `linear-gradient(rgba(87,230,217,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(87,230,217,0.012) 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />
        <div className="glow" style={{ top: "-12%", left: "-14%", width: 360, height: 360, background: `radial-gradient(circle, ${C.glowViolet}06, transparent 68%)`, "--fx": "26px", "--fy": "18px", "--gdur": "34s" }} />
        <div className="glow" style={{ top: "34%", left: "-10%", width: 280, height: 280, background: `radial-gradient(circle, ${C.glowCyan}05, transparent 70%)`, "--fx": "20px", "--fy": "22px", "--gdur": "28s" }} />

        {[[14,22,C.glowCyan,3],[80,16,C.ink,2],[28,64,C.glowViolet,4],[86,70,C.glowCyan,3],[52,40,C.ink,2],[8,48,C.glowViolet,2],[64,28,C.glowWarm,3],[38,84,C.ink,3],[92,44,C.glowViolet,2],[20,90,C.glowWarm,2],[72,86,C.glowCyan,2],[46,12,C.ink,2],[58,58,C.glowWarm,2],[34,34,C.glowCyan,3]].map(([l,t,col,sz],i)=>{
          const dx = (i % 2 ? 1 : -1) * (10 + (i * 7) % 22);
          const dy = -(16 + (i * 11) % 34);
          const dur = 9 + (i * 13) % 12;
          return (
            <span key={i} className="mote" style={{ left:`${l}%`, top:`${t}%`, width:sz, height:sz, background:col, boxShadow:`0 0 ${sz*1.2}px 0 ${col}`, "--dx":`${dx}px`, "--dy":`${dy}px`, "--dur":`${dur}s`, animationDelay:`${i*0.9}s` }} />
          );
        })}

        <div style={{ position: "absolute", right: "-80px", bottom: "-100px", width: 500, height: 500, opacity: 0.02 }}>
          <svg width="500" height="500" viewBox="0 0 300 300">
            <g fill="#F4B678">
              <path d="M40 60 C43 74 49 80 63 83 C49 86 43 92 40 106 C37 92 31 86 17 83 C31 80 37 74 40 60Z" />
            </g>
            <g fill="#B79CF0">
              <path d="M255 40 C257 50 261 54 271 56 C261 58 257 62 255 72 C253 62 249 58 239 56 C249 54 253 50 255 40Z" />
            </g>
            <ellipse cx="150" cy="165" rx="120" ry="40" fill="none" stroke="#F5A05A" strokeWidth="12" opacity="0.85" transform="rotate(-16 150 165)" />
            <circle cx="150" cy="150" r="78" fill="#A78BDB" />
            <path d="M150 72 a78 78 0 0 1 0 156 a58 78 0 0 0 0 -156Z" fill="#8B6FC7" opacity="0.55" />
            <circle cx="120" cy="128" r="12" fill="#B79CF0" opacity="0.8" />
            <circle cx="168" cy="170" r="8" fill="#8B6FC7" opacity="0.7" />
            <circle cx="132" cy="182" r="6" fill="#8B6FC7" opacity="0.6" />
            <path d="M35 176 A120 40 -16 0 0 262 137" fill="none" stroke="#F4B678" strokeWidth="12" strokeLinecap="round" />
            <circle cx="248" cy="205" r="20" fill="#F4D58A" />
            <circle cx="256" cy="198" r="16" fill="#070d15" />
          </svg>
        </div>
      </div>

      <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto", padding: "0 24px 120px" }}>
        <header style={{ position: "sticky", top: 0, zIndex: 10, paddingTop: 26, background: "linear-gradient(180deg,#101a2e 78%,transparent)" }}>
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <Sparkle color={C.glowWarm} />
              <span className="wm-rule" style={{ height: 1, width: 72, background: "linear-gradient(90deg, transparent, rgba(143,178,182,0.38))" }} />
              <span className="wm-name" style={{ fontSize: 18, fontWeight: 600, letterSpacing: 3, color: C.ink, margin: "0 6px", whiteSpace: "nowrap" }}>SHVETHA CHYNOWETH</span>
              <span className="wm-rule" style={{ height: 1, width: 72, background: "linear-gradient(90deg, rgba(143,178,182,0.38), transparent)" }} />
              <Sparkle color={C.glowViolet} />
            </span>
          </div>
          <SpectrumNav active={active} setActive={setActive} />
        </header>

        <main style={{ paddingTop: 44 }}>
          {active === "about" && <Home />}
          {active === "work" && <Work />}
          {active === "other" && <Other />}
          {active === "contact" && <Contact />}
        </main>
      </div>

      <Vignette />
    </div>
  );
}

function Vignette() {
  return <div aria-hidden style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 25, background: "radial-gradient(115% 115% at 50% 45%, transparent 48%, rgba(4,8,14,0.75) 100%)" }} />;
}

function Sparkle({ color, size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0Z" />
    </svg>
  );
}

function SpectrumNav({ active, setActive }) {
  const BAND = 30;
  const n = SECTIONS.length;
  const [hover, setHover] = useState(null);
  return (
    <div>
      <div style={{ position: "relative", height: BAND, borderRadius: 4, overflow: "hidden",
        background: "linear-gradient(90deg,#6C7BFF,#57C7E6,#5FE6A8,#E9E271,#FFB27A,#F0776E)",
        boxShadow: `0 0 16px rgba(87,230,217,0.12)` }}>
        {FRAUNHOFER.map((f) => {
          const x = ((f.nm - WL0) / (WL1 - WL0)) * 100;
          return (
            <span key={f.id} title={`${f.id} · ${f.nm} nm`} style={{ position: "absolute", left: `${x}%`, transform: "translateX(-50%)", top: 0, bottom: 0, width: f.s, background: `rgba(4,14,18,${0.4 + f.s * 0.17})` }} />
          );
        })}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(7,18,22,0.10), rgba(7,18,22,0.35))" }} />
        {SECTIONS.map((s, i) => {
          const x = (i + 0.5) * (100 / n);
          const lit = s.id === active || s.id === hover;
          return (
            <span key={s.id} style={{ position: "absolute", left: `${x}%`, transform: "translateX(-50%)", top: -2, bottom: -2, width: lit ? 2 : 1,
              background: lit ? C.ink : "rgba(4,14,18,0.55)",
              boxShadow: lit ? `0 0 7px 1px ${C.glowCyan}, 0 0 3px ${C.ink}` : "none",
              transition: "width .2s ease, background .2s ease, box-shadow .2s ease" }} />
          );
        })}
      </div>
      <div style={{ display: "flex", marginTop: 12 }}>
        {SECTIONS.map((s) => {
          const on = s.id === active;
          return (
            <button key={s.id} className={`navcol${on ? " on" : ""}`}
              onClick={() => setActive(s.id)}
              onMouseEnter={() => setHover(s.id)} onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(s.id)} onBlur={() => setHover(null)}>
              {s.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Card({ children, roomy }) {
  return (
    <div style={{ position: "relative", overflow: "hidden", border: "1px solid rgba(143,178,182,0.16)", borderRadius: 16, background: "rgba(255,255,255,0.018)", padding: roomy ? "52px 48px" : "30px 32px" }}>
      <span style={{ position: "absolute", left: 0, top: roomy ? 40 : 26, bottom: roomy ? 40 : 26, width: 3, borderRadius: 3, background: C.glowCyan, boxShadow: `0 0 10px -1px ${C.glowCyan}` }} />
      {children}
    </div>
  );
}

function Home() {
  return (
    <section>
      <Card roomy>
        <div style={{ display: "flex", gap: 34, alignItems: "center", flexWrap: "wrap" }}>
        <img
          src="./avatar.jpg"
          alt="Shvetha Chynoweth"
          width="152"
          height="152"
          style={{ width: 152, height: 152, borderRadius: 16, objectFit: "cover", flex: "none", border: `1px solid ${C.glowCyan}3A`, boxShadow: `0 0 22px -6px ${C.glowCyan}66` }}
        />
        <div style={{ flex: "1 1 300px", minWidth: 0 }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.8, textTransform: "uppercase", color: C.mist, margin: "0 0 14px" }}>
          PhD researcher, astrophysics, Universität Göttingen{" "}
          <span style={{ color: C.faint }}>/ previously ML at Uber</span>
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: -0.7, lineHeight: 1.15, margin: "0 0 22px" }}>
          I like stars, planets and code.
        </h1>
        <p style={{ color: C.body, fontSize: 18, lineHeight: 1.75, margin: "0 0 18px", maxWidth: "64ch" }}>
          I build software and machine learning algorithms to understand how instrument
          systematics affect high-precision radial-velocity data and signal detection.
        </p>
        <p style={{ color: C.body, fontSize: 18, lineHeight: 1.75, margin: 0, maxWidth: "64ch" }}>
          Previously, I built production ML and data systems at Uber and Morningstar.
        </p>
        </div>
        </div>
      </Card>
    </section>
  );
}

function Entry({ item, first }) {
  return (
    <div style={{ paddingTop: first ? 0 : 26 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 9, marginBottom: 4, flexWrap: "wrap" }}>
        <span style={{ width: 8, height: 8, borderRadius: 999, background: item.glow, boxShadow: `0 0 7px 1px ${item.glow}`, flex: "none", alignSelf: "center" }} />
        <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: -0.3 }}>{item.name}</span>
        {item.org && (
          <span style={{ fontSize: 14.5, fontWeight: 600, color: `${item.glow}B3`, textShadow: `0 0 10px ${item.glow}2B` }}>
            <span style={{ color: C.faint }}>·</span> {item.org}
          </span>
        )}
      </div>
      {(item.where || item.dates) && (
        <div style={{ margin: "0 0 11px", paddingLeft: 18 }}>
          {item.where && item.where.map((w, i) => (
            <p key={w} style={{ fontSize: 13.5, color: i === 0 ? C.mist : C.faint, lineHeight: 1.5, margin: 0 }}>{w}</p>
          ))}
          {item.dates && (
            <p style={{ fontSize: 13, color: C.faint, letterSpacing: 0.3, lineHeight: 1.5, margin: "3px 0 0" }}>{item.dates}</p>
          )}
        </div>
      )}
      {item.lines.map((l) => (
        <p key={l} style={{ color: C.body, fontSize: 16, lineHeight: 1.65, margin: "0 0 8px", maxWidth: "92ch" }}>{l}</p>
      ))}
    </div>
  );
}

function Heading({ children }) {
  return (
    <h2 style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: 1.8, textTransform: "uppercase", color: C.mist, margin: "0 0 18px" }}>{children}</h2>
  );
}

function Work() {
  const research = [
    { glow: C.glowCyan, name: "CARMENES", org: "Universität Göttingen", where: ["PhD, Institut für Astrophysik und Geophysik"], dates: "Aug 2026 – present", lines: [
      "Developing machine learning methods to quantify instrument systematics in CARMENES radial velocity data.",
    ] },
    { glow: C.glowCyan, name: "EXPRES", org: "San Francisco State University", where: ["MS, Department of Physics and Astronomy"], dates: "Aug 2023 – Feb 2026", lines: [
      "Built an automated two-stage pipeline for identifying planetary candidate signals in EXPRES EPRV data, combining rule-based automation with machine learning.",
    ] },
    { glow: C.glowCyan, name: "ATLAS", org: "CERN", where: ["Graduate Student Researcher"], dates: "Jan 2024 – Dec 2024", lines: [
      "Built models for anomaly detection on Level-1 trigger data using evidential deep learning.",
    ] },
    { glow: C.glowCyan, name: "Object Detection", org: "University of Illinois Chicago", where: ["MS, Computer Science"], dates: "Feb 2016 – Mar 2017", lines: [
      "Deep learning for multiple object detection, benchmarked and optimized pretrained variants including SSD, YOLO, VGG16 and ResNet for real-time performance.",
    ] },
  ];
  const industry = [
    { glow: C.glowWarm, name: "Uber", where: ["Machine Learning Engineer, Uber Maps"], dates: "May 2021 – Dec 2022", lines: [
      "Trained and deployed BERT and two-tower recommendation and ranking models behind Uber Maps rider search, covering markets in the US and Brazil, carrying monitoring and on-call for them in production.",
      "Built models that supplemented the main search stack with additional signals, ran the experiments and introduced the metrics used to measure impact.",
      "Built and benchmarked the infrastructure to move model serving onto GPU-optimized Inference Server, a migration aimed at reducing strict inference latency and operational constraints.",
      "Migrated models off a legacy stack onto Michelangelo, Uber's central ML platform adding a regular retraining cadence for models.",
      "Partnered across org boundaries with the central compute, indexing and serving team worked through indexing approaches with them and set up workflows for the Maps team.",
      "Built utilities that ran model statistics automatically, surfacing issues earlier in the build cycle, and documented them for the wider team. Mentored two interns through ranking projects that both shipped, and documented work so that other groups could adopt it.",
    ] },
    { glow: C.glowWarm, name: "Morningstar", where: ["Senior Software Engineer"], dates: "Jun 2017 – May 2021", lines: [
      "Led end-to-end development of a fully AWS-native machine learning solution for Morningstar's Electricity Load Forecasting model, which significantly outperformed its benchmarks and cut training costs by 85% through cloud optimization. Mentored a junior engineer on the project, who carried their work from build through to delivery.",
      "Extended the multi-asset risk model to support fixed-income instruments, expanding portfolio analytics coverage. This work was featured at Spark Conference 2019.",
      "Led the team that modernized a legacy analytics application for cloud delivery on AWS, and built data governance and tooling for the central team, which ran the company-wide data warehouse, scaling the platform across multiple AWS accounts.",
    ] },
  ];

  const talks = [
    { year: "2026", title: "Automated Exoplanet Candidate Selection From Radial Velocity Data", venue: "AAS 247, Phoenix" },
    { year: "2024–25", title: "Machine Learning for Detection of Multi-Planet Signals in RV Surveys", venue: "AAS 245, AAS 243" },
    { year: "2024", title: "Bridging the Gap: Enhancing Astronomical Data Analysis with Software Engineering Best Practices", venue: "ADASS XXXIV, Valletta" },
  ];

  return (
    <section>
      <Card>
        <div className="cvcols">
          <div>
            <Heading>Research</Heading>
            {research.map((r, i) => <Entry key={r.name} item={r} first={i === 0} />)}
          </div>
          <div className="col2">
            <Heading>Industry</Heading>
            {industry.map((r, i) => <Entry key={r.name} item={r} first={i === 0} />)}
          </div>
        </div>

        <div style={{ marginTop: 30, paddingTop: 30, borderTop: "1px solid rgba(143,178,182,0.14)" }}>
          <Heading>Talks &amp; posters</Heading>
          <div style={{ display: "grid", gap: 14 }}>
            {talks.map((t) => (
              <div key={t.title} className="talkrow">
                <span style={{ color: C.faint, fontWeight: 600, fontSize: 13, lineHeight: 1.55 }}>{t.year}</span>
                <p style={{ color: C.ink, fontSize: 15.5, fontWeight: 500, lineHeight: 1.55, margin: 0 }}>{t.title}</p>
                <span style={{ color: C.mist, fontSize: 13.5, lineHeight: 1.6, whiteSpace: "nowrap" }}>{t.venue}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}

function Other() {
  const outreach = [
    { glow: C.glowViolet, name: "Observatory", org: "San Francisco State University", lines: [
      "Worked with other students to give observatory tours and operate telescopes for visitors, introducing them to the night sky and talking about astronomy."
    ] },
    { glow: C.glowViolet, name: "Noche de Estrellas", org: "San Francisco State University", lines: [
      "Volunteered with Noche de Estrellas, the university's Spanish–English astronomy events to help with planetarium shows.",
    ] },
  ];
  const photos = [
    { src: "./photos/milky-way-treeline.jpg", w: 1600, h: 945,
      alt: "The Milky Way core rising above a silhouetted treeline",
      caption: "Milky Way core over the treeline \u00b7 Point Reyes, California." },
    { src: "./photos/milky-way-fence.jpg", w: 1600, h: 945,
      alt: "The Milky Way band over a silhouetted wooden fence",
      caption: "The Milky Way band, with Andromeda faintly visible at upper right \u00b7 Elko, Nevada." },
  ];
  return (
    <section style={{ display: "grid", gap: 22 }}>
      <Card>
        <Heading>Outreach</Heading>
        {outreach.map((o, i) => <Entry key={o.name} item={o} first={i === 0} />)}
      </Card>
      <Card>
        <Heading>Other fun stuff</Heading>
        <p style={{ color: C.body, fontSize: 16, lineHeight: 1.65, margin: "0 0 4px", maxWidth: "62ch" }}>
          Some favourite night sky images captured from my phone.
        </p>
        {photos.length > 0 && (
          <div className="photogrid">
            {photos.map((ph) => (
              <figure key={ph.src} style={{ margin: 0 }}>
                <img src={ph.src} alt={ph.alt} loading="lazy" width={ph.w} height={ph.h}
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: 12, border: "1px solid rgba(143,178,182,0.16)" }} />
                <figcaption style={{ color: C.faint, fontSize: 13.5, lineHeight: 1.55, marginTop: 9 }}>{ph.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </Card>
    </section>
  );
}

function ContactIcon({ type, color, size = 18 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", "aria-hidden": "true" };
  if (type === "github") {
    return (<svg {...common} fill={color}><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02 0 2.04.14 3 .41 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.56 22.29 24 17.79 24 12.5 24 5.87 18.63.5 12 .5z" /></svg>);
  }
  return (<svg {...common} fill={color}><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V23h-4V8z" /></svg>);
}

function Contact() {
  const links = [
    { key: "github", label: "GitHub", href: "https://github.com/shvetha-sc" },
    { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/shvetha-sc/" },
  ];
  return (
    <section style={{ paddingTop: 24, textAlign: "center" }}>
      <h2 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 8px", letterSpacing: -0.4 }}>Find me here</h2>
      <div className="orbits-panel">
        <div className="orbits">
          {links.map((l) => (
            <a key={l.key} href={l.href} className="orbit-col" target="_blank" rel="noopener noreferrer">
              <span className="orbit">
                <span className="ring" />
                <span className="sat"><b /></span>
                <span className="ic"><ContactIcon type={l.key} color={C.mist} size={24} /></span>
              </span>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

