
import React from 'react';
import { X, AlertCircle } from 'lucide-react';

const ProblemsSection = () => {
  const problems = [
    "Limites de mensagens no ChatGPT grátis",
    "Não conseguir gerar imagens com IA", 
    "Ter respostas travadas e limitadas",
    "Não aproveitar o verdadeiro poder da IA"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 rounded-full mb-6">
            <AlertCircle className="w-8 h-8 text-red-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Está cansado de:
          </h2>
        </div>
        
        <div className="space-y-4 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 flex items-center space-x-4">
              <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <X className="w-4 h-4 text-red-400" />
              </div>
              <span className="text-slate-200 text-base">{problem}</span>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">
              Você não está sozinho.
            </h3>
            
            <div className="space-y-4 text-slate-200">
              <p className="leading-relaxed">
                Muita gente ainda nem sabe que existe uma versão{' '}
                <span className="text-blue-400 font-semibold">
                  MUITO mais potente
                </span>{' '}
                do ChatGPT...
              </p>
              
              <p className="leading-relaxed">
                E menos ainda que é possível acessar pagando apenas{' '}
                <span className="text-blue-400 font-bold text-xl">
                  R$10
                </span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
