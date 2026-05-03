import { Link } from "wouter";
import SectionHeader from "../components/SectionHeader";

const PARTICLES = [
  { x: 8,  y: 12 }, { x: 18, y: 5  }, { x: 32, y: 22 }, { x: 47, y: 8  },
  { x: 61, y: 15 }, { x: 74, y: 6  }, { x: 88, y: 18 }, { x: 95, y: 10 },
  { x: 5,  y: 38 }, { x: 14, y: 55 }, { x: 25, y: 42 }, { x: 38, y: 30 },
  { x: 52, y: 48 }, { x: 67, y: 35 }, { x: 79, y: 52 }, { x: 91, y: 38 },
  { x: 3,  y: 68 }, { x: 20, y: 75 }, { x: 35, y: 62 }, { x: 48, y: 72 },
  { x: 58, y: 58 }, { x: 71, y: 70 }, { x: 83, y: 62 }, { x: 93, y: 72 },
  { x: 11, y: 85 }, { x: 28, y: 88 }, { x: 44, y: 82 }, { x: 62, y: 90 },
  { x: 77, y: 84 }, { x: 87, y: 92 }, { x: 55, y: 25 }, { x: 42, y: 58 },
];

export default function Home() {
  return (
    <div className="home-page">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-particles" aria-hidden>
          {PARTICLES.map((p, i) => (
            <div key={i} className="particle" style={{ left: `${p.x}%`, top: `${p.y}%` }} />
          ))}
        </div>
        <div className="hero-grid" aria-hidden />

        <h1 className="hero-title">
          <span className="line-white">CYBER_JUSTICE.</span>
        </h1>

        <div className="hero-subtitle">
          Documenting. Exposing. Protecting.
          <br />
          The community-operated intelligence database.
        </div>

        <div className="hero-cta">
          <Link href="/cases" className="btn-primary">VIEW CASE FILES</Link>
          <Link href="/tools" className="btn-ghost">SECURITY TOOLS</Link>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-grid">
        <div className="stat-box">
          <span className="stat-val">03</span>
          <span className="stat-label">Cases Filed</span>
        </div>
        <div className="stat-box">
          <span className="stat-val">02</span>
          <span className="stat-label">Verified Victims</span>
        </div>
        <div className="stat-box">
          <span className="stat-val" style={{ color: 'var(--green)' }}>ACTIVE</span>
          <span className="stat-label">Unit Status</span>
        </div>
        <div className="stat-box">
          <span className="stat-val" style={{ fontSize: '36px', letterSpacing: '1px' }}>DANNI</span>
          <span className="stat-label">Head of Operations Sweden</span>
        </div>
        <div className="stat-box">
          <span className="stat-val" style={{ fontSize: '36px', letterSpacing: '1px' }}>Pagoni Hax</span>
          <span className="stat-label">Core Operations Global</span>
        </div>
      </div>

      {/* ── MISSION ── */}
      <SectionHeader title="MISSION_STATEMENT" />
      <div className="panel">
        <p>
          CYBER_JUSTICE is a community-operated intelligence unit dedicated to documenting, exposing,
          and archiving bad actors who exploit, deceive, and harm members of the Discord modding and scripting community.
        </p>
        <p>
          Every case file published here is backed by verified screenshot evidence, forensic timelines,
          and documented victim accounts. We do not speculate. We do not fabricate. We publish the truth
          so the community can protect itself.
        </p>
        <p>
          If you have been targeted by a logger, had your account stolen, or had your server nuked —
          you are not alone. The evidence is here. The community is watching.
        </p>
        <p style={{ color: 'var(--text-dim)', fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em', marginTop: '8px' }}>
          CORE OPERATIONS: DANNI // PENTONIC // PAGONI HAX
        </p>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="home-cta-row">
        <div className="home-cta-block">
          <div className="home-cta-label">PUBLIC CASE DATABASE</div>
          <div className="home-cta-desc">Browse all verified case files, evidence exhibits, and forensic timelines.</div>
          <Link href="/cases" className="btn-primary">OPEN DATABASE</Link>
        </div>
        <div className="home-cta-block">
          <div className="home-cta-label">SECURITY TOOLS</div>
          <div className="home-cta-desc">Scan URLs and scripts for token loggers, webhook exfiltration, and malware patterns.</div>
          <Link href="/tools" className="btn-ghost">RUN SCANNER</Link>
        </div>
      </div>

    </div>
  );
}
