import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, Calendar, Crown, Play, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import heroImage from "@/assets/barbershop-hero.jpg";

export const HeroSection = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Badge className="inline-flex items-center gap-2 bg-gradient-hero text-primary-foreground">
              <Crown className="h-4 w-4" />
              Sistema Completo para Barbearias
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Gerencie sua <span className="bg-gradient-hero bg-clip-text text-transparent">Barbearia</span> com Inteligência
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Sistema completo de agendamento e gestão com plano VIP exclusivo para seus clientes mais especiais. 
                Aumente sua receita e fidelize seus clientes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => navigate(user ? "/" : "/auth")}
              >
                <Zap className="h-5 w-5" />
                {user ? "Acessar Painel" : "Começar Teste Grátis"}
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="h-5 w-5" />
                Ver Demonstração
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9/5 em avaliações</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">+500 barbearias ativas</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Barbearia moderna e elegante"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-soft border">
              <div className="flex items-center gap-3">
                <Calendar className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-sm">+200%</p>
                  <p className="text-xs text-muted-foreground">Agendamentos</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-soft border">
              <div className="flex items-center gap-3">
                <Crown className="h-8 w-8 text-premium" />
                <div>
                  <p className="font-semibold text-sm">VIP+</p>
                  <p className="text-xs text-muted-foreground">Clientes Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};