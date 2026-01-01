import Button from './ui/Button'

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-neutral-dark">Let's Build Your</span>
            <br />
            <span className="gradient-text">AI-Powered Growth Funnel</span>
          </h2>
          <p className="text-xl text-neutral-dark mb-8 max-w-2xl mx-auto">
            Whether you're a publisher looking to monetize or a brand aiming for measurable results, 
            WeaveAI connects the dots with intelligent automation.
          </p>
          <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  )
}

