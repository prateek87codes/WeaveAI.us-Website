import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about WeaveAI and our mission to transform content into commerce through AI-powered solutions.',
  metadataBase: new URL('https://weaveai.us'),
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About WeaveAI',
    description: 'Learn about WeaveAI and our mission to transform content into commerce through AI-powered solutions.',
    url: 'https://weaveai.us/about',
    images: [
      {
        url: 'https://weaveai.us/WeaveAI.US%20logo.png',
        width: 1200,
        height: 630,
        alt: 'WeaveAI - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About WeaveAI',
    description: 'Learn about WeaveAI and our mission to transform content into commerce through AI-powered solutions.',
    images: ['https://weaveai.us/WeaveAI.US%20logo.jpg'],
  },
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20 animate-fade-in min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">About WeaveAI</h1>
        <div className="space-y-8 text-neutral-dark">
          <p className="text-xl md:text-2xl leading-relaxed">
            WeaveAI leverages artificial intelligence to redefine the content-to-commerce business model. 
            We transform how businesses connect content with commerce, creating intelligent pathways that 
            drive growth and revenue.
          </p>
          
          <div className="pt-8">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-neutral-dark">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-4">
              At WeaveAI, we believe that the future of commerce lies in the seamless integration of 
              content and commerce, powered by artificial intelligence. Our mission is to help businesses 
              unlock the full potential of their content by transforming it into measurable commerce outcomes.
            </p>
          </div>
          
          <div className="pt-8">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-neutral-dark">What We Do</h2>
            <p className="text-lg leading-relaxed mb-4">
              We partner with leading publishers and ambitious e-commerce brands to deliver high-quality 
              traffic and guaranteed revenue through AI-powered solutions. Whether you're a publisher looking 
              to monetize your content or a brand aiming for measurable results, WeaveAI connects the dots 
              with intelligent automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
