"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarDays, ArrowUpRight, BookOpen } from "lucide-react";

type Post = {
  title: string;
  date: string;
  href?: string;
  summary: string;
};

const posts: Post[] = [
  {
    date: "23.11.2024",
    title: "CAPYBARA 2024 November have been passed!",
    summary: "A quick recap of our autumn Capybara Math Olympiad and key takeaways for young problem solvers.",
  },
  {
    date: "17.08.2025",
    title: "IB MATH Workbooks have been published",
    summary: "Freshly published IB Math workbooks—what’s inside and how they help HL/SL students stay on track.",
  },
  {
    date: "25.08.2025",
    title: "Checklist to be prepared for the new study year",
    summary: "A simple pre-term checklist to start the school year organized, confident, and ready to learn.",
  },
  {
    date: "30.08.2025",
    title: "Terms and conditions of our services",
    summary: "An overview of our service guidelines and how we support families through the academic journey.",
  },
  {
    date: "31.08.2025",
    title: "BAN of IB in Russia",
    summary: "Context on recent policy updates, what they mean for students, and how we help navigate options.",
  },
  {
    date: "01.09.2025",
    title: "Congratulations due to 1-st September!",
    summary: "Celebrating the start of the academic year with our global Milton International community.",
  },
  {
    date: "08.09.2025",
    title: "Understanding the Differences Between IB Math AA & AI (HL/SL): A Parent’s Guide",
    summary: "A parent-friendly explanation of pathways, workloads, and how to pick the right IB Math track.",
    href: "/blog/ib-math-aa-ai",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.16),transparent_25%)]" />
        <div className="max-w-6xl mx-auto px-6 py-16 relative flex flex-col items-center text-center gap-6">
          <div className="space-y-4 max-w-3xl">
            <p className="uppercase text-sm tracking-[0.25em] text-purple-100">Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">News, Guides, and Updates</h1>
            <p className="text-purple-100/90 text-lg leading-relaxed">
              Highlights from our programs, quick guides for families, and announcements from Milton International School. Full articles coming soon—tap into the latest headlines below.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-2 gap-6">
          {posts
            .slice()
            .reverse()
            .map((post) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col gap-3 shadow-[0_12px_36px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-2 text-sm text-purple-100/80">
                <CalendarDays className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <h2 className="text-xl font-semibold text-white">{post.title}</h2>
              <p className="text-neutral-300 leading-relaxed text-sm">{post.summary}</p>
              <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold">
                <BookOpen className="h-4 w-4" />
                <span>Full article coming soon</span>
              </div>
              <div className="flex justify-end">
                <Link
                  href={post.href ?? "#"}
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  Read preview <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
