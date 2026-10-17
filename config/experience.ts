import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
{
    id: "peco-fin",
    position: "Engineering & Master Data Intern",
    company: "PECO - Fix It Now (FIN) Department",
    location: "Philadelphia, PA",
    startDate: new Date("2026-08-01"),
    endDate: new Date("2026-09-30"),
    description: [
      "Engineered automated master data tracking systems and dynamic pivot table dashboards for maintenance job tracking.",
      "Streamlined dispatch workflows and field reporting analytics for maintenance operations.",
      "Created technical presentations and poster materials highlighting departmental efficiency gains."
    ],
    achievements: [
      "Designed an automated Excel master data tracking system and dynamic pivot tables to streamline departmental job reporting.",
      "Optimized field data tracking and dispatch workflows, significantly reducing reporting bottlenecks.",
      "Developed presentation slides and technical posters showcasing operational efficiency metrics to department leaders."
    ],
    skills: ["Excel", "Data Analysis"],
    companyUrl: "https://www.peco.com",
    logo: "/experience/peco-logo.png",
  },
  {
    id: "hera-nasa-psgc",
    position: "Drone Recovery Team Lead & Hardware Engineer",
    company: "HERA Collaboration (Drexel / NASA PSGC)",
    location: "Philadelphia, PA",
    startDate: new Date("2026-08-01"),
    endDate: "Present",
    description: [
      "Directed task delegation and operational testing protocols for drone recovery systems.",
      "Designed and modeled 10G shock-resistant tungsten mounting stacks in SolidWorks for stratospheric payloads.",
      "Managed FAA DroneZone registration and DJI GO 4 telemetry software integration."
    ],
    achievements: [
      "Spearheaded field recovery protocols and hardware retrieval workflows as Lead of the Drone Recovery Team.",
      "Modeled 10G shock-resistant tungsten payload mounting stacks in SolidWorks for high-altitude stratospheric balloon flights.",
      "Ensured 100% regulatory compliance through FAA DroneZone registration and structured field test execution."
    ],
    skills: [
      "High-G Payload Design",
      "SolidWorks & CAD",
      "Drone Operations & Field Recovery",
      "Mechatronics & Embedded Systems",
      "Finite Element Analysis (FEA)"
    ],
    companyUrl: "https://drexel.edu",
    logo: "/experience/drexel-logo.png",
  },
  {
    id: "formula-sae",
    position: "Powertrain Team Member",
    company: "Drexel Formula SAE",
    location: "Philadelphia, PA",
    startDate: new Date("2025-10-01"),
    endDate: new Date("2026-06-01"),
    description: [
      "Participated in the design, analysis, and assembly of custom powertrain components for an F1-style student racing car.",
      "Calculated engineering fits and tolerances for rotating assemblies under high thermal and mechanical stress.",
      "Utilized MATLAB and Simulink for performance simulation and final drive ratio optimization."
    ],
    achievements: [
      "Modeled custom engine mounts and differential supports using SolidWorks.",
      "Executed MATLAB performance simulations to calculate optimal final drive ratios for race conditions.",
      "Calculated precise engineering tolerances to prevent component failure under strenuous racing loads."
    ],
    skills: [
      "SolidWorks & CAD",
      "MATLAB & Simulink",
      "Rapid Prototyping & 3D Printing",
      "Finite Element Analysis (FEA)"
    ],
    companyUrl: "https://drexel.edu",
    logo: "/experience/fsae-logo.png",
  },
];
