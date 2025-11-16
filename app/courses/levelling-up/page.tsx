"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, Compass, GraduationCap, Languages, Target } from "lucide-react";

const systems = ["Norwegian", "American", "Australian", "French", "Scandinavian", "Canadian", "Spanish", "Swiss", "Netherlands", "Singapore", "Portuguese"];

const subjects = [
  { title: "Languages", text: "English, German, French, Spanish, Portuguese, and more—focusing on fluency, grammar, and confidence.", icon: Languages },
  { title: "Mathematics", text: "From building strong foundations to advanced problem solving.", icon: Target },
  { title: "Sciences", text: "Physics, Chemistry, and Biology explained clearly and applied to real-life contexts.", icon: BookOpen },
  { title: "Economics & Business Management", text: "Mastering theory, case studies, and exam strategies.", icon: GraduationCap },
];

const support = [
  "Work directly with your school’s programme to reinforce what you are learning in class.",
  "Explain topics you didn’t fully understand at school until they become crystal clear.",
  "Guide you step-by-step through your homework so you not only complete it but also truly understand it.",
  "Fill in knowledge gaps and strengthen study skills for long-term success.",
];

export default function LevellingUpPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.16),transparent_25%)]" />
        <div className="max-w-5xl mx-auto px-6 py-16 relative space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-blue-50">Levelling Up Your School Studies</h1>
            <p className="text-blue-100/90 leading-relaxed max-w-3xl mx-auto">
              No matter which country or curriculum you follow, we help you get ahead and stay confident in your studies. Our experienced tutors work with students from a wide range of educational systems, including:
            </p>

            <div className="flex flex-wrap justify-center gap-2 text-sm text-blue-50/90">
              {systems.map((item) => (
                <span key={item} className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <h2 className="text-center text-2xl font-bold text-blue-100">All Subjects Covered</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {subjects.map(({ title, text, icon: Icon }) => (
                <div key={title} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
                  <div className="inline-flex items-center gap-3 text-lg font-semibold">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/30 text-blue-100">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>{title}</span>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">
        <section className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100">Fully Tailored Support</h2>
          <p className="text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Every lesson is personalised to the student’s needs, pace, and learning style. We can:
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          {support.map((item) => (
            <div key={item} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 mt-1 text-blue-300" />
              <p className="text-neutral-300 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="bg-black/40 border border-white/10 rounded-2xl p-8 space-y-4 text-center shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
          <h3 className="text-xl md:text-2xl font-bold text-blue-100">With our support, you don’t just “catch up”—you level up.</h3>
          <p className="text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            You gain deeper understanding, more confidence, and the ability to face school challenges with ease.
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
        </div>
      </div>
    </div>
  );
}
