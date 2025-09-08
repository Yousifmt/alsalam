// src/app/courses/page.tsx
"use client";

import { Reveal } from "@/components/reveal";
import { CourseCard } from "@/components/course-card";
import { useLanguage } from "@/components/lang-context";

// Keep icon as a string key: "Laptop2" | "ShieldCheck"
type IconKey = "Laptop2" | "ShieldCheck";

type CourseForCard = {
  slug: string;
  title: string;
  icon: IconKey;
  description: string;
  duration: string;
  mode: string;
  startDate: string;
  registrationLink: string;
  image: { src: string; aiHint?: string };
};

export default function CoursesPage() {
  const { isArabic } = useLanguage();

  // Page copy (headings/paragraphs) by locale
  const copy = isArabic
    ? {
        title: "الدورات التدريبية",
        subtitle: "استكشف دوراتنا الاحترافية المصمّمة للارتقاء بمسارك الوظيفي.",
        more: "دورات أخرى قريبًا!",
        dir: "rtl" as const,
      }
    : {
        title: "Our Courses",
        subtitle:
          "Explore our range of professional courses designed to advance your career.",
        more: "More courses coming soon!",
        dir: "ltr" as const,
      };

  // Course cards’ content (localized)
  const COURSES: CourseForCard[] = isArabic
    ? [
        {
          slug: "comptia-a-plus",
          title: "CompTIA A+",
          icon: "Laptop2",
          description:
            "ابدأ مسيرتك في تقنية المعلومات مع +CompTIA. تتعلم أساسيات العتاد وأنظمة التشغيل واستكشاف الأعطال ومهارات الدعم لأدوار الـ IT المبتدئة.",
          duration: "شهر واحد",
          mode: "حضوري",
          startDate: "دفعات جديدة كل شهر",
          registrationLink:
            "https://wa.me/97317686200?text=أنا%20مهتم%20بدورة%20CompTIA%20A%2B",
          image: {
            src: "/images/Information-Technology.jpg",
            aiHint: "computer technician and hardware",
          },
        },
        {
          slug: "comptia-security-plus",
          title: "CompTIA Security+",
          icon: "ShieldCheck",
          description:
            "طوّر مسيرتك في الأمن السيبراني مع شهادة CompTIA Security+ المعترف بها عالميًا. يغطي هذا المسار أساسيات الأمن مثل تقييم المخاطر، الاستجابة للحوادث، والتحقيقات الجنائية والمزيد.",
          duration: "أسبوعان",
          mode: "حضوري",
          startDate: "دفعات جديدة كل شهر",
          registrationLink:
            "https://wa.me/97317686200?text=أنا%20مهتم%20بدورة%20CompTIA%20Security%2B",
          image: { src: "/images/cybersecurity.jpg", aiHint: "cybersecurity network" },
        },
      ]
    : [
        {
          slug: "comptia-a-plus",
          title: "CompTIA A+",
          icon: "Laptop2",
          description:
            "Start your IT career with CompTIA A+. This course provides foundational knowledge in hardware, operating systems, troubleshooting, and support skills needed for entry-level IT roles.",
          duration: "1 Month",
          mode: "In-person",
          startDate: "New batches every month",
          registrationLink:
            "https://wa.me/97317686200?text=I'm%20interested%20in%20the%20CompTIA%20A%2B%20course.",
          image: {
            src: "/images/Information-Technology.jpg",
            aiHint: "computer technician and hardware",
          },
        },
        {
          slug: "comptia-security-plus",
          title: "CompTIA Security+",
          icon: "ShieldCheck",
          description:
            "Build your cybersecurity career with the globally recognized CompTIA Security+ certification. Covers risk assessment, incident response, forensics, and more.",
          duration: "2 Weeks",
          mode: "In-person",
          startDate: "New batches every month",
          registrationLink:
            "https://wa.me/97317686200?text=I'm%20interested%20in%20the%20CompTIA%20Security%2B%20course.",
          image: { src: "/images/cybersecurity.jpg", aiHint: "cybersecurity network" },
        },
      ];

  return (
    <div className="bg-background/80" dir={copy.dir}>
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
              {copy.title}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
              {copy.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Course Cards (CourseCard handles navigation + RTL mirroring) */}
        <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto">
          {COURSES.map((course, index) => (
            <Reveal key={course.slug} delay={index * 120}>
              <CourseCard {...course} />
            </Reveal>
          ))}

          {/* Footer Note */}
          <Reveal delay={COURSES.length * 120 + 100} className="text-center">
            <h3 className="text-2xl font-bold mt-8">{copy.more}</h3>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
