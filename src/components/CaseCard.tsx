import { Link } from "wouter";
import { Case } from "../data/cases";

export default function CaseCard({ data }: { data: Case }) {
  const isSentinel = data.threatLabel === "SENTINEL";

  return (
    <div className={`case-card ${isSentinel ? "case-card-sentinel" : ""}`} data-testid={`case-card-${data.id}`}>
      <div className="card-top">
        <span>Case File #{data.number} / {data.date}</span>
        <span className={isSentinel ? "status-resolved" : "status-active"}>● {data.status}</span>
      </div>
      <h2 className={`card-title ${isSentinel ? "card-title-sentinel" : ""}`}>{data.name}</h2>
      <div className="card-aka">
        AKA: {data.aka} / {data.origin ? `ORIGIN: ${data.origin}` : `PLATFORM: ${data.platform}`}
      </div>

      <div className="threat-container">
        <div className="threat-header">
          <span>{isSentinel ? "CLASSIFICATION" : `THREAT LEVEL: ${data.threatLevel}%`}</span>
          <span style={{ color: isSentinel ? "var(--green)" : undefined }}>{data.threatLabel}</span>
        </div>
        {!isSentinel && (
          <div className="threat-bar">
            <div
              className={`threat-fill ${data.threatLabel.toLowerCase()}`}
              style={{ width: `${data.threatLevel}%` }}
            />
          </div>
        )}
      </div>

      <div className="tag-container">
        {data.tags.map((tag, i) => (
          <span key={i} className={`tag ${isSentinel ? "sentinel" : data.threatLabel === "CRITICAL" ? "critical" : ""}`}>{tag}</span>
        ))}
        <span className="tag">ROLE: {data.victim}</span>
      </div>

      <div className="card-footer">
        <span>Filed: {data.filedDate}</span>
        <Link href={`/case/${data.slug}`} className="view-btn" data-testid={`view-case-${data.slug}`}>
          View Case File →
        </Link>
      </div>
    </div>
  );
}
