import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Crown, Check, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const CTASection = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const benefits = [
    "14 dias grátis, sem compromisso",
    "Configuração em 5 minutos",
    "Suporte completo incluído",
    "Migração de dados gratuita"
  ];

  return (
    <section id="demo" className="py-20 px-4">
      <div className="container mx-auto">
        <Card className="border-0 shadow-premium bg-gradient-to-br from-primary/5 via-accent/5 to-premium/5 overflow-hidden relative">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-hero opacity-10 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-premium opacity-10 rounded-full translate-y-24 -translate-x-24" />
          
          <CardContent className="p-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <Badge className="bg-gradient-hero text-primary-foreground text-base px-6 py-2">
                  <Crown className="h-5 w-5" />
                  Oferta Especial de Lançamento
                </Badge>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Transforme sua Barbearia em um 
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> Negócio Digital</span>
                </h2>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Junte-se a mais de 500 barbearias que já aumentaram sua receita com nosso sistema completo. 
                  Comece hoje mesmo, sem riscos!
                </p>
              </div>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-success" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => navigate(user ? "/" : "/auth")}
                >
                  <Zap className="h-5 w-5" />
                  {user ? "Acessar Painel" : "Começar Teste Grátis Agora"}
                  <ArrowRight className="h-5 w-5" />
                </Button>
                
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Agendar Demonstração
                </Button>
              </div>

              {/* Additional Info */}
              <div className="pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  <strong>Garantia de 30 dias:</strong> Não ficou satisfeito? Devolvemos 100% do seu dinheiro.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Sem taxa de setup • Sem fidelidade • Cancele quando quiser
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};