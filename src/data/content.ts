export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

// Brand logo served by Simple Icons; tools without a logo fall back to a text badge.
export const logo = (slug: string) => `https://cdn.simpleicons.org/${slug}`

export type Tone = 'green' | 'amber' | 'purple'
export type Accent = 'cyan' | 'green' | 'amber' | 'purple' | 'gold' | 'silver'

export const profile = {
  name: 'Salma Bender',
  email: 'salmabenderpro@gmail.com',
  phoneDisplay: '+212 627 865 006',
  phoneHref: 'tel:+212627865006',
  location: 'Marrakech, Maroc',
  linkedin: 'https://www.linkedin.com/in/salma-bender-1b3842321',
  linkedinLabel: 'salma-bender',
  github: 'https://github.com/Salma-bender',
  githubHandle: 'Salma-bender',
  cv: 'Salma_Bender_CV.pdf',
  photo: 'salmaphoto.jpeg',
}

export const navLinks = [
  { href: '#about', id: 'about', label: 'À propos' },
  { href: '#skills', id: 'skills', label: 'Compétences' },
  { href: '#projects', id: 'projects', label: 'Projets' },
  { href: '#competitions', id: 'competitions', label: 'CTF' },
  { href: '#certifications', id: 'certifications', label: 'Certifications' },
  { href: '#github', id: 'github', label: 'GitHub' },
  { href: '#contact', id: 'contact', label: 'Contact' },
] as const

export const heroStats = [
  { value: '7', label: 'RÈGLES MITRE ATT&CK' },
  { value: '<90s', label: 'RÉPONSE AUTOMATISÉE' },
  { value: '#62', label: 'MACC 2026 / 1068' },
  { value: '5', label: 'CERTIFICATIONS' },
]

export const floatingPills = [
  'SOC ANALYST',
  'THREAT INTELLIGENCE',
  'SECURITY ENGINEER',
  '// BLUE TEAM',
  '// SOAR',
  '// AI SECURITY',
  '// CTF PLAYER',
]

export const orbitalRings: {
  size: string
  duration: number
  direction: 'cw' | 'ccw'
  items: string[]
}[] = [
  {
    size: '34%',
    duration: 32,
    direction: 'cw',
    items: ['Python', 'Docker', 'Linux', 'Git'],
  },
  {
    size: '56%',
    duration: 48,
    direction: 'ccw',
    items: ['Wazuh', 'MISP', 'Suricata', 'Metasploit', 'Burp Suite', 'Kali'],
  },
  {
    size: '78%',
    duration: 70,
    direction: 'cw',
    items: ['TheHive', 'Shuffle', 'pfSense', 'Wireshark', 'Zeek', 'Hashcat', 'Nmap', 'ModSecurity'],
  },
]

export const heroRoles = [
  'SOC & SIEM',
  'Threat Intelligence',
  'Automatisation SOAR',
  'Réponse aux incidents',
  'IA pour la détection',
]

export const heroHighlights = [
  { icon: 'fas fa-university', title: 'Al Barid Bank', text: 'PFA SOC · 2026' },
  { icon: 'fas fa-industry', title: 'Groupe OCP', text: 'Stage · 2025' },
  { icon: 'fas fa-graduation-cap', title: 'FST Marrakech', text: 'Ingénieur · 5ᵉ année' },
]

export const aboutParagraph =
  "Élève ingénieure en Sécurité IT à la FST de Marrakech, spécialisée en opérations de sécurité : supervision SIEM, Threat Intelligence, automatisation SOAR et réponse aux incidents, acquises lors d'un projet SOC dans le secteur bancaire. Intéressée par l'apport de l'IA à la détection des menaces."

export type Tool = { name: string; slug?: string; color?: string }

// The wheel around the photo in the About section: two rings spinning in opposite directions.
export const wheelInner: Tool[] = [
  { name: 'Python', slug: 'python' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Linux', slug: 'linux' },
  { name: 'GitHub', slug: 'github' },
  { name: 'Bash', slug: 'gnubash' },
  { name: 'scikit-learn', slug: 'scikitlearn' },
]

export const wheelOuter: Tool[] = [
  { name: 'Wazuh', color: '#1a73e8' },
  { name: 'Kali Linux', slug: 'kalilinux' },
  { name: 'Wireshark', slug: 'wireshark' },
  { name: 'MISP', color: '#0f4c81' },
  { name: 'Metasploit', slug: 'metasploit' },
  { name: 'Burp Suite', slug: 'burpsuite' },
  { name: 'Suricata', color: '#ef6c00' },
  { name: 'pfSense', slug: 'pfsense' },
  { name: 'TheHive', color: '#c79100' },
  { name: 'OpenVPN', slug: 'openvpn' },
  { name: 'FortiGate', slug: 'fortinet' },
  { name: 'Ubuntu', slug: 'ubuntu' },
]

export const aboutLeft = [
  { title: 'FORMATION', text: 'Cycle Ingénieur Sécurité IT, 5ème année — FSTM, Université Cadi Ayyad' },
  { title: 'EXPÉRIENCE SOC', text: 'Plateforme SIEM + CTI + SOAR — Al Barid Bank, DRSSI Rabat' },
  { title: 'SPÉCIALITÉ', text: 'Blue Team : SIEM, Threat Intelligence, SOAR, réponse aux incidents' },
]

export const aboutRight = [
  { title: 'DISPONIBILITÉ', text: 'Stage PFE de 6 mois à partir de février 2027', live: true },
  { title: 'LOCALISATION', text: 'Marrakech, Maroc' },
  { title: 'LANGUES', text: 'Arabe (maternelle) · Français · Anglais (courant)' },
]

// Logos + names scrolling under the hero.
export const marqueeTools: Tool[] = [
  { name: 'Wazuh' },
  { name: 'Kali Linux', slug: 'kalilinux' },
  { name: 'MISP' },
  { name: 'Wireshark', slug: 'wireshark' },
  { name: 'TheHive' },
  { name: 'Metasploit', slug: 'metasploit' },
  { name: 'Shuffle' },
  { name: 'Burp Suite', slug: 'burpsuite' },
  { name: 'Suricata' },
  { name: 'pfSense', slug: 'pfsense' },
  { name: 'MITRE ATT&CK' },
  { name: 'OpenVPN', slug: 'openvpn' },
  { name: 'Security Onion' },
  { name: 'FortiGate', slug: 'fortinet' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Python', slug: 'python' },
  { name: 'scikit-learn', slug: 'scikitlearn' },
  { name: 'Ubuntu', slug: 'ubuntu' },
  { name: 'Bash', slug: 'gnubash' },
  { name: 'GitHub', slug: 'github' },
  { name: 'ModSecurity' },
  { name: 'TryHackMe', slug: 'tryhackme' },
  { name: 'Cisco', slug: 'cisco' },
]

export const skillCategories: { title: string; icon: string; tone?: Tone; tags: string[] }[] = [
  {
    title: 'SOC & SIEM',
    icon: 'fas fa-shield-alt',
    tags: ['Wazuh', 'Sysmon', 'MITRE ATT&CK', 'Alert Triage', 'Analyse de logs'],
  },
  {
    title: 'THREAT INTELLIGENCE & SOAR',
    icon: 'fas fa-brain',
    tone: 'green',
    tags: ['MISP', 'IOCs', 'TheHive', 'Cortex', 'Shuffle', 'Playbooks automatisés'],
  },
  {
    title: 'SÉCURITÉ OFFENSIVE',
    icon: 'fas fa-crosshairs',
    tone: 'amber',
    tags: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap', 'theHarvester (OSINT)', 'Zphisher', 'GoPhish', 'Sliver C2', 'Impacket', 'Hashcat', 'Évasion WAF'],
  },
  {
    title: 'SÉCURITÉ DÉFENSIVE & RÉSEAUX',
    icon: 'fas fa-network-wired',
    tags: ['Suricata', 'Security Onion', 'ModSecurity / OWASP CRS', 'XDR', 'pfSense', 'IDS / IPS', 'OpenVPN', 'IPsec', 'Active Directory', 'Wireshark'],
  },
  {
    title: 'IA APPLIQUÉE À LA SÉCURITÉ',
    icon: 'fas fa-robot',
    tone: 'purple',
    tags: ['Python', 'scikit-learn', 'pandas', 'Machine Learning', 'Classification de payloads', 'Règles assistées par LLM'],
  },
  {
    title: 'SYSTÈMES & PROGRAMMATION',
    icon: 'fas fa-code',
    tags: ['Linux', 'Windows Server', 'Docker', 'Git / GitHub', 'Python', 'Bash', 'PowerShell', 'SQL'],
  },
  {
    title: 'GOUVERNANCE & CONFORMITÉ',
    icon: 'fas fa-balance-scale',
    tone: 'green',
    tags: ['Loi 05-20', 'DNSSI', 'CIS Benchmarks', 'ISO 27001 (notions)'],
  },
]

export type Project = {
  title: string
  icon: string
  status: string
  href?: string
  summary: string
  techs: string[]
  footer: string
}

export const projects: Project[] = [
  {
    title: 'PLATEFORME SOC : SIEM + CTI + SOAR',
    icon: 'fas fa-satellite-dish',
    status: 'PFA — AL BARID BANK',
    href: 'https://github.com/Salma-bender/soc-platform-siem-cti-soar',
    summary:
      "Wazuh, MISP, TheHive + Cortex + Shuffle sous Docker, 7 règles mappées MITRE ATT&CK. Kill chain AD détectée (GoPhish → Sliver C2 → persistance → Kerberoasting) et blocage IP pfSense en moins de 90 s.",
    techs: ['Wazuh', 'MISP', 'TheHive', 'Shuffle', 'pfSense', 'MITRE ATT&CK'],
    footer: 'DRSSI · Rabat · 2026',
  },
  {
    title: "DÉTECTION D'ATTAQUES WEB PAR IA, WAF & XDR",
    icon: 'fas fa-robot',
    status: 'EN COURS',
    summary:
      "Lab offensif/défensif : règles Wazuh à 3 niveaux et modèle Random Forest pour démontrer puis détecter l'évasion des signatures (SQLi, XSS, LFI/RFI, RCE).",
    techs: ['ModSecurity', 'OWASP CRS', 'DVWA', 'Wazuh', 'scikit-learn', 'pandas'],
    footer: 'Recherche · IA · 2026',
  },
  {
    title: 'AUDIT & DURCISSEMENT CIS',
    icon: 'fas fa-clipboard-check',
    status: 'RÉALISÉ',
    href: 'https://github.com/Salma-bender/audit-durcissement-cis-windows11-fortigate',
    summary:
      'Audit Windows 11 et FortiGate selon les CIS Benchmarks et la DNSSI, force brute RDP en preuve de concept. Script PowerShell : Windows 11 de 25 % à 85 %, FortiGate de 8,9 % à 80,4 %.',
    techs: ['Windows 11', 'FortiGate', 'PowerShell', 'Kali Linux', 'Hydra'],
    footer: 'CIS Benchmarks · DNSSI',
  },
  {
    title: 'ARCHITECTURE ENTREPRISE SÉCURISÉE',
    icon: 'fas fa-network-wired',
    status: 'RÉALISÉ',
    href: 'https://github.com/Salma-bender/pfsense-openvpn-suricata-lab',
    summary:
      "Architecture segmentée avec VPN client-to-site et PKI interne, durcissement Ubuntu et IPS Suricata inline, validée par simulation d'attaques (scans, force brute, flood).",
    techs: ['pfSense', 'OpenVPN', 'PKI', 'Suricata', 'Ubuntu', 'VirtualBox'],
    footer: 'Réseau · Sécurité',
  },
  {
    title: "ATTAQUE & DÉTECTION D'INTRUSIONS",
    icon: 'fas fa-shield-virus',
    status: 'STAGE — GROUPE OCP',
    href: 'https://github.com/Salma-bender/Simulation-d-attaque-et-detection-d-intrusions',
    summary:
      'Lab SOC virtuel : exploitation de la backdoor vsftpd 2.3.4 (CVE-2011-2523) via Metasploit, puis analyse du trafic et des logs avec Suricata et Zeek pour identifier les IoC.',
    techs: ['Kali Linux', 'Metasploit', 'Security Onion', 'Suricata', 'Zeek'],
    footer: 'Khouribga · 2025',
  },
  {
    title: 'BACKBONE MPLS MULTI-SITES',
    icon: 'fas fa-project-diagram',
    status: 'RÉALISÉ',
    href: 'https://github.com/Salma-bender/mpls-backbone-ospf-ldp-mpbgp',
    summary:
      '6 routeurs PE/P reliant 3 sites clients : OSPF, LDP, MP-BGP VPNv4, avec étude de la sécurité (IPsec), de la QoS et du Fast Reroute.',
    techs: ['MPLS', 'OSPF', 'LDP', 'MP-BGP', 'VPN L3'],
    footer: 'Réseau · 2026',
  },
]

export const competitions = [
  {
    rank: '#16',
    name: 'ST4F1T CTF',
    org: ['GCDSTE · ENSA Marrakech · 2025'],
    tags: [
      { label: 'Web Exploitation', tone: 'web' },
      { label: 'Cryptographie', tone: 'crypto' },
      { label: 'Pwn', tone: 'pwn' },
      { label: 'Forensics', tone: 'dfir' },
    ],
  },
  {
    status: 'TERMINÉ',
    name: 'MACC 2026',
    org: ['DGSSI & SecDojo', 'Compétition nationale de cybersécurité'],
    tags: [
      { label: 'National', tone: 'nat' },
      { label: 'DGSSI', tone: 'inst' },
      { label: 'SecDojo', tone: 'inst' },
    ],
    stats: [
      { value: '#1', label: 'FST MARRAKECH' },
      { value: '#62', label: 'GLOBAL' },
      { value: '1068', label: 'ÉQUIPES' },
    ],
  },
]

export const ctfAchievements = [
  { value: '2', label: 'CTF EVENTS' },
  { value: '#1', label: 'ÉQUIPE FST MARRAKECH' },
  { value: '#62', label: 'MACC NATIONAL' },
  { value: '5', label: 'CERTIFICATIONS' },
]

export type Cert = {
  name: string
  issuer: string
  icon: string
  accent: Accent
  badge: string
  badgeTone?: 'done' | 'progress'
  url?: string
}

export const certifications: Cert[] = [
  { name: 'Introduction à la Cybersécurité', issuer: 'CISCO NETWORKING ACADEMY', icon: 'fas fa-certificate', accent: 'cyan', badge: 'CISCO', url: 'https://www.credly.com/badges/54b31442-e14f-4d8d-991d-2dff3a4aeba9/public_url' },
  { name: 'Ethical Hacker', issuer: 'CISCO NETWORKING ACADEMY', icon: 'fas fa-user-secret', accent: 'gold', badge: 'CISCO', url: 'https://www.credly.com/badges/77cb9438-5ca0-46ea-81b4-1a7fd08e6500' },
  { name: 'Cybersecurity 101', issuer: 'TRYHACKME', icon: 'fas fa-shield-alt', accent: 'silver', badge: '✓ COMPLÉTÉ', badgeTone: 'done', url: 'https://tryhackme.com/certificate/THM-NKHE0MAIYY' },
  { name: 'SOC Level 1', issuer: 'TRYHACKME', icon: 'fas fa-satellite-dish', accent: 'cyan', badge: '✓ COMPLÉTÉ', badgeTone: 'done', url: 'https://tryhackme.com/certificate/THM-K1SJW9LA9H' },
  { name: 'AI Security', issuer: 'TRYHACKME', icon: 'fas fa-robot', accent: 'purple', badge: 'EN COURS', badgeTone: 'progress' },
]

export const ctfPlatforms = [
  {
    name: 'TRYHACKME',
    lines: [
      ['SOC Level 1:', '✓ Complété'],
      ['Cybersecurity 101:', '✓ Complété'],
      ['AI Security:', 'En cours'],
    ],
  },
  {
    name: 'COMPETITIONS',
    lines: [
      ['CTFs:', '2'],
      ['MACC 2026:', '#62 / 1068'],
      ['ST4F1T:', '#16'],
    ],
  },
]

export const githubProfile = {
  handle: '@Salma-bender',
  bio: 'SOC, SIEM, Threat Intelligence, SOAR et IA appliquée à la détection. Élève ingénieure en Sécurité IT.',
  stats: [
    { value: '6+', label: 'REPOS' },
    { value: '20+', label: 'COMMITS' },
    { value: '5', label: 'STARS' },
  ],
}

export type Repo = {
  name: string
  icon: string
  description: string
  lang: string
  langClass: 'python' | 'php' | 'js' | 'shell'
  stars: string
  href?: string
  upcoming?: boolean
}

export const repos: Repo[] = [
  {
    name: 'soc-platform-siem-cti-soar',
    icon: 'fas fa-satellite-dish',
    description:
      'Plateforme SOC complète (PFA Al Barid Bank) : Wazuh SIEM, MISP CTI, TheHive/Cortex/Shuffle SOAR. Kill chain AD et 7 règles MITRE ATT&CK.',
    lang: 'Python · PowerShell',
    langClass: 'python',
    stars: '—',
    href: 'https://github.com/Salma-bender/soc-platform-siem-cti-soar',
  },
  {
    name: 'pfsense-openvpn-suricata-lab',
    icon: 'fas fa-network-wired',
    description: 'Architecture segmentée : VPN client-to-site, PKI interne, IPS Suricata inline, durcissement Ubuntu.',
    lang: 'Réseau',
    langClass: 'shell',
    stars: '—',
    href: 'https://github.com/Salma-bender/pfsense-openvpn-suricata-lab',
  },
  {
    name: 'audit-durcissement-cis-windows11-fortigate',
    icon: 'fas fa-shield-alt',
    description: 'Audit et durcissement de Windows 11 et FortiGate selon les CIS Benchmarks et la DNSSI.',
    lang: 'PowerShell',
    langClass: 'shell',
    stars: '—',
    href: 'https://github.com/Salma-bender/audit-durcissement-cis-windows11-fortigate',
  },
  {
    name: 'Simulation-d-attaque-et-detection-d-intrusions',
    icon: 'fas fa-lock',
    description: "Lab SOC OCP : exploitation vsftpd 2.3.4 via Metasploit, supervision IDS avec Suricata et Zeek, corrélation d'IoC.",
    lang: 'Python',
    langClass: 'python',
    stars: '—',
    href: 'https://github.com/Salma-bender/Simulation-d-attaque-et-detection-d-intrusions',
  },
  {
    name: 'mpls-backbone-ospf-ldp-mpbgp',
    icon: 'fas fa-project-diagram',
    description: 'Backbone MPLS multi-sites : OSPF, LDP et MP-BGP VPNv4, sécurité IPsec, QoS et tolérance aux pannes.',
    lang: 'Réseau',
    langClass: 'shell',
    stars: '—',
    href: 'https://github.com/Salma-bender/mpls-backbone-ospf-ldp-mpbgp',
  },
  {
    name: 'cervical-cancer-detection',
    icon: 'fas fa-heartbeat',
    description: "Plateforme IA médicale sécurisée : AES-256, TLS 1.3, 2FA, audit trail, contrôle d'accès multi-rôles.",
    lang: 'PHP / Laravel',
    langClass: 'php',
    stars: '—',
    href: 'https://github.com/Salma-bender/cervical-cancer-detection',
  },
]
