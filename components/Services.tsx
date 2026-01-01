import Card from './ui/Card'

const services = [
  {
    title: 'AI-Powered Content Optimization',
    description: 'Transform your content into high-converting commerce opportunities using advanced AI algorithms that analyze, optimize, and personalize content for maximum engagement and revenue.',
    icon: '✨',
  },
  {
    title: 'Intelligent Commerce Solutions',
    description: 'Leverage AI to create seamless shopping experiences that understand user intent, predict behavior, and deliver personalized product recommendations at the right moment.',
    icon: '🤖',
  },
  {
    title: 'Automated Growth Funnels',
    description: 'Build and optimize conversion funnels automatically with AI that learns from every interaction, continuously improving performance and driving measurable results.',
    icon: '📈',
  },
  {
    title: 'AI Analytics & Insights',
    description: 'Gain deep insights into your content-to-commerce performance with AI-powered analytics that identify opportunities, predict trends, and recommend actionable strategies.',
    icon: '📊',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">How AI Transforms</span>
              <br />
              <span className="text-neutral-dark">Content-to-Commerce</span>
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              We leverage cutting-edge AI technology to redefine how content connects with commerce, 
              delivering intelligent solutions that drive growth and revenue.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                hover
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-neutral-dark">
                  {service.title}
                </h3>
                <p className="text-neutral-dark leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

