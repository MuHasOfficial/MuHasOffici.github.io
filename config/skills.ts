import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "SolidWorks & CAD",
    description:
      "3D parametric modeling, complex assemblies, motion analysis, GD&T, and exploded BOM setups.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "MATLAB & Simulink",
    description:
      "Engineering computations, matrix manipulation, system dynamics, and control loop modeling.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Python",
    description:
      "Data analysis, automated calculations, numerical simulation, and mechatronic scripting.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Mechatronics & Embedded Systems",
    description:
      "Microcontroller integration (Raspberry Pi Pico, Arduino Mega), sensors, OLED displays, and motor drivers.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Finite Element Analysis (FEA)",
    description:
      "Structural stress analysis, thermal evaluation, and mechanical failure verification under load.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "High-G Payload Design",
    description:
      "Designing 10G shock load tungsten mounting stacks and stratospheric balloon instrumentation.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Rapid Prototyping & 3D Printing",
    description:
      "Additive manufacturing, FDM slicing optimization, component tolerances, and physical test fixtures.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "Excel & Master Data Automation",
    description:
      "Building operational job tracking tools, dynamic pivot tables, and automated workflow analytics.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "Drone Operations & Field Recovery",
    description:
      "FAA compliance (DroneZone), flight testing protocols, and hardware retrieval workflows.",
    rating: 4,
    icon: Icons.amazonaws,
  },
  {
    name: "Multisim Circuit Design",
    description:
      "Electronic circuit simulation, schematic capture, and analog/digital component testing.",
    rating: 3,
    icon: Icons.graphql,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
