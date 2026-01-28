import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Nos Services', href: '#services' },
    { name: 'Partenaires', href: '#partners' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-industrial-blue shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a href="#home" className="flex items-center min-w-0 flex-shrink hover:opacity-90 transition-opacity">
            {/* Logo local */}
            <div className="flex-shrink-0 mr-2 sm:mr-3 hidden xs:block">
              <img 
                src="images/logo.png" 
                alt="Logo ABC ENTREPRISE" 
                className="h-8 sm:h-10 md:h-12 w-auto object-contain" 
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} 
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-white text-sm sm:text-lg md:text-2xl font-bold tracking-wider leading-tight truncate">
                ABC ENTREPRISE
              </span>
              <span className="text-industrial-orange text-[7px] sm:text-[9px] md:text-xs font-semibold uppercase tracking-widest mt-0.5 sm:mt-1 truncate">
                Atelier de Câblage et de Bobinage
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-baseline space-x-4 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-industrial-orange transition-colors duration-200 px-3 py-2 text-xs lg:text-sm font-medium uppercase tracking-wider whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-industrial-orange focus:outline-none p-2 rounded-md"
              aria-label="Toggle Menu"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl sm:text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - full screen width overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out overflow-hidden bg-industrial-blue ${
        isOpen ? 'max-h-screen opacity-100 shadow-2xl' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-industrial-blue/95 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white block px-3 py-4 text-base font-medium border-b border-white/5 last:border-0 hover:text-industrial-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}