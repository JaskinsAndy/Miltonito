"use client";
import { HeroSection } from "@/components/hero-section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      
      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 dark:text-white">
            Why Choose Milton International School?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">World-Class Faculty</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Our experienced educators bring decades of expertise in international curricula and personalized learning approaches.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Comprehensive Programs</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                From IB to IGCSE, A-Levels, and specialized tutoring - we offer complete educational solutions.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Proven Results</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Our students consistently achieve top grades and gain admission to prestigious universities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}