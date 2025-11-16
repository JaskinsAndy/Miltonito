"use client";
import { useState, useEffect } from "react";
import { Star, Users, Award, ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function WorkingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Private School Milton</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Courses</a>
            <a href="#" className="hover:text-blue-400 transition-colors">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4 space-y-8">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Private School Milton
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Excellence in Education. Shaping Future Leaders Through World-Class Academic Programs.
            </p>
          </div>
          
          <div className="animate-fade-in-up space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center" style={{animationDelay: '0.6s'}}>
            <Link
              href="/courses"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 w-full md:w-auto justify-center"
            >
              Explore Programs <ArrowRight className="w-5 h-5 animate-bounce-x" />
            </Link>
            
            <Link
              href="/courses"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 w-full md:w-auto"
            >
              Book Consultation
            </Link>
          </div>
          
          {/* Stats */}
          <div className="animate-fade-in-up flex flex-wrap gap-8 items-center justify-center mt-12" style={{animationDelay: '0.9s'}}>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
              <span className="text-lg">5-Star Rated</span>
            </div>
            
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <Users className="w-6 h-6 text-blue-400 animate-pulse" style={{animationDelay: '0.5s'}} />
              <span className="text-lg">100+ Students</span>
            </div>
            
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <Award className="w-6 h-6 text-green-400 animate-pulse" style={{animationDelay: '1s'}} />
              <span className="text-lg">IB Certified</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-fade-in-up text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-gray-400 text-lg">World-class education programs designed for excellence</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "IB Program Tutoring", 
                desc: "Comprehensive International Baccalaureate support",
                icon: <BookOpen className="w-8 h-8" />
              },
              { 
                title: "IGCSE & A-Levels", 
                desc: "Cambridge curriculum excellence and preparation",
                icon: <GraduationCap className="w-8 h-8" />
              },
              { 
                title: "University Prep", 
                desc: "Get into top universities worldwide",
                icon: <Award className="w-8 h-8" />
              }
            ].map((program, index) => (
              <div
                key={index}
                className="animate-fade-in-up bg-gray-800 p-6 rounded-xl hover:bg-gray-700 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">{program.title}</h3>
                <p className="text-gray-300">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-gray-400 mb-6">Join hundreds of students achieving academic excellence</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300">
            Get Started Today
          </button>
        </div>
      </footer>
    </div>
  );
}

// Add CSS animations in globals.css
// You can add these animations to your CSS file
