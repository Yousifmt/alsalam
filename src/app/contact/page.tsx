
import Image from "next/image";
import Link from "next/link";
import { ContactCard } from "@/components/contact-card";
import { ContactForm } from "./contact-form";
import { Phone, Linkedin, Mail, Send, Instagram } from "lucide-react";

export default function ContactPage() {
  const contactOptions = [
    {
      icon: Phone,
      title: "Call only",
      value: "+973 1768 6200",
      href: "tel:+97317686200",
    },
    {
      icon: (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>,
      title: "WhatsApp Chat",
      value: "wa.me/97317686200",
      href: "https://wa.me/97317686200",
    },
    {
      icon: Mail,
      title: "Email",
      value: "Dr.m@alsalamtraining.com",
      href: "mailto:Dr.m@alsalamtraining.com",
    },
    {
      icon: Send,
      title: "Send Message",
      value: "Fill out our form",
      href: "#contact-form",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@alsalam.training.bh",
      href: "https://www.instagram.com/alsalam.training.bh/",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Al-Salam Training Centre",
      href: "https://www.linkedin.com/company/al-salam-training-centre/",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl animate-fade-in-up">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards' }}>
          We're here to help. Contact us through any of the channels below, or fill out the form.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactOptions.map((option, index) => (
           <div key={index} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 100 + 300}ms`, animationFillMode: 'forwards' }}>
            <ContactCard
              Icon={option.icon}
              title={option.title}
              value={option.value}
              href={option.href}
            />
          </div>
        ))}
      </div>

      <div id="contact-form" className="mt-16 md:mt-24 scroll-mt-24">
        <ContactForm />
      </div>
      
      <div className="mt-16 md:mt-24">
        <h2 className="text-3xl font-bold font-headline text-center mb-8 animate-fade-in-up" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>Our Location</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.094215278784!2d50.5332850759381!3d26.22591697706318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49a8ad0504e765%3A0x153924e650d9972b!2sAl%20Salam%20Training%20Centre!5e0!3m2!1sen!2sbh!4v1722426462615!5m2!1sen!2sbh"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Salam Training Centre Location"
            ></iframe>
            <Link href="https://maps.app.goo.gl/roveiLnUGFJL1KaQ7" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 cursor-pointer" aria-label="Navigate to location">
               <div className="sr-only">Click to navigate to our location on Google Maps</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
