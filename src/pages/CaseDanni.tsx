import SectionHeader from "../components/SectionHeader";
import { Link } from "wouter";

const BASE = "/proof";

export default function CaseDanni() {
  return (
    <div className="danni-page">
      <Link href="/cases" className="back-link">← BACK TO DATABASE</Link>

      <section className="hero hero-page">
        <div className="breadcrumb">CYBER_JUSTICE / CASE FILE #001 / CYBER-SENTINEL REPORT</div>
        <h1 className="hero-title" style={{ color: 'var(--green)' }}>DANNI</h1>
        <div className="hero-subtitle">CYBER-SENTINEL / OPERATION: LOGGER_HUNT</div>
      </section>

      <SectionHeader title="Section 01 // MISSION_REPORT (STATUS: ANALYZED)" />
      <div className="panel">
        <p>
          Danni's discovery of a backup distribution path on iloveloggers.workers.dev was the ultimate
          game-changer for the JetX investigation. Even though Danni was working on a restricted school
          computer, they managed to pull the Webhook Metadata just seconds before the attacker wiped
          everything globally. Now, this repository holds the only verified proof of how the Nuke Bot
          actually operated. Because Danni acted so fast and sacrificed their own access, over forty
          people were able to recover their tokens before the mass-hijack protocol locked everyone out.
        </p>
      </div>

      <SectionHeader title="Section 02 // FORENSIC_EXHIBITS (ENCRYPTED: NO)" />
      <div className="exhibit-grid">
        <div className="exhibit-card">
          <div className="exhibit-header">
            <span className="exhibit-label">EXHIBIT_A — Admission</span>
            <span className="exhibit-badge">VERIFIED</span>
          </div>
          <img
            src={`${BASE}/Proof%20vs%20jet%20text%20%232.png`}
            alt="Admission"
            className="exhibit-img"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
        <div className="exhibit-card">
          <div className="exhibit-header">
            <span className="exhibit-label">EXHIBIT_B — Infrastructure</span>
            <span className="exhibit-badge">VERIFIED</span>
          </div>
          <img
            src={`${BASE}/Jet%20alt%20%233.png`}
            alt="Infrastructure"
            className="exhibit-img"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
        <div className="exhibit-card">
          <div className="exhibit-header">
            <span className="exhibit-label">EXHIBIT_C — Termination</span>
            <span className="exhibit-badge">VERIFIED</span>
          </div>
          <img
            src={`${BASE}/the%20nuke%20bot%20%232.png`}
            alt="Termination"
            className="exhibit-img"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
      </div>

      <SectionHeader title="Section 03 // FINAL_VERDICT (RANK: LEGENDARY)" />
      <div className="verdict-panel">
        <div className="verdict-title">OFFICIAL ASSESSMENT — CASE #001</div>
        <div className="verdict-name" style={{ color: 'var(--green)' }}>CYBER-SENTINEL</div>
        <ul className="verdict-points">
          <li>Analysis confirms Danni is not a victim — a Cyber-Sentinel.</li>
          <li>While JetX succeeded in nuking the account, he failed to suppress the evidence.</li>
          <li>RECOVERY STATUS: Account sacrificed for community safety.</li>
          <li>LEGACY: Secured. 40+ users protected before mass-hijack protocol finalized.</li>
        </ul>
      </div>

      <div style={{ padding: '20px 36px 40px', textAlign: 'center' }}>
        <Link href="/cases" className="view-btn">← BACK TO DATABASE</Link>
      </div>
    </div>
  );
}
