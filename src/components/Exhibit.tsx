interface ExhibitProps {
  label: string;
  badge: string;
  image?: string;
}

export default function Exhibit({ label, badge, image }: ExhibitProps) {
  return (
    <div className="exhibit-card">
      <div className="exhibit-header">
        <span className="exhibit-label">{label}</span>
        <span className="exhibit-badge">{badge}</span>
      </div>
      {image ? (
        <img src={image} alt={label} className="exhibit-img" />
      ) : (
        <div className="exhibit-placeholder">
          [SCREENSHOT REDACTED — UPLOAD VIA GITHUB]
        </div>
      )}
    </div>
  );
}
