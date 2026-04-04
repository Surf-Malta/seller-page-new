import React from "react";
import { notFound } from "next/navigation";
import { businessTypes } from "@/data/business-types";
import DynamicPage from "@/components/DynamicPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BusinessTypePage({ params }: PageProps) {
  const { slug } = await params;
  const businessType = businessTypes.find((bt) => bt.slug === slug);

  if (!businessType) {
    notFound();
  }

  return <DynamicPage data={businessType} />;
}

export async function generateStaticParams() {
  return businessTypes.map((bt) => ({
    slug: bt.slug,
  }));
}
