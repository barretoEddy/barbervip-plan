import { Scissors, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-hero rounded-lg">
                <Scissors className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">BarberPro</h3>
                <p className="text-xs opacity-70">SaaS para Barbearias</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              A solução completa para transformar sua barbearia em um negócio digital moderno e lucrativo.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Produto</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#features" className="hover:opacity-100 transition-smooth">Funcionalidades</a></li>
              <li><a href="#pricing" className="hover:opacity-100 transition-smooth">Preços</a></li>
              <li><a href="#demo" className="hover:opacity-100 transition-smooth">Demo</a></li>
              <li><a href="#" className="hover:opacity-100 transition-smooth">Integrações</a></li>
              <li><a href="#" className="hover:opacity-100 transition-smooth">API</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Suporte</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-smooth">Central de Ajuda</a></li>
              <li><a href="#" className="hover:opacity-100 transition-smooth">Documentação</a></li>
              <li><a href="#" className="hover:opacity-100 transition-smooth">Tutoriais</a></li>
              <li><a href="#" className="hover:opacity-100 transition-smooth">Status do Sistema</a></li>
              <li><a href="#" className="hover:opacity-100 transition-smooth">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 opacity-70">
                <Mail className="h-4 w-4" />
                <span>contato@barberpro.com.br</span>
              </div>
              <div className="flex items-center gap-2 opacity-70">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2 opacity-70">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-70">
            © 2024 BarberPro. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm opacity-70">
            <a href="#" className="hover:opacity-100 transition-smooth">Privacidade</a>
            <a href="#" className="hover:opacity-100 transition-smooth">Termos</a>
            <a href="#" className="hover:opacity-100 transition-smooth">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};