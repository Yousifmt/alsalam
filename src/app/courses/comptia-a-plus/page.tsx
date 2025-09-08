// src/app/courses/comptia-a-plus/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Globe, CheckCircle2, Laptop2 } from "lucide-react";
import { useLanguage } from "@/components/lang-context";
import { Reveal } from "@/components/reveal";

export default function Page() {
  const { isArabic } = useLanguage();

  const copy = isArabic
    ? {
        title: "CompTIA A+",
        description:
          "ابدأ مسيرتك في تقنية المعلومات مع CompTIA A+. تغطي هذه الدورة أساسيات العتاد وأنظمة التشغيل واستكشاف الأخطاء وإصلاحها ومهارات الدعم للأدوار المبتدئة في مجال تقنية المعلومات.",
        duration: "شهر واحد",
        mode: "حضوري",
        startDate: "دفعات جديدة كل شهر",
        register: "سجّل الآن",
        back: "الرجوع إلى الدورات",
        learnTitle: "ماذا ستتعلم",
        syllabusTitle: "نظرة عامة على المنهج",
        whoForTitle: "لمن هذه الدورة؟",
        prereqTitle: "المتطلبات المسبقة",
        quickFacts: "تفاصيل الدورة",
        labels: { duration: "المدة", mode: "النظام", startDate: "تاريخ البدء" },
        outcomes: [
          "بناء وتهيئة أجهزة الحاسوب والمحمول والملحقات",
          "تثبيت وتهيئة ودعم أساسيات Windows / macOS / Linux",
          "استكشاف مشاكل العتاد وأنظمة التشغيل والشبكات الشائعة وإصلاحها",
        ],
        prerequisites: ["إلمام أساسي باستخدام الحاسوب"],
        audience: [
          "المبتدئون في تقنية المعلومات",
          "متدربو مكاتب الدعم الفني (Helpdesk)",
          "الطلاب الراغبون بالانتقال إلى مجال تقنية المعلومات",
        ],
        syllabus: [
          {
            title: "أساسيات العتاد",
            points: [
              "المعالج (CPU)، الذاكرة (RAM)، التخزين",
              "اللوحات الأم، مزوّدات الطاقة (PSU)، منافذ الإدخال/الإخراج (I/O)",
            ],
          },
          {
            title: "أنظمة التشغيل",
            points: ["أساسيات Windows وmacOS وLinux", "التثبيتات وتصوير الأنظمة (Imaging)"],
          },
          {
            title: "استكشاف الأخطاء وإصلاحها",
            points: ["مشاكل التشغيل", "مشاكل الأجهزة الملحقة بالكمبيوتر", "التوثيق وتذاكر الدعم"],
          },
        ],
        registrationLink:
          "https://wa.me/97317686200?text=%D8%A3%D9%86%D8%A7%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%AF%D9%88%D8%B1%D8%A9%20CompTIA%20A%2B",
        image: { src: "/images/Information-Technology.jpg" },
      }
    : {
        title: "CompTIA A+",
        description:
          "Start your IT career with CompTIA A+. Foundational knowledge in hardware, operating systems, troubleshooting, and support skills for entry-level IT roles.",
        duration: "1 Month",
        mode: "In-person",
        startDate: "New batches every month",
        register: "Register Now",
        back: "Back to Courses",
        learnTitle: "What you’ll learn",
        syllabusTitle: "Syllabus overview",
        whoForTitle: "Who is this for?",
        prereqTitle: "Prerequisites",
        quickFacts: "Quick facts",
        labels: { duration: "Duration", mode: "Mode", startDate: "Start Date" },
        outcomes: [
          "Build and configure PCs, laptops, and peripherals",
          "Install, configure, and support Windows/macOS/Linux basics",
          "Troubleshoot common hardware, OS, and network issues",
        ],
        prerequisites: ["Basic computer usage"],
        audience: ["IT beginners", "Helpdesk trainees", "Students shifting to IT"],
        syllabus: [
          { title: "Hardware Fundamentals", points: ["CPU, RAM, storage", "Motherboards, PSU, I/O"] },
          { title: "Operating Systems", points: ["Windows, macOS, Linux basics", "Installations & imaging"] },
          { title: "Troubleshooting", points: ["Boot issues", "Peripherals", "Documentation & tickets"] },
        ],
        registrationLink:
          "https://wa.me/97317686200?text=I'm%20interested%20in%20the%20CompTIA%20A%2B%20course.",
        image: { src: "/images/Information-Technology.jpg" },
      };

  return (
    <div className="bg-background/80" dir={isArabic ? "rtl" : "ltr"}>
      {/* HERO */}
      <section className="relative h-[46vh] w-full overflow-hidden">
        <Image
          src={copy.image.src}
          alt={copy.title}
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
                  <Laptop2 className="h-7 w-7" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">{copy.title}</h1>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="max-w-3xl text-neutral-200">{copy.description}</p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1 text-sm">
                  <Clock className="h-4 w-4" /> {copy.duration}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1 text-sm">
                  <Globe className="h-4 w-4" /> {copy.mode}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1 text-sm">
                  <Calendar className="h-4 w-4" /> {copy.startDate}
                </span>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={copy.registrationLink} target="_blank" rel="noopener noreferrer">
                    {copy.register}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/courses">{copy.back}</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="container px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN */}
          <div className="lg:col-span-2 space-y-8">
            <Reveal>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">{copy.learnTitle}</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-3">
                  {copy.outcomes.map((o) => (
                    <div key={o} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <p>{o}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={120}>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">{copy.syllabusTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {copy.syllabus.map((sec) => (
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

            <div className="grid sm:grid-cols-2 gap-8">
              <Reveal>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-headline">{copy.whoForTitle}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {copy.audience.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal delay={120}>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-headline">{copy.prereqTitle}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {copy.prerequisites.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            {/* اجعل الـsticky على الغلاف الخارجي وليس على Card ليتجنّب تعارض transform */}
            <div className="sticky top-6 sm:top-10 lg:top-24">
              <Reveal delay={80}>
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="font-headline">{copy.quickFacts}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">{copy.labels.duration}</p>
                        <p className="text-muted-foreground">{copy.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">{copy.labels.mode}</p>
                        <p className="text-muted-foreground">{copy.mode}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">{copy.labels.startDate}</p>
                        <p className="text-muted-foreground">{copy.startDate}</p>
                      </div>
                    </div>
                    <div className="pt-2">
                      <Button asChild>
                        <Link href={copy.registrationLink} target="_blank" rel="noopener noreferrer">
                          {copy.register}
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
