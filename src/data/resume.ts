/**
 * Single source of truth for every word on the site and the printable resume.
 * Components only read from here, so content edits never touch layout code.
 *
 * This is a public page: employer-specific details (incident counts, headcount,
 * inventory strategy) stay on the private Word resume, not here.
 */

export type Equipment = 'exchanger' | 'vessel' | 'column' | 'reactor' | 'tank';

export interface Role {
  /** P&ID-style tag shown under the equipment symbol, e.g. "R-201". */
  tag: string;
  /** Which P&ID symbol represents this role in the career flow. */
  equipment: Equipment;
  title: string;
  company: string;
  industry: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
  focus: string[];
}

export interface Metric {
  tag: string;
  value: string;
  label: string;
  note: string;
}

export interface Capability {
  tag: string;
  title: string;
  summary: string;
  items: string[];
}

export interface CaseStudy {
  tag: string;
  industry: string;
  title: string;
  situation: string;
  action: string;
  result: { value: string; label: string };
  link?: { label: string; href: string };
}

export interface Training {
  name: string;
  issuer?: string;
  year?: string;
}

export const profile = {
  name: 'Kyle Crosby',
  postNominals: '',
  headline: 'Process Safety Engineer',
  disciplines: ['Process safety', 'EHS', 'Process engineering'],
  pitch:
    'I run process safety and EHS for a PSM-covered Ecolab chemical manufacturing site, from MOC and PSSR to mechanical integrity, incident investigation, and site training. Before that, I led 100+ PHAs across 30+ facilities as a process safety consultant.',
  /** Two-line summary used at the top of the printable resume. */
  summary:
    'Process safety engineer with nearly five years of PSM, EHS, and hazard analysis experience across 30+ facilities, now the sole process safety and EHS lead for a PSM-covered Ecolab manufacturing site.',
  /** Status line above the name: current role, then context. */
  status: 'Process Safety Engineer at Ecolab',
  statusDetails: ['Chemical manufacturing', 'Southern California'],
  location: 'Southern California',
  /** The candidate-summary panel in the hero. */
  facts: [
    { label: 'Role', value: 'Process Safety Engineer, Ecolab' },
    { label: 'Experience', value: 'Nearly 5 years (since 2022)' },
    { label: 'Scope', value: 'All 14 PSM elements · EHS · Process engineering support' },
    { label: 'Focus', value: 'PHA · MOC · PSSR · MI and RBI · Incident investigation' },
    { label: 'Background', value: '30+ facilities across chemical, water, ammonia refrigeration, and aerospace' },
    { label: 'Training', value: '40-hour HAZWOPER · HAZOP · LOPA' },
    { label: 'Location', value: 'Southern California' },
  ],
  focus: ['Process Safety Management', 'Process hazard analysis', 'Management of change', 'Mechanical integrity', 'Risk-based inspection'],
  email: 'kylemcrosby@gmail.com',
  /** Not shown on the public site. */
  phone: null as string | null,
  linkedin: 'https://www.linkedin.com/in/kylemcrosby',
  /** Put a PDF in /public (e.g. "resume.pdf") and set its name here. Until then the button opens the printable resume page. */
  resumePdf: null as string | null,
  /** Shown in the footer and on the data sheet. */
  updated: 'October 2026',
  sourceRepo: 'https://github.com/Syncyclic-lab/process-safety-portfolio',
};

export const metrics: Metric[] = [
  { tag: 'PHA', value: '200+', label: 'PHAs participated in', note: '100+ led as facilitator' },
  { tag: 'FAC', value: '30+', label: 'Facilities assessed', note: 'Chemical, water, ammonia, aerospace' },
  { tag: 'AUD', value: '20+', label: 'Compliance audits', note: 'PSM, RMP, and CalARP' },
  { tag: 'PSM', value: '14', label: 'PSM elements owned', note: 'Sole process safety lead on site' },
];

/** Education feeds the left end of the career flow diagram. */
export const education = [
  {
    degree: 'B.S. Chemical Engineering',
    school: 'California State University, Long Beach',
    schoolShort: 'CSULB',
    year: '2021',
    note: 'Minor in Environmental Engineering',
  },
];

/** Newest first. The career flow draws them oldest to newest, left to right. */
export const roles: Role[] = [
  {
    tag: 'R-201',
    equipment: 'reactor',
    title: 'Process Safety Engineer',
    company: 'Ecolab',
    industry: 'Chemical manufacturing',
    location: 'Carson, CA',
    start: 'Jun 2024',
    end: 'Present',
    summary:
      'Sole process safety engineer and EHS lead for a PSM-covered chemical manufacturing site, with process engineering support.',
    highlights: [
      'Own all 14 OSHA PSM elements for the site.',
      'Built a RAGAGEP-compliant risk-based inspection (RBI) program from scratch, and overhauled the mechanical integrity, hot work, and emergency response programs.',
      'Coordinate and approve 10–20 MOCs per year, lead every PSSR, and have facilitated 10 What-If analyses.',
      'Lead incident and near-miss investigations using 5-Why, TapRooT, and fishbone analysis.',
      'Prepare the site for CUPA, South Coast AQMD, Responsible Care, and internal PSM audits.',
      'Train the full site workforce every month on EHS and PSM topics.',
      'Support process engineering, including a deaerator tank replacement, relief device evaluations, and API 2000 tank vent sizing.',
    ],
    focus: ['PSM', 'RBI', 'MOC and PSSR', 'Incident investigation', 'EHS'],
  },
  {
    tag: 'C-101',
    equipment: 'column',
    title: 'Project Engineer',
    company: 'Risk Management Professionals',
    industry: 'Process safety consulting',
    location: 'Irvine, CA',
    start: 'Feb 2022',
    end: 'Jun 2024',
    summary:
      'Process safety consulting across 30+ facilities in chemical manufacturing, water and wastewater treatment, ammonia refrigeration, aerospace, and CO2 capture.',
    highlights: [
      'Led 100+ and participated in 200+ PHAs (HAZOP, What-If, checklist, LOPA).',
      'Conducted 20+ PSM, RMP, and CalARP compliance audits and authored 5 RMP/CalARP plans with offsite consequence analyses.',
      'Field-verified P&IDs at 2 facilities and wrote hazard evaluation and audit reports for regulators and clients.',
      'Coordinated with EPA, CUPA, and OSHA on client corrective actions, and supported incident investigations and EPA release notifications.',
    ],
    focus: ['HAZOP', 'LOPA', 'Compliance audits', 'RMP / CalARP', 'Dispersion modeling'],
  },
];

export const capabilities: Capability[] = [
  {
    tag: 'HAZ',
    title: 'Hazard analysis',
    summary: 'Facilitating and documenting structured hazard reviews.',
    items: ['HAZOP', 'What-If', 'Checklist', 'LOPA', 'Dispersion modeling', 'Offsite consequence analysis'],
  },
  {
    tag: 'PSM',
    title: 'PSM programs',
    summary: 'Running every element of a covered process, day to day.',
    items: ['OSHA 1910.119', 'Management of change', 'PSSR', 'Mechanical integrity', 'Risk-based inspection', 'RAGAGEP', 'Hot work', 'Emergency response'],
  },
  {
    tag: 'REG',
    title: 'Regulatory compliance',
    summary: 'Preparing sites for the agencies and programs that audit them.',
    items: ['EPA RMP', 'CalARP', 'CUPA', 'South Coast AQMD', 'Responsible Care', 'Compliance audits', 'Release reporting'],
  },
  {
    tag: 'INV',
    title: 'Investigation and training',
    summary: 'Finding root causes and keeping the whole site trained.',
    items: ['5-Why', 'TapRooT', 'Fishbone', 'Near-miss investigation', 'Site EHS and PSM training'],
  },
  {
    tag: 'PRC',
    title: 'Process engineering',
    summary: 'The engineering behind the safety decisions.',
    items: ['Relief device evaluation', 'API 2000 tank venting', 'P&ID field verification', 'Equipment replacement projects'],
  },
  {
    tag: 'SFT',
    title: 'Software',
    summary: 'Tools used day to day, including AI.',
    items: ['PHA-Pro', 'ALOHA', 'SAP', 'Intelex', 'VelocityEHS', 'AI-assisted development', 'Microsoft Office'],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    tag: 'Case 01',
    industry: 'Chemical manufacturing',
    title: 'Risk-based inspection program',
    situation:
      'Mechanical integrity on a PSM-covered site depends on inspection intervals that are justified, documented, and consistent with RAGAGEP.',
    action:
      'Built the site’s risk-based inspection program from scratch and overhauled the mechanical integrity program around it.',
    result: { value: 'RBI', label: 'program built from scratch and fully compliant with RAGAGEP' },
  },
  {
    tag: 'Case 02',
    industry: 'Process safety consulting',
    title: 'PHA leadership across 30+ facilities',
    situation:
      'Clients in chemical manufacturing, water treatment, ammonia refrigeration, aerospace, and CO2 capture needed PHAs, audits, and risk management plans.',
    action:
      'Facilitated HAZOP, What-If, checklist, and LOPA studies, conducted compliance audits, and authored RMP/CalARP plans with offsite consequence analysis.',
    result: { value: '100+', label: 'PHAs led, out of 200+ participated in' },
  },
  {
    tag: 'Case 03',
    industry: 'Engineering tool',
    title: 'API 2000 venting calculator',
    situation:
      'Tank venting checks under API Std 2000 involve many tables, factors, and edge cases that are easy to get wrong by hand.',
    action:
      'Built a browser-based calculator with AI-assisted coding: normal and emergency venting, DIERS two-phase onset, and flame arrestor pressure drop, backed by automated regression tests.',
    result: { value: 'API 2000', label: '7th Edition methods in a tested, shareable web tool' },
    link: { label: 'Open the calculator', href: 'https://syncyclic-lab.github.io/API-2000/' },
  },
];

/** Engineering projects listed on the printable resume. */
export const projects = [
  {
    name: 'API 2000 Venting Calculator',
    link: 'syncyclic-lab.github.io/API-2000',
    href: 'https://syncyclic-lab.github.io/API-2000/',
    description:
      'Built a web calculator for normal and emergency tank venting per API Std 2000 (7th Ed.), including DIERS two-phase and flame arrestor checks with automated regression tests; developed with AI-assisted coding.',
  },
];

/** Compact skills rows for the one-page printable resume (mirrors the Word resume). */
export const resumeSkills: [string, string][] = [
  [
    'Process safety',
    'OSHA PSM (29 CFR 1910.119), EPA RMP / CalARP, PHA (HAZOP, What-If, Checklist, LOPA), MOC, PSSR, Mechanical Integrity and RBI, RAGAGEP, Incident Investigation (5-Why, TapRooT, Fishbone), Relief and Tank Vent Sizing, Dispersion Modeling',
  ],
  ['Training', '40-Hour HAZWOPER, HAZOP and LOPA Training, Ecolab Process Safety Qualified, First Aid / CPR'],
  ['Software', 'PHA-Pro, ALOHA, SAP, Intelex, VelocityEHS, AI-assisted development tools, Microsoft Office'],
];

export const training: Training[] = [
  { name: '40-Hour HAZWOPER' },
  { name: 'HAZOP training' },
  { name: 'LOPA training' },
  { name: 'Process Safety Qualified', issuer: 'Ecolab' },
  { name: 'First Aid / CPR' },
];

/** The "About" section, laid out as an engineering data sheet. */
export const dataSheet = {
  docNo: 'PSE-DS-001',
  rev: '1',
  profile:
    'Chemical engineer (CSULB, 2021) working in process safety since 2022. I spent two and a half years consulting across 30+ facilities, leading PHAs, audits, and risk management plans, and now run process safety and EHS for a PSM-covered Ecolab site. I like building programs that hold up to an audit and tools that make the engineering faster to check.',
  approach: [
    {
      title: 'Programs that hold up to audit',
      text: 'An RBI program built from scratch, and rebuilt mechanical integrity, hot work, and emergency response programs, all measured against RAGAGEP.',
    },
    {
      title: 'Train the whole site',
      text: 'Every person on site gets EHS and PSM training every month, so safety knowledge does not sit with one engineer.',
    },
    {
      title: 'Use AI to work faster',
      text: 'I use AI-assisted development to build engineering tools, like the API 2000 venting calculator, and this site.',
    },
  ],
  current: [
    { label: 'Company', value: 'Ecolab' },
    { label: 'Since', value: 'June 2024' },
    { label: 'Site', value: 'PSM-covered chemical manufacturing' },
    { label: 'Scope', value: 'PSM, EHS, and process engineering support' },
  ],
  site:
    'Designed and built with Claude Code, an AI coding assistant: a static Astro site with P&ID-style components, light and dark themes, a printable resume generated from the same data, and automatic deployment to GitHub Pages.',
};
