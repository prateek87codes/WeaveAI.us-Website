import Button from './ui/Button'

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Weaving AI into</span>
            <br />
            <span className="text-neutral-dark">Content & Commerce</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-dark mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Partnering with the world's leading publishers to deliver high-quality traffic 
            and guaranteed revenue for ambitious e-commerce brands and marketplaces through 
            AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
              Book a Call
            </Button>
            <Button href="/services" variant="secondary" className="text-lg px-8 py-4">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

