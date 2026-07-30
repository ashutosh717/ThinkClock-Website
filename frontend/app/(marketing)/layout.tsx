import type { ReactNode } from "react";

import { LenisProvider } from "@/components/marketing/lenis-provider";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LenisProvider />
      {children}
    </>
  );
}
