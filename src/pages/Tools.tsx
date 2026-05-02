import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import ToolCard from "../components/ToolCard";
import { MALICIOUS_DOMAINS, SUSPICIOUS_KEYWORDS_IN_URL, MALICIOUS_PATTERNS } from "../data/knownThreats";

export default function Tools() {
  const [urlInput, setUrlInput] = useState("");
  const [urlLogs, setUrlLogs] = useState<{ msg: string; type: 'info' | 'warn' | 'error' | 'success' }[]>([]);
  const [isScanningUrl, setIsScanningUrl] = useState(false);

  const [scriptInput, setScriptInput] = useState("");
  const [scriptLogs, setScriptLogs] = useState<{ msg: string; type: 'info' | 'warn' | 'error' | 'success' }[]>([]);
  const [isScanningScript, setIsScanningScript] = useState(false);

  const scanUrl = () => {
    if (!urlInput) return;
    setIsScanningUrl(true);
    setUrlLogs([{ msg: "Initializing URL scanner...", type: 'info' }]);
    
    setTimeout(() => {
      const logs: any[] = [
        { msg: `Checking domain: ${urlInput}`, type: 'info' },
      ];

      let severity: 'CLEAN' | 'SUSPICIOUS' | 'CONFIRMED' = 'CLEAN';

      // Check domains
      if (MALICIOUS_DOMAINS.some(d => urlInput.includes(d))) {
        logs.push({ msg: `MATCH FOUND: Known malicious domain detected.`, type: 'error' });
        severity = 'CONFIRMED';
      }

      // Check keywords
      if (SUSPICIOUS_KEYWORDS_IN_URL.some(k => urlInput.toLowerCase().includes(k))) {
        logs.push({ msg: `WARNING: Suspicious keyword match found in URL.`, type: 'warn' });
        if (severity !== 'CONFIRMED') severity = 'SUSPICIOUS';
      }

      if (urlInput.includes('.workers.dev')) {
        logs.push({ msg: `NOTICE: .workers.dev detected. Common vector for serverless loggers.`, type: 'warn' });
        if (severity !== 'CONFIRMED') severity = 'SUSPICIOUS';
      }

      if (severity === 'CLEAN') {
        logs.push({ msg: "No immediate threats found. Continue with caution.", type: 'success' });
      }

      setUrlLogs(prev => [...prev, ...logs, { msg: `SCAN COMPLETE. RESULT: ${severity}`, type: severity === 'CLEAN' ? 'success' : severity === 'SUSPICIOUS' ? 'warn' : 'error' }]);
      setIsScanningUrl(false);
    }, 1500);
  };

  const scanScript = () => {
    if (!scriptInput) return;
    setIsScanningScript(true);
    setScriptLogs([{ msg: "Initializing Script Malware Analyzer...", type: 'info' }]);

    setTimeout(() => {
      const logs: any[] = [];
      const lines = scriptInput.split('\n');
      let highestSeverity: any = 'CLEAN';

      MALICIOUS_PATTERNS.forEach(pattern => {
        lines.forEach((line, index) => {
          if (pattern.pattern.test(line)) {
            logs.push({ 
              msg: `[LINE ${index + 1}] FOUND: ${pattern.name} - ${pattern.description}`, 
              type: pattern.severity === 'CRITICAL' ? 'error' : 'warn' 
            });
            if (pattern.severity === 'CRITICAL') highestSeverity = 'CRITICAL';
            else if (highestSeverity !== 'CRITICAL') highestSeverity = pattern.severity;
          }
        });
      });

      if (logs.length === 0) {
        logs.push({ msg: "No malicious patterns detected in script content.", type: 'success' });
      }

      setScriptLogs(prev => [...prev, ...logs, { msg: `SCAN COMPLETE. THREAT LEVEL: ${highestSeverity}`, type: highestSeverity === 'CLEAN' ? 'success' : 'error' }]);
      setIsScanningScript(false);
    }, 2000);
  };

  return (
    <div className="tools-page">
      <section className="hero">
        <div className="breadcrumb">CYBER_JUSTICE / SECURITY TOOLS</div>
        <h1 className="hero-title">SECURITY_TOOLS</h1>
        <div className="hero-subtitle">CLIENT-SIDE MALWARE ANALYSIS & THREAT DETECTION</div>
      </section>

      <div className="tool-grid">
        <ToolCard 
          title="TOKEN LOGGER / URL SCANNER" 
          description="Check URLs against known malicious distribution points and pattern signatures."
        >
          <input 
            className="tool-input" 
            placeholder="Paste URL or domain here..." 
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            data-testid="input-url"
          />
          <button 
            className="scan-btn" 
            onClick={scanUrl} 
            disabled={isScanningUrl}
            data-testid="button-scan-url"
          >
            {isScanningUrl ? "SCANNING..." : "SCAN URL"}
          </button>
          <div className="terminal-output">
            {urlLogs.map((log, i) => (
              <div key={i} className={`log-line log-${log.type}`}>
                {log.type === 'info' ? '>> ' : log.type === 'warn' ? '[!] ' : log.type === 'error' ? '[X] ' : '[OK] '}
                {log.msg}
              </div>
            ))}
          </div>
        </ToolCard>

        <ToolCard 
          title="SCRIPT MALWARE ANALYZER" 
          description="Scan LuaU, JS, or Python scripts for token grabbers, webhook exfiltration, and obfuscated backdoors."
        >
          <textarea 
            className="tool-input" 
            style={{ height: '120px', resize: 'vertical' }}
            placeholder="Paste script content here..." 
            value={scriptInput}
            onChange={(e) => setScriptInput(e.target.value)}
            data-testid="input-script"
          />
          <button 
            className="scan-btn" 
            onClick={scanScript} 
            disabled={isScanningScript}
            data-testid="button-scan-script"
          >
            {isScanningScript ? "SCANNING..." : "SCAN SCRIPT"}
          </button>
          <div className="terminal-output">
            {scriptLogs.map((log, i) => (
              <div key={i} className={`log-line log-${log.type}`}>
                {log.type === 'info' ? '>> ' : log.type === 'warn' ? '[!] ' : log.type === 'error' ? '[X] ' : '[OK] '}
                {log.msg}
              </div>
            ))}
          </div>
        </ToolCard>
      </div>
    </div>
  );
}
