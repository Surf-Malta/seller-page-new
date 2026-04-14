"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ExternalLink } from "lucide-react";

interface Video {
  id: string;
  title: string;
  duration: string;
  category: string;
  thumbnail: string;
  youtubeId: string;
}

const VIDEOS: Video[] = [
  {
    id: "1",
    title: "How to Connect Your Shopify Store to Surf | Step-by-Step Guide",
    duration: "4:15",
    category: "Integrations",
    thumbnail: "https://img.youtube.com/vi/N8AjrYPInLo/maxresdefault.jpg",
    youtubeId: "N8AjrYPInLo",
  },
  {
    id: "2",
    title: "How to Link Your PayPal Account to Surf | Step-by-Step Seller Guide",
    duration: "3:45",
    category: "Finance",
    thumbnail: "https://img.youtube.com/vi/SNxrkbLJ-Rk/maxresdefault.jpg",
    youtubeId: "SNxrkbLJ-Rk",
  },
  {
    id: "3",
    title: "How to Link Your WooCommerce Website to Surf | Step-by-Step Seller Guide",
    duration: "4:20",
    category: "Integrations",
    thumbnail: "https://img.youtube.com/vi/JLETDnaDYHM/maxresdefault.jpg",
    youtubeId: "JLETDnaDYHM",
  },
  {
    id: "4",
    title: "How to Register as a Seller on Surf | Step-by-Step Guide",
    duration: "2:50",
    category: "Onboarding",
    thumbnail: "https://img.youtube.com/vi/4RR0Nh0dVYA/maxresdefault.jpg",
    youtubeId: "4RR0Nh0dVYA",
  },
  {
    id: "5",
    title: "How to Manage Your Seller Account on Surf | Profile, Payouts & Branding",
    duration: "5:10",
    category: "Account",
    thumbnail: "https://img.youtube.com/vi/fjVAUjY71nc/maxresdefault.jpg",
    youtubeId: "fjVAUjY71nc",
  },
  {
    id: "6",
    title: "How to View and Manage Orders on Surf Seller Dashboard",
    duration: "3:15",
    category: "Operations",
    thumbnail: "https://img.youtube.com/vi/jfOIC2Kpyy0/maxresdefault.jpg",
    youtubeId: "jfOIC2Kpyy0",
  },
  {
    id: "7",
    title: "How to Use Surf's Marketing Features | Product Bundles & Banners",
    duration: "4:00",
    category: "Marketing",
    thumbnail: "https://img.youtube.com/vi/llylfwbildk/maxresdefault.jpg",
    youtubeId: "llylfwbildk",
  },
  {
    id: "8",
    title: "How to Upload a Product on Surf Seller Dashboard | Tutorial",
    duration: "2:30",
    category: "Inventory",
    thumbnail: "https://img.youtube.com/vi/ZQJkAJZRivA/maxresdefault.jpg",
    youtubeId: "ZQJkAJZRivA",
  },
  {
    id: "9",
    title: "Getting Started with Surf Seller Hub | Dashboard Overview",
    duration: "6:00",
    category: "Onboarding",
    thumbnail: "https://img.youtube.com/vi/sKPwcb6FfOA/maxresdefault.jpg",
    youtubeId: "sKPwcb6FfOA",
  },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <div className="w-full">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {VIDEOS.map((video) => (
          <motion.div
            key={video.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[24px] overflow-hidden border border-border-s shadow-sm hover:shadow-xl transition-all group cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-grey overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-md">
                {video.duration}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand mb-2">
                {video.category}
              </div>
              <h3 className="text-base font-bold text-black leading-tight mb-4 group-hover:text-brand transition-colors">
                {video.title}
              </h3>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[12px] text-text-2 font-medium">Watch Tutorial →</span>
                <ExternalLink className="w-3 h-3 text-text-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal (Inline Player) */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-[1000px] aspect-video bg-black rounded-[24px] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-[101] w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors backdrop-blur-md border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoGallery;
