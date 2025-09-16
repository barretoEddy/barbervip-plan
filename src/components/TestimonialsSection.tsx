import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Proprietário - Barbearia Premium",
      content: "O BarberPro revolucionou minha barbearia. O sistema VIP aumentou minha receita em 150% em apenas 6 meses. Meus clientes adoram os benefícios exclusivos!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Costa",
      role: "Gerente - Rede BarberStyle",
      content: "Gerenciar 4 unidades nunca foi tão fácil. O dashboard unificado e os relatórios me dão controle total do negócio. Recomendo para qualquer rede de barbearias.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ricardo Mendes",
      role: "Barbeiro - Studio Classic",
      content: "Antes eu perdia muito tempo com agendamentos por telefone. Agora tudo é automático e meus clientes VIP têm prioridade total. Sistema perfeito!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-hero text-primary-foreground">
            <Star className="h-4 w-4" />
            Depoimentos
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 500 barbearias já transformaram seus negócios com o BarberPro. Veja os resultados reais.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-smooth bg-gradient-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="relative">
                    <Quote className="h-8 w-8 text-muted-foreground/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground italic leading-relaxed pl-6">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-primary">500+</h3>
            <p className="text-muted-foreground">Barbearias Ativas</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-success">150%</h3>
            <p className="text-muted-foreground">Aumento Médio de Receita</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-accent">25k+</h3>
            <p className="text-muted-foreground">Agendamentos por Mês</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-premium">4.9</h3>
            <p className="text-muted-foreground">Avaliação Média</p>
          </div>
        </div>
      </div>
    </section>
  );
};