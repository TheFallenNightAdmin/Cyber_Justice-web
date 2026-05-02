import SectionHeader from "../components/SectionHeader";
import CaseCard from "../components/CaseCard";
import { CASES } from "../data/cases";

export default function Cases() {
  return (
    <div className="cases-page">
      <section className="hero hero-page">
        <div className="breadcrumb">CYBER_JUSTICE / PUBLIC CASE DATABASE</div>
        <h1 className="hero-title">CASE FILES.</h1>
        <div className="hero-subtitle">
          VERIFIED INTELLIGENCE — {CASES.length} ACTIVE SUBJECTS ON RECORD
        </div>
      </section>

      <SectionHeader title="ACTIVE_CASE_FILES — PUBLIC DATABASE" />
      <div className="case-grid">
        {CASES.map(c => (
          <CaseCard key={c.id} data={c} />
        ))}
      </div>
    </div>
  );
}
