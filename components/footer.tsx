"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Milton International School</h3>
            <p className="text-neutral-400">
              Excellence in Education. Shaping Future Leaders Through World-Class Academic Programs.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/sukovigor/"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/igorsukov77"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-neutral-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" className="text-neutral-400 hover:text-white transition-colors">
                  Courses &amp; Services
                </a>
              </li>
              <li>
                <a href="/teachers" className="text-neutral-400 hover:text-white transition-colors">
                  Teachers
                </a>
              </li>
              <li>
                <a href="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="text-neutral-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/courses" className="text-neutral-400 hover:text-white transition-colors">
                  IB Workbooks Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Programs</h4>
            <ul className="space-y-2">
              <li>
                <a href="/courses/ib" className="text-neutral-400 hover:text-white transition-colors">
                  IB Program Tutoring
                </a>
              </li>
              <li>
                <a href="/courses/igcse-alevel" className="text-neutral-400 hover:text-white transition-colors">
                  IGCSE &amp; A-Level
                </a>
              </li>
              <li>
                <a href="/courses/ukrainian-diploma" className="text-neutral-400 hover:text-white transition-colors">
                  Ukrainian Diploma
                </a>
              </li>
              <li>
                <a href="/courses/austrian-program" className="text-neutral-400 hover:text-white transition-colors">
                  Austrian Program
                </a>
              </li>
              <li>
                <a href="/courses/norway-curriculum" className="text-neutral-400 hover:text-white transition-colors">
                  Norway Curriculum
                </a>
              </li>
              <li>
                <a href="/courses/mock-exams" className="text-neutral-400 hover:text-white transition-colors">
                  Mock Exams
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-neutral-400" />
                <span className="text-neutral-400">jasurka2015@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-neutral-400" />
                <span className="text-neutral-400">+43 676 5971316</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-neutral-400" />
                <span className="text-neutral-400">Paragonstraße 2/4, Vienna, Austria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-400">© 2025 Milton International School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
