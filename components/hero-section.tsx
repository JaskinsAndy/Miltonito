"use client";
import React, { useState, useEffect } from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { Spotlight } from "./ui/spotlight";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 opacity-100"
        fill="white"
      />
      <AuroraBackground>
        <div className="relative flex flex-col gap-4 items-center justify-center px-4 animate-fade-in-up">
          
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Milton International School
          </div>
          
          <div className="animate-fade-in-up text-center text-xl md:text-3xl font-normal text-neutral-700 dark:text-neutral-200 max-w-4xl" style={{animationDelay: '0.3s'}}>
            Excellence in Education. Shaping Future Leaders Through World-Class Academic Programs and Personalized Learning.
          </div>

          <div className="animate-fade-in-up flex flex-col md:flex-row gap-6 items-center mt-8" style={{animationDelay: '0.6s'}}>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-bold text-lg flex items-center gap-2 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover-lift">
              Explore Programs 
              <ArrowRight className="w-5 h-5 animate-bounce-x" />
            </button>
            
            <button className="border-2 border-cyan-400 dark:border-blue-400 text-cyan-600 dark:text-blue-400 px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 transform hover:bg-cyan-50 dark:hover:bg-blue-800/30">
              Book Consultation
            </button>
          </div>

          <div className="animate-fade-in-up flex flex-wrap gap-8 items-center justify-center mt-12 text-neutral-600 dark:text-neutral-400" style={{animationDelay: '0.9s'}}>
            <div className="flex items-center gap-2 cursor-pointer hover:scale-110 transition-transform duration-300">
              <Star className="w-5 h-5 text-yellow-500 animate-pulse" />
              <span className="text-sm">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:scale-110 transition-transform duration-300">
              <Users className="w-5 h-5 text-cyan-500 animate-pulse" style={{animationDelay: '0.5s'}} />
              <span className="text-sm">100+ Students</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:scale-110 transition-transform duration-300">
              <Award className="w-5 h-5 text-blue-500 animate-pulse" style={{animationDelay: '1s'}} />
              <span className="text-sm">IB Certified</span>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
}
