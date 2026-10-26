import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Rohit Patil — Full Stack Developer", template: "%s · Rohit Patil" },
  description: "The portfolio of Rohit Patil — a full stack developer building thoughtful, useful web experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="light"><body><div className="site-frame"><SiteHeader /><main>{children}</main><SiteFooter /></div></body></html>;
}