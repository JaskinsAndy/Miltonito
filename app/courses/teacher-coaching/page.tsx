"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, MessageCircle, Sparkles, Users } from "lucide-react";

const individualFocus = [
  "Develop greater efficiency, increase income, and upgrade overall approach to teaching.",
  "Refine technical aspects of lesson delivery, design more engaging and interactive sessions.",
  "Improve time management and organization with practical tools.",
  "Build mindset, creativity, and confidence to connect more authentically with students.",
];

const groupBenefits = [
  "Exchange experiences with fellow educators, gain fresh perspectives, and find inspiration in collaborative problem-solving.",
  "Structured yet flexible sessions with clear goals and measurable progress.",
  "Freedom to experiment, innovate, and discover your unique teaching style.",
];

export default function TeacherCoachingPage() {
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
            Teacher Coaching
          </motion.h1>
          <p className="text-blue-100/90 max-w-4xl mx-auto leading-relaxed">
            Our Teaching Coaching program is designed for educators and tutors who wish to unlock their hidden potential, refine their skills, and elevate their professional practice. Through a combination of individual and group sessions, we provide a supportive environment where teachers can reflect, grow, and adopt new strategies that make their teaching more effective, impactful, and fulfilling.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 text-center">Personalized Coaching</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {individualFocus.map((item) => (
              <div key={item} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex items-start gap-3">
                <Sparkles className="h-5 w-5 mt-1 text-blue-300" />
                <p className="text-neutral-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 text-center">Group Coaching Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {groupBenefits.map((item) => (
              <div key={item} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex items-start gap-3">
                <Users className="h-5 w-5 mt-1 text-blue-300" />
                <p className="text-neutral-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-black/40 border border-white/10 rounded-2xl p-8 space-y-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <p className="text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Ultimately, our aim is to help you not only improve your teaching but also rediscover the joy and purpose of education. With the right guidance, you can unlock new possibilities—for your students and for your own professional growth and personal fulfillment.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:jasurka2015@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
              <Compass className="h-5 w-5" />
              Contact us!
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
