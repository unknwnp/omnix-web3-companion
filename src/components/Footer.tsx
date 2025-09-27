import { Twitter, MessageCircle, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/30 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-semibold text-foreground">Omnix</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Making crypto more human, accessible, and intelligent
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">Follow our journey</p>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/inonlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:border-glow-primary transition-all duration-300 hover:shadow-glow-primary/20"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
              <a
                href="https://discord.gg/omnix"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:border-glow-secondary transition-all duration-300 hover:shadow-glow-secondary/20"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors duration-300" />
              </a>
              <a
                href="mailto:hello@inonlabs.com"
                className="group p-3 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:border-glow-secondary transition-all duration-300 hover:shadow-glow-secondary/20"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2025 Inon Labs. All rights reserved.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground">
            Built with ❤️ for the Web3 community • Starting with Solana, expanding everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};