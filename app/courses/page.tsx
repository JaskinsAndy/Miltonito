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
      link: "#ib-tutoring",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "IGCSE and A-Level Tutoring", 
      description: "Expert tutoring for Cambridge IGCSE and A-Level qualifications across all major subjects with proven track record.",
      link: "#igcse-alevels",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Preparation for Exams",
      description: "Intensive exam preparation courses designed to maximize performance in standardized tests and entrance examinations.",
      link: "#exam-prep",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Levelling Up School Studies",
      description: "Personalized academic support to help students excel in their current school curriculum and build confidence.",
      link: "#academic-support",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Critical Thinking",
      description: "Develop analytical reasoning, problem solving, and logic skills through structured practice.",
      link: "#critical-thinking",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Language Studies",
      description: "Comprehensive language instruction with fluency building, writing practice, and cultural context.",
      link: "#language-studies",
      icon: <Languages className="w-6 h-6" />
    },
    {
      title: "Ukrainian Diploma",
      description: "Specialized support for Ukrainian diploma requirements with native-speaking instructors and cultural context.",
      link: "#ukrainian-diploma", 
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Austrian Program",
      description: "Complete Austrian curriculum support including Matura preparation with Austrian-certified educators.",
      link: "#austrian-program",
      icon: <School className="w-6 h-6" />
    },
    {
      title: "Norwegian Curriculum Tutoring",
      description: "Norwegian education system support including language instruction and cultural integration assistance.",
      link: "#norwegian-curriculum",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Mock Exams",
      description: "Realistic practice examinations under timed conditions with detailed feedback and improvement strategies.",
      link: "#mock-exams",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Admission to Universities",
      description: "Complete university application guidance including essay writing, interview preparation, and scholarship applications.",
      link: "#admission-to-universities",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Capybara Math Olympiad",
      description: "Advanced math problem-solving training tailored for competitive olympiad performance.",
      link: "#capybara-math-olympiad",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: "Teacher Coaching",
      description: "Professional development for educators including pedagogy, classroom management, and subject-specific training.",
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
