interface TimelineEntry {
  date?: string;
  time: string;
  description: string;
  comment: string;
}

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="timeline">
      {entries.map((entry, i) => (
        <div className="timeline-item" key={i}>
          <div className="timeline-meta">
            {entry.date ? `${entry.date} / ` : ''}{entry.time}
          </div>
          <div className="timeline-desc">{entry.description}</div>
          <div className="timeline-comment">// {entry.comment}</div>
        </div>
      ))}
    </div>
  );
}
