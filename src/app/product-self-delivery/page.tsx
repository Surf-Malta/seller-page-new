import React from "react";
import { QrCode, Clock, Smartphone, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SplitSection from "@/components/SplitSection";
import FeatureGrid from "@/components/FeatureGrid";
import Steps from "@/components/Steps";
import CardGrid from "@/components/CardGrid";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export default function ProductSelfDeliveryPage() {
  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />

      <Hero
        title="Surf orders. Delivered by your own couriers."
        description="Use your in-house team to deliver Surf orders at a reduced commission — while getting access to Surf courier partners when you need them."
        image="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1800&auto=format&fit=crop&q=80"
        ctaText="Get started"
      />

      {/* WHAT IS SELF-DELIVERY */}
      <SplitSection
        title="What is Self-delivery?"
        description="Self-delivery brings you the benefits of being on Surf — more customers and more sales — while using your own delivery staff to fulfil your Surf orders. You control the delivery experience, set your own delivery area, and choose the delivery fee customers pay."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80"
        ctaText="Get started →"
      />

      {/* HOW IT WORKS — NUMBERED */}
      <section className="py-20 px-8 bg-grey">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center lg:[direction:rtl]">
            <div className="[direction:ltr] aspect-[4/3] rounded-[24px] overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80" alt="How self delivery works" className="w-full h-full object-cover" />
            </div>
            <div className="[direction:ltr]">
              <Steps
                title="How does self-delivery work?"
                steps={[
                  { title: "Customers browse your business", description: "Customers order for delivery or pickup through the Surf app or your Storefront." },
                  { title: "Manage incoming orders", description: "Confirm orders on your Seller Hub app or point-of-sale integration." },
                  { title: "Deliver to customers", description: "Prepare orders for your couriers to deliver. Use Surf courier partners when needed." }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOWER COST */}
      <SplitSection
        title="Reach new customers at a lower cost"
        description="Self-delivery partners enjoy the full range of marketing and sales benefits available to Surf sellers, but at a lower commission rate. You deliver, we cover the delivery cost — customers get free delivery."
        image="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80"
        ctaText="Get started →"
      />

      {/* HYBRID */}
      <SplitSection
        theme="grey"
        reverse
        title="Use the Surf courier network when you need it"
        description="With Self-delivery's hybrid option, Surf courier partners are still available to you — for example when an order is placed after your team's delivery hours, during peak demand, or outside your delivery area."
        image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80"
      />

      {/* QR STEPS — RESTORING ORIGINAL ICONS */}
      <FeatureGrid
        title="Easy delivery notifications. No setup needed."
        columns={4}
        features={[
          {
            title: "1. Receipt with QR code",
            description: "Each receipt includes a QR code. No additional setup on your end.",
            icon: <QrCode className="w-7 h-7" />
          },
          {
            title: "2. Scan and start delivery",
            description: "Your courier scans the QR code, sees drop-off details, and taps 'Start Delivery'.",
            icon: <Clock className="w-7 h-7" />
          },
          {
            title: "3. Instant customer update",
            description: "Customers get notified in the Surf app that their order is on its way.",
            icon: <Smartphone className="w-7 h-7" />
          },
          {
            title: "4. Easy delivery confirmation",
            description: "Couriers tap 'Mark delivered'. Customer gets confirmation and you get timestamps.",
            icon: <Check className="w-7 h-7" />
          }
        ]}
      />

      <section className="py-20 px-8 bg-grey">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-grey p-[56px_48px] flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] text-black max-w-[480px]">
                Getting started is easy — sign up today
              </h2>
              <p className="text-[1.05rem] text-text-2 mt-2 leading-[1.5]">
                Fill in a few details about your business and you'll be live in no time.
              </p>
            </div>
            <Link
              href="#"
              className="px-[28px] py-[12px] rounded-full bg-black text-white text-base font-bold no-underline hover:-translate-y-0.5 transition-all"
            >
              Get started
            </Link>
          </div>
        </div>
      </section>

      {/* ALSO INCLUDES */}
      <section className="py-20 px-8 bg-white">
        <CardGrid
          title="Self-delivery also includes:"
          cards={[
            {
              title: "Promotional campaigns",
              description: "Convert more app visitors to shoppers with self-funded promotions like free delivery, discounts and specials.",
              image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&auto=format&fit=crop&q=80",
              href: "/solution-promotions"
            },
            {
              title: "Business management portal",
              description: "Track live purchases and make changes to your inventory in real time.",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80",
              href: "/solution-analytics"
            },
            {
              title: "World-class support",
              description: "24/7 support that replies in minutes, available until the last order is delivered.",
              image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=500&auto=format&fit=crop&q=80"
            }
          ]}
        />
      </section>

      <FAQ
        theme="grey"
        items={[
          {
            question: "I have my own delivery staff. Can I still use Surf?",
            answer: "Yes! Surf Self-delivery is ideal for businesses who already have delivery teams and want to increase orders by tapping into the Surf customer base."
          },
          {
            question: "What if I'd like Surf couriers to fulfil some orders?",
            answer: "No problem. Our hybrid fulfilment option lets you tap into the Surf courier network to manage delivery volume, expand your area, and increase orders — all without sacrificing delivery quality."
          },
          {
            question: "How do I deliver my own Surf orders?",
            answer: "Accept orders through the Seller Hub app or POS, prepare the goods, and dispatch with your own staff. Customers are notified at each step automatically."
          }
        ]}
      />

      <Footer />
    </main>
  );
}
