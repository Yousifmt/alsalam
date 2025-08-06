import { CourseCard } from "@/components/course-card";
import { ShieldCheck, Laptop2 } from "lucide-react"; // ✅ Import icons


export default function CoursesPage() {
  const courses = [
    
    {
      title: "CompTIA A+",
      icon: Laptop2,
      description:
        "Start your IT career with CompTIA A+. This course provides foundational knowledge in hardware, operating systems, troubleshooting, and support skills needed for entry-level IT roles.",
      duration: "1 Month",
      mode: "In-person",
      startDate: "New batches every month",
      registrationLink: "https://wa.me/97317686200?text=I'm%20interested%20in%20the%20CompTIA%20A%2B%20course.",
      image: {
        src: "/images/Information-Technology.jpg", // ✅ Ensure this image exists in /public/images
        aiHint: "computer technician and hardware",
      },
    },

{
      title: "CompTIA Security+",
      icon: ShieldCheck,
      description:
        "Build your cybersecurity career with the globally recognized CompTIA Security+ certification. This course covers core cybersecurity knowledge and skills in risk assessment, incident response, forensics, and more.",
      duration: "2 Weeks",
      mode: "In-person",
      startDate: "New batches every month",
      registrationLink: "https://wa.me/97317686200?text=I'm%20interested%20in%20the%20CompTIA%20Security%2B%20course.",
      image: {
        src: "/images/cybersecurity.jpg", // ✅ Updated to local image
        aiHint: "cybersecurity network",
      },
    }


  ];

  return (
    <div className="bg-background/80">
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl animate-fade-in-up">
            Our Courses
          </h1>
          <p
            className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl animate-fade-in-up animation-delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            Explore our range of professional courses designed to advance your career.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto">
  {courses.map((course, index) => (
    <div
      key={index}
      className="opacity-0 animate-fade-in-up animation-delay-400"
      style={{ animationFillMode: "forwards" }}
    >
      <div className="text-left"> {/* 👈 Force left alignment */}
        <CourseCard {...course} />
      </div>
    </div>
  ))}

  <div
    className="opacity-0 animate-fade-in-up animation-delay-400 text-center"
    style={{ animationFillMode: "forwards" }}
  >
    <h3 className="text-2xl font-bold mt-8">More courses coming soon!</h3>
  </div>
</div>

      </div>
    </div>
  );
}
