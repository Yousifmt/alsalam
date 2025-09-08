"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar, Clock, Globe,
  ShieldCheck, Laptop2, type LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/lang-context";

const ICONS: Record<string, LucideIcon> = { ShieldCheck, Laptop2 };

interface CourseCardProps {
  slug: string;
  title: string;
  icon: keyof typeof ICONS | string;
  description: string;
  duration: string;
  mode: string;
  startDate: string;
  registrationLink: string;
  image: { src: string; aiHint?: string };
  className?: string;
}

export function CourseCard({
  slug, title, icon, description,
  duration, mode, startDate, registrationLink, image, className,
}: CourseCardProps) {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const currentLang = pathname.split("/")[1];
  const langPrefix =
    currentLang === "ar" || currentLang === "en" ? `/${currentLang}` : "";

  const Icon = ICONS[String(icon)] ?? ShieldCheck;
  const { isArabic } = useLanguage();

  const L = isArabic
    ? { duration: "المدة", mode: "النظام", startDate: "تاريخ البدء", view: "عرض المحتوى", register: "سجّل الآن" }
    : { duration: "Duration", mode: "Mode", startDate: "Start Date", view: "View material", register: "Register Now" };

  const openDetails = () => router.push(`${langPrefix}/courses/${slug}`);
  const openRegistration = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    window.open(registrationLink, "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      role="link"
      tabIndex={0}
      onClick={openDetails}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openDetails()}
      className={cn(
        "overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/60",
        className
      )}
    >
      <div className="md:flex">
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

        <div className="md:w-2/3">
          <CardContent
            dir={isArabic ? "rtl" : "ltr"}
            className={cn("p-6 md:p-8", isArabic ? "text-right" : "text-left")}
          >
            {/* icon + title + description */}
            <div className={cn("flex items-start gap-4 mb-6", "flex-row")}>
              <div className="bg-primary/10 text-primary p-3 rounded-full shrink-0">
                <Icon className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold font-headline">{title}</h2>
                <p className="text-muted-foreground">{description}</p>
              </div>
            </div>

            {/* INFO STRIP — mobile: one row + smaller; desktop unchanged */}
            <div className="mb-6">
              <div
                className={cn(
                  // mobile: horizontal row, small text
                  "flex items-start justify-between gap-3 text-xs",
                  // ≥sm: back to 3-column grid & normal text
                  "sm:grid sm:grid-cols-3 sm:gap-6 sm:max-w-3xl sm:mx-auto sm:text-sm sm:justify-items-center"
                )}
              >
                {[
                  { I: Clock, label: L.duration, value: duration },
                  { I: Globe, label: L.mode, value: mode },
                  { I: Calendar, label: L.startDate, value: startDate },
                ].map(({ I, label, value }) => (
                  <div
                    key={label}
                    className={cn(
                      "flex items-center gap-2 min-w-0",
                      isArabic
                        ? "flex-row text-right"
                        : "flex-row"
                    )}
                  >
                    {/* smaller icon on mobile, normal on ≥sm */}
                    <I className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold whitespace-nowrap">{label}</p>
                      <p className="text-muted-foreground truncate">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* buttons */}
            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4",
                isArabic ? "sm:flex-row-reverse sm:justify-center" : "sm:justify-center"
              )}
            >
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={(e) => { e.stopPropagation(); openDetails(); }}
              >
                {L.view}
              </Button>
              <Button
                type="button"
                size="lg"
                className="w-full sm:w-auto"
                onClick={openRegistration}
              >
                {L.register}
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
