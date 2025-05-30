
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Como recebo o acesso após a compra?",
      answer: "Após confirmar o pagamento, você receberá imediatamente no seu email as instruções de acesso com login e senha para acessar o ChatGPT Plus."
    },
    {
      question: "O acesso é seguro mesmo?",
      answer: "Sim! Utilizamos contas oficiais do ChatGPT Plus compartilhadas de forma segura. Seus dados ficam protegidos e você tem acesso a todos os recursos premium."
    },
    {
      question: "O Canva PRO vem com o plano de R$10?",
      answer: "Não, o Canva PRO está incluído apenas no plano Premium de R$27. O plano de R$10 inclui apenas o acesso ao ChatGPT Plus."
    },
    {
      question: "Posso renovar a oferta de R$10 depois de 1 mês?",
      answer: "Sim! Você pode renovar mensalmente pelo mesmo valor de R$10, garantindo acesso contínuo ao ChatGPT Plus."
    },
    {
      question: "Funciona no celular e no computador?",
      answer: "Perfeitamente! O acesso funciona em qualquer dispositivo - celular, tablet, computador - através do navegador ou aplicativo oficial do ChatGPT."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-400">Tire suas dúvidas</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-slate-800/50 border border-slate-700 rounded-xl px-6 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-white hover:text-blue-400 transition-colors text-left py-5 font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
