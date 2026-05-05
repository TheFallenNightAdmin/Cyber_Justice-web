import SectionHeader from "../components/SectionHeader";
import Timeline from "../components/Timeline";
import Exhibit from "../components/Exhibit";
import { Link } from "wouter";

const BASE = "https://raw.githubusercontent.com/TheFallenNightAdmin/Cyber_Justice-web/main/proof";

export default function CaseYurio() {
  const timelineEntries = [
    { time: "06:43 AM", description: "Mouse reports broken mod \"dookie aa\".", comment: "Initial incident report logged" },
    { time: "08:00 AM", description: "Not Jetx's Alt responds claiming fix", comment: "Subject makes contact with victim" },
    { time: "08:46 AM", description: "Mouse exposes: \"unnecessary packets, load of bs and waste of cpu.\" Identifies Yurio — \"yurio skid noob\"", comment: "Perpetrator identified. Skid status confirmed." },
    { time: "09:15 AM", description: "Mouse DMs Not Jetx's Alt", comment: "Victim follows up on fix" },
    { time: "10:03 AM", description: "Mouse posts in #jet-script-reviews: \"jet mod too op / randoms just yapping jet makes best mods\"", comment: "Community validates quality gap. Yurio humiliated by comparison." },
  ];

  return (
    <div className="case-page">
      <Link href="/cases" className="back-link">← BACK TO DATABASE</Link>
      <section className="hero hero-page">
        <div className="breadcrumb">CYBER_JUSTICE / CASE FILE #003-YURIO-EXPOSED</div>
        <h1 className="hero-title">YURIO</h1>
        <div className="hero-subtitle">SCRIPT THIEF · SKIDDING · BLOATED CODE DISTRIBUTION</div>
      </section>

      <SectionHeader title="SUBJECT_PROFILE" />
      <div className="panel">
        <table className="profile-table">
          <tbody>
            <tr><td>Handle:</td><td>yurio</td></tr>
            <tr><td>Classification:</td><td>SKID / SCRIPT THIEF</td></tr>
            <tr><td>Known Vector:</td><td>Mod distribution / Claiming ownership</td></tr>
            <tr><td>Platform:</td><td>DISCORD</td></tr>
            <tr><td>Risk Level:</td><td style={{ color: 'var(--red)' }}>CRITICAL — COMMUNITY THREAT</td></tr>
            <tr><td>Database ID:</td><td>#003-YURIO-EXPOSED</td></tr>
            <tr><td>Victim:</td><td>MOUSE (confirmed)</td></tr>
            <tr><td>Verdict:</td><td>CONFIRMED SKID NOOB</td></tr>
          </tbody>
        </table>
      </div>

      <SectionHeader title="INCIDENT_NARRATIVE" />
      <div className="panel">
        <p>The investigation into Yurio reveals a pattern of script theft and fraudulent authorship. The subject distributes bloated, inefficient code—specifically the "dookie aa" robotics mod—while claiming it as original work. When audited by experienced users like Mouse, the code was found to contain "unnecessary packets" and was described as a "load of bs and waste of cpu."</p>
        <p>Yurio's primary threat is the pollution of the community modding space with low-quality, stolen content that often breaks user environments. This case was filed in conjunction with the JetX investigation, as Yurio's broken mod served as the initial catalyst for JetX's social engineering attack on Mouse.</p>
      </div>

      <SectionHeader title="FORENSIC_TIMELINE" />
      <Timeline entries={timelineEntries} />

      <SectionHeader title="EXHIBITS — SKID PROOF" />
      <div className="exhibit-grid">
        <Exhibit label="EXHIBIT_01" badge="SKID PROOF" image={`${BASE}/image%20(1).png`} />
        <Exhibit label="EXHIBIT_02" badge="SKID PROOF" image={`${BASE}/image%20(2).png`} />
        <Exhibit label="EXHIBIT_03" badge="SKID PROOF" image={`${BASE}/image%20(3).png`} />
        <Exhibit label="EXHIBIT_04" badge="SKID PROOF" image={`${BASE}/image%20(4).png`} />
        <Exhibit label="EXHIBIT_05" badge="SKID PROOF" image={`${BASE}/image%20(5).png`} />
      </div>

      <SectionHeader title="FINAL_ASSESSMENT" />
      <div className="panel">
        <h3 style={{ color: 'var(--red)', fontSize: '20px', marginBottom: '15px' }}>YURIO: CONFIRMED SKID</h3>
        <p>VERDICT: SKID NOOB. CASE CLOSED.</p>
      </div>

      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Link href="/cases" className="view-btn">← BACK TO DATABASE</Link>
      </div>
    </div>
  );
}
