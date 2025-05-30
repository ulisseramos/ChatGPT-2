
import React from 'react';
import { Star, CheckCircle, Users, TrendingUp, Shield } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const SocialProofSection = () => {
  const stats = [
    { icon: Users, value: "2.847+", label: "Usuários ativos" },
    { icon: Star, value: "4.9/5", label: "Avaliação média" },
    { icon: TrendingUp, value: "98%", label: "Taxa de satisfação" }
  ];

  const recentPurchases = [
    { name: "Ana S.", location: "São Paulo", time: "2 min" },
    { name: "Carlos M.", location: "Rio de Janeiro", time: "5 min" },
    { name: "Mariana L.", location: "Belo Horizonte", time: "8 min" },
    { name: "Roberto F.", location: "Porto Alegre", time: "12 min" }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      location: "São Paulo, SP",
      text: "Funcionou perfeitamente! Em 10 minutos já estava usando todas as funcionalidades.",
      rating: 5,
      verified: true
    },
    {
      name: "João Oliveira",
      location: "Rio de Janeiro, RJ", 
      text: "Por R$10 consegui uma ferramenta que me economiza horas por dia. Recomendo!",
      rating: 5,
      verified: true
    },
    {
      name: "Amanda Costa",
      location: "Brasília, DF",
      text: "Acesso rápido e fácil. Funciona exatamente como prometido.",
      rating: 5,
      verified: true
    }
  ];

  const socialProofs = [
    {
      id: 1,
      image: "https://spedypay.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-15-at-22.48.19.jpeg",
      alt: "Prova social 1"
    },
    {
      id: 2,
      image: "https://gptbarato.site/img/2.jpeg",
      alt: "Prova social 2"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-lg mx-auto space-y-8">
        {/* Carrossel de Provas Sociais */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
          <h3 className="text-white font-semibold text-center mb-6">Provas Sociais</h3>
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {socialProofs.map((proof) => (
                <CarouselItem key={proof.id}>
                  <div className="p-1">
                    <img 
                      src={proof.image} 
                      alt={proof.alt}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-slate-700/80 border-slate-600 text-slate-300 hover:bg-slate-600" />
            <CarouselNext className="bg-slate-700/80 border-slate-600 text-slate-300 hover:bg-slate-600" />
          </Carousel>
        </div>

        {/* Estatísticas */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <IconComponent className="w-5 h-5 text-slate-400 mr-2" />
                    <span className="text-white font-bold">{stat.value}</span>
                  </div>
                  <p className="text-slate-400 text-xs">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Status do sistema */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-slate-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Sistema Online</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-slate-400" />
              <span className="text-slate-400 text-sm">Seguro</span>
            </div>
          </div>
        </div>

        {/* Compras recentes */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50">
          <h3 className="text-white font-semibold text-sm mb-4 flex items-center">
            <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
            Aquisições recentes
          </h3>
          <div className="space-y-3">
            {recentPurchases.map((purchase, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center text-white font-medium text-xs">
                    {purchase.name.split(' ')[0][0]}
                  </div>
                  <div>
                    <span className="text-slate-200 font-medium">{purchase.name}</span>
                    <span className="text-slate-400 ml-1">- {purchase.location}</span>
                  </div>
                </div>
                <span className="text-slate-500">há {purchase.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Depoimentos */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-center mb-6">Feedback dos usuários</h3>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center text-white font-medium text-sm">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    {testimonial.verified && <CheckCircle className="w-4 h-4 text-slate-400" />}
                  </div>
                  <p className="text-slate-400 text-sm mb-3">{testimonial.location}</p>
                  <p className="text-slate-200 text-sm leading-relaxed mb-3">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-slate-400 text-slate-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
