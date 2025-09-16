import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Star, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const PricingSection = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const plans = [
    {
      name: "Starter",
      description: "Perfeito para barbearias iniciantes",
      price: "R$ 0",
      period: "/mês",
      badge: null,
      variant: "outline" as const,
      features: [
        "Até 100 agendamentos/mês",
        "1 barbeiro",
        "Dashboard básico",
        "App cliente",
        "Notificações SMS",
        "Suporte por email"
      ]
    },
    {
      name: "Professional",
      description: "Para barbearias em crescimento",
      price: "R$ 89",
      period: "/mês",
      badge: { text: "Mais Popular", color: "bg-gradient-hero" },
      variant: "hero" as const,
      features: [
        "Agendamentos ilimitados",
        "Até 5 barbeiros",
        "Relatórios avançados",
        "Sistema VIP básico",
        "Pagamentos integrados",
        "Suporte prioritário",
        "Personalização de marca",
        "API básica"
      ]
    },
    {
      name: "Enterprise",
      description: "Para redes de barbearias",
      price: "R$ 189",
      period: "/mês",
      badge: { text: "VIP Completo", color: "bg-gradient-premium" },
      variant: "premium" as const,
      features: [
        "Tudo do Professional",
        "Barbeiros ilimitados",
        "Sistema VIP completo",
        "Multi-unidades",
        "Relatórios personalizados",
        "Integração WhatsApp",
        "Suporte dedicado 24/7",
        "Consultoria de negócios",
        "API completa"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-hero text-primary-foreground">
            <Crown className="h-4 w-4" />
            Planos e Preços
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Escolha o Plano Ideal para sua Barbearia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comece grátis por 14 dias. Sem compromisso, sem taxa de setup. Cancele quando quiser.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-soft hover:shadow-elegant transition-smooth ${
                plan.badge?.color === 'bg-gradient-hero' ? 'scale-105 shadow-elegant' : ''
              } ${
                plan.badge?.color === 'bg-gradient-premium' ? 'shadow-premium' : ''
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className={`${plan.badge.color} text-white px-4 py-1`}>
                    {plan.badge.color === 'bg-gradient-premium' ? (
                      <Crown className="h-3 w-3 mr-1" />
                    ) : (
                      <Star className="h-3 w-3 mr-1" />
                    )}
                    {plan.badge.text}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <Button 
                  variant={plan.variant} 
                  className="w-full" 
                  size="lg"
                  onClick={() => navigate(user ? "/" : "/auth")}
                >
                  {index === 0 && "Começar Grátis"}
                  {index === 1 && (
                    <>
                      Iniciar Teste
                      <Zap className="h-4 w-4" />
                    </>
                  )}
                  {index === 2 && (
                    <>
                      Contatar Vendas
                      <Crown className="h-4 w-4" />
                    </>
                  )}
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Todas as opções incluem teste gratuito de 14 dias • Sem taxa de cancelamento
          </p>
          <p className="text-sm text-muted-foreground">
            Dúvidas? <a href="#contact" className="text-primary hover:underline">Entre em contato</a> com nossa equipe
          </p>
        </div>
      </div>
    </section>
  );
};