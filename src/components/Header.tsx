import React from 'react';
import { ShoppingBag, Gem } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemCount, onCartClick }: HeaderProps) {
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
    <header className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Gem className="h-8 w-8 text-yellow-500" />
            <h1 className="text-2xl font-bold">Our Jewelry</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={scrollToProducts} className="hover:text-yellow-500 transition-colors">Collections</button>
            <button onClick={scrollToProducts} className="hover:text-yellow-500 transition-colors">Rings</button>
            <button onClick={scrollToProducts} className="hover:text-yellow-500 transition-colors">Necklaces</button>
            <button onClick={scrollToProducts} className="hover:text-yellow-500 transition-colors">Earrings</button>
            <button onClick={scrollToProducts} className="hover:text-yellow-500 transition-colors">Bracelets</button>
          </nav>
          
          <button
            onClick={onCartClick}
            className="relative p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <ShoppingBag className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-slate-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}