export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/30 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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

          {/* Copyright */}
          <div className="text-center">
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