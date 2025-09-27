import { WaitlistForm } from "./WaitlistForm";
import { Bot, Wallet, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-6s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo/Brand Area */}
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-primary rounded-xl shadow-glow-primary">
              <Bot className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Omnix
            </h1>
          </div>
          <p className="text-sm text-muted-foreground font-medium tracking-wider">
            BY INON LABS
          </p>
        </div>

        {/* Main Headlines */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your AI
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Crypto </span>
            Copilot
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Navigate the blockchain with intelligence. Chat about your wallet, get real-time insights, 
            and let AI guide your Web3 journey.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border-glow-primary rounded-full">
            <Wallet className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Wallet Integration</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border-glow-secondary rounded-full">
            <Bot className="w-4 h-4 text-secondary" />
            <span className="text-sm text-foreground">AI Assistant</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border rounded-full border-accent/50">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm text-foreground">Real-time Insights</span>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <WaitlistForm />
        </div>

        {/* Social Proof */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-sm text-muted-foreground">
            Join early adopters who are shaping the future of Web3
          </p>
        </div>
      </div>
    </div>
  );
};