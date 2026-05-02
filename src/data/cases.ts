export interface Case {
  id: string;
  number: string;
  date: string;
  status: string;
  name: string;
  aka: string;
  origin?: string;
  platform?: string;
  threatLevel: number; // 0-100
  threatLabel: string;
  tags: string[];
  victim: string;
  filedDate: string;
  slug: string;
}

export const CASES: Case[] = [
  {
    id: "001",
    number: "001",
    date: "20 JAN 2026",
    status: "RESOLVED",
    name: "DANNI",
    aka: "CYBER-SENTINEL",
    platform: "DISCORD",
    threatLevel: 0,
    threatLabel: "SENTINEL",
    tags: ["CYBER-SENTINEL", "OPERATION: LOGGER_HUNT", "COMMUNITY DEFENDER", "EVIDENCE RECOVERY"],
    victim: "COMMUNITY",
    filedDate: "20/01/2026",
    slug: "danni"
  },
  {
    id: "002",
    number: "002",
    date: "20 JAN 2026",
    status: "ACTIVE",
    name: "JETX",
    aka: "NOT JETX'S ALT",
    origin: "SPAIN [ES]",
    threatLevel: 100,
    threatLabel: "CRITICAL",
    tags: ["ACCOUNT THEFT", "LOGGER DISTRIBUTION", "SERVER NUKING", "SOCIAL ENGINEERING", "5+ ALT ACCOUNTS"],
    victim: "MOUSE",
    filedDate: "20/01/2026",
    slug: "jetx"
  },
  {
    id: "003",
    number: "003",
    date: "20 JAN 2026",
    status: "ACTIVE",
    name: "YURIO",
    aka: "SKID NOOB",
    platform: "DISCORD",
    threatLevel: 60,
    threatLabel: "HIGH",
    tags: ["SCRIPT THEFT (SKIDDING)", "FALSE AUTHORSHIP", "BLOATED MOD DISTRIBUTION"],
    victim: "MOUSE",
    filedDate: "20/01/2026",
    slug: "yurio"
  }
];
