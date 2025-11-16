"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Brain, CheckCircle2, Languages, LineChart, Target, Trophy } from "lucide-react";

const subjects = [
  { title: "Economics & Business Management", text: "Analyzing and applying theory effectively using real-life case studies and exam strategies." },
  { title: "Mathematics", text: "Building a robust foundation and mastering advanced problem-solving tactics." },
  { title: "Sciences", text: "Physics, Chemistry, and Biology: clarifying complex theories with real-world examples and focused exam practice." },
  { title: "Languages", text: "English, French, German, and more: enhancing fluency, accuracy, and confidence through engaging and interactive lessons." },
];

const approach = [
  {
    title: "Conceptual Mastery + Real-World Relevance",
    text: "Go beyond rote learning. Carefully designed examples, hands-on activities, and problem-solving sessions help students grasp not just the “what” but the “why,” making learning memorable and transferable.",
  },
  {
    title: "Critical Thinking Built-In",
    text: "IGCSE rewards reasoned thinking and flexibility. We embed critical thinking exercises—evaluating scenarios, comparing perspectives, and applying knowledge in novel ways—so students become independent thinkers ready for success.",
  },
  {
    title: "Step-by-Step Skill Development",
    text: "Meticulously scaffolded lessons move from foundational principles to complex knowledge—closing gaps, building stamina, and ensuring readiness for A-Level depth.",
  },
  {
    title: "Topic-Based Mastery Paths",
    text: "Instead of one-size-fits-all pacing, we organize learning around comprehensive topic units so assignments and assessments target full understanding before moving forward.",
  },
];

const outcomes = [
  { title: "Early Confidence Boost", text: "Mastering fundamentals helps students approach exams—and new challenges—with self-assurance." },
  { title: "Results That Last", text: "Deep comprehension leads to long-term academic success—not just superficial exam performance." },
  { title: "Easier A-Level Transition", text: "Strong foundations and critical thinking ease the leap to more conceptual, analytical A-Level work." },
  { title: "Tailored Support", text: "Bespoke pacing and content ensure no student is held back or left behind." },
];

const philosophy = [
  { title: "Tailored Learning Plans", text: "Each student receives a customized program built on their current level, learning style, and target grades." },
  { title: "Exam Strategy Coaching", text: "Beyond subject knowledge, we provide mark-scheme insights, structured time management, and question-analysis techniques." },
  { title: "Interactive, Engaging Lessons", text: "Dynamic visuals, simulations, collaborative tasks, and real-world scenarios keep sessions both fun and highly educational." },
  { title: "Continuous Feedback Loop", text: "Frequent progress reports, targeted feedback, and open communication keep students motivated and aware of their growth." },
];

export default function IGCSEPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-sky-800">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.18),transparent_25%)]" />
        <div className="max-w-5xl mx-auto px-6 py-16 relative space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="uppercase text-sm tracking-[0.25em] text-blue-100">IGCSE & A-Level</p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-blue-50">
              IGCSE & A-Level Tutoring – Maths, Sciences, Languages, Economics & Business Management
            </h1>
            <p className="text-blue-100/90 leading-relaxed">
              At our online school, we provide high-quality, tailored tutoring for both IGCSE and A-Level students across a broad array of subjects:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {subjects.map(({ title, text }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-black/30 rounded-2xl border border-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center gap-3 text-lg font-semibold">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/30 text-blue-100">
                    <BookOpen className="h-4 w-4" />
                  </span>
                  <span>{title}</span>
                </div>
                <p className="mt-3 text-blue-100/90 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-100">What Makes Our IGCSE Approach Unique?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {approach.map(({ title, text }) => (
              <div key={title} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
                <div className="inline-flex items-center gap-2 text-lg font-semibold text-white">
                  <CheckCircle2 className="h-5 w-5 text-blue-300" />
                  <span>{title}</span>
                </div>
                <p className="text-neutral-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-blue-100">Why This Matters</h2>
          <div className="overflow-hidden rounded-2xl border border-blue-900/60 shadow-lg">
            <div className="grid grid-cols-2 bg-blue-900/60 text-blue-50 font-semibold">
              <div className="px-4 py-3 border-r border-blue-800/60">Benefit</div>
              <div className="px-4 py-3">Description</div>
            </div>
            {outcomes.map(({ title, text }, idx) => (
              <div key={title} className={`grid grid-cols-2 ${idx % 2 === 0 ? "bg-blue-900/30" : "bg-blue-900/10"}`}>
                <div className="px-4 py-3 font-semibold text-white">{title}</div>
                <div className="px-4 py-3 text-blue-50">{text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-100">Our Teaching Philosophy in Practice</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {philosophy.map(({ title, text }) => (
              <div key={title} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-2">
                <div className="inline-flex items-center gap-2 text-lg font-semibold text-white">
                  <Brain className="h-5 w-5 text-blue-300" />
                  <span>{title}</span>
                </div>
                <p className="text-neutral-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-black/40 border border-white/10 rounded-2xl p-8 space-y-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100">Ready to Help Your Child Achieve Their Goals</h2>
          <p className="text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Whether your student aims to secure top IGCSE grades, build a solid base for A-Levels, or simply develop true understanding—our expert tutors are here to guide them with warmth, skill, and proven results.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:jasurka2015@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
              <Trophy className="h-5 w-5" />
              Contact us!
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
