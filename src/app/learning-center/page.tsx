"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoGallery from "@/components/VideoGallery";
import { motion } from "framer-motion";

export default function LearningCenterPage() {
  return (
    <main className="min-h-screen pt-[72px] bg-grey">
      <Navbar />

      {/* Header Section */}
      <section className="py-16 md:py-24 px-8 bg-white border-b border-border-s">
        <div className="max-w-[1280px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge brand inline-block px-[14px] py-[5px] rounded-full bg-brand/10 text-brand text-[0.78rem] font-bold tracking-[0.3px] mb-6 uppercase border border-brand/20">
              Seller Hub Academy
            </div>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-2px] text-black leading-[1.1] mb-6">
              <span className="text-brand">Surf Seller Hub</span>
            </h1>
            <p className="text-lg md:text-xl text-text-2 max-w-[700px] mx-auto leading-relaxed">
              Everything you need to know about selling on Surf. Step-by-step video guides to help you set up, sell, and scale your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 md:py-24 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
                All Tutorials
              </h2>
              <p className="text-text-2 mt-2">
                Browse our selection of 9 essential seller guides.
              </p>
            </div>
          </div>

          <VideoGallery />
        </div>
      </section>

      {/* Support CTA Section */}
      {/* <section className="py-16 md:py-24 px-8 bg-black text-white">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="p-12 rounded-[40px] bg-brand-gradient border border-white/10 shadow-2xl overflow-hidden relative group">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
                Still have questions?
              </h2>
              <p className="text-white/80 text-lg max-w-[600px] mx-auto mb-10">
                Our seller support team is here to help you every step of the way. Chat with us on WhatsApp or send an email.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#"
                  className="px-8 py-4 rounded-full bg-white text-black font-bold text-base hover:shadow-xl hover:-translate-y-1 transition-all no-underline"
                >
                  Contact Support
                </a>
                <a
                  href="https://www.youtube.com/@SurfSellerHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-white/10 text-white font-bold text-base border border-white/20 hover:bg-white/20 transition-all no-underline backdrop-blur-md"
                >
                  Visit YouTube Channel
                </a>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/10 transition-colors" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-brand/20 rounded-full -ml-10 -mb-10 blur-3xl group-hover:bg-brand/30 transition-colors" />
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
