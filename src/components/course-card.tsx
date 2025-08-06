import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Globe, LucideIcon } from "lucide-react";

interface CourseCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  duration: string;
  mode: string;
  startDate: string;
  registrationLink: string;
  image: {
    src: string;
    aiHint: string;
  };
}

export function CourseCard({
  title,
  icon: Icon,
  description,
  duration,
  mode,
  startDate,
  registrationLink,
  image,
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:w-1/3">
          <Image
            src={image.src}
            alt={title}
            width={400}
            height={400}
            className="w-full h-full object-cover"
            data-ai-hint={image.aiHint}
          />
        </div>
        {/* Content Section */}
        <div className="md:w-2/3">
          <CardContent className="p-6 md:p-8 text-left">

            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold font-headline">{title}</h2>
            </div>
            <p className="text-muted-foreground mb-6">{description}</p>

            {/* Details Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Duration</p>
                  <p className="text-muted-foreground">{duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Mode</p>
                  <p className="text-muted-foreground">{mode}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Start Date</p>
                  <p className="text-muted-foreground">{startDate}</p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            {/* Action Buttons */}
<div className="flex flex-col sm:flex-row gap-4">
  <Button asChild size="lg" className="w-full sm:w-auto">
    <Link href={registrationLink} target="_blank" rel="noopener noreferrer">
      Register Now
    </Link>
  </Button>
  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
    <Link
      href="https://drive.google.com/drive/folders/17Yzhmka28KMZWgYUUlhV0Z2QlUQzHCY0?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Material
    </Link>
  </Button>
</div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
