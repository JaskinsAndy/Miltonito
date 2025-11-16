"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Compass, GraduationCap, Layers, MessageCircle, Target } from "lucide-react";

const grades = [
  {
    title: "Volksschule (Primary School, Grades 1-4)",
    text: "Building strong foundations in numbers, operations, and problem-solving.",
    icon: BookOpen,
  },
  {
    title: "Unterstufe (Lower Secondary, Grades 5-8)",
    text: "Strengthening arithmetic, geometry, fractions, percentages, algebra basics, and word problems.",
    icon: Layers,
  },
  {
    title: "Oberstufe (Upper Secondary, Grades 9-12/13)",
    text: "Advanced topics like algebra, trigonometry, functions, calculus, probability, statistics, and exam preparation (Matura readiness).",
    icon: GraduationCap,
  },
];

const strengths = [
  "Curriculum-aligned lessons adapted to each student’s school level.",
  "Focus on both conceptual understanding and exam performance.",
  "Flexible support for homework, test preparation, and long-term learning strategies.",
  "Extra guidance for expats adjusting to the Austrian school system.",
];

export default function AustrianProgramPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.16),transparent_25%)]" />
        <div className="max-w-5xl mx-auto px-6 py-16 relative space-y-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-blue-50"
          >
            AUSTRIAN PROGRAM
          </motion.h1>
          <p className="text-blue-100/90 max-w-4xl mx-auto leading-relaxed">
            At our online school, we provide specialized mathematics tutoring fully aligned with the Austrian curriculum. Our goal is to help students not only keep up with their schoolwork but also achieve higher performance, deeper understanding, and stronger confidence in math.
          </p>
          <p className="text-blue-100/90 max-w-4xl mx-auto leading-relaxed">
            This service is especially tailored for expat students in Austria, who may face challenges adapting to the local system. With clear explanations, step-by-step guidance, and personalized support, we ensure every student feels equipped to succeed.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        <section className="space-y-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100">We teach all grades of the Austrian school system:</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {grades.map(({ title, text, icon: Icon }) => (
              <div key={title} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
                <div className="inline-flex items-center gap-3 text-lg font-semibold">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/30 text-blue-100">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>{title}</span>
                </div>
                <p className="text-neutral-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 text-center">What makes our tutoring effective:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((item) => (
              <div key={item} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex items-start gap-3">
                <Target className="h-5 w-5 mt-1 text-blue-300" />
                <p className="text-neutral-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-black/40 border border-white/10 rounded-2xl p-8 space-y-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-100">Start today for a stress-free tomorrow.</h3>
          <p className="text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Whether your child is just beginning primary school, preparing for Matura, or needs steady support in between, we provide the tools and encouragement to help them thrive in mathematics!
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:jasurka2015@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Contact us!
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
