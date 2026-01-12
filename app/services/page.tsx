import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Discover our AI-powered services: Content Optimization, Intelligent Commerce Solutions, Automated Growth Funnels, and AI Analytics.',
  metadataBase: new URL('https://weaveai.us'),
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'WeaveAI Services',
    description: 'Discover our AI-powered services: Content Optimization, Intelligent Commerce Solutions, Automated Growth Funnels, and AI Analytics.',
    url: 'https://weaveai.us/services',
    images: [
      {
        url: 'https://weaveai.us/WeaveAI.US%20logo.png',
        width: 1200,
        height: 630,
        alt: 'WeaveAI Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WeaveAI Services',
    description: 'Discover our AI-powered services: Content Optimization, Intelligent Commerce Solutions, Automated Growth Funnels, and AI Analytics.',
    images: ['https://weaveai.us/WeaveAI.US%20logo.jpg'],
  },
}

export default function Services() {
  const services = [
    {
      title: 'AI-Powered Content Optimization',
      description: 'Transform your content into high-converting commerce opportunities using advanced AI algorithms that analyze, optimize, and personalize content for maximum engagement and revenue.',
    },
    {
      title: 'Intelligent Commerce Solutions',
      description: 'Leverage AI to create seamless shopping experiences that understand user intent, predict behavior, and deliver personalized product recommendations at the right moment.',
    },
    {
      title: 'Automated Growth Funnels',
      description: 'Build and optimize conversion funnels automatically with AI that learns from every interaction, continuously improving performance and driving measurable results.',
    },
    {
      title: 'AI Analytics & Insights',
      description: 'Gain deep insights into your content-to-commerce performance with AI-powered analytics that identify opportunities, predict trends, and recommend actionable strategies.',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-20 animate-fade-in min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text text-center">Our Services</h1>
        <p className="text-xl md:text-2xl text-center text-neutral-dark mb-16 max-w-3xl mx-auto leading-relaxed">
          We leverage AI to transform your content into commerce, delivering intelligent solutions 
          that drive growth and revenue.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-primary-green/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-neutral-dark">{service.title}</h2>
              <p className="text-neutral-dark leading-relaxed text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
