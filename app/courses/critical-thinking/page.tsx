"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Lightbulb, Link as LinkIcon, MessageCircle, Target, Workflow } from "lucide-react";

const benefits = [
  "Break down complex problems into manageable steps.",
  "Recognise patterns and connections others might miss.",
  "Think creatively while staying grounded in reason.",
  "Make faster, more confident decisions in both studies and everyday life.",
];

export default function CriticalThinkingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_25%_10%,rgba(255,255,255,0.25),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_25%)]" />
        <div className="max-w-5xl mx-auto px-6 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="uppercase text-sm tracking-[0.25em] text-purple-100">Critical Thinking</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Logic Life: Train Your Brain to Think Clearly
            </h1>
            <p className="text-lg text-purple-100/90 max-w-3xl">
              Logic is more than a school subject—it’s a life skill. Our Logic Life lessons are designed to train your brain to think
              clearly, analyse situations, and find solutions with confidence.
            </p>
          </motion.div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "Mindset", text: "Illustrated logic tasks and puzzles that build rigorous, calm reasoning." },
              { icon: Workflow, title: "Process", text: "Step-by-step breakdowns to tackle complex problems without overwhelm." },
              { icon: Target, title: "Outcomes", text: "Make confident decisions faster—in school and everyday life." },
            ].map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-black/30 rounded-2xl border border-white/10 p-6 space-y-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-purple-600/30 text-purple-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-purple-100/80 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Through illustrated tasks, puzzles, and problem-solving challenges, you’ll learn to:
          </h2>
          <ul className="space-y-3 text-neutral-200 leading-relaxed list-disc list-inside">
            {benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
            <h3 className="text-2xl font-semibold text-purple-100">Clarity, Calm, Confidence</h3>
            <p className="text-neutral-300 leading-relaxed">
              When you sharpen your logical thinking, life’s problems stop feeling overwhelming—you begin to approach them with calm, clarity, and focus.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Whether you’re preparing for exams, learning a new skill, or navigating daily challenges, a strong logical mind is your best lifelong tool.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-2xl font-semibold text-purple-100">Contact us!</h3>
            <div className="flex flex-col gap-3 text-neutral-300">
              <a href="mailto:jasurka2015@gmail.com" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors">
                <MessageCircle className="h-5 w-5" />
                jasurka2015@gmail.com
              </a>
              <div className="inline-flex items-center gap-2 text-neutral-400">
                <Lightbulb className="h-5 w-5" />
                Tailored logic training and practice sets
              </div>
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
              >
                Schedule a consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
