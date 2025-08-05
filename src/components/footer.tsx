import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Phone, Music } from 'lucide-react';
import { Separator } from './ui/separator';

const socialLinks = [
  { href: 'tel:+97317686200', icon: Phone, label: '+973 1768 6200 (Call & WhatsApp)' },
  { href: 'https://www.instagram.com/alsalam.training.bh/', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/al-salam-training-centre/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://www.tiktok.com/@alsalam.training.bh', icon: Music, label: 'TikTok' },
];

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* ✅ Logo & Tagline */}
          <div className="flex flex-col items-start space-y-4">
            <Image
              src="/images/logo.png"
              alt="Al-Salam Training Centre Logo"
              width={48}
              height={48}
              className="rounded-full"
              priority
            />
            <h2 className="text-base font-bold text-orange-500">
              Al-Salam <span className="text-white font-normal">Training Centre</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Empowering Careers Through Certified Training.
            </p>
          </div>

          {/* Contact, Quick Links, Location */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            
            {/* Contact Us */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
              <ul className="space-y-2">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Our Location</h3>
              <address className="text-muted-foreground text-sm not-italic leading-snug">
                Al Salam Training Centre W.L.L<br />
                Flat 131, Building 79, Road 2802, Block 428<br />
                Al Seef, Kingdom of Bahrain
              </address>
              <a
                href="https://maps.app.goo.gl/roveiLnUGFJL1KaQ7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline mt-2 inline-block"
              >
                View on Google Maps
              </a>
            </div>

          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-orange-500 font-bold">Al-Salam</span> Training Centre. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
