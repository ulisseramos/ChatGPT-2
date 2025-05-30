
import React from 'react';
import { Sparkles } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="flex items-center space-x-4 bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl px-8 py-6 shadow-2xl">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center shadow-xl">
            <Sparkles className="w-7 h-7 text-slate-300" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-slate-400 rounded-full animate-pulse"></div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-200">
            ChatGPT PRO
          </h1>
          <p className="text-sm text-slate-400 font-medium">Acesso Premium</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
