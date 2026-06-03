import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// 1. Font Configuration
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

// 2. Metadata for SEO
export const metadata: Metadata = {
  title: "Abdulai Mohammed Hardi - Portfolio",
  description: "Abdulai Mohammed Hardi's personal portfolio showcasing projects, skills, and experience.",
};

// 3. Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`} suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              const storedTheme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (_) {}
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
