export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "HASP Drone Recovery Leadership",
    contibutionDescription:
      "Led the Drone Recovery Team for the HASP/HERA stratospheric payload initiative, managing operational flight testing, FAA regulatory compliance, and hardware retrieval protocols.",
    repoOwner: "HERA / NASA PSGC / Drexel",
    link: "https://github.com/MuHasOfficial",
  },
  {
    repo: "HASP Stratospheric Payload Hardware",
    contibutionDescription:
      "Executed mechanical design and 10G shock load analysis for tungsten mounting stacks to secure particle detection hardware during atmospheric balloon flights.",
    repoOwner: "HERA / NASA PSGC",
    link: "https://github.com/MuHasOfficial",
  },
  {
    repo: "PECO Line Work & FIN Department Systems",
    contibutionDescription:
      "Designed automated master data tracking sheets and dynamic analytical tools to optimize dispatch workflows and line work maintenance operations for the Fix It Now department.",
    repoOwner: "PECO Energy",
    link: "https://github.com/MuHasOfficial",
  },
  {
    repo: "NSF AIME Program",
    contibutionDescription:
      "Participated in NSF-funded initiatives supporting engineering diversity, academic excellence, and professional leadership at Drexel University.",
    repoOwner: "National Science Foundation / Drexel",
    link: "https://github.com/MuHasOfficial",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
