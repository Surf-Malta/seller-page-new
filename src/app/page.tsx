"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TestimonialTicker from "@/components/TestimonialTicker";
import SplitSection from "@/components/SplitSection";
import FAQ from "@/components/FAQ";
import SignupModal from "@/components/registration/SignupModal";

export default function HomePage() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />

      <Hero
        title="Sell Easy. Sell Local"
        description="Join Surf & reach your customers across Malta"
        image="/assets/youngBusiness.jpg"
        ctaText="Start for free"
        onCtaClick={() => setIsSignupModalOpen(true)}
      />

      <TestimonialTicker
        title="We've got your category covered"
        subtitle="Surf supports 200+ product categories -  from everyday essentials to construction equipments."
      />

      {/* This is how Surf works — Removed text-center for 1:1 parity */}
      <section className="py-6 md:py-12 px-8 bg-grey">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-[-0.8px] leading-[1.15] text-black mb-12 text-center">
            How Surf works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col gap-4">
              <div className="aspect-square bg-grey rounded-[20px] overflow-hidden">
                <img src="/assets/surfWorks/1.png" alt="Customer places order" className="w-full h-full object-cover" />
              </div>
              {/* <h3 className="text-[1.05rem] font-bold text-black mt-4">Customers place an order</h3> */}
              <p className="text-[0.9rem] text-black text-center">Customers search for your products and buy directly through the Surf app or website, reaching shoppers already looking for what you sell.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col gap-4">
              <div className="aspect-square bg-grey rounded-[20px] overflow-hidden">
                <img src="/assets/surfWorks/2.png" alt="Seller prepares order" className="w-full h-full object-cover" />
              </div>
              {/* <h3 className="text-[1.05rem] font-bold text-black mt-4">You prepare the order</h3> */}
              <p className="text-[0.9rem] text-black text-center">Get notified instantly and manage every order from the Surf Seller Hub app. accept, prepare, and update from anywhere, right from your phone.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col gap-4">
              <div className="aspect-square bg-grey rounded-[20px] overflow-hidden">
                <img src="/assets/surfWorks/3.png" alt="Delivery" className="w-full h-full object-cover" />
              </div>
              {/* <h3 className="text-[1.05rem] font-bold text-black mt-4">We help deliver your order</h3> */}
              <p className="text-[0.9rem] text-black text-center">Use your own couriers and Surf covers the delivery cost or let us handle it entirely. Surf's logistics partner collects directly from your store and delivers to your customer's door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ALL YOU NEED TO GROW */}
      <SplitSection
        title="Get insights you can use"
        image="/assets/support.jpg"
      // ctaText="Explore Analytics →"
      // ctaHref="/solution-analytics"
      >
        <ul>
          <li>Track your revenue, best-selling items, and top-performing categories — all in one place.</li>
          <li>Know your customers better. See who's new, who's returning, and where your orders are coming from.</li>
          <li>Stay on top of operations. Monitor live order status, cancellations, and low stock alerts before they become a problem.</li>
        </ul>
      </SplitSection>

      <SplitSection
        reverse
        title="Support when you need it"
        image="/assets/getInsights.jpg"
        ctaText="Visit Learning Center →"
        ctaHref="/learning-center"
      >
        <ul>
          <li>Get instant seller support for orders, account help, and customer questions</li>
          <li>Let our partner handle delivery-related customer service on your behalf, so you can stay focused on running your business.</li>
          <li>Access our Seller Learning Center for step-by-step video guides, tips, and everything you need to grow with Surf.</li>
        </ul>
      </SplitSection>

      {/* ZERO COMMISSION — Fully verified visibility */}
      <section className="py-6 md:py-10 bg-brand-gradient overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-6 md:gap-12 items-center">
            {/* Left Side: Image attached to edge, no cropping */}
            <div className="relative w-full px-6 md:px-0 md:ml-8 lg:ml-12 overflow-hidden flex justify-center">
              <img
                src="/assets/zeroPercent.jpg"
                alt="0% commission for local brands"
                className="w-full h-auto shadow-2xl block rounded-[40px] border border-white/20"
              />
            </div>

            {/* Right Side: Content */}
            <div className="flex flex-col items-start text-left px-8 py-6 md:p-12 lg:p-16 md:pl-16 lg:pl-24">
              <div className="badge brand inline-block px-[14px] py-[5px] rounded-full bg-[rgba(255,217,61,0.15)] text-[#FFD93D] text-[0.78rem] font-bold tracking-[0.3px] mb-6 uppercase border border-[#FFD93D]/20">
                ✦ For Locally Built Brands
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-[-1.5px] text-white leading-[1.1] mb-6 drop-shadow-sm">
                <span className="text-gradient">0%</span> commission.
              </h2>
              <p className="text-base md:text-[1.05rem] text-white/90 max-w-[500px] mb-8 leading-[1.6] font-medium opacity-95">
                If you're a locally built brand, you sell on Surf commission free.
                We charge a small platform fee to fund our operations and continue supporting local entrepreneurs & Made in Malta brands.
              </p>
              <button
                onClick={() => setIsSignupModalOpen(true)}
                className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-base hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer border-none"
              >
                Claim your 0% rate →
              </button>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={[
          {
            question: "What happens after I sign up?",
            answer: "Fill out our quick sign-up form and our seller support team will get in touch with you via email or WhatsApp. You can either connect your existing website or manually list your products and link your paypal for payouts. Most sellers are live within 48 hours."
          },
          {
            question: "How does commission work on Surf?",
            answer: "We help you reach more customers by featuring your business on the Surf shopping app. For each order placed through our platform, we charge a commission. The remaining amount after commission is your earnings, which we send directly to your bank account based on your chosen payout schedule. No hidden fees — pay only when you receive orders."
          },
          {
            question: "When and how do I get paid?",
            answer: "You choose your payout schedule, bi-weekly, or monthly. Surf deducts the platform fee/commission and transfers the rest directly to your paypal account. No manual invoicing, no chasing payments."
          },
          {
            question: "Can I use my own delivery team?",
            answer: "Yes. With Surf Self-delivery, your couriers fulfill the orders and you set your own delivery rate, we collect it from the customer at checkout and add it directly to your payout. Sellers can also use Surf's logistics partners Maltapost and DHL for last mile delivery."
          }
        ]}
      />

      {/* APP DOWNLOAD CTA — SIDE-BY-SIDE WITH OPTIMIZED BADGES */}
      <section className="py-8 md:py-20 px-8 bg-grey">
        <div className="max-w-[1024px] mx-auto flex flex-wrap items-center gap-[32px] justify-between">
          <div className="flex-1 min-w-[280px] max-w-[500px]">
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-[-0.8px] leading-[1.15] text-black mb-0">
              Download the Seller Hub app
            </h2>
            <p className="text-text-2 text-base leading-[1.65] mt-[12px]">
              Manage orders, track sales, and run your entire business from your phone.
            </p>
            <div className="flex items-center gap-3 md:gap-4 mt-8">
              <a href="https://play.google.com/store/apps/details?id=com.surf.sellerhub" target="_blank" className="inline-block no-underline">
                <img
                  src="https://images.ctfassets.net/23u853certza/1Djo4jOj0doR5PfWVzj9O6/2bba92728f2cb1bcc5196faa57c09f3d/google-play-badge.png"
                  alt="Google Play"
                  className="h-[44px] md:h-[60px] w-auto block"
                />
              </a>
              <div className="relative">
                <img
                  src="https://images.ctfassets.net/23u853certza/7xaqvusYmbDlca5umD9bZo/a0fa3e1c7ca41a70c6285d6c7b18c92b/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  alt="App Store"
                  className="h-[44px] md:h-[60px] w-auto block opacity-40 grayscale"
                />
                <div className="absolute top-[-8px] right-[-8px] bg-brand text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-md border border-white/20 whitespace-nowrap">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-[280px] flex justify-center lg:justify-end">
            <img
              src="/assets/surfApp.png"
              alt="Seller Hub app"
              className="w-full max-w-[420px] h-[360px] md:h-[600px] object-contain rounded-[20px] block shadow-none"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-4 md:py-10 px-4 md:px-8 bg-brand">
        <div className="max-w-[1280px] mx-auto">
          <div className="p-[20px_20px] md:p-[28px_48px] rounded-[32px] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group">
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] text-white">
                Getting started is easy. Sign up today
              </h2>
              <p className="text-[1.05rem] text-white/90 mt-2 leading-[1.5]">
                Fill in a few details about your business and you'll be live in no time.
              </p>
            </div>
            <button
              onClick={() => setIsSignupModalOpen(true)}
              className="px-[28px] py-[12px] rounded-full bg-white text-black text-base font-bold no-underline hover:bg-grey transition-all cursor-pointer border-none"
            >
              Get started
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {isSignupModalOpen && (
        <SignupModal onClose={() => setIsSignupModalOpen(false)} />
      )}
    </main>
  );
}
