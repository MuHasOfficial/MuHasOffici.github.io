import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "hasp-stratospheric-payload",
    companyName: "NASA PSGC / Drexel HERA Collaboration",
    type: "Professional",
    category: ["CAD Modeling", "FEA / Stress Analysis", "Hardware Engineering"],
    shortDescription:
      "Designed high-altitude stratospheric balloon payload hardware and 10G shock-resistant tungsten mounting stacks for cosmic ray research.",
    techStack: [
      "SolidWorks",
      "Finite Element Analysis (FEA)",
      "High-G Payload Design"
    ],
    startDate: new Date("2026-09-01"),
    endDate: new Date("2026-10-01"),
    companyLogoImg: "/projects/portfolio/logo.png",
    pagesInfoArr: [
      {
        title: "Tungsten Mounting Stacks",
        description:
          "High-G shock-resistant tungsten payload mounting configurations designed to withstand extreme flight and landing loads.",
        imgArr: ["/profile-img.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Collaborated with the HERA (High-Altitude Engineering for Research in Astrophysics) team alongside Drexel University and NASA PSGC.",
        "Focused on high-altitude balloon equipment design, structural integrity, and tungsten payload mounting stack specifications under rigorous 10G shock loads.",
      ],
      bullets: [
        "Modeled and simulated 10G shock-resistant tungsten mounting stacks in SolidWorks for stratospheric balloon payloads.",
        "Evaluated mechanical stresses and structural assembly constraints for high-altitude cosmic ray research instruments.",
        "Co-authored collaboration documentation and mechanical stress specifications under extreme thermal and kinetic environments.",
      ],
    },
  },
  {
    id: "drone-recovery-team",
    companyName: "Drone Engineering Group Project",
    type: "Professional",
    category: ["Hardware Engineering", "Mechatronics", "Drone Operations"],
    shortDescription:
      "Directed task delegation and operational testing protocols for an engineering group project involving FAA compliance and DJI GO 4 integration.",
    techStack: [
      "Mechatronics & Embedded Systems",
      "Drone Operations & Field Recovery",
      "Rapid Prototyping & 3D Printing"
    ],
    startDate: new Date("2026-08-01"),
    endDate: new Date("2026-08-30"),
    companyLogoImg: "/projects/convot/logo.png",
    pagesInfoArr: [
      {
        title: "Field Testing & Recovery",
        description:
          "Structured testing sequences and team task assignments for field flight trials and hardware recovery workflows.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Directed operational testing protocols and task delegation as the lead of an engineering group project.",
        "Managed flight testing workflows, regulatory compliance, and hardware recovery systems under tight field conditions.",
      ],
      bullets: [
        "Managed FAA DroneZone regulatory registration and legal flight clearance protocols.",
        "Integrated DJI GO 4 flight software systems with onboard telemetry and recovery hardware.",
        "Structured comprehensive field testing sequences and team task assignments to ensure safe equipment retrieval.",
      ],
    },
  },
  {
    id: "peco-fin-optimization",
    companyName: "PECO - Fix It Now (FIN) Department",
    type: "Professional",
    category: ["Data Automation", "Mechanical Engineering", "Process Optimization"],
    shortDescription:
      "Designed an automated Excel master data tracking system, dynamic pivot tables, and presentation materials to optimize field maintenance operations.",
    techStack: [
      "Excel & Master Data Automation",
      "Engineering Design & Optimization"
    ],
    startDate: new Date("2026-08-01"),
    endDate: new Date("2026-09-30"),
    companyLogoImg: "/projects/niya/logo.png",
    pagesInfoArr: [
      {
        title: "Master Data Dashboard",
        description:
          "Automated job tracking sheets and pivot tables built to streamline maintenance dispatch and operational efficiency.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed automated master data tracking systems and operational reporting workflows during my time at the PECO Fix It Now (FIN) department.",
        "Focused on reducing operational friction, tracking maintenance progress, and creating professional presentations highlighting departmental efficiency.",
      ],
      bullets: [
        "Engineered an automated Excel master data tracking system and dynamic pivot tables for maintenance job tracking.",
        "Streamlined field data processing and reporting workflows to improve departmental dispatch efficiency.",
        "Created professional presentation slides and technical posters illustrating operational performance metrics.",
      ],
    },
  },
  {
    id: "formula-sae-powertrain",
    companyName: "Formula SAE F1 Racing Car Project",
    type: "Professional",
    category: ["CAD Modeling", "Mechanical Engineering", "Simulation"],
    shortDescription:
      "Participated in the design, analysis, and custom component fabrication for the Drexel Formula SAE racing car powertrain team.",
    techStack: [
      "SolidWorks",
      "Finite Element Analysis (FEA)",
      "Rapid Prototyping & 3D Printing"
    ],
    startDate: new Date("2025-10-01"),
    endDate: new Date("2026-06-01"),
    companyLogoImg: "/projects/card/logo.png",
    pagesInfoArr: [
      {
        title: "Powertrain & Components",
        description:
          "Custom engine mounts, differential supports, and performance simulation models.",
        imgArr: ["/projects/card/card_2.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As a member of the Formula SAE Powertrain team, I participated in the design, analysis, and integration of core power delivery systems for our collegiate racing vehicle.",
        "Applied mechanical design principles, SolidWorks modeling, and MATLAB simulations to optimize final drive ratios and structural reliability under high-stress racing conditions.",
      ],
      bullets: [
        "Designed custom mechanical components including engine mounts and differential supports using SolidWorks.",
        "Utilized MATLAB and Simulink for performance simulation and data-driven final drive ratio calculations.",
        "Calculated precise engineering fits and tolerances for rotating assemblies to prevent component failure.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
