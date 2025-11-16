"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, FileText, GraduationCap, MessageCircle, PlaneTakeoff, Target } from "lucide-react";

const docSupport = [
  "Preparation of academic portfolios and personal statements",
  "Assistance with letters of recommendation",
  "Guidance on application forms and submission deadlines",
  "Organization of required documentation for international applications",
];

const examPrep = [
  "Mathematics and sciences for university entrance exams",
  "Language proficiency assessments such as IELTS, TOEFL, or Cambridge exams",
  "Standardized tests required for specific countries (e.g., SAT, ACT)",
];

const reasons = [
  "Expert guidance from experienced educators and university counselors",
  "Customized preparation plans for each student’s chosen country and program",
  "Confidence-building support through mock exams and test simulations",
  "Strategic approach to strengthen applications and maximize admission success",
];

export default function AdmissionPage() {
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
            Admission to Universities – International Support
          </motion.h1>
          <p className="text-blue-100/90 max-w-4xl mx-auto leading-relaxed">
            Our school provides comprehensive guidance and support for students aiming to pursue higher education around the world. From Europe to Canada, the UK, the US, and Singapore, we help students navigate the complex admission process and maximize their chances of acceptance to top universities.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 text-center">Personalized University Guidance</h2>
          <p className="text-neutral-300 leading-relaxed text-center max-w-4xl mx-auto">
            In partnership with a specialized professional orientation agency, we offer tailored guidance for teenagers, helping them identify their strengths, interests, and ideal study paths. Our approach ensures that each student makes informed decisions about their higher education journey.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 text-center">Full Documentation Support</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {docSupport.map((item) => (
              <div key={item} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex items-start gap-3">
                <FileText className="h-5 w-5 mt-1 text-blue-300" />
                <p className="text-neutral-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 text-center">Exam Preparation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {examPrep.map((item) => (
              <div key={item} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex items-start gap-3">
                <Target className="h-5 w-5 mt-1 text-blue-300" />
                <p className="text-neutral-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 text-center">Why Students Choose Our Program</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((item) => (
              <div key={item} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 mt-1 text-blue-300" />
                <p className="text-neutral-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-black/40 border border-white/10 rounded-2xl p-8 space-y-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <p className="text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            With our holistic approach, students gain both the academic preparation and strategic guidance needed to secure their place in universities worldwide, ensuring a smooth transition to higher education and the future career path of their choice.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:jasurka2015@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
              <PlaneTakeoff className="h-5 w-5" />
              Contact us!
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
