import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Users, 
  Crown, 
  BarChart3, 
  Clock, 
  Star,
  Smartphone,
  CreditCard,
  MessageSquare
} from "lucide-react";
import serviceImage from "@/assets/barber-service.jpg";
import techImage from "@/assets/scheduling-tech.jpg";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description: "Sistema completo de agendamento com notificações automáticas e gestão de horários.",
      color: "text-primary"
    },
    {
      icon: Crown,
      title: "Plano VIP Exclusivo",
      description: "Crie um programa de fidelidade premium com benefícios especiais para seus melhores clientes.",
      color: "text-premium"
    },
    {
      icon: Users,
      title: "Gestão de Clientes",
      description: "Base completa de dados dos clientes com histórico de serviços e preferências.",
      color: "text-success"
    },
    {
      icon: BarChart3,
      title: "Relatórios Avançados",
      description: "Dashboard com métricas de performance, faturamento e análise de clientes VIP.",
      color: "text-accent"
    },
    {
      icon: Smartphone,
      title: "App Mobile",
      description: "Aplicativo para clientes agendarem e acompanharem seus horários em tempo real.",
      color: "text-primary"
    },
    {
      icon: CreditCard,
      title: "Pagamentos Integrados",
      description: "Receba pagamentos online e gerencie assinaturas VIP de forma automatizada.",
      color: "text-success"
    }
  ];

  const vipBenefits = [
    "Agendamento prioritário",
    "Horários exclusivos",
    "Desconto de 20% em todos os serviços",
    "Acesso antecipado a novos serviços",
    "Brinde mensal personalizado",
    "Atendimento preferencial"
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-hero text-primary-foreground">
            Funcionalidades Completas
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Tudo que sua Barbearia Precisa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sistema completo para transformar sua barbearia em um negócio digital moderno e lucrativo.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-smooth bg-gradient-card">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* VIP Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-gradient-premium text-premium-foreground">
              <Crown className="h-4 w-4" />
              Plano VIP Premium
            </Badge>
            <h3 className="text-3xl font-bold text-foreground">
              Transforme Clientes em <span className="bg-gradient-premium bg-clip-text text-transparent">Membros VIP</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Crie um programa de fidelidade exclusivo que aumenta a receita recorrente e mantém seus melhores clientes sempre voltando.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <Star className="h-5 w-5 text-premium" />
                Benefícios Exclusivos VIP:
              </h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {vipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-premium rounded-full" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={serviceImage} 
              alt="Atendimento VIP em barbearia"
              className="rounded-2xl shadow-elegant w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-premium/20 via-transparent to-transparent rounded-2xl" />
          </div>
        </div>

        {/* Technology Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          <div className="order-2 lg:order-1">
            <img 
              src={techImage} 
              alt="Tecnologia de agendamento"
              className="rounded-2xl shadow-elegant w-full"
            />
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <Badge className="bg-gradient-hero text-primary-foreground">
              <MessageSquare className="h-4 w-4" />
              Tecnologia Avançada
            </Badge>
            <h3 className="text-3xl font-bold text-foreground">
              Interface Simples, <span className="bg-gradient-hero bg-clip-text text-transparent">Resultados Poderosos</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Dashboard intuitivo que permite gerenciar todos os aspectos da sua barbearia em um só lugar. Seus clientes também têm acesso a um app moderno e fácil de usar.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Economia de Tempo</h4>
                  <p className="text-muted-foreground">Reduza em 80% o tempo gasto com agendamentos manuais</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BarChart3 className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h4 className="font-semibold">Aumento de Receita</h4>
                  <p className="text-muted-foreground">Clientes VIP geram 3x mais receita que clientes regulares</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};