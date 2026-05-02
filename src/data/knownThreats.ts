export interface MaliciousPattern {
  name: string;
  pattern: RegExp;
  severity: 'CLEAN' | 'LOW' | 'HIGH' | 'CRITICAL';
  description: string;
}

export const MALICIOUS_DOMAINS = [
  "iloveloggers.workers.dev",
  "webhook.site",
  "discord.gg", // Flagged to verify source
];

export const SUSPICIOUS_KEYWORDS_IN_URL = [
  "logger", "grab", "steal", "hook", "token", "free-nitro", "discord-nitro"
];

export const MALICIOUS_PATTERNS: MaliciousPattern[] = [
  {
    name: "Discord Token Regex",
    pattern: /[MNQ][A-Za-z\d]{23}\.[A-Za-z\d]{6}\.[A-Za-z\d]{27}/,
    severity: 'CRITICAL',
    description: "Matches standard Discord authentication token pattern."
  },
  {
    name: "Webhook Exfiltration",
    pattern: /discord\.com\/api\/webhooks/,
    severity: 'HIGH',
    description: "Detected direct connection to Discord webhook API."
  },
  {
    name: "Base64 Evaluation",
    pattern: /eval\(atob\(|load\(game:HttpGet\(/,
    severity: 'HIGH',
    description: "Use of obfuscated code execution (eval/atob/HttpGet)."
  },
  {
    name: "Token Grabber Functions",
    pattern: /grabToken|stealToken|getToken|fetchToken/,
    severity: 'CRITICAL',
    description: "Explicit function names associated with account theft."
  },
  {
    name: "Environment Token Access",
    pattern: /getenv\("DISCORD_TOKEN"\)/,
    severity: 'CRITICAL',
    description: "Script attempting to read Discord token from environment."
  }
];

export const SAFE_DISCLAIMER = "Cyber Justice tools are provided for security awareness. Always audit scripts before execution.";
