export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="section-header">
      <span>▶</span>
      <span>▶</span>
      <span>{title}</span>
    </div>
  );
}
