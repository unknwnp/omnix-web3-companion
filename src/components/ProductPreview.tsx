import omnixMockup from "@/assets/omnix-mockup.png";

export const ProductPreview = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Experience the
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Future </span>
                of Web3
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Chat naturally with your AI crypto copilot. Get insights, manage your portfolio, 
                and navigate Solana with the intelligence you deserve.
              </p>
            </div>

            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 p-4 bg-card/20 backdrop-blur-sm border border-border/30 rounded-xl">
                <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse"></div>
                <span className="text-foreground">Real-time wallet analysis</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-card/20 backdrop-blur-sm border border-border/30 rounded-xl">
                <div className="w-3 h-3 bg-secondary rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-foreground">Intelligent transaction insights</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-card/20 backdrop-blur-sm border border-border/30 rounded-xl">
                <div className="w-3 h-3 bg-accent rounded-full animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
                <span className="text-foreground">Natural language blockchain queries</span>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-2xl rounded-3xl animate-glow-pulse transform rotate-3"></div>
              
              {/* Phone mockup */}
              <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                <img 
                  src={omnixMockup} 
                  alt="Omnix AI Crypto Copilot Interface" 
                  className="w-80 md:w-96 h-auto animate-[fade-in-out_3s_ease-in-out_infinite]"
                />
              </div>

              {/* Floating elements around phone */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '-1s' }}></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '-4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};