export interface ProductData {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  sections: any[]; // List of component data
}

export const products: ProductData[] = [
  {
    slug: "self-delivery",
    title: "Surf orders. Delivered by your own couriers.",
    description: "Use your in-house team to deliver Surf orders at a reduced commission — while getting access to Surf courier partners when you need them.",
    heroImage: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1800&auto=format&fit=crop&q=80",
    sections: [
      {
        type: "split",
        title: "What is Self-delivery?",
        description: "Self-delivery brings you the benefits of being on Surf — more customers and more sales — while using your own delivery staff to fulfil your Surf orders. You control the delivery experience, set your own delivery area, and choose the delivery fee customers pay.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
        ctaText: "Get started →",
      },
      {
        type: "steps",
        title: "How does self-delivery work?",
        theme: "grey",
        reverse: true,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        steps: [
          { title: "Customers browse your business", description: "Customers order for delivery or pickup through the Surf app or your Storefront." },
          { title: "Manage incoming orders", description: "Confirm orders on your Seller Hub app or point-of-sale integration." },
          { title: "Deliver to customers", description: "Prepare orders for your couriers to deliver. Use Surf courier partners when needed." },
        ]
      },
      {
        type: "split",
        title: "Reach new customers at a lower cost",
        description: "Self-delivery partners enjoy the full range of marketing and sales benefits available to Surf sellers, but at a lower commission rate. You deliver, we cover the delivery cost — customers get free delivery.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80",
        ctaText: "Get started →",
      },
      {
        type: "split",
        title: "Use the Surf courier network when you need it",
        description: "With Self-delivery's hybrid option, Surf courier partners are still available to you — for example when an order is placed after your team's delivery hours, during peak demand, or outside your delivery area.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
        theme: "grey",
        reverse: true,
      },
      {
        type: "features",
        title: "Easy delivery notifications. No setup needed.",
        columns: 4,
        features: [
           { title: "1. Receipt with QR code", description: "Each receipt includes a QR code. No additional setup on your end." },
           { title: "2. Scan and start delivery", description: "Your courier scans the QR code, sees drop-off details, and taps 'Start Delivery'." },
           { title: "3. Instant customer update", description: "Customers get notified in the Surf app that their order is on its way." },
           { title: "4. Easy delivery confirmation", description: "Couriers tap 'Mark delivered'. Customer gets confirmation and you get timestamps." },
        ]
      },
      {
        type: "cards",
        title: "Self-delivery also includes:",
        cards: [
          { title: "Promotional campaigns", description: "Convert more app visitors to shoppers with self-funded promotions like free delivery, discounts and specials.", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&auto=format&fit=crop&q=80", href: "/solutions/promotions" },
          { title: "Business management portal", description: "Track live purchases and make changes to your inventory in real time.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80", href: "/solutions/analytics" },
          { title: "World-class support", description: "24/7 support that replies in minutes, available until the last order is delivered.", image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=500&auto=format&fit=crop&q=80" },
        ]
      },
      {
        type: "faq",
        items: [
          { question: "I have my own delivery staff. Can I still use Surf?", answer: "Yes! Surf Self-delivery is ideal for businesses who already have delivery teams and want to increase orders by tapping into the Surf customer base." },
          { question: "What if I'd like Surf couriers to fulfil some orders?", answer: "No problem. Our hybrid fulfilment option lets you tap into the Surf courier network to manage delivery volume, expand your area, and increase orders — all without sacrificing delivery quality." },
          { question: "How do I deliver my own Surf orders?", answer: "Accept orders through the Seller Hub app or POS, prepare the goods, and dispatch with your own staff. Customers are notified at each step automatically." },
        ]
      }
    ]
  },
  {
    slug: "surf-app",
    title: "Get your business in front of millions of customers",
    description: "Connect with new customers, increase your sales and grow your brand with the Surf app.",
    heroImage: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1800&auto=format&fit=crop&q=80",
    sections: []
  },
  {
    slug: "storefront",
    title: "Your own online store, powered by Surf",
    description: "Launch a custom-branded website to sell your products online and manage everything in one place.",
    heroImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1800&auto=format&fit=crop&q=80",
    sections: []
  }
];
