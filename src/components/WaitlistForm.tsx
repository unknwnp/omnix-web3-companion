import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight } from "lucide-react";

const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }).trim().toLowerCase(),
});

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = emailSchema.parse({ email });
      setIsLoading(true);

      // Simulate API call - replace with actual waitlist API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Welcome to the future! 🚀",
        description: "You're now on the Omnix waitlist. We'll notify you when early access begins.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid email",
          description: error.issues[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="relative">
        <div className="p-8 border-glow-primary bg-card/50 backdrop-blur-sm rounded-xl text-center animate-fade-in-up">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center animate-glow-pulse">
            <Mail className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-2">You're in! 🎉</h3>
          <p className="text-muted-foreground">
            Welcome to the Omnix waitlist. We'll notify you as soon as early access opens.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative max-w-md mx-auto">
      <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl rounded-full animate-glow-pulse"></div>
      <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
        <div className="relative group">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 pl-12 pr-4 bg-card/50 backdrop-blur-sm border-glow-primary text-foreground placeholder:text-muted-foreground focus:shadow-glow-primary transition-all duration-300"
            required
          />
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary/60" />
        </div>
        
        <Button
          type="submit"
          variant="neon"
          size="lg"
          className="w-full"
          disabled={isLoading || !email.trim()}
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Joining waitlist...
            </>
          ) : (
            <>
              Join the waitlist
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>
        
        <p className="text-xs text-muted-foreground text-center">
          Be among the first to experience the future of Web3 with AI
        </p>
      </form>
    </div>
  );
};