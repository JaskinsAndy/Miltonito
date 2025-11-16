"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Compass, GraduationCap, Home, MessageCircle, School, Target } from "lucide-react";

const audience = [
  "Ukrainian students living abroad who wish to continue their education in line with Ukraine’s standards.",
  "Students planning to apply to Ukrainian universities and needing an official school certificate.",
  "Learners who want structured, high-quality preparation for the National Multi-Subject Test (NMT).",
];

const includes = [
  "Full Ukrainian School Curriculum – All required subjects taught in accordance with the Ministry of Education standards.",
  "Live Online Lessons – Interactive classes with experienced Ukrainian teachers.",
  "Exam-Oriented Learning – Focused preparation for the NMT, including past papers and exam simulations.",
  "Homework Support – Guidance and feedback to ensure you understand each topic thoroughly.",
  "Progress Tracking – Regular assessments to monitor improvement and readiness for the test.",
];

const reasons = [
  "Study from anywhere in the world while meeting all requirements for the Ukrainian certificate.",
  "Learn from qualified teachers with experience in both national and international education.",
  "Gain confidence for the NMT through structured practice and proven exam strategies.",
];

export default function UkrainianDiplomaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.16),transparent_25%)]" />
        <div className="max-w-5xl mx-auto px-6 py-16 relative space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-blue-50">Ukrainian School Curriculum & NMT Preparation</h1>
            <p className="text-blue-100/90 leading-relaxed max-w-3xl mx-auto">
              This course is designed for students who want to study according to the official Ukrainian school curriculum, earn a recognised Ukrainian school certificate online, and successfully prepare for the National Multi-Subject Test (NMT).
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        <section className="space-y-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100">Who This Course Is For</h2>
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3 text-left">
            <ul className="space-y-2 list-disc list-inside text-neutral-300">
              {audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 text-center">What the Course Includes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {includes.map((item) => (
              <div key={item} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex items-start gap-3">
                <BookOpen className="h-5 w-5 mt-1 text-blue-300" />
                <p className="text-neutral-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 text-center">Why Choose Our Programme</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((item) => (
              <div key={item} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 space-y-2">
                <div className="inline-flex items-center gap-2 text-lg font-semibold text-white">
                  <Compass className="h-5 w-5 text-blue-300" />
                  <span>Advantage</span>
                </div>
                <p className="text-neutral-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-black/40 border border-white/10 rounded-2xl p-8 space-y-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <p className="text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            With this course, you’ll graduate with a Ukrainian school certificate, be fully prepared for the NMT, and have the knowledge and skills to take your next educational step in Ukraine or abroad.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:jasurka2015@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
              <School className="h-5 w-5" />
              Contact us!
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
