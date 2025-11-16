"use client";

import React from "react";
import Image from "next/image";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-3">
    <h2 className="text-xl font-semibold text-white">{title}</h2>
    <div className="space-y-3 text-neutral-200 leading-relaxed">{children}</div>
  </section>
);

export default function IbMathAaAiPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.16),transparent_25%)]" />
        <div className="max-w-5xl mx-auto px-6 py-14 relative space-y-4">
          <p className="uppercase text-sm tracking-[0.25em] text-purple-100">08.09.2025</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white">
            Which IB DP Math to Choose: AA vs AI (HL/SL)
          </h1>
          <p className="text-purple-100/90 text-lg leading-relaxed">
            Choosing between Analysis & Approaches (AA) and Applications & Interpretation (AI) at HL or SL can feel overwhelming. Here’s a
            parent-friendly guide with examples, tips, and study advice.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        <div className="relative w-full h-[280px] md:h-[360px] overflow-hidden rounded-2xl border border-neutral-800 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
          <Image
            src="/Blog08092025.webp"
            alt="Which IB DP Math to Choose"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 900px, 100vw"
            priority
          />
        </div>

        <div className="space-y-8">
          <p className="text-neutral-200 leading-relaxed">
            Since 2019, IB students pick between two math pathways: Analysis and Approaches (AA) and Applications and Interpretation (AI),
            each at Standard Level (SL) and Higher Level (HL). This article breaks down differences, concrete examples, and guidance for
            helping your child choose confidently.
          </p>

          <Section title="1) What’s the Big Picture?">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">AI (Applications &amp; Interpretation):</span> Practical, data-leaning math. Emphasizes statistics,
                modeling, technology, and interpreting data—great for social sciences, business, psychology, biology, or arts where math supports
                real-world applications.
              </li>
              <li>
                <span className="font-semibold">AA (Analysis &amp; Approaches):</span> “Traditional” math—algebra, calculus, and abstract problem solving.
                Suited for students who enjoy theoretical thinking and may pursue mathematics, physics, computer science, or engineering.
              </li>
            </ul>
          </Section>

          <Section title="2) SL vs HL: How Deep Do They Go?">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">SL (Standard Level):</span> Essential content in about <span className="font-semibold">150 teaching hours.</span>
              </li>
              <li>
                <span className="font-semibold">HL (Higher Level):</span> More depth and breadth with <span className="font-semibold">240 teaching hours</span>,
                preparing students for university courses needing strong math backgrounds.
              </li>
            </ul>
          </Section>

          <Section title="3) Concrete Examples: What Does This Look Like?">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Example I: Calculus</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>AA HL: Prove why the derivative of e<sup>x</sup> is e<sup>x</sup> using limits.</li>
                <li>AA SL: Apply derivatives to optimize functions (e.g., finding maximum profit).</li>
                <li>AI HL: Use derivatives in modeling—how a virus spread changes over time.</li>
                <li>AI SL: Interpret a rate-of-change graph from real data, such as a car’s speed.</li>
              </ul>
              <h3 className="text-lg font-semibold text-white">Example II: Statistics</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>AI HL: Chi-squared tests or regression on large datasets (e.g., predicting housing prices).</li>
                <li>AI SL: Work with probability trees or expected value (e.g., fairness in a board game).</li>
                <li>AA HL/SL: Probability is covered, but focus is more on theory than interpretation.</li>
              </ul>
            </div>
          </Section>

          <Section title="4) How to Decide Which Path Is Right">
            <h3 className="text-lg font-semibold text-white">Guiding Questions for Parents to Ask:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Does my child enjoy solving abstract problems and puzzles? → Consider AA.</li>
              <li>Do they prefer seeing math in real-world contexts (data, finance, science experiments)? → Consider AI.</li>
              <li>Planning on studying engineering, physics, computer science, or mathematics? → AA HL is safest.</li>
              <li>Business, psychology, or life sciences? → AI SL or AI HL may be enough.</li>
            </ul>
          </Section>

          <Section title="5) Advice for Parents">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">Tip 1: Look at University Requirements</span> — STEM-heavy degrees often prefer AA HL; many others accept AI
                HL or SL.
              </li>
              <li>
                <span className="font-semibold">Tip 2: Support with Resources</span> — AA: practice without calculators. AI: explore real data sets (sports
                stats, business trends).
              </li>
              <li>
                <span className="font-semibold">Tip 3: Mindset Matters</span> — Both courses are rigorous, respected, and valued by universities.
              </li>
              <li>
                <span className="font-semibold">Tip 4: IA (Internal Assessment) Projects</span> — AA: fractals or proving identities. AI: modeling social or
                business data. Help brainstorm topics that fit your child’s interests.
              </li>
            </ul>
            <p className="text-neutral-200 leading-relaxed">
              <span className="font-semibold">Key takeaway:</span> AA = theoretical and abstract; AI = practical and applied. HL = deeper & harder; SL =
              core essentials. Encourage your child to choose the path that excites them and aligns with their future studies.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
