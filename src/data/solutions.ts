import { PageData } from "@/components/DynamicPage";

export const solutions: PageData[] = [
  {
    slug: "analytics",
    title: "Access valuable analytics and insights",
    description: "Track your business performance, view sales dashboards, and get customer analytics to grow your business even more.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800&auto=format&fit=crop&q=80",
    sections: [
      {
        type: "features",
        title: "Use data to make smarter business decisions",
        theme: "grey",
        features: [
          { title: "Dig into the data", description: "Track net sales, average order size, unique customers, popular items, and more across any period of time.", iconImg: "" },
          { title: "Unlock customer insights", description: "Understand what your customers order and view operational metrics like punctuality, rejections, and availability.", iconImg: "" },
          { title: "Get a dashboard view", description: "See all the key information in one simple view, and easily filter to show what matters most to you.", iconImg: "" },
        ]
      },
      {
        type: "split",
        title: "Utilise powerful sales analytics",
        description: "Stay on top of the most important business statistics. Review key data including sales by delivery type, payouts, number of orders, popular items, average basket size, error charges, and more across all your venues.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        ctaText: "Try it →",
      },
      {
        type: "split",
        title: "Better understand your customers",
        description: "Get a breakdown of new and returning customers, plus see purchases made in real time. From the Seller Dashboard, you can also run promotions to attract new customers and reward loyal ones.",
        image: "https://images.unsplash.com/photo-1556742208-999815fca738?w=800&auto=format&fit=crop&q=80",
        reverse: true,
        theme: "grey",
        ctaText: "Try it →",
      },
      {
        type: "split",
        title: "Improve your operations",
        description: "Discover opportunities to run your business more smoothly with data points on your order accuracy, cancellations, wait times, and downtime. Know exactly where to improve and by how much.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80",
        ctaText: "Try it →",
      },
      {
        type: "cta",
        title: "Getting started is easy — sign up today",
        description: "Fill in a few details and you'll have access to your dashboard in no time.",
        theme: "grey",
        ctaText: "Get started",
      },
      {
        type: "faq",
        items: [
          { question: "Where can I see my sales and order data?", answer: "Log in to the Seller Dashboard to view your Surf sales and order data. You'll see an overview of main metrics plus specific reports you can filter for metrics, timeframes, and products." },
          { question: "What actions can I take in real-time?", answer: "You can edit your catalogue or inventory, set up promotional campaigns, watch live purchases, and change your store details — all from the Seller Dashboard." },
          { question: "Does the dashboard contain data from all Surf products?", answer: "Yes. The Seller Dashboard is your destination for data from the Surf App, Self-delivery, and Storefront orders." },
        ]
      }
    ]
  },
  {
    slug: "integrations",
    title: "Connect Surf to the tools you already use",
    description: "Sync your orders, inventory, and menu with your existing point-of-sale system.",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1800&auto=format&fit=crop&q=80",
    sections: []
  },
  {
    slug: "promotions",
    title: "Grow your sales with Surf Promotions",
    description: "Attract new customers and keep them coming back with targeted discounts and offers.",
    heroImage: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1800&auto=format&fit=crop&q=80",
    sections: []
  },
  {
    slug: "seller-plus",
    title: "Surf+ for Sellers",
    description: "Unlock premium features, lower fees, and priority support with Surf+.",
    heroImage: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1800&auto=format&fit=crop&q=80",
    sections: []
  }
];
