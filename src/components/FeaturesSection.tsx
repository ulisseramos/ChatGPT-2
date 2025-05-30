
import React from 'react';
import { Check, Zap, Image, FileText, MessageSquare, Smartphone } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "GPT-4-Turbo Completo",
      description: "Mais rápido, mais inteligente, mais completo"
    },
    {
      icon: Image,
      title: "Geração de Imagens IA",
      description: "Incrível para conteúdo, posts, arte e muito mais"
    },
    {
      icon: FileText,
      title: "Criação Automática",
      description: "Planilhas, eBooks, códigos, legendas, ideias de negócio"
    },
    {
      icon: MessageSquare,
      title: "Respostas Avançadas",
      description: "Mais completas e personalizadas"
    },
    {
      icon: Smartphone,
      title: "Acesso Universal",
      description: "Funciona no navegador e celular"
    }
  ];

  const benefits = [
    { text: "Sem pagar mais de R$100 por mês", type: "negative" },
    { text: "Sem métodos falsos e complicados", type: "negative" },
    { text: "Apenas R$10 para ter acesso agora", type: "positive" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            O que você vai desbloquear
          </h2>
          <p className="text-slate-400">com a versão PRO</p>
        </div>

        <div className="grid gap-4 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-slate-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
          <h3 className="text-xl font-bold text-blue-400 mb-6 text-center">E o melhor?</h3>
          
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-3 ${
                  benefit.type === 'negative' ? 'text-slate-300' : 'text-blue-400 font-semibold'
                }`}
              >
                <span className="text-lg">
                  {benefit.type === 'negative' ? '🚫' : '💸'}
                </span>
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
