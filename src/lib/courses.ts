// src/data/courses.ts
import { ShieldCheck, Laptop2 } from "lucide-react";

// export icons so components can resolve string keys in one place
export const ICONS = { ShieldCheck, Laptop2 } as const;
export type IconKey = "ShieldCheck" | "Laptop2";

export type Course = {
  slug: string;
  title: string;
  icon: IconKey; // string key for client safety
  description: string;
  duration: string;
  mode: string;
  startDate: string;
  registrationLink: string;
  materialsLink?: string;
  image: { src: string; aiHint?: string };
  outcomes: string[];
  prerequisites?: string[];
  audience?: string[];
  syllabus: { title: string; points: string[] }[];
  chapters?: string[]; // NEW
};

export const COURSES: Course[] = [
  {
    slug: "comptia-a-plus",
    title: "CompTIA A+",
    icon: "Laptop2",
    description:
      "Start your IT career with CompTIA A+. Foundational knowledge in hardware, OS, troubleshooting, and support skills for entry-level IT roles.",
    duration: "1 Month",
    mode: "In-person",
    startDate: "New batches every month",
    registrationLink:
      "https://wa.me/97317686200?text=I'm%20interested%20in%20the%20CompTIA%20A%2B%20course.",
    image: { src: "/images/Information-Technology.jpg", aiHint: "computer technician and hardware" },
    outcomes: [
      "Build/Configure PCs and peripherals",
      "Install and support Windows/macOS/Linux basics",
      "Troubleshoot common HW/OS/network issues",
    ],
    prerequisites: ["Basic computer usage"],
    audience: ["IT beginners", "Helpdesk trainees", "Students shifting to IT"],
    syllabus: [
      { title: "Hardware Fundamentals", points: ["CPU, RAM, storage", "Motherboards, PSU, I/O"] },
      { title: "Operating Systems", points: ["Windows, macOS, Linux basics", "Installations & imaging"] },
      { title: "Troubleshooting", points: ["Boot issues", "Peripherals", "Documentation & tickets"] },
    ],
    chapters: [
      "Module 1","Module 2","Module 3","Module 4","Module 5",
      "Module 6","Module 7","Module 8","Module 9","Module 10",
      "Module 11","Module 12","Module 13","Module 14","Module 15",
      "Module 16","Module 17","Module 18","Module 19","Module 20",
      "Module 21","Module 22",
    ],
  },
  {
    slug: "comptia-security-plus",
    title: "CompTIA Security+",
    icon: "ShieldCheck",
    description:
      "Core cybersecurity knowledge: risk assessment, incident response, forensics, and more—globally recognized Security+.",
    duration: "2 Weeks",
    mode: "In-person",
    startDate: "New batches every month",
    registrationLink:
      "https://wa.me/97317686200?text=I'm%20interested%20in%20the%20CompTIA%20Security%2B%20course.",
    image: { src: "/images/cybersecurity.jpg", aiHint: "cybersecurity network" },
    outcomes: [
      "Identify and mitigate threats, attacks, vulnerabilities",
      "Implement secure network architecture and controls",
      "Respond to incidents and perform basic forensics",
    ],
    prerequisites: ["Basic networking", "Familiarity with OS concepts"],
    audience: ["IT support upgrading to security", "Network admins", "Students targeting SOC roles"],
    syllabus: [
      { title: "Threats & Vulnerabilities", points: ["Malware, phishing, ransomware", "OWASP basics"] },
      { title: "Secure Architecture", points: ["Zero Trust, segmentation", "Cloud & hybrid controls"] },
      { title: "IR & Forensics", points: ["Playbooks & triage", "Evidence handling basics"] },
    ],
  },
];

export const COURSES_BY_SLUG: Record<string, Course> = Object.fromEntries(
  COURSES.map((c) => [c.slug, c])
) as Record<string, Course>;
