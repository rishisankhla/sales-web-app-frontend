import React from 'react';
import { Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-16 w-16 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Timeless Elegance
            <br />
            <span className="text-yellow-500">Luxury Jewelry</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our handcrafted collection of rings, necklaces, earrings, and bracelets. 
            Each piece tells a story of exceptional craftsmanship and enduring beauty.
          </p>
          <button 
            onClick={scrollToProducts}
            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 transform hover:scale-105"
          >
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
}