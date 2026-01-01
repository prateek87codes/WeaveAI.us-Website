import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for contacting WeaveAI. We will get back to you soon.',
}

export default function ThankYou() {
  return (
    <div className="container mx-auto px-4 py-20 animate-fade-in min-h-screen">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <svg
            className="w-20 h-20 mx-auto text-primary-green"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Thank You!</h1>
        
        <p className="text-xl md:text-2xl text-neutral-dark mb-8 leading-relaxed">
          We've received your message and will get back to you within 24 hours.
        </p>
        
        <p className="text-lg text-neutral-dark mb-12">
          In the meantime, feel free to explore our services or learn more about how WeaveAI can transform your content into commerce.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-primary-green text-white rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-white text-neutral-dark border-2 border-neutral-dark rounded-lg font-semibold hover:bg-neutral-dark hover:text-white transition-all"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  )
}

