"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Languages, MessageCircle, Target, Users } from "lucide-react";

const bulletItems = [
  { icon: Target, label: "Mathematics", detail: "Analysis and Approaches (AA) & Applications and Interpretation (AI)" },
  { icon: BookOpen, label: "Sciences", detail: "Physics, Chemistry, Biology" },
  { icon: Languages, label: "Languages", detail: "English, German" },
  { icon: Users, label: "Individuals and Societies", detail: "Economics and Business Management" },
];

const reasons = [
  "Expert Tutors: Our team consists of experienced educators who are well-versed in the IB curriculum and assessment methods. They are dedicated to providing personalized instruction tailored to each student’s needs.",
  "Holistic Learning Approach: We believe in the philosophy of IB education that emphasizes not only academic excellence but also the development of critical thinking, intercultural understanding, and respect. Our courses inspire students to become creative, caring, lifelong learners.",
  "Flexible Learning: Whether you prefer face-to-face sessions or online learning, we offer flexibility to suit your learning style and schedule.",
  "Rigorous Curriculum Support: Dive deep into each subject with carefully structured lessons that adhere to the standards and rigor of the IB curriculum, ensuring you are fully prepared for assessments and exams.",
  "Interactive Sessions: Engage with a variety of learning materials, including real-world case studies, and interactive multimedia resources, making learning enjoyable and effective.",
  "Progress Tracking: We provide regular assessments and feedback to help you monitor your progress and make adjustments to your learning plan as needed.",
  "Community Engagement: Join a community of motivated learners where collaboration and peer support foster a positive educational environment.",
];

export default function IBPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-800 via-purple-700 to-violet-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.15),transparent_25%)]" />
        <div className="max-w-5xl mx-auto px-6 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="uppercase text-sm tracking-[0.25em] text-purple-100">IB Tutoring</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Unlock Your Potential with Expert IB Tutoring Courses!
            </h1>
            <p className="text-lg text-purple-100/90 max-w-3xl">
              Are you ready to excel in your International Baccalaureate (IB) journey? Our comprehensive tutoring programs are tailored for students
              in the Primary Years Program (PYP), Middle Years Program (MYP), and Diploma Program (DP). We offer specialized courses in:
            </p>
          </motion.div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {bulletItems.map(({ icon: Icon, label, detail }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-black/30 rounded-2xl border border-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              >
                <div className="flex items-center gap-3 text-lg font-semibold">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-purple-600/30 text-purple-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>{label}</span>
                </div>
                <p className="mt-3 text-purple-100/80 text-sm leading-relaxed">{detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-xl border border-white/10 bg-black/20 text-purple-100/90 text-sm">
            All the subjects are available in both SL and HL.
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Why Choose Our IB Tutoring Courses?</h2>
          <ol className="space-y-4 list-decimal list-inside text-neutral-200 leading-relaxed">
            {reasons.map((reason) => (
              <li key={reason} className="pl-1">
                {reason}
              </li>
            ))}
          </ol>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
            <h3 className="text-2xl font-semibold text-purple-100">Join Us Today!</h3>
            <p className="text-neutral-300 leading-relaxed">
              Take the first step toward academic success with our IB tutoring courses. Whether you’re aiming for top grades or seeking to deepen your understanding of subjects, we are here to guide you on your educational journey.
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
                <GraduationCap className="h-5 w-5" />
                Personalized plans for PYP, MYP, and DP learners
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
