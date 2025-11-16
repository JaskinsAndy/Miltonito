"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Tabs } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { 
  Award, 
  BookOpen, 
  Brain,
  Calculator,
  FileText,
  Globe, 
  GraduationCap, 
  Languages,
  School, 
  ShoppingBag,
  Target, 
  Trophy,
  TrendingUp,
  Users
} from "lucide-react";

export default function CoursesPage() {
  const courses = [
    {
      title: "IB Program Tutoring",
      description: "We can help you keep up with current program, recover some past topics and prepare for exams and tests.",
      link: "/courses/ib",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "IGCSE and A-Level Tutoring", 
      description: "We can help you keep up with current program, recover some past topics and prepare for exams and tests.",
      link: "/courses/igcse-alevel",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Preparation for Exams",
      description: "We can help you to get prepared for your exams in IB DIPLOMA, IGSCE and A-Level programs, as well as PSAT, SAT and GMAT.",
      link: "/courses/exam-prep",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Levelling Up School Studies",
      description: "We can work on the program from your school, helping get what you didn’t understand in the school. As well as we can go together through your homework.",
      link: "/courses/levelling-up",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Critical Thinking",
      description: "A lot of illustrated logic task will develop logic thinking in you. Then any problem in life will seem so easy.",
      link: "/courses/critical-thinking",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Language Studies",
      description: "Do you want to be a polyglot? Or merely adapt new language? With great pleasure we will assist you in that! Curious about which language you can study with us? Follow the link and discover!",
      link: "/courses/language-studies",
      icon: <Languages className="w-6 h-6" />
    },
    {
      title: "Ukrainian Diploma",
      description: "Do you left Ukraine but don’t want to left education there? No worries! We will assist you. Teaching all the required Ukrainian school curriculum subjects we make you ready to pass the exit assessment “NMT” as well as giving your way to get the Ukrainian school certificate.",
      link: "/courses/ukrainian-diploma", 
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Austrian Program",
      description: "Helping students to achieve even greater performance in their schools in Austria. Specifically for expats!",
      link: "/courses/austrian-program",
      icon: <School className="w-6 h-6" />
    },
    {
      title: "Norway Curriculum Tutoring",
      description: "Helping with Math and Science",
      link: "#norway-curriculum",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Mock Exams",
      description: "Prepares means equipped! Every spring we are conducting Mock Exams to check your readiness for upcoming assessments!",
      link: "#mock-exams",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Admission to Universities",
      description: "Preparing all needed documents for you. Training for exams in Math and Science, as well as language assessments.",
      link: "#admission-to-universities",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Capybara Math Olympiad",
      description: "Math Competition Worldwide. Online. With super prizes.",
      link: "#capybara-math-olympiad",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: "Teacher Coaching",
      description: "Individual and grouped sessions with aim to reveal your hidden abilities and potential!",
      link: "#teacher-coaching",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const tabs = [
    {
      title: "All Courses",
      value: "all-courses",
      content: (
        <div className="w-full relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Our Complete Course Catalog</p>
          <HoverEffect items={courses} />
        </div>
      ),
    },
    {
      title: "IB Workbooks",
      value: "ib-workbooks", 
      content: (
        <div className="w-full relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-cyan-900">
          <p className="mb-8">IB Workbooks & Resources</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Mathematics AA/AI</h3>
              <p className="text-sm text-neutral-300">Comprehensive workbooks covering all IB Math topics with practice problems and solutions.</p>
            </div>
            <div className="bg-black/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Sciences Bundle</h3>
              <p className="text-sm text-neutral-300">Physics, Chemistry, and Biology workbooks with lab experiments and theory.</p>
            </div>
            <div className="bg-black/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Language & Literature</h3>
              <p className="text-sm text-neutral-300">English and other language workbooks with essay writing guides and literary analysis.</p>
            </div>
            <div className="bg-black/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">History & Geography</h3>
              <p className="text-sm text-neutral-300">Comprehensive study guides for IB History and Geography with case studies.</p>
            </div>
            <div className="bg-black/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Economics & Business</h3>
              <p className="text-sm text-neutral-300">Complete workbooks for IB Economics and Business Management with real-world examples.</p>
            </div>
            <div className="bg-black/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Extended Essay Guide</h3>
              <p className="text-sm text-neutral-300">Step-by-step guide to writing an outstanding Extended Essay with templates and examples.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Merch Shop",
      value: "merch-shop",
      content: (
        <div className="w-full relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-emerald-900">
          <p className="mb-8">School Merchandise</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/20 p-6 rounded-lg flex flex-col items-center">
              <ShoppingBag className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-semibold mb-2">School Bags</h3>
              <p className="text-sm text-neutral-300 text-center">Premium quality backpacks with school logo</p>
            </div>
            <div className="bg-black/20 p-6 rounded-lg flex flex-col items-center">
              <Trophy className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Apparel</h3>
              <p className="text-sm text-neutral-300 text-center">T-shirts, hoodies, and uniforms</p>
            </div>
            <div className="bg-black/20 p-6 rounded-lg flex flex-col items-center">
              <FileText className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Stationery</h3>
              <p className="text-sm text-neutral-300 text-center">Notebooks, pens, and study materials</p>
            </div>
            <div className="bg-black/20 p-6 rounded-lg flex flex-col items-center">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Accessories</h3>
              <p className="text-sm text-neutral-300 text-center">Badges, pins, and collectibles</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Courses & Services
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Discover our comprehensive range of educational services designed to help students excel in their academic journey and achieve their goals.
            </p>
          </div>

          <div className="[perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start gap-8 mb-16 md:mb-24">
            <Tabs tabs={tabs} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
