import SectionHeader from "../components/SectionHeader";

export default function Danni() {
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
          Danni’s discovery of a backup distribution path on iloveloggers.workers.dev was the ultimate game-changer for the JetX investigation. Even though Danni was working on a restricted school computer, they managed to pull the Webhook Metadata just seconds before the attacker wiped everything globally. Now, this repository holds the only verified proof of how the Nuke Bot actually operated. Because Danni acted so fast and sacrificed their own access, over forty people were able to recover their tokens before the mass-hijack protocol locked everyone out.

</p>
      </div>

      <SectionHeader title="Section 02 // FORENSIC_EXHIBITS (ENCRYPTED: NO)" />
      <div className="exhibit-grid" style={{ gridTemplateColumns: '1fr' }}>
        <div className="panel">
          <h3 style={{ marginBottom: '10px', fontSize: '16px' }}>EXHIBIT_A: Admission</h3>
          <img 
            src="https://raw.githubusercontent.com/TheFallenNightAdmin/Cyber_Justice-web/main/Proof/Proof%20vs%20jet%20text%20%232.png" 
            alt="Admission" 
            className="exhibit-img"
          />
        </div>
        <div className="panel">
          <h3 style={{ marginBottom: '10px', fontSize: '16px' }}>EXHIBIT_B: Infrastructure</h3>
          <img 
            src="https://raw.githubusercontent.com/TheFallenNightAdmin/Cyber_Justice-web/main/Proof/Jet%20alt%20%233.png" 
            alt="Infrastructure" 
            className="exhibit-img"
          />
        </div>
        <div className="panel">
          <h3 style={{ marginBottom: '10px', fontSize: '16px' }}>EXHIBIT_C: Termination</h3>
          <img 
            src="https://raw.githubusercontent.com/TheFallenNightAdmin/Cyber_Justice-web/main/Proof/the%20nuke%20bot%20%232.png" 
            alt="Termination" 
            className="exhibit-img"
          />
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
