import type { Metadata } from "next";
import { kanit } from "@/app/ui/fonts"
import "./globals.css";

export const metadata: Metadata = {
  title: "CS 180 Project",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
