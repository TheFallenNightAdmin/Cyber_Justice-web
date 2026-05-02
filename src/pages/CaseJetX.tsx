import SectionHeader from "../components/SectionHeader";
import Timeline from "../components/Timeline";
import Exhibit from "../components/Exhibit";
import { Link } from "wouter";

const BASE = "https://raw.githubusercontent.com/TheFallenNightAdmin/Cyber_Justice-web/main/proof";

export default function CaseJetX() {
  const timelineEntries = [
    { time: "11:03 AM", date: "17 Jan 2026", description: "Community members in #jet-script-reviews praise JetX's mods — \"jet mod is so good guys.\" JetX's reputation is at its peak. The trust setup is complete.", comment: "Reputation cultivation phase active" },
    { time: "06:43 AM", date: "20 Jan 2026", description: "Mouse posts asking for someone to fix a broken robotics mod — calling it \"dookie aa.\" He is visibly frustrated and looking for help. JetX identifies his target.", comment: "Target acquisition" },
    { time: "08:00 AM", date: "20 Jan 2026", description: "JetX (as \"Not Jetx's Alt\") replies — \"I fixed it. Dm me.\" Positions himself as the helpful expert. Mouse trusts him.", comment: "Trap set. Victim engaged." },
    { time: "09:15 AM", date: "20 Jan 2026", description: "Mouse DMs JetX as instructed. In the DM, JetX delivers a logger disguised as the mod fix.", comment: "Logger delivered. Token stolen." },
    { time: "10:03 AM", date: "20 Jan 2026", description: "Mouse posts in #jet-script-reviews praising JetX — completely unaware his account has already been compromised. \"randoms just yapping jet makes best mods.\"", comment: "Victim still unaware. Account already breached." },
    { time: "Post-incident", description: "JetX uses Mouse's stolen account. Nuke bots are deployed. Servers destroyed. Mouse's account gets suspended by Discord as a result of actions taken under his compromised credentials.", comment: "Victim's account suspended. Community servers nuked." },
  ];

  return (
    <div className="case-page">
      <section className="hero hero-page">
        <div className="breadcrumb">CYBER_JUSTICE / CASE FILE #002-JETX-EXPOSED</div>
        <h1 className="hero-title">JETX</h1>
        <div className="hero-subtitle">
          ACCOUNT THEFT · LOGGER DISTRIBUTION · SERVER NUKING · MOUSE VICTIM REPORT
        </div>
        <div className="tag-container" style={{ marginTop: '24px' }}>
          <span className="tag critical">THREAT: CRITICAL</span>
          <span className="tag">VECTOR: DISCORD_LOGGER</span>
          <span className="tag">VECTOR: ACCOUNT_THEFT</span>
          <span className="tag">VECTOR: SERVER_NUKE</span>
          <span className="tag">VICTIM: MOUSE</span>
          <span className="tag" style={{ color: 'var(--green)', borderColor: 'rgba(34,197,94,0.3)' }}>STATUS: EXPOSED</span>
        </div>
      </section>

      <SectionHeader title="SUBJECT_PROFILE" />
      <div className="panel">
        <table className="profile-table">
          <tbody>
            <tr><td>Handle:</td><td>JetX / Not Jetx's Alt</td></tr>
            <tr><td>Known Alts:</td><td>5+ DOCUMENTED</td></tr>
            <tr><td>Origin:</td><td>SPAIN [ES]</td></tr>
            <tr><td>Known Vector:</td><td>LOGGER DISTRIBUTION / ACCOUNT THEFT / SERVER NUKING</td></tr>
            <tr><td>Risk Level:</td><td style={{ color: 'var(--red)' }}>⚠ CRITICAL THREAT</td></tr>
            <tr><td>Database ID:</td><td>#002-JETX-EXPOSED</td></tr>
            <tr><td>Confirmed Victim:</td><td>MOUSE — ACCOUNT COMPROMISED</td></tr>
            <tr><td>Method:</td><td>TRUST EXPLOITATION → LOGGER PLANT → ACCOUNT TAKEOVER</td></tr>
            <tr><td>Verdict:</td><td>PREDATORY SKID / ACCOUNT THIEF</td></tr>
          </tbody>
        </table>
      </div>

      <SectionHeader title="INCIDENT_NARRATIVE — MOUSE VICTIM REPORT" />
      <div className="panel">
        <p>On 20 January 2026, a Discord user called Mouse posted in a community server asking for help with a broken robotics mod. The mod — written by a skid named Yurio — was bloated, inefficient, and broken. Mouse just wanted it fixed. That's when JetX, operating under the alias Not Jetx's Alt, responded. He claimed to have already fixed the mod. He told Mouse to DM him. Mouse — trusting, looking for help — did exactly that. This was the trap.</p>
        <p>JetX had built a reputation as a skilled mod developer. The #jet-script-reviews channel was full of praise — community members calling his mods 'too op,' 'way too good,' 'best scripts in the game.' Mouse had even posted there himself, backing Jet's reputation just hours before becoming his victim. That trust is exactly what JetX weaponized.</p>
        <p>JetX's modus operandi: build community trust through quality mods and positive reviews, then exploit that trust to get victims to DM him — where he could deliver loggers, steal accounts, and cover his tracks using alt accounts. A logger is a malicious script that, when run or clicked, silently steals your Discord authentication token — giving the attacker full access to your account without needing your password. JetX distributed these through DMs, disguised as 'fixes' or 'mods,' to unsuspecting victims like Mouse.</p>
        <p>Once he had Mouse's token, JetX took over the account. The evidence shows he also deployed nuke bots against servers — mass-deleting channels, spamming, and destroying communities. Screenshots confirm a nuked server and a suspended account as direct results of his attacks. JetX maintained at least 5 documented alt accounts to evade bans and continue operating after each incident. The URL tests and logger-detection screenshots confirm exactly how his delivery mechanism worked.</p>
        <p>Mouse was a victim of calculated social engineering. He asked for help. He got a logger. His account was stolen. This case file documents every piece of evidence so the community never falls for it again.</p>
      </div>

      <SectionHeader title="FORENSIC_TIMELINE" />
      <Timeline entries={timelineEntries} />

      <SectionHeader title="EXHIBIT_SET_A: Mouse Incident Screenshots" />
      <div className="exhibit-grid">
        <Exhibit label="EXHIBIT_A1" badge="VERIFIED" image={`${BASE}/image%20(1).png`} />
        <Exhibit label="EXHIBIT_A2" badge="VERIFIED" image={`${BASE}/image%20(2).png`} />
        <Exhibit label="EXHIBIT_A3" badge="VERIFIED" image={`${BASE}/image%20(3).png`} />
        <Exhibit label="EXHIBIT_A4" badge="VERIFIED" image={`${BASE}/image%20(4).png`} />
        <Exhibit label="EXHIBIT_A5" badge="VERIFIED" image={`${BASE}/image%20(5).png`} />
      </div>

      <SectionHeader title="EXHIBIT_SET_B: Primary Proof vs JetX" />
      <div className="exhibit-grid">
        <Exhibit label="EXHIBIT_B1" badge="CRITICAL" image={`${BASE}/Proof%20vs%20jet%20text%20%231.png`} />
        <Exhibit label="EXHIBIT_B2" badge="CRITICAL" image={`${BASE}/Proof%20vs%20jet%20text%20%232.png`} />
        <Exhibit label="EXHIBIT_B3" badge="CRITICAL" image={`${BASE}/proof%20vs%20JET!.png`} />
      </div>

      <SectionHeader title="EXHIBIT_SET_C: Logger Distribution Evidence" />
      <div className="exhibit-grid">
        <Exhibit label="EXHIBIT_C1" badge="KEY" image={`${BASE}/HOW%20to%20feind%20loggers%20%231.png`} />
        <Exhibit label="EXHIBIT_C2" badge="KEY" image={`${BASE}/HOW%20to%20feind%20loggers%20%232.png`} />
        <Exhibit label="EXHIBIT_C3" badge="KEY" image={`${BASE}/HOW%20to%20feind%20loggers%20%233.png`} />
        <Exhibit label="EXHIBIT_C4" badge="KEY" image={`${BASE}/HOW%20to%20feind%20loggers%20%234.png`} />
        <Exhibit label="EXHIBIT_C5" badge="KEY" image={`${BASE}/HOW%20to%20feind%20loggers%20%235.png`} />
        <Exhibit label="EXHIBIT_C6" badge="KEY" image={`${BASE}/HOW%20to%20feind%20loggers%20%236.png`} />
        <Exhibit label="EXHIBIT_C7" badge="KEY" image={`${BASE}/HOW%20to%20feind%20loggers%20%237.png`} />
        <Exhibit label="EXHIBIT_C8" badge="URL TEST" image={`${BASE}/The%20URL%20TEST!.png`} />
      </div>

      <SectionHeader title="EXHIBIT_SET_D: Documented Alt Accounts" />
      <div className="exhibit-grid">
        <Exhibit label="OVERVIEW" badge="INTEL" image={`${BASE}/all%20jets%20accounts!.png`} />
        <Exhibit label="ALT_01" badge="DOCUMENTED" image={`${BASE}/Jet%20alt%20%231.png`} />
        <Exhibit label="ALT_02" badge="DOCUMENTED" image={`${BASE}/Jet%20alt%20%232.png`} />
        <Exhibit label="ALT_03" badge="DOCUMENTED" image={`${BASE}/Jet%20alt%20%233.png`} />
        <Exhibit label="ALT_04" badge="DOCUMENTED" image={`${BASE}/Jet%20alt%20%234.png`} />
        <Exhibit label="ALT_05" badge="DOCUMENTED" image={`${BASE}/Jet%20alt%20%235.png`} />
      </div>

      <SectionHeader title="EXHIBIT_SET_E: Server Destruction & Account Suspension" />
      <div className="exhibit-grid">
        <Exhibit label="EXHIBIT_E1" badge="FORENSIC" image={`${BASE}/MY%20discord%20server%20got%20nuked.png`} />
        <Exhibit label="EXHIBIT_E2" badge="FORENSIC" image={`${BASE}/My%20nuked%20server.png`} />
        <Exhibit label="EXHIBIT_E3" badge="FORENSIC" image={`${BASE}/The%20nuke%20bot.png`} />
        <Exhibit label="EXHIBIT_E4" badge="FORENSIC" image={`${BASE}/the%20nuke%20bot%20%232.png`} />
        <Exhibit label="EXHIBIT_E5" badge="FORENSIC" image={`${BASE}/My%20account%20suspend.png`} />
        <Exhibit label="EXHIBIT_E6" badge="FORENSIC" image={`${BASE}/Jet%20main%20account!.png`} />
      </div>

      <SectionHeader title="FINAL_ASSESSMENT" />
      <div className="panel" style={{ borderLeftColor: 'var(--red)', borderLeftWidth: '5px' }}>
        <h3 style={{ color: 'var(--red)', fontSize: '20px', marginBottom: '15px' }}>⚠ OFFICIAL VERDICT — CASE #002-JETX-EXPOSED ⚠</h3>
        <h4 style={{ color: 'var(--accent)', fontSize: '18px', marginBottom: '15px' }}>JETX: CONFIRMED ACCOUNT THIEF</h4>
        <ul style={{ paddingLeft: '20px', fontSize: '13px' }}>
          <li>Built fraudulent reputation through community praise manipulation.</li>
          <li>Lured victims into private DMs under the guise of technical support.</li>
          <li>Delivered malicious token loggers disguised as legitimate files.</li>
          <li>Deployed nuke bots across multiple servers using 5+ documented alt accounts.</li>
          <li>Victim Mouse requested help with a broken mod and received a stolen account in return.</li>
        </ul>
      </div>

      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Link href="/cases" className="view-btn">← BACK TO DATABASE</Link>
      </div>
    </div>
  );
}
