import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Import global styles

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Focus Timer App",
  description: "A simple timer application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-background text-foreground p-6">
          {children}
        </div>
      </body>
    </html>
  );
}
