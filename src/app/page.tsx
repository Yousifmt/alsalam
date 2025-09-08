// src/app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Users } from "lucide-react";
import { CourseCard } from "@/components/course-card";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/lang-context";

export default function Home() {
  const { isArabic } = useLanguage();

  const copy = isArabic
    ? {
        heroTitleA: "مركز",
        heroTitleB: "السلام للتدريب",
        heroSubtitle: "بوابتك إلى التميّز المهني والتقدّم في مسيرتك.",
        ctaExplore: "استكشف الدورات",
        aboutTitle: "من نحن",
        aboutBody:
          "مركز السلام للتدريب جهة رائدة في تقديم برامج تدريبية واحترافية عالية الجودة وشهادات معتمدة. نُمكّن الأفراد والمؤسسات من المهارات والمعرفة اللازمة للنجاح في سوق العمل التنافسي اليوم.",
        whyTitle: "لماذا تختارنا؟",
        whySubtitle:
          "نقدّم تدريبًا متخصصًا يركّز على المسار المهني مع دعم كامل لضمان نجاحك.",
        why: [
          { icon: Users, title: "مدرّبون محترفون", content: "تعلّم مع خبراء معتمدين يمتلكون خبرة عملية واسعة وشغفًا بالتدريب." },
          { icon: Award, title: "شهادات قيّمة", content: "احصل على شهادات معترف بها تعزز موثوقيتك المهنية وتزيد فرصك." },
          { icon: Briefcase, title: "دعم مهني", content: "نوفّر إرشادًا مهنيًا شاملًا لمساعدتك على تحقيق أهدافك الوظيفية." },
        ],
        featuredTitle: "دورتنا المميزة",
        featuredBody: "اكتشف دورتنا الرائدة المصمّمة لدفع مسيرتك المهنية إلى الأمام.",
        viewAll: "عرض كل الدورات",
        ctaTitle: "جاهز لبدء رحلتك؟",
        ctaBody: "تواصل معنا اليوم لمعرفة المزيد عن دوراتنا وكيف نساعدك على تحقيق أهدافك المهنية.",
        getInTouch: "تواصل معنا",
        courses: [
          {
            slug: "comptia-security-plus",
            title: "CompTIA Security+",
            icon: "ShieldCheck",
            description:
              "طوّر مسيرتك المهنية في الأمن السيبراني مع شهادة CompTIA Security+ المعترف بها عالميًا. يغطي هذا المسار أساسيات الأمن مثل تقييم المخاطر، الاستجابة للحوادث، والتحقيقات الجنائية والمزيد.",
            duration: "أسبوعان",
            mode: "حضوري",
            startDate: "دفعات جديدة كل شهر",
            registrationLink:
              "https://wa.me/97317686200?text=أنا%20مهتم%20بدورة%20CompTIA%20Security%2B",
            image: { src: "/images/cybersecurity.jpg", aiHint: "cybersecurity training network" },
          },
        ],
      }
    : {
        heroTitleA: "Al-Salam",
        heroTitleB: " Training Centre",
        heroSubtitle: "Your gateway to professional excellence and career advancement.",
        ctaExplore: "Explore Our Courses",
        aboutTitle: "Who We Are",
        aboutBody:
          "Al-Salam Training Centre is a premier institution dedicated to providing high-quality, professional training and certification programs. We empower individuals and organizations with the skills and knowledge needed to thrive in today's competitive landscape.",
        whyTitle: "Why Choose Us?",
        whySubtitle:
          "We offer expert instruction, career-focused training, and full support to ensure your success.",
        why: [
          { icon: Users, title: "Professional Trainers", content: "Learn from certified industry experts with extensive real-world experience and a passion for teaching." },
          { icon: Award, title: "Valuable Certifications", content: "Gain industry-recognized certifications that validate your skills and boost your professional credibility." },
          { icon: Briefcase, title: "Career Support", content: "We provide comprehensive career guidance and support to help you achieve your professional goals." },
        ],
        featuredTitle: "Our Featured Course",
        featuredBody: "Explore our flagship course designed to advance your career.",
        viewAll: "View All Courses",
        ctaTitle: "Ready to Start Your Journey?",
        ctaBody: "Contact us today to learn more about our courses and how we can help you achieve your career goals.",
        getInTouch: "Get in Touch",
        courses: [
          {
            slug: "comptia-security-plus",
            title: "CompTIA Security+",
            icon: "ShieldCheck",
            description:
              "Build your cybersecurity career with the globally recognized CompTIA Security+ certification. This course covers core cybersecurity knowledge and skills in risk assessment, incident response, forensics, and more.",
            duration: "2 Weeks",
            mode: "In-person",
            startDate: "New batches every month",
            registrationLink:
              "https://wa.me/97317686200?text=I'm%20interested%20in%20the%20CompTIA%20Security%2B%20course.",
            image: { src: "/images/cybersecurity.jpg", aiHint: "cybersecurity training network" },
          },
        ],
      };

  // تجهيز تلوين العنوان في العربية: "السلام" برتقالي فقط
  const arBParts = isArabic ? copy.heroTitleB.trim().split(/\s+/) : [];
  const arBrand = isArabic ? arBParts[0] || "" : "";
  const arRestText = isArabic ? arBParts.slice(1).join(" ") : "";

  return (
    <div className="flex flex-col min-h-[100dvh]" dir={isArabic ? "rtl" : "ltr"}>
      <main className="flex-1">
        {/* HERO */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          <Image
            src="/images/back.jpg"
            alt={isArabic ? "خلفية التدريب" : "Training Background"}
            fill
            priority
            className="object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {isArabic ? (
                  <>
                    <span className="text-white">{copy.heroTitleA}</span>{" "}
                    <span className="text-primary">{arBrand}</span>
                    {arRestText && <> <span className="text-white">{arRestText}</span></>}
                  </>
                ) : (
                  <>
                    <span className="text-primary">{copy.heroTitleA}</span>
                    <span className="text-white">{copy.heroTitleB}</span>
                  </>
                )}
              </h1>
              <p className="mx-auto mt-4 max-w-[700px] text-lg md:text-xl text-neutral-200">
                {copy.heroSubtitle}
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link href="/courses">{copy.ctaExplore}</Link>
              </Button>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="w-full py-20">
          <div className="container px-4 md:px-6 text-center">
            <Reveal className="space-y-6">
              <h2 className="text-3xl sm:text-5xl font-bold font-headline">{copy.aboutTitle}</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground text-lg">{copy.aboutBody}</p>
            </Reveal>
          </div>
        </section>

        {/* WHY */}
        <section id="why-us" className="w-full py-20">
          <div className="container px-4 md:px-6 text-center">
            <Reveal className="space-y-6 mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold font-headline">{copy.whyTitle}</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground text-lg">{copy.whySubtitle}</p>
            </Reveal>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">
              {copy.why.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 100}>
                  <Card className="text-center p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-card">
                    <CardHeader>
                      <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                        <item.icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="font-headline mt-4">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{item.content}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED COURSE */}
        <section id="courses" className="w-full py-20 bg-background/80">
          <div className="container px-4 md:px-6 text-center">
            <Reveal className="space-y-6 mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold font-headline">{copy.featuredTitle}</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground text-lg">{copy.featuredBody}</p>
            </Reveal>

            <div className="max-w-4xl mx-auto">
              {copy.courses.map((course, i) => (
                <Reveal key={course.title} delay={i * 120}>
                  <div className="animate-none">
                    <CourseCard {...course} />
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="text-center mt-12" delay={150}>
              <Button asChild size="lg">
                <Link href="/courses">{copy.viewAll}</Link>
              </Button>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section id="contact-cta" className="w-full py-20">
          <div className="container px-4 md:px-6 text-center">
            <Reveal className="space-y-6">
              <h2 className="text-3xl sm:text-5xl font-bold font-headline">{copy.ctaTitle}</h2>
              <p className="max-w-xl mx-auto text-muted-foreground text-lg">{copy.ctaBody}</p>
              <Button asChild size="lg">
                <Link href="/contact">{copy.getInTouch}</Link>
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
