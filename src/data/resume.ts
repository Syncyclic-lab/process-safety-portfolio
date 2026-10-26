/**
 * Single source of truth for every word on the site and the printable resume.
 *
 * EVERYTHING BELOW IS SAMPLE CONTENT. Replace it with your own details;
 * no component needs to change when you do.
 */

export type Equipment = 'exchanger' | 'vessel' | 'column' | 'reactor' | 'tank';

export interface Role {
  /** P&ID-style tag shown under the equipment symbol, e.g. "R-401". */
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
}

export const profile = {
  name: 'Your Name',
  postNominals: 'P.E.',
  headline: 'Process Safety Engineer',
  disciplines: ['Process safety', 'EHS', 'Process engineering'],
  pitch:
    'I help chemical, pharmaceutical, and manufacturing sites find and control process hazards. I lead PHAs, run PSM programs, and turn study findings into engineering changes that hold up on the plant floor.',
  status: 'Open to new roles',
  location: 'City, ST',
  relocation: 'Open to relocation',
  workMode: 'On-site or hybrid',
  experience: '8+ years',
  industries: ['Specialty chemicals', 'Pharmaceuticals', 'Manufacturing'],
  focus: ['PSM and RMP', 'PHA and HAZOP', 'LOPA', 'MOC', 'Combustible dust'],
  credentials: ['PE (Chemical)', 'CSP', 'CCPSC'],
  email: 'you@example.com',
  phone: '(555) 555-0100',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  /** Put a PDF in /public (e.g. "resume.pdf") and set its name here. Until then the button opens the printable resume page. */
  resumePdf: null as string | null,
  /** Shown in the footer and on the data sheet. */
  updated: 'October 2026',
  sourceRepo: 'https://github.com/Syncyclic-lab',
};

export const metrics: Metric[] = [
  { tag: 'EXP', value: '8+', label: 'Years in industry', note: 'Chemical, pharma, and manufacturing' },
  { tag: 'PHA', value: '40+', label: 'PHAs facilitated', note: 'HAZOP, What-If, and checklist' },
  { tag: 'MOC', value: '300+', label: 'MOCs reviewed', note: 'Technical and safety review' },
  { tag: 'RCA', value: '25+', label: 'Incident investigations', note: 'Root cause and corrective action' },
];

/** Education feeds the left end of the career flow diagram. */
export const education = [
  {
    degree: 'B.S. Chemical Engineering',
    school: 'University name',
    year: '2015',
    note: 'Honors, minor, or relevant coursework (optional)',
  },
];

/** Newest first. The career flow draws them oldest to newest, left to right. */
export const roles: Role[] = [
  {
    tag: 'R-401',
    equipment: 'reactor',
    title: 'Senior Process Safety Engineer',
    company: 'Specialty Chemicals Manufacturer',
    industry: 'Specialty chemicals',
    location: 'City, ST',
    start: '2022',
    end: 'Present',
    summary:
      'Process safety lead for a batch and continuous chemical site covered by OSHA PSM and EPA RMP Program 3.',
    highlights: [
      'Led the five-year PHA revalidation for 6 process units and closed 140+ recommendations on schedule.',
      'Built a reactive chemical screening program (DSC and ARC) that is now required before any new batch recipe is approved.',
      'Cut average MOC cycle time from 34 to 19 days by redesigning the review workflow with operations.',
      'Mentor two engineers in LOPA facilitation and incident investigation.',
    ],
    focus: ['PHA revalidation', 'LOPA', 'Reactive chemicals', 'RMP'],
  },
  {
    tag: 'C-301',
    equipment: 'column',
    title: 'Process Safety Engineer',
    company: 'Pharmaceutical API Manufacturer',
    industry: 'Pharmaceuticals',
    location: 'City, ST',
    start: '2019',
    end: '2022',
    summary:
      'Hazard analysis and process safety support for a multi-product active pharmaceutical ingredient (API) plant.',
    highlights: [
      'Facilitated HAZOPs for 12 new product introductions during tech transfer from R&D to commercial scale.',
      'Completed hazardous area classification for solvent handling areas, resolving 3 open insurer findings.',
      'Developed an electrostatic hazard program for solvent transfers, reactor charging, and drumming.',
    ],
    focus: ['HAZOP', 'Tech transfer', 'Area classification', 'Static hazards'],
  },
  {
    tag: 'V-201',
    equipment: 'vessel',
    title: 'EHS Engineer',
    company: 'Industrial Manufacturing Plant',
    industry: 'Manufacturing',
    location: 'City, ST',
    start: '2017',
    end: '2019',
    summary:
      'EHS engineering for a high-volume manufacturing plant with combustible dust and chemical storage hazards.',
    highlights: [
      "Completed the site's first dust hazard analysis to NFPA 652 and managed the resulting capital projects.",
      'Rewrote lockout/tagout and permit-to-work procedures; the recordable rate fell 38% over two years.',
      'Maintained Title V air permit and SPCC plan compliance with zero notices of violation.',
    ],
    focus: ['Combustible dust', 'DHA', 'Permitting', 'LOTO'],
  },
  {
    tag: 'E-101',
    equipment: 'exchanger',
    title: 'Process Engineer',
    company: 'Chemical Manufacturing Company',
    industry: 'Chemicals',
    location: 'City, ST',
    start: '2015',
    end: '2017',
    summary:
      'Process engineering for two production units: troubleshooting, debottlenecking, and process safety information.',
    highlights: [
      'Updated P&IDs and process safety information for two units ahead of a PSM compliance audit.',
      'Sized relief devices for an exchanger train re-rate and documented the relief design basis.',
      'Improved distillation yield 4% through operating changes validated in Aspen Plus.',
    ],
    focus: ['P&IDs', 'Relief sizing', 'Aspen Plus', 'PSI'],
  },
];

export const capabilities: Capability[] = [
  {
    tag: 'HAZ',
    title: 'Hazard analysis',
    summary: 'Leading and documenting structured hazard reviews from concept through operation.',
    items: ['HAZOP', 'What-If / checklist', 'FMEA', 'LOPA', 'Bow-tie', 'SIL determination (IEC 61511)'],
  },
  {
    tag: 'PSM',
    title: 'PSM and RMP programs',
    summary: 'Running the elements that keep a covered process compliant and under control.',
    items: ['OSHA 1910.119', 'EPA RMP (40 CFR 68)', 'Management of change', 'PSSR', 'Mechanical integrity', 'Compliance audits'],
  },
  {
    tag: 'CHM',
    title: 'Chemical and dust hazards',
    summary: 'Characterizing the hazards that come from chemistry, powders, and solvents.',
    items: ['Reactive chemical screening', 'Calorimetry (DSC, ARC)', 'Dust hazard analysis (NFPA 652)', 'Area classification', 'Electrostatic hazards', 'Relief system design'],
  },
  {
    tag: 'EHS',
    title: 'EHS and compliance',
    summary: 'Practical programs that protect people and satisfy regulators.',
    items: ['OSHA general industry', 'Incident investigation and RCA', 'Permit to work and LOTO', 'Air and water permitting', 'ISO 45001 / 14001', 'Training development'],
  },
  {
    tag: 'PRC',
    title: 'Process engineering',
    summary: 'The engineering foundation behind every safety decision.',
    items: ['P&ID development', 'Heat and material balances', 'Scale-up and tech transfer', 'Process simulation', 'Troubleshooting'],
  },
  {
    tag: 'SFT',
    title: 'Software',
    summary: 'Tools used day to day.',
    items: ['PHA-Pro', 'Aspen Plus', 'ALOHA', 'AutoCAD Plant 3D', 'Power BI', 'Python', 'Excel / VBA'],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    tag: 'Case 01',
    industry: 'Specialty chemicals',
    title: 'Site-wide PHA revalidation',
    situation:
      'Six PSM-covered units were due for five-year revalidation, with 90 recommendations still open from the previous cycle.',
    action:
      'Built a risk-ranked schedule, facilitated the HAZOP and LOPA sessions, and set up a tracker that gave every recommendation an owner and a due date.',
    result: { value: '90 → 12', label: 'open recommendations, with every revalidation completed on schedule' },
  },
  {
    tag: 'Case 02',
    industry: 'Manufacturing',
    title: 'First dust hazard analysis',
    situation:
      'The plant handled combustible powders but had never completed the dust hazard analysis required by NFPA 652.',
    action:
      'Had the dusts tested, assessed each process and building compartment, and prioritized fixes such as explosion venting, isolation, and housekeeping.',
    result: { value: '$1.2M', label: 'capital plan approved and delivered over two budget cycles' },
  },
  {
    tag: 'Case 03',
    industry: 'Pharmaceuticals',
    title: 'Hazard reviews built into tech transfer',
    situation:
      'New products were moving from R&D to commercial scale with hazard reviews happening too late to change the design.',
    action:
      'Introduced staged reviews: chemistry screening at lab scale, HAZOP at pilot scale, and a pre-startup safety review at commercial scale.',
    result: { value: '12', label: 'product introductions started up with no process safety incidents' },
  },
];

export const certifications = [
  { name: 'Professional Engineer (PE), Chemical', issuer: 'State board of licensure', year: '2020' },
  { name: 'Certified Safety Professional (CSP)', issuer: 'BCSP', year: '2021' },
  { name: 'CCPS Certified Process Safety Professional (CCPSC)', issuer: 'AIChE CCPS', year: '2022' },
];

export const training = [
  'HAZOP leader training',
  'LOPA facilitator training',
  'OSHA 30-hour general industry',
  'Root cause analysis (TapRooT)',
  'NFPA 652 combustible dust',
];

/** The "About" section, laid out as an engineering data sheet. */
export const dataSheet = {
  docNo: 'PSE-DS-001',
  rev: '0',
  profile:
    'Process safety engineer with a chemical engineering background and eight years across specialty chemicals, pharmaceutical API production, and industrial manufacturing. My work sits where engineering, operations, and compliance meet: identifying what can go wrong, deciding which safeguards are enough, and making sure the fixes actually get built.',
  approach: [
    {
      title: 'Verify in the field',
      text: 'I walk the unit before I sign off on a drawing or a study. The findings that matter most usually come from the plant floor.',
    },
    {
      title: 'Recommendations people can act on',
      text: 'Every recommendation is risk-ranked, specific, and assigned to an owner with a date, so it gets closed instead of filed.',
    },
    {
      title: 'Work with operations, not around them',
      text: 'Operators and maintenance technicians know the process best. I bring them into reviews early and keep them there.',
    },
  ],
  preferences: [
    { label: 'Target roles', value: 'Process safety engineer, PSM lead, EHS engineer' },
    { label: 'Industries', value: 'Chemicals, pharmaceuticals, manufacturing' },
    { label: 'Work mode', value: 'On-site or hybrid' },
    { label: 'Travel', value: 'Up to 25%' },
    { label: 'Location', value: 'City, ST · open to relocation' },
  ],
};
