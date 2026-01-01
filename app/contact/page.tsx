import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with WeaveAI to transform your content into commerce. Book a call or send us a message.',
  metadataBase: new URL('https://weaveai.us'),
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact WeaveAI',
    description: 'Get in touch with WeaveAI to transform your content into commerce. Book a call or send us a message.',
    url: 'https://weaveai.us/contact',
    images: [
      {
        url: 'https://weaveai.us/WeaveAI.US%20logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact WeaveAI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact WeaveAI',
    description: 'Get in touch with WeaveAI to transform your content into commerce. Book a call or send us a message.',
    images: ['https://weaveai.us/WeaveAI.US%20logo.jpg'],
  },
}

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-20 animate-fade-in min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text text-center">Get in Touch</h1>
        <p className="text-xl md:text-2xl text-center text-neutral-dark mb-12 leading-relaxed">
          Ready to transform your content into commerce? Let's build your AI-powered growth funnel together.
        </p>
        <form 
          action="https://formsubmit.co/sales@weaveai.us" 
          method="POST"
          className="space-y-6 animate-slide-up"
        >
          {/* FormSubmit Configuration */}
          <input type="hidden" name="_subject" value="New Contact Form Submission from WeaveAI.us" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://www.weaveai.us/thank-you" />
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-white text-neutral-dark border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all placeholder:text-gray-400"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-white text-neutral-dark border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all placeholder:text-gray-400"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 bg-white text-neutral-dark border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all resize-none placeholder:text-gray-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-green text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>
        </form>
        <div className="mt-12 text-center animate-slide-up">
          <p className="text-neutral-dark mb-4 text-lg">Or schedule a call directly:</p>
          <a
            href="#"
            className="inline-block bg-primary-green text-white py-3 px-8 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            Book a Call
          </a>
        </div>
      </div>
    </div>
  )
}
