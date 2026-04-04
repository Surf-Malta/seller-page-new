import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TestimonialTicker from "@/components/TestimonialTicker";
import SplitSection from "@/components/SplitSection";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />

      <Hero
        title="Grow your business with Surf"
        description="Join Surf and sell to customers already shopping in your area — with the lowest commission rates on the market."
        image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1800&auto=format&fit=crop&q=80"
        ctaText="Start for free"
      />

      <TestimonialTicker />

      {/* This is how Surf works — Removed text-center for 1:1 parity */}
      <section className="py-20 px-8 bg-grey">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-[-0.8px] leading-[1.15] text-black mb-12">
            This is how Surf works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col gap-4">
              <div className="aspect-square bg-grey rounded-[20px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&auto=format&fit=crop&q=80" alt="Customer places order" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-[1.05rem] font-bold text-black mt-4">Customers place an order</h3>
              <p className="text-[0.9rem] text-text-2">Customers find your store and buy your products in the Surf app or your Storefront.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col gap-4">
              <div className="aspect-square bg-grey rounded-[20px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&auto=format&fit=crop&q=80" alt="Seller prepares order" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-[1.05rem] font-bold text-black mt-4">You prepare the order</h3>
              <p className="text-[0.9rem] text-text-2">Use our Seller Hub app to accept and prepare incoming orders from anywhere.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col gap-4">
              <div className="aspect-square bg-grey rounded-[20px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=600&auto=format&fit=crop&q=80" alt="Delivery" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-[1.05rem] font-bold text-black mt-4">We help deliver your order</h3>
              <p className="text-[0.9rem] text-text-2">Use your own couriers and we cover the delivery cost, or tap into Surf's courier network.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ALL YOU NEED TO GROW */}
      <SplitSection
        title="Get insights you can use"
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
        ctaText="Explore Analytics →"
        ctaHref="/solution-analytics"
      >
        <ul>
          <li>Track your revenue, popular items, and average order size.</li>
          <li>Know your customers better. See new customers, returning regulars, and Surf+ subscribers.</li>
          <li>Monitor order accuracy, cancellations, and preparation times.</li>
        </ul>
      </SplitSection>

      <SplitSection
        reverse
        title="Support when you need it"
        image="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop&q=80"
        ctaText="Visit Learning Center →"
      >
        <ul>
          <li>Get 24/7 support for orders, account help, and customer questions.</li>
          <li>Leave delivery-related customer service to us so you can focus on your business.</li>
          <li>Visit our Learning Center for tips and guides to help you manage and grow with Surf.</li>
        </ul>
      </SplitSection>

      {/* ZERO COMMISSION — Fully verified visibility */}
      <section className="bg-brand-gradient py-10 px-8">
        <div className="max-w-[1280px] mx-auto text-center py-10">
          <div className="badge brand inline-block px-[14px] py-[5px] rounded-full bg-[rgba(255,217,61,0.15)] text-[#FFD93D] text-[0.78rem] font-bold tracking-[0.3px] mb-5 uppercase">
            ✦ For Locally Built Brands
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-[-3px] text-white leading-none mb-3">
            <span className="text-gradient">0%</span> commission.
          </h2>
          <p className="text-xl text-white/65 max-w-[520px] mx-auto mb-8 leading-[1.7]">
            If you're a locally built brand, you sell on Surf for free. No commission, no catch — you keep 100% of every sale.
          </p>
          <Link href="#" className="inline-block px-8 py-3.5 rounded-full bg-white text-black font-bold no-underline hover:shadow-xl hover:-translate-y-0.5 transition-all outline-none">
            Claim your 0% rate →
          </Link>
        </div>
      </section>

      <FAQ
        items={[
          {
            question: "As I sign up for Surf as a seller, what can I expect?",
            answer: "Sign up by filling out our form or contacting sales. You'll connect your store (or build a Storefront), set your catalogue and pricing, and link your bank account. Most sellers are live within 48 hours."
          },
          {
            question: "How do commissions work?",
            answer: "For each order placed through Surf, we charge a commission starting from 3.2% — the lowest in the market. Locally registered brands pay 0%. The remaining amount is your earnings, sent directly to your bank account on your chosen payout schedule. No hidden fees."
          },
          {
            question: "Does Surf charge any other fees?",
            answer: "Surf charges no hidden fees, subscriptions, activation, or cancellation fees. A small payment processing fee (~1.4%) applies. Any additional fees are always clearly communicated upfront."
          },
          {
            question: "How quickly will I get paid?",
            answer: "Sellers can choose to receive payouts weekly, bi-weekly, or monthly — whichever suits your business."
          },
          {
            question: "Can I use my own delivery team?",
            answer: "Yes. With Surf Self-delivery, you use your own couriers to deliver orders. When you do, Surf covers the delivery cost — your customers get free delivery and you pay nothing extra."
          }
        ]}
      />

      {/* APP DOWNLOAD CTA — FINAL 1:1 REBUILD FOR ZERO-GAP BIG BADGE */}
      <section className="py-20 px-8 bg-grey">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center gap-[32px]">
          <div className="flex-1 min-w-[240px]">
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-[-0.8px] leading-[1.15] text-black mb-0">
              Download the Seller Hub app
            </h2>
            <p className="text-text-2 text-base leading-[1.65] mt-[12px]">
              Manage orders, track sales, and run your entire business from your phone.
            </p>
            <div className="app-badges mt-[24px]">
              <a href="#" className="inline-block no-underline">
                <img 
                  src="https://images.ctfassets.net/23u853certza/7xaqvusYmbDlca5umD9bZo/a0fa3e1c7ca41a70c6285d6c7b18c92b/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" 
                  alt="App Store" 
                  className="h-[44px] w-auto block" 
                />
              </a>
              <a href="#" className="inline-block no-underline">
                <img 
                  src="https://images.ctfassets.net/23u853certza/1Djo4jOj0doR5PfWVzj9O6/2bba92728f2cb1bcc5196faa57c09f3d/google-play-badge.png" 
                  alt="Google Play" 
                  className="h-[160px] w-auto block mt-[10px]" 
                />
              </a>
            </div>
          </div>
          <div className="flex-1 min-w-[280px]">
            <img 
              src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&auto=format&fit=crop&q=80" 
              alt="Seller Hub app" 
              className="w-full max-w-[420px] rounded-[20px] block shadow-none" 
              style={{ width: '100%', borderRadius: '20px', maxWidth: '420px', display: 'block' }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
