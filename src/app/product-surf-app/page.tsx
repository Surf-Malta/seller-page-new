import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import SplitSection from "@/components/SplitSection";
import CardGrid from "@/components/CardGrid";
import Link from "next/link";
import { ShoppingCart, Star, BarChart3, Smartphone } from "lucide-react";

export default function ProductSurfAppPage() {
  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />

      <Hero
        title="Grow online sales with Surf"
        description="Introduce your store to a huge customer base on the Surf app — offering delivery or pickup to new and existing customers."
        image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1800&auto=format&fit=crop&q=80"
        ctaText="Get started"
      />

      {/* 3 FEATURE ICONS */}
      <FeatureGrid
        theme="grey"
        title="Let's grow your online business together"
        features={[
          {
            title: "Offer delivery and pickup",
            description: "Open a new revenue stream and offer pickup and delivery on Surf, with our courier network or your own drivers.",
            icon: <ShoppingCart className="w-7 h-7" />
          },
          {
            title: "Access big spenders",
            description: "Tap into Surf+ subscribers — customers who order more frequently and spend more per order.",
            icon: <Star className="w-7 h-7" />
          },
          {
            title: "Keep track of your business",
            description: "Use our Seller Hub app and analytics portal to track performance and boost sales.",
            icon: <BarChart3 className="w-7 h-7" />
          }
        ]}
      />

      {/* HOW IT WORKS */}
      <SplitSection
        title="How it works"
        description="A customer browses the Surf app and places an order from your store. The order appears in the Seller Hub app for you to complete. Once packed and ready, your courier or ours delivers the goods. In about 30 minutes, your customer receives their order."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
        ctaText="Get started →"
      />

      {/* SURF+ REACH */}
      <SplitSection
        theme="grey"
        reverse
        title="Reach Surf+ subscribers"
        description="Increase sales by tapping into Surf+ customers — loyal subscribers who order more frequently than other Surf customers. If you're signed up to Surf+, your store will be promoted to Surf+ customers and featured in dedicated placements on the Surf app."
        image="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80"
        ctaText="Learn about Surf+ →"
        ctaHref="/solution-seller-plus"
      />

      {/* PICKUP */}
      <SplitSection
        title="Offer more flexibility with Pickup"
        description="Become a neighbourhood favourite by offering a pickup option for local customers. Once your store page is created, customers nearby can find your venue and place orders they collect themselves."
        image="https://images.unsplash.com/photo-1556742208-999815fca738?w=800&auto=format&fit=crop&q=80"
        ctaText="Get started →"
      />

      {/* SIGN UP CTA */}
      <section className="py-20 px-8 bg-grey">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-grey p-[56px_48px] flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] text-black">
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

      {/* ADDITIONAL SERVICES */}
      <section className="py-20 px-8 bg-white">
        <CardGrid
          title="Additional services to grow your business"
          cards={[
            {
              title: "Promotional campaigns",
              description: "Turn more app visitors into shoppers and increase visibility with self-funded promotions like free delivery, discounts and specials.",
              image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&auto=format&fit=crop&q=80",
              href: "/solution-promotions"
            },
            {
              title: "Business management portal",
              description: "Track live purchases and make changes to your listings in real time. Access valuable performance reports to increase sales.",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80",
              href: "/solution-analytics"
            },
            {
              title: "World-class support",
              description: "Our 24/7 support team replies in minutes. We're available to you and your customers until the last order of the day is delivered.",
              image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=500&auto=format&fit=crop&q=80"
            },
            {
              title: "Seller Hub app",
              description: "Manage every order from your phone. Accept, update, and track orders on the go with push notifications for every new sale.",
              image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&auto=format&fit=crop&q=80"
            }
          ]}
        />
      </section>

      <Footer />
    </main>
  );
}
