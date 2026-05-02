import React from "react";

interface ToolCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ToolCard({ title, description, children }: ToolCardProps) {
  return (
    <div className="tool-container">
      <h2 className="card-title" style={{ fontSize: '24px', marginBottom: '10px' }}>{title}</h2>
      <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '20px' }}>{description}</p>
      {children}
    </div>
  );
}
