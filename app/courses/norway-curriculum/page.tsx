"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Compass, GraduationCap, MessageCircle, Target } from "lucide-react";

const grades = [
  {
    title: "Barneskole (Primary School, Grades 1–7)",
    text: "Foundational support in mathematics and sciences, fostering curiosity and critical thinking.",
  },
  {
    title: "Ungdomsskole (Lower Secondary, Grades 8–10)",
    text: "Reinforcement of key concepts in arithmetic, algebra, geometry, physics, chemistry, and biology, with emphasis on problem-solving and practical applications.",
  },
  {
    title: "Videregående Skole (Upper Secondary, Grades 11–13)",
    text: "Advanced tutoring in mathematics and sciences, including algebra, calculus, statistics, and higher-level physics, chemistry, and biology.",
  },
];

const reasons = [
  "Curriculum-aligned lessons designed to meet national standards.",
  "Personalized, student-centered approach that adapts to individual strengths and learning styles.",
  "Focus on conceptual understanding and problem-solving skills rather than rote memorization.",
  "Support for exam preparation and long-term academic success.",
];

export default function NorwayCurriculumPage() {
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
            Norway Curriculum Tutoring
          </motion.h1>
          <p className="text-blue-100/90 max-w-4xl mx-auto leading-relaxed">
            We provide personalized tutoring for students following the Norwegian curriculum, focusing on mathematics and sciences. Our goal is to help students strengthen understanding, build confidence, and achieve higher academic performance while keeping pace with national requirements.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        <section className="space-y-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100">Grades and Levels Covered:</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {grades.map(({ title, text }) => (
              <div key={title} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
                <div className="inline-flex items-center gap-3 text-lg font-semibold">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/30 text-blue-100">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <span>{title}</span>
                </div>
                <p className="text-neutral-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 text-center">Why Choose Our Norway Curriculum Tutoring:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((item) => (
              <div key={item} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex items-start gap-3">
                <Target className="h-5 w-5 mt-1 text-blue-300" />
                <p className="text-neutral-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-black/40 border border-white/10 rounded-2xl p-8 space-y-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <p className="text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Whether your child is just beginning primary school or preparing for upper secondary examinations, our Norway curriculum tutoring provides the guidance, structure, and expertise to help them excel in mathematics and sciences while developing a love for learning.
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
