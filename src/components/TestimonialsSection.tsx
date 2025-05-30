
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empreendedora Digital", 
      text: "Incrível! Agora consigo criar conteúdo para minhas redes sociais em minutos. As imagens geradas pela IA são perfeitas!",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "João Santos",
      role: "Desenvolvedor",
      text: "Por R$10 tenho acesso a uma ferramenta que me economiza horas de trabalho. Melhor investimento que já fiz!",
      avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=60&h=60&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          O que estão dizendo
        </h2>
        
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-3">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
