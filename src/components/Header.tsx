import { Button } from "@/components/ui/button";
import { Scissors, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-hero rounded-lg">
              <Scissors className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">BarberPro</h1>
              <p className="text-xs text-muted-foreground">SaaS para Barbearias</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-foreground hover:text-primary transition-smooth">
              Funcionalidades
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-smooth">
              Planos
            </a>
            <a href="#demo" className="text-foreground hover:text-primary transition-smooth">
              Demo
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contato
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">
                  Olá, {user.user_metadata?.name || user.email}
                </span>
                <Button variant="outline" onClick={signOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sair
                </Button>
              </div>
            ) : (
              <>
                <Button variant="outline" onClick={() => navigate("/auth")}>Login</Button>
                <Button variant="hero" onClick={() => navigate("/auth")}>Começar Grátis</Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-foreground hover:text-primary transition-smooth">
                Funcionalidades
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-smooth">
                Planos
              </a>
              <a href="#demo" className="text-foreground hover:text-primary transition-smooth">
                Demo
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
                Contato
              </a>
              <div className="flex flex-col gap-2 mt-4">
                {user ? (
                  <div className="space-y-2">
                    <span className="text-sm text-muted-foreground block">
                      Olá, {user.user_metadata?.name || user.email}
                    </span>
                    <Button variant="outline" onClick={signOut} className="w-full">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sair
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button variant="outline" onClick={() => navigate("/auth")}>Login</Button>
                    <Button variant="hero" onClick={() => navigate("/auth")}>Começar Grátis</Button>
                  </>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};