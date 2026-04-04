"use client";

import React from "react";
import Link from "next/link";

interface TickerItem {
  image: string;
  caption: string;
  href?: string;
}

interface TestimonialTickerProps {
  items?: TickerItem[];
}

const defaultItems: TickerItem[] = [
  {
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&auto=format&fit=crop&q=80",
    caption: '"Revenue tripled in six months."',
  },
  {
    image: "https://images.unsplash.com/photo-1556742208-999815fca738?w=400&auto=format&fit=crop&q=80",
    caption: '"A game-changer. We serve customers better."',
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    caption: '"50% of all sales now come through Surf."',
  },
  {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    caption: '"76% of customers return after first order."',
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    caption: '"A reliable platform was crucial for us."',
  },
];

const TestimonialTicker: React.FC<TestimonialTickerProps> = ({ items = defaultItems }) => {
  // Duplicate items twice to ensure smooth infinite loop
  const displayItems = [...items, ...items, ...items];

  return (
    <section className="py-10 bg-white overflow-hidden relative">
      {/* Decorative gradients on edges */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
      </div>

      <div className="flex animate-ticker w-max gap-4 px-4">
        {displayItems.map((item, idx) => (
          <Link
            key={`${item.caption}-${idx}`}
            href={item.href || "#"}
            className="group relative flex-shrink-0 w-64 h-44 rounded-2xl overflow-hidden no-underline"
          >
            <img
              src={item.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 flex items-end">
              <span className="text-white text-[0.875rem] font-bold leading-[1.35] line-clamp-2">
                {item.caption}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TestimonialTicker;
