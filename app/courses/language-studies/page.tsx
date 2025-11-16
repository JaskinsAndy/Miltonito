"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Ear, MessageCircle, Mic, Music, Sparkles, Wand2 } from "lucide-react";

const languages = ["English", "German", "Spanish", "Chinese", "Arabic", "French", "Japanese"];

const methods = [
  { title: "Gamified Practice", text: "Quizzes, challenges, and timed activities to keep motivation high.", icon: Sparkles },
  { title: "Immersive Conversations", text: "Speak from day one through guided dialogues and role-playing real-life situations.", icon: MessageCircle },
  { title: "Visual Learning", text: "Images, infographics, and mind maps to strengthen memory and understanding.", icon: BookOpen },
  { title: "Story-Based Approach", text: "Learn grammar and vocabulary in context through stories and cultural anecdotes.", icon: Wand2 },
  { title: "Active Listening", text: "Songs, podcasts, and videos to train your ear to understand native speakers.", icon: Ear },
  { title: "Pronunciation Coaching", text: "Targeted exercises to sound natural and confident.", icon: Mic },
];

const focus = [
  "Vocabulary building and grammar mastery.",
  "Reading and writing skills for both academic and everyday contexts.",
  "Listening and speaking fluency for real communication.",
  "Cultural insights to understand not just the language, but the people behind it.",
];

export default function LanguageStudiesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-sky-900 to-indigo-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.16),transparent_25%)]" />
        <div className="max-w-5xl mx-auto px-6 py-16 relative space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-blue-50">Language Studies – Learn with Confidence, Speak with Ease</h1>
            <p className="text-blue-100/90 leading-relaxed max-w-3xl mx-auto">
              Languages open doors—to new cultures, opportunities, and ways of thinking. Whether for school, exams, travel, business, or personal growth, we make language learning effective, enjoyable, and practical.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-blue-50/90">
              {languages.map((lang) => (
                <span key={lang} className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        <section className="space-y-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100">Our Teaching Methods</h2>
          <p className="text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            We strongly recommend beginning exam preparation at least two years before the exam. We combine proven strategies with interactive activities to make every lesson engaging and productive:
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {methods.map(({ title, text, icon: Icon }) => (
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
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 text-center">Personalised Learning Plans</h2>
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
            <p className="text-neutral-300 leading-relaxed">
              Each student’s lessons are adapted to their goals, pace, and preferred learning style. We focus on:
            </p>
            <ul className="space-y-2 list-disc list-inside text-neutral-300">
              {focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-black/40 border border-white/10 rounded-2xl p-8 space-y-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100">With our approach, you won’t just “study” a language—you’ll live it.</h2>
          <p className="text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Think in it, and use it with confidence in any situation.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:jasurka2015@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
              <Music className="h-5 w-5" />
              Contact us!
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
