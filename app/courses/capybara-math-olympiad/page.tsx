"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Users } from "lucide-react";

const levels = [
  "Capy Pups (6–8 years) – curious beginners exploring the world of numbers",
  "Junior Capys (9–10 years) – building solid math skills with growing confidence",
  "Smart Explorers (11–13 years) – adventurous problem-solvers, ready for challenges",
  "Math Challengers (14–15 years) – sharpening logic and competing at higher levels",
  "Prime Thinkers (16–17 years) – advanced problem-solvers preparing for the future",
];

export default function CapybaraOlympiadPage() {
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
            Capybara Math Olympiad
          </motion.h1>
          <p className="text-blue-100/90 max-w-4xl mx-auto leading-relaxed">
            Every fall, our school hosts the Capybara Math Olympiad, an international, fully online mathematics competition open to students of all ages. Typically held in November, the Olympiad brings together young learners from around the world to challenge their problem-solving skills, creativity, and logical thinking in a fun and inspiring environment.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 text-center">Competition Levels by Age:</h2>
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-2">
            <ul className="list-disc list-inside text-neutral-300 space-y-2">
              {levels.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="text-neutral-300 leading-relaxed text-center">
            Each participant receives a diploma of participation, recognizing their effort and achievement. In addition, the top three performers in each age group are awarded valuable prizes, celebrating outstanding problem-solving ability and dedication.
          </p>
        </section>

        <section className="space-y-4">
          <p className="text-neutral-300 leading-relaxed text-center">
            The Capybara Math Olympiad is designed to be accessible, exciting, and motivating. Students gain the opportunity to test their skills against peers worldwide, experience the thrill of competition, and develop a lifelong love for mathematics.
          </p>
          <p className="text-neutral-300 leading-relaxed text-center">
            By participating, learners not only enhance their analytical and logical thinking but also become part of a global community of young math enthusiasts, fostering curiosity, perseverance, and confidence.
          </p>
        </section>

        <section className="bg-black/40 border border-white/10 rounded-2xl p-8 space-y-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <div className="flex justify-center gap-3 text-blue-50">
            <Award className="h-6 w-6" />
            <Users className="h-6 w-6" />
          </div>
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
