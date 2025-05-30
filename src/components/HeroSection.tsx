
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const HeroSection = () => {
  useEffect(() => {
    // Adicionar o script do vídeo
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js";
    script.setAttribute("data-id", "6837dd88db4fb294cb992888");
    script.async = true;
    document.head.appendChild(script);

    const fbPixelScript = document.createElement("script");
    fbPixelScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(fbPixelScript);

    const noscript = document.createElement("noscript");
    noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" />`;
    document.body.appendChild(noscript);

    return () => {
      const existingScript = document.querySelector('script[data-id="6837dd88db4fb294cb992888"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <Logo />
      
      <div className="max-w-lg mx-auto text-center space-y-8">
        {/* Badge com disponibilidade */}
        <div className="inline-flex items-center px-4 py-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-full text-slate-300 text-sm">
          <span className="relative flex h-2 w-2 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
          </span>
          Restam apenas 9 licenças disponíveis
        </div>

        {/* Título principal */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-white">ChatGPT na</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Melhor Versão</span>
            <br />
            <span className="text-slate-400 text-xl font-normal">( Privado e Exclusivo )</span>
          </h1>
          
          {/* Vídeo */}
          <div className="my-8">
            <div id="ifr_6837dd88db4fb294cb992888_wrapper" style={{ margin: '0 auto', width: '100%' }}>
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }} id="ifr_6837dd88db4fb294cb992888_aspect">
                <iframe 
                  frameBorder="0" 
                  allowFullScreen 
                  src="https://scripts.converteai.net/8d4d4a9d-385b-4da4-962d-620a9257afa1/players/6837dd88db4fb294cb992888/embed.html" 
                  id="ifr_6837dd88db4fb294cb992888" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                  referrerPolicy="origin"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <p className="text-slate-200 text-lg leading-relaxed">
              Enquanto outros pagam <span className="text-red-400 font-semibold line-through">R$100+</span> mensais, 
              você pode ter acesso à versão PRO completa por apenas{' '}
              <span className="text-blue-400 font-bold text-2xl">R$10</span>
            </p>
          </div>
        </div>

        {/* Botão CTA */}
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          onClick={scrollToPricing}
        >
          🚀 Quero Acesso Agora
        </Button>

        {/* Garantia */}
        <p className="text-sm text-slate-400 flex items-center justify-center space-x-2">
          <span>🔒</span>
          <span>Garantia de 7 dias ou seu dinheiro de volta</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
