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
        <img
          src={image}
          alt={label}
          className="exhibit-img"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const placeholder = target.nextSibling as HTMLElement;
            if (placeholder) placeholder.style.display = 'flex';
          }}
        />
      ) : null}
      <div
        className="exhibit-placeholder"
        style={{ display: image ? 'none' : 'flex' }}
      >
        [SCREENSHOT — UPLOAD VIA GITHUB TO DISPLAY]
      </div>
    </div>
  );
}
