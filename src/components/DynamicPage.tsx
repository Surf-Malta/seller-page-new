import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SplitSection from "@/components/SplitSection";
import FeatureGrid from "@/components/FeatureGrid";
import CardGrid from "@/components/CardGrid";
import FAQ from "@/components/FAQ";
import Steps from "@/components/Steps";
import Link from "next/link";

export interface PageData {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  sections: any[];
}

interface DynamicPageProps {
  data: PageData;
}

const DynamicPage: React.FC<DynamicPageProps> = ({ data }) => {
  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />
      
      <Hero
        title={data.title}
        description={data.description}
        image={data.heroImage}
        ctaText="Get started"
      />

      {data.sections.map((section, idx) => {
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
              >
                {section.content}
              </SplitSection>
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
              <div key={idx} className={section.theme === "grey" ? "bg-grey" : "bg-white"}>
                <FeatureGrid
                  title={section.title}
                  features={section.features}
                  columns={section.columns || 3}
                />
              </div>
            );
          case "cards":
            return (
              <div key={idx} className={section.theme === "grey" ? "bg-grey" : "bg-white"}>
                <CardGrid
                  title={section.title}
                  cards={section.cards}
                />
              </div>
            );
          case "faq":
            return (
              <div key={idx} className={section.theme === "grey" ? "bg-grey" : "bg-white"}>
                <FAQ title={section.title} items={section.items} />
              </div>
            );
          case "cta":
            return (
               <section key={idx} className={`py-20 px-6 md:px-8 ${section.theme === "grey" ? "bg-grey" : "bg-white"}`}>
                <div className="max-w-[1280px] mx-auto">
                  <div className="bg-grey rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 reveal visible">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black max-w-[480px]">
                        {section.title}
                      </h2>
                      <p className="text-text-2 text-lg mt-2">
                        {section.description}
                      </p>
                    </div>
                    <Link
                      href="#"
                      className="px-8 py-3.5 rounded-full bg-black text-white text-base font-bold no-underline hover:brightness-110 shrink-0"
                    >
                      {section.ctaText || "Get started"}
                    </Link>
                  </div>
                </div>
              </section>
            );
          default:
            return null;
        }
      })}

      <Footer />
    </main>
  );
};

export default DynamicPage;
