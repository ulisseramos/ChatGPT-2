
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Crown, Zap, Shield, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing-section" className="py-20 px-6">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Escolha Seu Plano
          </h2>
          <p className="text-slate-400">
            Acesso completo por uma fração do preço oficial
          </p>
        </div>

        {/* Comparação de preços */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 mb-8">
          <h3 className="text-slate-200 font-semibold text-center mb-6">💰 Comparação de Preços</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
              <span className="text-slate-300">ChatGPT Plus (oficial):</span>
              <span className="text-red-400 font-bold line-through">R$97/mês</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <span className="text-slate-300">Nossa oferta:</span>
              <span className="text-blue-400 font-bold">R$10/mês</span>
            </div>
            <div className="text-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
              <span className="text-green-400 font-bold text-lg">💸 Economia: R$87/mês</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Plano Básico */}
          <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 shadow-lg shadow-blue-500/10">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                <Zap className="w-4 h-4 mr-1" />
                Mais Popular
              </span>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-400 mr-2" />
                <h3 className="text-white font-bold text-xl">Acesso Mensal</h3>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-white mb-2">R$10</div>
                <div className="text-slate-400">por 30 dias de acesso</div>
                <div className="text-sm text-blue-400 font-medium mt-2 bg-blue-500/10 px-3 py-1 rounded-full inline-block">
                  Economia de R$87
                </div>
              </div>
              
              <div className="space-y-3 mb-8 text-left">
                {[
                  "ChatGPT Plus completo",
                  "Geração de imagens ilimitada", 
                  "GPT-4 sem limites",
                  "Acesso imediato",
                  "Garantia de 7 dias"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-slate-700/30">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
                onClick={() => window.open('https://hyperpay.site/checkout-dark-6827/?add-to-cart=6827', '_blank')}
              >
                <span>Começar Agora</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Plano Premium */}
          <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                <Crown className="w-4 h-4 mr-1" />
                Melhor Valor
              </span>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Crown className="w-6 h-6 text-slate-400 mr-2" />
                <h3 className="text-white font-bold text-xl">Acesso Anual</h3>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <span className="text-xl font-medium text-slate-500 line-through">R$120</span>
                  <span className="text-4xl font-bold text-white">R$27</span>
                </div>
                <div className="text-slate-400">por 12 meses de acesso</div>
                <div className="text-sm text-green-400 font-medium mt-2 bg-green-500/10 px-3 py-1 rounded-full inline-block">
                  Economia de R$1.114/ano
                </div>
              </div>
              
              <div className="space-y-3 mb-8 text-left">
                {[
                  "Tudo do plano mensal",
                  "Acesso prioritário",
                  "Suporte via WhatsApp", 
                  "Garantia de 30 dias"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-slate-700/30">
                    {index === 0 ? 
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" /> :
                      <Crown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    }
                    <span className="text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full bg-slate-600 hover:bg-slate-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
                onClick={() => window.open('https://hyperpay.site/checkout-dark-6849/?add-to-cart=6849', '_blank')}
              >
                <span>Escolher Premium</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Garantia */}
        <div className="bg-green-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 mt-8 text-center">
          <div className="flex items-center justify-center mb-3">
            <Shield className="w-6 h-6 text-green-400 mr-2" />
            <h3 className="text-green-400 font-semibold text-lg">Garantia de Satisfação</h3>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Se não conseguir acessar ou não ficar satisfeito, devolvemos 
            <span className="text-green-400 font-semibold"> 100% do seu dinheiro</span> no prazo da garantia.
          </p>
        </div>

        {/* Urgência */}
        <div className="text-center mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
          <p className="text-orange-400 font-medium flex items-center justify-center">
            <span className="animate-pulse mr-2">⏰</span>
            Últimas 12 licenças disponíveis hoje
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
