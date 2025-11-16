"use client";
import React, { useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "framer-motion";
import { Users, Award, Globe, BookOpen, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function AboutPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setFeedback({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setFeedback({ type: "success", message: "Message sent successfully! We’ll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFeedback({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setSending(false);
    }
  };

  const timelineData = [
    {
      title: "2018",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Первая часть истории
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&h=300&q=80"
              alt="School founding"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&h=300&q=80"
              alt="First students"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Вторая часть истории
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&q=80"
              alt="IB certification"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&q=80"
              alt="Online learning"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Третья часть истории
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=300&q=80"
              alt="Global expansion"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&q=80"
              alt="International students"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Четвертая часть истории
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=300&q=80"
              alt="Modern campus"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1523580846011-d3bb57ba448c?w=500&h=300&q=80"
              alt="Graduation success"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  const testimonials = [
    {
      quote: "Igor, thank you very much! In addition to professional knowledge in mathematics and physics, you have a real gift as a Teacher – the ability to transfer this knowledge, which is not always found in the huge online learning market. You started working with my son in January 2022, and as an applied mathematician who graduated with honors, today I see a clear progress in his knowledge not only in mathematics, but also in physics! Thank you very much and keep it up! And let PEACE IN UKRAINE come soon!",
      name: "Otabek",
      designation: "English and Russian",
      src: "/Feedback1Otabek.jpg"
    },
    {
      quote: "I want to leave a very positive review about Igor and I always love him very much to my friends. Igor was online for the first time this summer with my daughter, he perfectly improved her knowledge of mathematics (in English) and arrived to enter school in London (10th grade). Currently, she is associated with the aggravation of tasks, and, if necessary, calls to Igor for a hint, because, as a teacher, Igor perfectly finds a common language and approach to the child, forms interest in the subject and self-confidence.",
      name: "Anna",
      designation: "UK school, English and Russian",
      src: "/Anna.jpg"
    },
    {
      quote: "My son really likes to do math and prepare for the Kangaroo competition",
      name: "Yulia Poroshenko",
      designation: "",
      src: "/Yulia.jpg"
    },
    {
      quote: "She has been studying with Igor since August under the program of the British School. Already in this short time we see the result. My daughter's school performance has improved. Mathematics is not our forte, but it became much easier with Igor! They work great in tandem with a school teacher who sends information about the material covered, points that need to be improved. Honestly, HURRY, because we have only one Igor 😁.",
      name: "Olha",
      designation: "English and Russian",
      src: "/Olha.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-white">
            About Milton International School
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Empowering students worldwide through innovative education, personalized learning, and unwavering commitment to academic excellence.
          </p>
        </motion.div>

        {/* Mission & Values Section */}
        <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white dark:bg-black rounded-lg shadow-lg"
              >
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">100+</h3>
                <p className="text-neutral-600 dark:text-neutral-400">Global Students</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white dark:bg-black rounded-lg shadow-lg"
              >
                <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">95%</h3>
                <p className="text-neutral-600 dark:text-neutral-400">University Acceptance</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white dark:bg-black rounded-lg shadow-lg"
              >
                <Globe className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">15+</h3>
                <p className="text-neutral-600 dark:text-neutral-400">Countries Served</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white dark:bg-black rounded-lg shadow-lg"
              >
                <BookOpen className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">6</h3>
                <p className="text-neutral-600 dark:text-neutral-400">Years of Excellence</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <Timeline data={timelineData} />

        {/* Testimonials Section */}
        <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-black dark:text-white">
              What Our Community Says
            </h2>
            <p className="text-center text-neutral-600 dark:text-neutral-400 mb-12">
              Hear from our students, parents, and educators about their transformative experiences
            </p>
            <AnimatedTestimonials testimonials={testimonials} autoplay />
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black dark:text-white">
                Visit Our Campus
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                Located in the heart of Vienna, Austria - Experience world-class education in one of Europe's most beautiful cities
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                        <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black dark:text-white mb-1">Address</h4>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          Paragonstraße 2/4<br />
                          Vienna, Austria
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black dark:text-white mb-1">Phone</h4>
                        <p className="text-neutral-600 dark:text-neutral-400">+43 676 5971316</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black dark:text-white mb-1">Email</h4>
                        <p className="text-neutral-600 dark:text-neutral-400">jasurka2015@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-full">
                        <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black dark:text-white mb-1">Office Hours</h4>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 shadow-lg space-y-4"
                >
                  <h3 className="text-2xl font-bold text-black dark:text-white">Send us a message</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Share a few details and we’ll respond soon. Your information is sent securely.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-black dark:text-white">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-black dark:text-white">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-black dark:text-white">Message</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="How can we help?"
                    />
                  </div>
                  {feedback.type && (
                    <div
                      className={`text-sm font-semibold ${
                        feedback.type === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {feedback.message}
                    </div>
                  )}
                  <div className="flex gap-3 items-center">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: sending ? 1 : 1.03 }}
                      whileTap={{ scale: sending ? 1 : 0.98 }}
                      disabled={sending}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-60 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300"
                    >
                      {sending ? "Sending..." : "Send message"}
                    </motion.button>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      We’ll reply to your email as soon as possible.
                    </p>
                  </div>
                </form>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300"
                >
                  Schedule a Campus Visit
                </motion.button>
              </motion.div>

              {/* Interactive Map */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.267!2d16.3754!3d48.2082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07b0e7a7e7a7%3A0x7e8f8f8f8f8f8f8f!2sParagonstra%C3%9Fe%202%2F4%2C%201210%20Wien%2C%20Austria!5e0!3m2!1sen!2sat!4v1234567890123!5m2!1sen!2sat"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                  title="Milton International School Location"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
