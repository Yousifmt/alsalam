import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Users, ShieldCheck } from "lucide-react";
import { CourseCard } from "@/components/course-card";
import { Logo } from "@/components/logo";

export default function Home() {
  const courses = [
    {
      title: "CompTIA Security+",
      icon: ShieldCheck,
      description:
        "Build your cybersecurity career with the globally recognized CompTIA Security+ certification. This course covers core cybersecurity knowledge and skills in risk assessment, incident response, forensics, and more.",
      duration: "2 Weeks",
      mode: "In-person",
      startDate: "New batches every month",
      registrationLink:
        "https://wa.me/97317686200?text=I'm%20interested%20in%20the%20CompTIA%20Security%2B%20course.",
      image: {
        src: "/images/cybersecurity.jpg",
        aiHint: "cybersecurity training network",
      },
    },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          <Image
            src="/images/back.jpg"
            alt="Training Background"
            fill
            priority
            className="object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-primary">Al-Salam</span>
                <span className="text-white"> Training Centre</span>
              </h1>
              <p className="mx-auto mt-4 max-w-[700px] text-lg md:text-xl text-neutral-200">
                Your gateway to professional excellence and career advancement.
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link href="/courses">Explore Our Courses</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="w-full py-20">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-3xl sm:text-5xl font-bold font-headline">Who We Are</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
                Al-Salam Training Centre is a premier institution dedicated to providing high-quality, professional training and certification programs. We empower individuals and organizations with the skills and knowledge needed to thrive in today's competitive landscape.
              </p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section id="why-us" className="w-full py-20">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-6 mb-12 animate-fade-in-up">
              <h2 className="text-3xl sm:text-5xl font-bold font-headline">Why Choose Us?</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
                We offer expert instruction, career-focused training, and full support to ensure your success.
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">
              {[
                {
                  icon: Users,
                  title: "Professional Trainers",
                  content:
                    "Learn from certified industry experts with extensive real-world experience and a passion for teaching.",
                },
                {
                  icon: Award,
                  title: "Valuable Certifications",
                  content:
                    "Gain industry-recognized certifications that validate your skills and boost your professional credibility.",
                },
                {
                  icon: Briefcase,
                  title: "Career Support",
                  content:
                    "We provide comprehensive career guidance and support to help you achieve your professional goals.",
                },
              ].map((item, idx) => (
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
              ))}
            </div>
          </div>
        </section>

        {/* COURSE SECTION */}
        <section id="courses" className="w-full py-20 bg-background/80">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-6 mb-12 animate-fade-in-up">
              <h2 className="text-3xl sm:text-5xl font-bold font-headline">Our Featured Course</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
                Explore our flagship course designed to advance your career.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationFillMode: "forwards" }}
                >
                  <CourseCard {...course} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/courses">View All Courses</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION SECTION */}
        <section id="contact-cta" className="w-full py-20">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-3xl sm:text-5xl font-bold font-headline">Ready to Start Your Journey?</h2>
              <p className="max-w-xl mx-auto text-muted-foreground text-lg">
                Contact us today to learn more about our courses and how we can help you achieve your career goals.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}