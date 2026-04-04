import React from "react";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SplitSection from "@/components/SplitSection";
import FeatureGrid from "@/components/FeatureGrid";
import CardGrid from "@/components/CardGrid";
import FAQ from "@/components/FAQ";
import Steps from "@/components/Steps";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />
      
      <Hero
        title={product.title}
        description={product.description}
        image={product.heroImage}
        ctaText="Get started"
      />

      {product.sections.map((section, idx) => {
        switch (section.type) {
          case "split":
            return (
              <SplitSection
                key={idx}
                title={section.title}
                description={section.description}
                image={section.image}
                theme={section.theme || "light"}
                reverse={section.reverse || false}
                ctaText={section.ctaText}
              />
            );
          case "steps":
            return (
              <section key={idx} className={`py-20 px-6 md:px-8 ${section.theme === "grey" ? "bg-grey" : "bg-white"}`}>
                <div className="max-w-[1280px] mx-auto">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${section.reverse ? "rtl" : ""}`}>
                    <div className="ltr">
                      <img src={section.image} alt="" className="rounded-3xl shadow-xl w-full aspect-[4/3] object-cover" />
                    </div>
                    <div className="ltr">
                      <Steps title={section.title} steps={section.steps} />
                    </div>
                  </div>
                </div>
              </section>
            );
          case "features":
            return (
              <FeatureGrid
                key={idx}
                title={section.title}
                features={section.features}
                columns={section.columns || 3}
              />
            );
          case "cards":
            return (
              <CardGrid
                key={idx}
                title={section.title}
                cards={section.cards}
              />
            );
          case "faq":
            return <FAQ key={idx} items={section.items} />;
          default:
            return null;
        }
      })}

      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
