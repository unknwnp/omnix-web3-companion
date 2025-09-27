import { Brain, Shield, Lightbulb } from "lucide-react";

export const VisionSection = () => {
  const visionPoints = [
    {
      icon: Brain,
      title: "Human-Centered AI",
      description: "Making crypto conversations as natural as talking to a friend who happens to know everything about blockchain."
    },
    {
      icon: Shield,
      title: "Transparent & Secure", 
      description: "Built on-chain with full transparency. Your data, your control, your Web3 journey."
    },
    {
      icon: Lightbulb,
      title: "Intelligent Insights",
      description: "From portfolio analysis to smart contract interactions, get AI-powered guidance for every Web3 decision."
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Making Crypto
            <span className="bg-gradient-secondary bg-clip-text text-transparent"> More Human</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Omnix isn't just another crypto tool — it's your personal Web3 companion, 
            designed to bridge the gap between complex blockchain technology and human understanding.
          </p>
        </div>

        {/* Vision Points */}
        <div className="grid md:grid-cols-3 gap-8">
          {visionPoints.map((point, index) => (
            <div 
              key={index}
              className="group p-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-glow-primary transition-all duration-300 hover:shadow-glow-primary/20"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-all duration-300">
                  <point.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {point.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-card/20 backdrop-blur-sm border-glow-secondary rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "We believe the future of Web3 is conversational. Where asking about your portfolio 
              is as simple as texting a friend, and understanding complex DeFi protocols feels 
              like having a knowledgeable guide by your side. Omnix makes blockchain technology 
              accessible, intelligent, and fundamentally human."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};