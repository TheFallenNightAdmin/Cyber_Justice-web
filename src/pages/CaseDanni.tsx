import SectionHeader from "../components/SectionHeader";

const BASE = "https://raw.githubusercontent.com/TheFallenNightAdmin/Cyber_Justice-web/main/proof";

export default function CaseDanni() {
  return (
    <div className="danni-page">
      <section className="hero hero-page">
        <div className="breadcrumb">CYBER_JUSTICE / CASE FILE #001 / CYBER-SENTINEL REPORT</div>
        <h1 className="hero-title" style={{ color: 'var(--green)' }}>DANNI</h1>
        <div className="hero-subtitle">CYBER-SENTINEL / OPERATION: LOGGER_HUNT</div>
      </section>

      <SectionHeader title="Section 01 // MISSION_REPORT (STATUS: ANALYZED)" />
      <div className="panel">
        <p>
          "The investigation into JetX reached a critical point when the subject Danni identified the secondary distribution vector at iloveloggers.workers.dev. Operating under restricted conditions on a school-node, Danni successfully exfiltrated the Webhook Metadata before the attacker could trigger a global wipe. This archive stands as the only verified record of the Nuke Bot deployment patterns. Danni's digital sacrifice allowed 40+ users to secure their tokens before the mass-hijack protocol was finalized."
        </p>
      </div>

      <SectionHeader title="Section 02 // FORENSIC_EXHIBITS (ENCRYPTED: NO)" />
      <div className="exhibit-grid" style={{ gridTemplateColumns: '1fr' }}>
        <div className="panel">
          <h3 style={{ marginBottom: '10px', fontSize: '16px' }}>EXHIBIT_A: Admission</h3>
          <img src={`${BASE}/Proof%20vs%20jet%20text%20%232.png`} alt="Admission" className="exhibit-img" />
        </div>
        <div className="panel">
          <h3 style={{ marginBottom: '10px', fontSize: '16px' }}>EXHIBIT_B: Infrastructure</h3>
          <img src={`${BASE}/Jet%20alt%20%233.png`} alt="Infrastructure" className="exhibit-img" />
        </div>
        <div className="panel">
          <h3 style={{ marginBottom: '10px', fontSize: '16px' }}>EXHIBIT_C: Termination</h3>
          <img src={`${BASE}/the%20nuke%20bot%20%232.png`} alt="Termination" className="exhibit-img" />
        </div>
      </div>

      <SectionHeader title="Section 03 // FINAL_VERDICT (RANK: LEGENDARY)" />
      <div className="panel" style={{ borderLeftColor: 'var(--green)' }}>
        <p>
          "Analysis confirms that Danni is not a victim, but a Cyber-Sentinel. While the attacker JetX succeeded in nuking the account, he failed to suppress the evidence."
        </p>
        <p>RECOVERY STATUS: Account sacrificed for community safety.</p>
        <p>LEGACY: Secured.</p>
      </div>
    </div>
  );
}
