"use client";

import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, BookOpenCheck, ClipboardCheck, MessageCircle, PlaySquare, Target } from "lucide-react";

const formats = [
  {
    title: "Personal Tutoring Sessions",
    text: "Live, one-on-one or small-group classes with expert teachers, tailored to your needs and pace. Ideal if you want personalised attention plus real-time feedback.",
    icon: Target,
  },
  {
    title: "Complete Video Learning Sets",
    text: "Full pre-recorded lesson packages covering the entire syllabus with explanations, examples, and practice exercises. Great for flexible, self-paced learning.",
    icon: PlaySquare,
  },
];

const steps = [
  { title: "Initial Assessment", text: "Identify strengths, weaknesses, and target grades.", icon: ClipboardCheck },
  { title: "Structured Learning Plan", text: "Map out the journey from now until exam day so every topic is mastered ahead of time.", icon: BookOpenCheck },
  { title: "Ongoing Practice", text: "Regular timed tests and past-paper drills.", icon: BadgeCheck },
  { title: "Final Review & Confidence Boost", text: "Intensive revision weeks to fine-tune knowledge and strategy.", icon: Target },
];

export default function ExamPrepPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-sky-900">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.18),transparent_25%)]" />
        <div className="max-w-5xl mx-auto px-6 py-14 relative space-y-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-blue-50"
          >
            Ready to Help Your Child Achieve Their Goals
          </motion.h1>
          <p className="text-blue-100/90 leading-relaxed max-w-3xl mx-auto">
            Whether your student aims to secure top grades, build a solid base for future study, or develop true understanding—our expert tutors guide them with warmth, skill, and proven results.
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
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <section className="space-y-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100">Our Preparation Formats</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {formats.map(({ title, text, icon: Icon }) => (
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
          <p className="text-neutral-300 leading-relaxed max-w-3xl mx-auto">
            Many students choose a blended approach: start with video modules to learn concepts, then refine skills in live sessions for maximum efficiency.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 text-center">Our Exam Readiness Process</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map(({ title, text, icon: Icon }) => (
              <div key={title} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-2">
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

        <section className="bg-black/40 border border-white/10 rounded-2xl p-8 space-y-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100">Start today for a stress-free tomorrow.</h2>
          <p className="text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            When preparation begins early, exams stop being a source of fear—and start being a stepping stone toward your goals.
          </p>
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
