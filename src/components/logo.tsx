import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export function Logo({ className, textClassName }: { className?: string, textClassName?: string }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2 text-2xl font-semibold tracking-tight', className)}>
      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
         {/* This is a placeholder for your logo image */}
      </div>
      <div className={cn(textClassName)}>
        <span className="font-bold text-primary">Al-Salam</span>
        <span className="text-foreground"> Training Centre</span>
      </div>
    </Link>
  );
}
