"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Award, BookOpen, Globe, MessageCircle, Calculator, Languages, Video, Users, Atom, Trophy } from "lucide-react";
import Image from "next/image";

export default function TeachersPage() {
  const founder = {
    name: "Ihor Sukov",
    title: "Founder & Principal",
    image: "/Teachers/IhorSukov.webp",
    description: "Visionary educator with over 15 years of international teaching experience. Founded Milton International School with the mission to provide world-class education that prepares students for global success.",
    specialties: ["Educational Leadership", "International Curricula", "Student Development", "Academic Excellence"],
    achievements: ["Established IB World School authorization", "100+ students served globally", "95% university acceptance rate", "15+ countries reached"]
  };

  const teachers = [
    {
      name: "Elena",
      title: "Mathematics Teacher",
      image: "/Teachers/Elena.webp",
      subject: "Mathematics",
      icon: <Calculator className="w-6 h-6" />,
      specialties: ["IB Mathematics", "A-Level Math", "IGCSE Mathematics", "Mathematical Analysis"],
      experience: "8+ years",
      background: "Advanced degree in Mathematics, specialized in international curricula"
    },
    {
      name: "Alexandra",
      title: "Spanish Teacher", 
      image: "/Teachers/Alexandra.png",
      subject: "Spanish Language & Literature",
      icon: <Languages className="w-6 h-6" />,
      specialties: ["Spanish Literature", "IB Spanish", "Native Spanish Instruction", "Cultural Studies"],
      experience: "6+ years",
      background: "Native Spanish speaker with expertise in bilingual education"
    },
    {
      name: "Uliana",
      title: "French Teacher",
      image: "/Teachers/Uliana.png", 
      subject: "French Language & Literature",
      icon: <Languages className="w-6 h-6" />,
      specialties: ["French Literature", "IB French", "Language Acquisition", "Cultural Immersion"],
      experience: "7+ years",
      background: "Native French speaker with international teaching certification"
    },
    {
      name: "Tatiana",
      title: "ZOOM Meeting's Conductor",
      image: "/Teachers/Tatiana.webp",
      subject: "Online Learning Coordination",
      icon: <Video className="w-6 h-6" />,
      specialties: ["Virtual Classroom Management", "Online Pedagogy", "Student Engagement", "Technology Integration"],
      experience: "5+ years",
      background: "Specialist in remote learning technologies and virtual education platforms"
    },
    {
      name: "Jasur",
      title: "Math & AI Engineer",
      image: "/Teachers/Jasur.png",
      subject: "Mathematics & Artificial Intelligence",
      icon: <Atom className="w-6 h-6" />,
      specialties: ["Advanced Mathematics", "Machine Learning", "AI Applications", "Data Science"],
      experience: "3+ years",
      background: "AI Engineer with a Mathematics degree and experience in cutting-edge technology education"
    },
    {
      name: "Regina",
      title: "Chinese & English Teacher",
      image: "/Teachers/Regina.webp",
      subject: "Chinese & English Languages",
      icon: <Globe className="w-6 h-6" />,
      specialties: ["Mandarin Chinese", "English Literature", "Bilingual Education", "Cross-Cultural Communication"],
      experience: "9+ years",
      background: "Fluent in Chinese, English, and Russian with international teaching experience"
    },
    {
      name: "Galina",
      title: "Japanese Teacher",
      image: "/Teachers/Galina.webp",
      subject: "Japanese Language & Culture",
      icon: <Languages className="w-6 h-6" />,
      specialties: ["Japanese Language", "Cultural Studies", "JLPT Preparation", "Business Japanese"],
      experience: "8+ years",
      background: "Certified Japanese language instructor with deep cultural expertise"
    },
    {
      name: "Nataliia",
      title: "Russian & Ukrainian Teacher",
      image: "/Teachers/Nataliia.webp",
      subject: "Slavic Languages & Literature", 
      icon: <BookOpen className="w-6 h-6" />,
      specialties: ["Russian Literature", "Ukrainian Language", "Slavic Studies", "Heritage Language Teaching"],
      experience: "12+ years",
      background: "Native speaker with expertise in Eastern European literature and culture"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4"
        >
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Meet Our Exceptional Team
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              World-class educators dedicated to inspiring excellence and fostering global citizenship in every student.
            </p>
          </div>

          {/* Founder Section - Larger and Prominent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-24"
          >
            <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Founder Image */}
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-30"></div>
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Founder Info */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-4">
                    <h2 className="text-4xl font-bold text-white mb-2">{founder.name}</h2>
                    <p className="text-2xl text-cyan-300 font-semibold">{founder.title}</p>
                  </div>
                  
                  <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                    {founder.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400" />
                        Specialties
                      </h4>
                      <ul className="space-y-2 text-neutral-300">
                        {founder.specialties.map((specialty, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-yellow-400" />
                        Achievements
                      </h4>
                      <ul className="space-y-2 text-neutral-300">
                        {founder.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Teachers Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-white mb-16">
              Our Distinguished Faculty
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {teachers.map((teacher, index) => (
                <motion.div
                  key={teacher.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-start gap-6">
                    {/* Teacher Image */}
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-white/20 shadow-lg">
                        <Image
                          src={teacher.image}
                          alt={teacher.name}
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-2">
                        {teacher.icon}
                      </div>
                    </div>

                    {/* Teacher Info */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-1">{teacher.name}</h3>
                        <p className="text-lg text-cyan-300 font-semibold mb-2">{teacher.title}</p>
                        <p className="text-neutral-400 text-sm">{teacher.experience} experience</p>
                      </div>

                      <p className="text-neutral-300 mb-4 text-sm leading-relaxed">
                        {teacher.background}
                      </p>

                      <div>
                        <h4 className="text-white font-semibold mb-2 text-sm">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {teacher.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border border-cyan-500/30 px-3 py-1 rounded-full text-xs text-cyan-200"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-12 shadow-xl"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Learn from the Best?
            </h3>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Join our community of learners and experience world-class education with our exceptional team of educators.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
