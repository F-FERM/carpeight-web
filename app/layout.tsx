import type { Metadata } from "next";

import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScrollHandler from "./components/SmoothScrollHandler";
import WhatsAppFloat from "./components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Carp Eight",
  description: "Carp Eight",
  icons: {
    icon: "/images/metaicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans scroll-smooth")}>
      <body className="antialiased">
        <SmoothScrollHandler />
         <WhatsAppFloat />
        {children}
      </body>
    </html>
  );
}
