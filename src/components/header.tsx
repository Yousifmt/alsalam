// src/components/header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/lang-context";

const NAV = [
  { href: "/",        labelEn: "Home",    labelAr: "الرئيسية" },
  { href: "/courses", labelEn: "Courses", labelAr: "الدورات" },
  { href: "/contact", labelEn: "Contact", labelAr: "تواصل" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isArabic, toggle } = useLanguage();

  return (
    // Force LTR for the header regardless of global <html dir>
    <header
      dir="ltr"
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60"
    >
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo (always English) */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Al-Salam Training Centre Logo"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="text-base font-bold text-orange-500">
            Al-Salam <span className="text-white font-normal">Training Centre</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href} // same routes in both languages
              className={cn("transition-colors hover:text-primary", "text-muted-foreground")}
            >
              {isArabic ? link.labelAr : link.labelEn}
            </Link>
          ))}

          {/* Language toggle (text only) */}
          <button
            onClick={toggle}
            className="ml-3 px-3 py-1 rounded border hover:bg-muted transition"
            aria-label="Change language"
          >
            {isArabic ? "English" : "العربية"}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="px-3 py-1 rounded border hover:bg-muted transition"
            aria-label="Change language"
          >
            {isArabic ? "English" : "العربية"}
          </button>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Nav (also force LTR) */}
      {isOpen && (
        <div className="md:hidden" dir="ltr">
          <nav className="flex flex-col items-center gap-4 py-4 border-t border-border/40">
            {NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn("text-lg transition-colors hover:text-primary", "text-foreground")}
              >
                {isArabic ? link.labelAr : link.labelEn}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
