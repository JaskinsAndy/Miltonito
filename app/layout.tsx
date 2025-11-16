import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Footer } from "@/components/footer";
import { Home, BookOpen, Users, GraduationCap, PenSquare, Trophy } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Milton International School - Excellence in Education",
  description: "Milton International School offers world-class education with IB programs, tutoring, and comprehensive academic services.",
  keywords: "IB tutoring, IGCSE, A-Level, private school, online education, international curriculum",
  authors: [{ name: "Milton International School" }],
  openGraph: {
    title: "Milton International School - Excellence in Education",
    description: "World-class education with IB programs, tutoring, and comprehensive academic services.",
    url: "https://miltoninternationalschool.com",
    siteName: "Milton International School",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Milton International School",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milton International School - Excellence in Education",
    description: "World-class education with IB programs, tutoring, and comprehensive academic services.",
    images: ["/og-image.jpg"],
  },
};

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Courses & Services",
    link: "/courses",
    icon: <BookOpen className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Teachers",
    link: "/teachers",
    icon: <GraduationCap className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Capybara",
    link: "/courses/capybara-math-olympiad",
    icon: <Trophy className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Blog",
    link: "/blog",
    icon: <PenSquare className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About Us",
    link: "/about",
    icon: <Users className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <FloatingNav navItems={navItems} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
