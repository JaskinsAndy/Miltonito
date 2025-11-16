"use client";

import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, BookOpen, Calendar, MessageCircle, Target } from "lucide-react";

const schedule = [
  {
    title: "Mock Exam 1 – January / Early February",
    text: "First full simulation to identify strengths and gaps after Semester 1.",
  },
  {
    title: "Mock Exam 2 – March",
    text: "A second round to test improvements, reinforce knowledge, and build exam stamina.",
  },
  {
    title: "Mock Exam 3 – April",
    text: "The final preparation before the official IB exams, focusing on fine-tuning strategies and boosting confidence.",
  },
];

const subjects = [
  "Mathematics (AA & AI, SL & HL)",
  "Sciences (Biology, Chemistry, Physics, Environmental Systems & Societies)",
  "Economics",
  "Languages (Language A & Language B, SL & HL)",
];

const benefits = [
  "Realistic exam environment – time limits, structure, and expectations identical to the IB.",
  "Targeted feedback reports – each exam is carefully reviewed, with detailed comments on what to improve.",
  "Progress monitoring – students can clearly see growth across three sessions.",
  "Confidence building – regular exposure to exam conditions reduces anxiety and increases performance on the real day.",
  "Individualized guidance – after each mock, we offer recommendations on study focus and strategy.",
];

export default function MockExamsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-sky-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.16),transparent_25%)]" />
        <div className="max-w-5xl mx-auto px-6 py-16 relative space-y-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-blue-50"
          >
            IB Diploma Programme – Mock Exams
          </motion.h1>
          <p className="text-blue-100/90 max-w-4xl mx-auto leading-relaxed">
            Preparing for the final IB exams can feel overwhelming. That’s why we provide a structured series of Mock Exams to help students enter their real assessments with confidence and proven exam techniques. Our mocks replicate the conditions of the official IB exams, giving students not only practice but also a clear sense of their readiness.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        <section className="space-y-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100">How it works:</h2>
          <p className="text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Students in Year 2 of the IB Diploma Programme sit three complete rounds of Mock Exams before the final external assessments:
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {schedule.map(({ title, text }) => (
              <div key={title} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
                <div className="inline-flex items-center gap-3 text-lg font-semibold">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/30 text-blue-100">
                    <Calendar className="h-4 w-4" />
                  </span>
                  <span>{title}</span>
                </div>
                <p className="text-neutral-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 text-center">Subjects Offered:</h2>
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-2">
            <ul className="list-disc list-inside text-neutral-300 space-y-1">
              {subjects.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 text-center">Benefits for Students:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((item) => (
              <div key={item} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex items-start gap-3">
                <BadgeCheck className="h-5 w-5 mt-1 text-blue-300" />
                <p className="text-neutral-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100">Registration</h2>
          <p className="text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Registration for the Mock Exams opens at the start of January via a link on our website. Students and parents can simply follow the link to sign up for the exams in their chosen subjects. Early registration is recommended, as spots are limited and planning for exam materials and schedules requires advance preparation.
          </p>
          <p className="text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            By the time final exams arrive, students are not only academically prepared but also mentally ready, having already experienced the pressure and pace of IB exams multiple times!
          </p>
        </section>

        <section className="bg-black/40 border border-white/10 rounded-2xl p-8 space-y-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
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
