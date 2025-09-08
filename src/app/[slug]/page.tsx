// src/app/courses/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Globe,
  CheckCircle2,
  ShieldCheck,
  Laptop2,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

// ---------- icon resolver ----------
const ICONS = { ShieldCheck, Laptop2 } as const;
type IconKey = keyof typeof ICONS;
function resolveIcon(icon: unknown): LucideIcon {
  if (typeof icon === "string" && icon in ICONS) return ICONS[icon as IconKey];
  if (icon === ShieldCheck || icon === Laptop2) return icon as LucideIcon;
  return ShieldCheck;
}

// ---------- types ----------
type SyllabusSection = {
  title: string;
  points: string[];
  details?: string[];
};

type Course = {
  slug: string;
  title: string;
  icon: IconKey;
  description: string;
  duration: string;
  mode: string;
  startDate: string;
  registrationLink: string;
  image: { src: string; aiHint?: string };
  outcomes: string[];
  prerequisites?: string[];
  audience?: string[];
  syllabus: SyllabusSection[];
};

// ---------- data ----------
const COURSE_MAP: Record<string, Course> = {
  "comptia-a-plus": {
    slug: "comptia-a-plus",
    title: "CompTIA A+",
    icon: "Laptop2",
    description:
      "Start your IT career with CompTIA A+. Foundational knowledge in hardware, operating systems, troubleshooting, and support skills for entry-level IT roles.",
    duration: "1 Month",
    mode: "In-person",
    startDate: "New batches every month",
    registrationLink:
      "https://wa.me/97317686200?text=I'm%20interested%20in%20the%20CompTIA%20A%2B%20course.",
    image: {
      src: "/images/Information-Technology.jpg",
      aiHint: "computer technician and hardware",
    },
    outcomes: [
      "Build and configure PCs, laptops, and peripherals",
      "Install, configure, and support Windows/macOS/Linux basics",
      "Troubleshoot common hardware, OS, and network issues",
    ],
    prerequisites: ["Basic computer usage"],
    audience: ["IT beginners", "Helpdesk trainees", "Students shifting to IT"],
    syllabus: [
      {
        title: "PC Hardware Fundamentals",
        points: ["CPU, RAM, storage, GPU", "Form factors, chipsets", "Cooling solutions"],
      },
      {
        title: "Operating Systems",
        points: ["Windows installation", "Linux/macOS basics", "System updates"],
      },
      {
        title: "Networking Fundamentals",
        points: ["Topologies & devices", "IP addressing", "Cabling & connectors"],
      },
    ],
  },

  "comptia-security-plus": {
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
    audience: [
      "IT support upgrading to security",
      "Network admins",
      "Students targeting SOC roles",
    ],
    syllabus: [
      {
        title: "Threats & Vulnerabilities",
        points: ["Malware, phishing", "Ransomware", "OWASP basics"],
      },
      {
        title: "Secure Architecture",
        points: ["Zero Trust", "Endpoint hardening", "Cloud & hybrid controls"],
      },
      {
        title: "Identity & Access",
        points: ["AAA, SSO, MFA", "RBAC/ABAC", "Federation & provisioning"],
      },
    ],
  },
};

const ALL_SLUGS = Object.keys(COURSE_MAP);

// ---------- Next.js params & metadata ----------
type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

// ⬇️ await params here
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSE_MAP[slug];
  if (!course) return { title: "Course not found" };
  return {
    title: `${course.title} — Al-Salam Training Centre`,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      images: [{ url: course.image.src }],
    },
  };
}

// ⬇️ and here
export default async function CourseDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const course = COURSE_MAP[slug];
  if (!course) return notFound();

  const Icon = resolveIcon(course.icon);

  return (
    <div className="bg-background/80">
      {/* HERO */}
      <section className="relative h-[46vh] w-full overflow-hidden">
        <Image
          src={course.image.src}
          alt={course.title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container px-4 md:px-6">
            <Reveal>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/20 text-primary p-3 rounded-full">
                  <Icon className="h-7 w-7" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {course.title}
                </h1>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-3xl text-neutral-200">{course.description}</p>
            </Reveal>
            <Reveal delay={140} className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1 text-sm">
                <Clock className="h-4 w-4" /> {course.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1 text-sm">
                <Globe className="h-4 w-4" /> {course.mode}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1 text-sm">
                <Calendar className="h-4 w-4" /> {course.startDate}
              </span>
            </Reveal>
            <Reveal delay={200} className="mt-6 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link
                  href={course.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="container px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN */}
          <div className="lg:col-span-2 space-y-8">
            {/* Outcomes */}
            <Reveal>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">
                    What you’ll learn
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-3">
                  {course.outcomes.map((o) => (
                    <div key={o} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <p>{o}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Reveal>

            {/* Syllabus */}
            <Reveal delay={80}>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">
                    Syllabus overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {course.syllabus.map((sec) => (
                    <div key={sec.title}>
                      <h3 className="font-semibold">{sec.title}</h3>
                      <ul className="mt-2 list-disc list-inside text-muted-foreground">
                        {sec.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Reveal>

            {/* Audience / Prereqs */}
            <div className="grid sm:grid-cols-2 gap-8">
              {course.audience?.length ? (
                <Reveal>
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-headline">
                        Who is this for?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {course.audience.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>
              ) : null}

              {course.prerequisites?.length ? (
                <Reveal delay={60}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-headline">
                        Prerequisites
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {course.prerequisites.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>
              ) : null}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 sm:top-10 lg:top-24">
              <Reveal>
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="font-headline">
                      Quick facts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Duration</p>
                        <p className="text-muted-foreground">
                          {course.duration}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Mode</p>
                        <p className="text-muted-foreground">{course.mode}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Start Date</p>
                        <p className="text-muted-foreground">
                          {course.startDate}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col gap-3">
                      <Button asChild>
                        <Link
                          href={course.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Register Now
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
