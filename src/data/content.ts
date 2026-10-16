export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export type Tone = 'green' | 'amber' | 'purple'
export type Accent = 'cyan' | 'green' | 'amber' | 'purple' | 'gold' | 'silver'

export const profile = {
  name: 'Salma Bender',
  email: 'salmabenderpro@gmail.com',
  phoneDisplay: '+212 627 865 006',
  phoneHref: 'tel:+212627865006',
  linkedin: 'https://www.linkedin.com/in/salma-bender-1b3842321',
  linkedinLabel: 'salma-bender',
  github: 'https://github.com/Salma-bender',
  githubHandle: 'Salma-bender',
  cv: 'Salma_Bender_CV.pdf',
  photo: 'salmaphoto.jpeg',
}

export const navLinks = [
  { href: '#about', id: 'about', label: 'ABOUT' },
  { href: '#skills', id: 'skills', label: 'SKILLS' },
  { href: '#projects', id: 'projects', label: 'PROJECTS' },
  { href: '#competitions', id: 'competitions', label: 'CTF' },
  { href: '#certifications', id: 'certifications', label: 'CERTS' },
  { href: '#github', id: 'github', label: 'GITHUB' },
  { href: '#contact', id: 'contact', label: 'CONTACT' },
] as const

export const heroStats = [
  { value: '20+', label: 'SECURITY TOOLS' },
  { value: '2', label: 'CTF EVENTS' },
  { value: '6', label: 'CERTIFICATIONS' },
  { value: '4', label: 'MITRE ATT&CK RULES' },
]

export const floatingPills = [
  'SOC ANALYST',
  'PENETRATION TESTER',
  'SECURITY ENGINEER',
  '// BLUE TEAM',
  '// RED TEAM',
  '// DFIR',
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
    items: ['TheHive', 'Shuffle', 'pfSense', 'Wireshark', 'Zeek', 'Hashcat', 'Nmap', 'JavaScript'],
  },
]

export type TermLine =
  | { kind: 'cmd'; command: string }
  | { kind: 'out'; text: string; tone: 'cyan' | 'green' | 'amber' }
  | { kind: 'prompt' }

export const terminalLines: TermLine[] = [
  { kind: 'cmd', command: 'whoami' },
  { kind: 'out', text: 'Ingénieure InfoSec 5ème année — FSTG Marrakech', tone: 'cyan' },
  { kind: 'cmd', command: 'cat mission.txt' },
  { kind: 'out', text: 'Detect. Respond. Automate. Secure.', tone: 'green' },
  { kind: 'cmd', command: 'cat experience.log' },
  { kind: 'out', text: 'PFA Al Barid Bank · DRSSI Rabat — SOC Platform (SIEM+CTI+SOAR) — 2026', tone: 'amber' },
  { kind: 'out', text: 'Stage OCP Khouribga — IDS/NSM Attack & Detection — 2025', tone: 'amber' },
  { kind: 'cmd', command: 'ls skills/' },
  { kind: 'out', text: 'soc/  threat_intel/  soar/  pentest/  forensics/  network/', tone: 'amber' },
  { kind: 'prompt' },
]

export const aboutBadges = ['// BLUE TEAM', '// RED TEAM', '// DFIR', '// CTF PLAYER']

export const aboutParagraphs = [
  [
    'Élève ingénieure en ',
    { strong: '5ème année — Sécurité des Systèmes d\'Information' },
    ' à la FSTG Marrakech (Université Cadi Ayyad), spécialisée en ',
    { strong: 'cybersécurité défensive et offensive' },
    ' : SOC, SIEM, Threat Intelligence, SOAR, pentesting et investigation numérique.',
  ],
  [
    'Dans le cadre de mon ',
    { strong: 'PFA chez Al Barid Bank — DRSSI, Rabat' },
    ', j\'ai conçu et déployé une plateforme SOC complète intégrant Wazuh, MISP et un stack SOAR (TheHive + Cortex + Shuffle), avec simulation de kill chains Active Directory complètes mappées au framework MITRE ATT&CK.',
  ],
  [
    'Participante active aux compétitions ',
    { strong: 'Capture The Flag (CTF)' },
    ', notamment ST4F1T CTF (ENSA Marrakech 2025) et la compétition nationale ',
    { strong: 'MACC 2026' },
    ' organisée par la DGSSI & SecDojo — classée ',
    { strong: '#1 à la FSTG' },
    ' et ',
    { strong: '#62 nationale' },
    '.',
  ],
] as const

export const aboutHighlights = [
  { value: '5ème', label: 'ANNÉE INGÉNIERIE' },
  { value: '2', label: 'STAGES RÉALISÉS' },
  { value: '6', label: 'CERTIFICATIONS' },
]

export const aboutInfo: { label: string; value: string; accent?: boolean }[] = [
  { label: 'FORMATION', value: 'Génie Informatique — Sécurité' },
  { label: 'ÉTABLISSEMENT', value: 'FSTG — UCA Marrakech' },
  { label: 'PFA', value: 'Al Barid Bank · DRSSI' },
  { label: 'RÔLES VISÉS', value: 'SOC Analyst / Blue Team' },
  { label: 'DISPONIBILITÉ', value: 'Stage PFE — Fév. 2027', accent: true },
  { label: 'LANGUES', value: 'Français · Anglais · Arabe' },
]

export const skillCategories: { title: string; icon: string; tone?: Tone; tags: string[] }[] = [
  {
    title: 'SOC & SIEM',
    icon: 'fas fa-shield-alt',
    tags: ['Wazuh SIEM', 'Sysmon', 'MITRE ATT&CK', 'Alert Triage', 'Log Analysis', 'Règles de corrélation'],
  },
  {
    title: 'THREAT INTELLIGENCE',
    icon: 'fas fa-brain',
    tone: 'green',
    tags: ['MISP', 'IOC Management', 'CTI Feeds', 'STIX / TAXII', 'TLP Protocol'],
  },
  {
    title: 'SOAR & INCIDENT RESPONSE',
    icon: 'fas fa-bolt',
    tone: 'purple',
    tags: ['Shuffle', 'TheHive', 'Cortex', 'Playbooks', 'WinRM', 'Automated Response'],
  },
  {
    title: 'NETWORK SECURITY & NSM',
    icon: 'fas fa-network-wired',
    tags: ['pfSense', 'Suricata', 'OpenVPN', 'Wireshark', 'Zeek', 'Security Onion'],
  },
  {
    title: 'OFFENSIVE SECURITY',
    icon: 'fas fa-crosshairs',
    tone: 'amber',
    tags: ['GoPhish', 'Sliver C2', 'Impacket', 'Hashcat', 'Kerberoasting', 'Metasploit', 'Burp Suite', 'OWASP Top 10', 'Active Directory', 'Kali Linux'],
  },
  {
    title: 'DIGITAL FORENSICS & DFIR',
    icon: 'fas fa-search',
    tone: 'purple',
    tags: ['Autopsy', 'Volatility', 'Memory Analysis', 'Disk Forensics', 'Log Analysis', 'IoC Correlation'],
  },
  {
    title: 'CRYPTOGRAPHIE',
    icon: 'fas fa-lock',
    tone: 'green',
    tags: ['AES-256', 'RSA', 'Diffie-Hellman', 'SHA-256', 'TLS 1.3', 'CBC / CFB / ECB'],
  },
  {
    title: 'PROGRAMMATION',
    icon: 'fas fa-code',
    tags: ['Python', 'PowerShell', 'Bash', 'C', 'Java', 'PHP / Laravel', 'JavaScript', 'Docker'],
  },
  {
    title: 'SYSTÈMES & INFRA',
    icon: 'fas fa-server',
    tone: 'amber',
    tags: ['Linux / Kali', 'Windows', 'Docker', 'Git / GitHub', 'VirtualBox', 'UML / Merise'],
  },
]

export type Project = {
  title: string
  icon: string
  accent: 'cyan' | 'green' | 'amber'
  status: string
  featured?: boolean
  href?: string
  summary: string
  scenarios?: { lead: string; tone: 'cyan' | 'green'; text: string }[]
  techs: string[]
  footer: string
  footerTone?: 'amber' | 'dim'
}

export const projects: Project[] = [
  {
    title: 'PLATEFORME SOC : SIEM + THREAT INTELLIGENCE + SOAR',
    icon: 'fas fa-satellite-dish',
    accent: 'cyan',
    status: '● PFA — AL BARID BANK',
    featured: true,
    href: 'https://github.com/Salma-bender/soc-platform-siem-cti-soar',
    summary:
      "Conception et déploiement d'une plateforme SOC complète dans un environnement virtualisé simulant un réseau d'entreprise avec Active Directory (labsoc.local). Deux scénarios d'attaque simulés et détectés :",
    scenarios: [
      {
        lead: 'Scénario 1',
        tone: 'cyan',
        text: 'Force brute SSH avec réponse automatisée (Wazuh → Shuffle → blocage IP pfSense via Cortex).',
      },
      {
        lead: 'Scénario 2',
        tone: 'green',
        text: 'Kill Chain AD complète : Phishing (GoPhish) → C2 Sliver → Persistance → Kerberoasting — 3 phases détectées via règles personnalisées mappées au framework MITRE ATT&CK.',
      },
    ],
    techs: ['Wazuh', 'MISP', 'TheHive', 'Cortex', 'Shuffle', 'Sysmon', 'pfSense', 'Active Directory', 'Docker', 'GoPhish', 'Sliver C2', 'Impacket', 'Hashcat', 'MITRE ATT&CK'],
    footer: 'DRSSI · Al Barid Bank · Rabat · 2026',
    footerTone: 'amber',
  },
  {
    title: "ATTAQUE & DÉTECTION D'INTRUSIONS — Groupe OCP",
    icon: 'fas fa-shield-virus',
    accent: 'cyan',
    status: '● RÉALISÉ',
    href: 'https://github.com/Salma-bender/Simulation-d-attaque-et-detection-d-intrusions',
    summary:
      "Stage chez Groupe OCP Khouribga : lab virtuel sécurisé (Kali Linux + Metasploitable 2 + Security Onion), scénario d'attaque complet via Nmap → exploitation vsftpd 2.3.4, supervision IDS/NSM avec Suricata & Zeek, corrélation d'alertes et identification des IoC.",
    techs: ['Kali Linux', 'Metasploit', 'Nmap', 'Suricata', 'Zeek', 'Security Onion', 'IoC Analysis'],
    footer: 'Stage OCP · 2025',
  },
  {
    title: 'RÉSEAU MPLS MULTI-SITES SÉCURISÉ',
    icon: 'fas fa-network-wired',
    accent: 'cyan',
    status: '● RÉALISÉ',
    href: 'https://github.com/Salma-bender/mpls-backbone-ospf-ldp-mpbgp',
    summary:
      "Conception et déploiement d'un backbone MPLS de 6 routeurs (PE et P) reliant 3 sites clients. J'ai mis en place le routage OSPF, la distribution de labels LDP et l'échange de routes VPNv4 entre PE via MP-BGP. Le projet inclut une analyse approfondie de la sécurité MPLS (IPsec, authentification), de la QoS et de la tolérance aux pannes (Fast Reroute).",
    techs: ['MPLS', 'OSPF', 'LDP', 'BGP', 'VPN L3', 'Sécurité réseau'],
    footer: 'Réseau · 2026',
  },
  {
    title: 'AUDIT & DURCISSEMENT — WINDOWS 11 & FORTIGATE',
    icon: 'fas fa-shield-alt',
    accent: 'amber',
    status: '● RÉALISÉ',
    href: 'https://github.com/Salma-bender/audit-durcissement-cis-windows11-fortigate',
    summary:
      "Audit de configuration et durcissement d'un poste Windows 11 et d'un pare-feu FortiGate selon les CIS Benchmarks, la DNSSI et la loi 05-20. Conformité portée de 25 % à 85 % sur Windows 11 et de 8,9 % à 80,4 % sur FortiGate.",
    techs: ['Windows 11', 'FortiGate', 'Kali Linux', 'Hydra', 'Nmap', 'PowerShell', 'VMware'],
    footer: 'CIS Benchmarks · DNSSI',
  },
  {
    title: 'BLOCKCHAIN & HASHCHAIN SECURITY',
    icon: 'fas fa-link',
    accent: 'green',
    status: '● TERMINÉ',
    summary:
      "Mini-blockchain avec Proof of Work (PoW), vérification d'intégrité des blocs et simulation d'une attaque 51%. Interface graphique interactive avec visualisation temps réel.",
    techs: ['JavaScript ES6', 'Web Crypto API', 'SHA-256', 'HTML5', 'Tailwind CSS', 'Git'],
    footer: 'Sécurité · 2025',
  },
  {
    title: 'CERVICALCARE — AI + SECURE PLATFORM',
    icon: 'fas fa-heartbeat',
    accent: 'cyan',
    status: '● TERMINÉ',
    href: 'https://github.com/Salma-bender/cervical-cancer-detection',
    summary:
      "Plateforme IA de détection du cancer du col de l'utérus. Sécurisation : chiffrement AES-256, HTTPS/TLS 1.3, contrôle d'accès multi-rôles, authentification 2FA, audit trail complet (CIA triad).",
    techs: ['Laravel 10', 'TensorFlow', 'AES-256', 'TLS 1.3', '2FA', 'MySQL 8'],
    footer: 'IA · Sécurité · 2025',
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
      { value: '#1', label: 'FSTG' },
      { value: '#62', label: 'GLOBAL' },
      { value: '1068', label: 'ÉQUIPES' },
    ],
  },
]

export const ctfAchievements = [
  { value: '2', label: 'CTF EVENTS' },
  { value: '#1', label: 'MEILLEUR RANG' },
  { value: '60+', label: 'ROOMS TRYHACKME' },
  { value: 'Top 8%', label: 'TRYHACKME GLOBAL' },
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
  { name: 'SOC Level 1', issuer: 'TRYHACKME', icon: 'fas fa-satellite-dish', accent: 'cyan', badge: '✓ COMPLÉTÉ', badgeTone: 'done', url: 'https://tryhackme.com/certificate/THM-K1SJW9LA9H' },
  { name: 'Digital Forensics & Incident Response', issuer: 'TRYHACKME', icon: 'fas fa-search', accent: 'green', badge: 'DFIR PATH' },
  { name: 'Cybersecurity 101', issuer: 'TRYHACKME', icon: 'fas fa-shield-alt', accent: 'silver', badge: 'PARCOURS', url: 'https://tryhackme.com/certificate/THM-NKHE0MAIYY' },
  { name: 'Git and GitHub', issuer: '365 DATA SCIENCE', icon: 'fab fa-github', accent: 'green', badge: '✓ COMPLÉTÉ', badgeTone: 'done', url: 'https://learn.365datascience.com/certificates/CC-C4CE272CB1/' },
  { name: 'Junior Pentester', issuer: 'TRYHACKME', icon: 'fas fa-user-ninja', accent: 'amber', badge: 'EN COURS', badgeTone: 'progress' },
]

export const ctfPlatforms = [
  {
    name: 'TRYHACKME',
    lines: [
      ['Rank:', '#Top 8%'],
      ['Rooms:', '+60'],
      ['SOC Level 1:', '✓ Complété'],
    ],
  },
  {
    name: 'COMPETITIONS',
    lines: [
      ['CTFs:', '2'],
      ['Best:', 'Top 16'],
      ['National:', 'MACC 2026'],
    ],
  },
]

export const githubProfile = {
  handle: '@Salma-bender',
  bio: 'Sécurité offensive & défensive, CTF, pentest API, forensics. Ingénieure InfoSec en devenir.',
  stats: [
    { value: '5++', label: 'REPOS' },
    { value: '20', label: 'COMMITS' },
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
    name: 'soc-platform-wazuh-misp-soar',
    icon: 'fas fa-satellite-dish',
    description:
      'Plateforme SOC complète (PFA Al Barid Bank) : Wazuh SIEM, MISP CTI, TheHive/Cortex/Shuffle SOAR. Kill Chain AD avec GoPhish, Sliver, Kerberoasting — règles MITRE ATT&CK personnalisées.',
    lang: 'Python · PowerShell',
    langClass: 'python',
    stars: 'Publication prévue',
    href: 'https://github.com/Salma-bender/soc-platform-siem-cti-soar',
    upcoming: true,
  },
  {
    name: 'ocp-attack-detection-lab',
    icon: 'fas fa-lock',
    description: 'Lab virtuel OCP : scan Nmap, exploitation vsftpd 2.3.4 via Metasploit, supervision IDS avec Suricata & Zeek, corrélation d\'IoCs.',
    lang: 'Python',
    langClass: 'python',
    stars: '—',
    href: 'https://github.com/Salma-bender/Simulation-d-attaque-et-detection-d-intrusions',
  },
  {
    name: 'blockchain-hashchain-security',
    icon: 'fas fa-lock',
    description: "Mini-blockchain avec PoW, simulation d'attaque 51%, vérification d'intégrité et interface graphique interactive.",
    lang: 'JavaScript',
    langClass: 'js',
    stars: '—',
  },
  {
    name: 'cervicalcare-secure-platform',
    icon: 'fas fa-lock',
    description: "Plateforme IA médicale sécurisée : AES-256, TLS 1.3, 2FA, audit trail, contrôle d'accès multi-rôles.",
    lang: 'PHP / Laravel',
    langClass: 'php',
    stars: '—',
    href: 'https://github.com/Salma-bender/cervical-cancer-detection',
  },
  {
    name: 'audit-durcissement-cis-windows11-fortigate',
    icon: 'fas fa-shield-alt',
    description:
      'Audit de configuration et durcissement de Windows 11 et FortiGate selon CIS Benchmarks, DNSSI et loi 05-20.',
    lang: 'PowerShell',
    langClass: 'shell',
    stars: '—',
    href: 'https://github.com/Salma-bender/audit-durcissement-cis-windows11-fortigate',
  },
  {
    name: 'mpls-backbone-ospf-ldp-mpbgp',
    icon: 'fas fa-network-wired',
    description:
      'Backbone MPLS multi-sites : OSPF, LDP et MP-BGP VPNv4, avec étude de la sécurité (IPsec), de la QoS et de la tolérance aux pannes.',
    lang: 'Réseau',
    langClass: 'shell',
    stars: '—',
    href: 'https://github.com/Salma-bender/mpls-backbone-ospf-ldp-mpbgp',
  },
]

export const marqueeItems = [
  ...new Set([
    ...skillCategories.flatMap((category) => category.tags),
    ...certifications.map((cert) => cert.name),
  ]),
]
