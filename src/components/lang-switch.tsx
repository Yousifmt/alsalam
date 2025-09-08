// src/components/lang-switch.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LangSwitch() {
  const pathname = usePathname();
  const router = useRouter();

  const isAr = pathname === "/ar" || pathname.startsWith("/ar/");
  const toggle = () => {
    const next = isAr
      ? pathname.replace(/^\/ar(?=\/|$)/, "") || "/"   // AR -> EN
      : `/ar${pathname === "/" ? "" : pathname}`;      // EN -> AR
    router.push(next);
  };

  return (
    <Button variant="outline" onClick={toggle}>
      {isAr ? "EN" : "AR"}
    </Button>
  );
}
