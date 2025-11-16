"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, CalendarDays, CheckCircle2, Sparkles, Users } from "lucide-react";

const specials = [
  "Focus on creative problem-solving and logical thinking, not just advanced math formulas.",
  "Open to three age categories: 9-11 “Explorers”, 12-14 “Innovators”, 15-17 “Visionaries”.",
  "Available in four languages: English, Ukrainian, Russian, and German.",
  "Everyone receives a Certificate of Participation.",
  "The Top 3 winners in each category will be awarded valuable prizes.",
];

const whyJoin = [
  "Every participant receives a beautifully designed Certificate of Participation.",
  "The Top 3 winners in each category are awarded valuable prizes.",
  "Students join a vibrant international community of young thinkers who love puzzles, logic, and mathematics.",
];

const details = [
  "Date: 15-th of November 13:00 (CET)",
  "16-th of November 14:00 (CET)",
  "Format: Online — students can take part from anywhere in the world.",
  "Duration: Participants will have 60 minutes to solve a carefully selected set of problems.",
  "The cost of participation is 20 euros.",
  "Registration is opened!",
];

export default function CapybaraOlympiadPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-sky-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.16),transparent_25%)]" />
        <div className="max-w-5xl mx-auto px-6 py-14 relative space-y-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-blue-50"
          >
            Capybara Math Olympiad
          </motion.h1>
          <p className="text-blue-100/90 max-w-4xl mx-auto leading-relaxed">
            Every fall, our school hosts the Capybara Math Olympiad, an international, fully online mathematics competition open to students of all ages. Held in November, it challenges young learners worldwide to think creatively, reason logically, and enjoy math in a fun, inspiring environment.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        <section className="grid lg:grid-cols-2 gap-8 items-center bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/20 text-emerald-100 text-sm font-semibold">
              <Sparkles className="h-4 w-4" />
              CAPYBARA Math Olympiad 2025
            </div>
            <p className="text-neutral-200 leading-relaxed">
              Ready to challenge your mind? Join the International Math & Logic Olympiad 2025—designed for students who think outside the box. Problems spark creativity, logical reasoning, and innovative thinking.
            </p>
            <p className="text-neutral-200 leading-relaxed">
              Unlike contests focused on rote formulas, this Olympiad is about thinking differently—encouraging students to look beyond standard approaches, use imagination, and develop strategies that help in academics and life.
            </p>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-emerald-200">What makes this Olympiad special?</h3>
              <ul className="space-y-2 text-neutral-200">
                {specials.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-300 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative w-full h-full min-h-[320px] overflow-hidden rounded-xl border border-neutral-800">
            <Image
              src="/Capybara/capybara-2025-add.webp"
              alt="Capybara Math Olympiad 2025"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
          </div>
        </section>

        <section className="space-y-4">
          <p className="text-neutral-300 leading-relaxed text-center">
            The Capybara Math Olympiad is designed to be accessible, exciting, and motivating. Students test their skills against peers worldwide, experience the thrill of competition, and develop a lifelong love for mathematics.
          </p>
          <p className="text-neutral-300 leading-relaxed text-center">
            By participating, learners enhance analytical and logical thinking while joining a global community of young math enthusiasts who value curiosity, perseverance, and confidence.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
            <h3 className="text-xl font-semibold text-blue-100 text-center md:text-left">Why Join?</h3>
            <ul className="space-y-2 text-neutral-200">
              {whyJoin.map((item) => (
                <li key={item} className="flex gap-2">
                  <Award className="h-5 w-5 text-yellow-300 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
            <h3 className="text-xl font-semibold text-blue-100 text-center md:text-left">Key Details</h3>
            <ul className="space-y-2 text-neutral-200">
              {details.map((item) => (
                <li key={item} className="flex gap-2">
                  <CalendarDays className="h-5 w-5 text-blue-300 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-black/40 border border-white/10 rounded-2xl p-8 space-y-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <div className="flex justify-center gap-3 text-blue-50">
            <Award className="h-6 w-6" />
            <Users className="h-6 w-6" />
          </div>
          <div className="flex justify-center">
            <a
              href="mailto:jasurka2015@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
              Contact us!
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
