"use client";

import Link from "next/link";
import { ContactCard } from "@/components/contact-card";
import { ContactForm } from "./contact-form";
import { Phone, Linkedin, Mail, Send, Instagram } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/lang-context";

export default function ContactPage() {
  const { isArabic } = useLanguage();

  const copy = isArabic
    ? {
        title: "تواصل معنا",
        subtitle: "نحن هنا لمساعدتك. تواصل عبر أي قناة أدناه أو عبّئ النموذج.",
        options: {
          callOnly: "اتصال",
          whatsapp: "واتساب",
          email: "البريد الإلكتروني",
          sendMsg: "أرسل رسالة",
          ig: "إنستغرام",
          li: "لينكدإن",
          formCta: "عبّئ النموذج",
        },
        location: "موقعنا",
      }
    : {
        title: "Get in Touch",
        subtitle:
          "We're here to help. Contact us through any of the channels below, or fill out the form.",
        options: {
          callOnly: "Call only",
          whatsapp: "WhatsApp Chat",
          email: "Email",
          sendMsg: "Send Message",
          ig: "Instagram",
          li: "LinkedIn",
          formCta: "Fill out our form",
        },
        location: "Our Location",
      };

  const WhatsAppIcon = (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" {...props}
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );

  const contactOptions = [
    { icon: Phone, title: copy.options.callOnly, value: "17686200", href: "tel:+97317686200" },
    { icon: WhatsAppIcon, title: copy.options.whatsapp, value: "wa.me/97317686200", href: "https://wa.me/97317686200" },
    { icon: Mail, title: copy.options.email, value: "Dr.m@alsalamtraining.com", href: "mailto:Dr.m@alsalamtraining.com" },
    { icon: Send, title: copy.options.sendMsg, value: copy.options.formCta, href: "#contact-form" },
    { icon: Instagram, title: copy.options.ig, value: "@alsalam.training.bh", href: "https://www.instagram.com/alsalam.training.bh/" },
    { icon: Linkedin, title: copy.options.li, value: "Al-Salam Training Centre", href: "https://www.linkedin.com/company/al-salam-training-centre/" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32" dir={isArabic ? "rtl" : "ltr"}>
      {/* Header */}
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

      {/* Contact options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactOptions.map((option, index) => (
          <Reveal key={option.title} delay={index * 120 + 100}>
            <ContactCard
              Icon={option.icon as any}
              title={option.title}
              value={option.value}
              href={option.href}
            />
          </Reveal>
        ))}
      </div>

      {/* Form */}
      <div id="contact-form" className="mt-16 md:mt-24 scroll-mt-24">
        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>

      {/* Location */}
      <div className="mt-16 md:mt-24">
        <Reveal>
          <h2 className="text-3xl font-bold font-headline text-center mb-8">
            {copy.location}
          </h2>
        </Reveal>
        <div className="max-w-4xl mx-auto">
          <Reveal delay={120}>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.094215278784!2d50.5332850759381!3d26.22591697706318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49a8ad0504e765%3A0x153924e650d9972b!2sAl%20Salam%20Training%20Centre!5e0!3m2!1sen!2sbh!4v1722426462615!5m2!1sen!2sbh"
                width="100%" height="250" style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Al Salam Training Centre Location"
              />
              <Link
                href="https://maps.app.goo.gl/roveiLnUGFJL1KaQ7"
                target="_blank" rel="noopener noreferrer"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="Navigate to location"
              >
                <div className="sr-only">Navigate to our location on Google Maps</div>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
