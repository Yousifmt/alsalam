
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';

interface ContactCardProps {
  Icon: React.ElementType;
  title: string;
  value: string;
  href: string;
  className?: string;
}

export function ContactCard({ Icon, title, value, href, className }: ContactCardProps) {
  const isExternal = href.startsWith('http');
  const isFormLink = href.startsWith('#');
  const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  const cardContent = (
    <Card className={cn("h-full transition-all duration-300 border-2 border-transparent group-hover:border-primary group-hover:scale-105 group-hover:shadow-2xl", className)}>
      <CardHeader className="flex flex-col items-center text-center gap-4 space-y-0">
        <div className="bg-blue-900/50 p-4 rounded-full">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      {!isFormLink && (
        <CardContent className="text-center">
            <p className="text-muted-foreground group-hover:text-foreground transition-colors break-all">{value}</p>
        </CardContent>
      )}
    </Card>
  );

  if (isFormLink) {
    return (
       <a href={href} className="h-full block group">
        {cardContent}
       </a>
    )
  }

  return (
    <Link href={href} {...linkProps} className="h-full block group">
      {cardContent}
    </Link>
  );
}
