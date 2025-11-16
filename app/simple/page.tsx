"use client";
import { motion } from "framer-motion";
import { Star, Users, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SimplePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl px-4"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Private School Milton
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Excellence in Education. Shaping Future Leaders Through World-Class Academic Programs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <Link href="/courses">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 shadow-xl"
              >
                Explore Programs <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            
            <Link href="/about#contact-form">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                Book Consultation
              </motion.button>
            </Link>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap gap-8 items-center justify-center mt-12"
          >
            <motion.div 
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Star className="w-6 h-6 text-yellow-400" />
              </motion.div>
              <span className="text-lg">5-Star Rated</span>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              >
                <Users className="w-6 h-6 text-blue-400" />
              </motion.div>
              <span className="text-lg">100+ Students</span>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <Award className="w-6 h-6 text-green-400" />
              </motion.div>
              <span className="text-lg">IB Certified</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Programs Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Programs
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "IB Program Tutoring", desc: "World-class IB education support" },
              { title: "IGCSE & A-Levels", desc: "Cambridge curriculum excellence" },
              { title: "University Prep", desc: "Get into top universities worldwide" }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-3 text-blue-400">{program.title}</h3>
                <p className="text-gray-300">{program.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
