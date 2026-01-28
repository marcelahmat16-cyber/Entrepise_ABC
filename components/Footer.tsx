import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8 mb-8 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold tracking-wider">ABC ENTREPRISE</h2>
            <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest font-semibold">Atelier de Câblage et de Bobinage (ACB)</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://facebook.com/abcentreprise" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-industrial-orange text-xl transition-colors"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a 
              href="https://linkedin.com/company/abc-entreprise" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-industrial-orange text-xl transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a 
              href="https://wa.me/23563113764" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-industrial-orange text-xl transition-colors"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
        
        {/* Changement de grid-cols-1 vers grid-cols-2 sur mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 sm:gap-12 text-sm text-gray-400 mb-12">
          {/* Section À propos occupe toute la largeur sur mobile */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-bold uppercase tracking-widest mb-4">À propos</h4>
            <p className="leading-relaxed text-xs sm:text-sm">
              Spécialiste en électromécanique à N’Djamena depuis 2007. Nous assurons la maintenance et la fourniture d'équipements pour les plus grands acteurs industriels du pays.
            </p>
          </div>
          
          {/* Liens Rapides et Horaires côte à côte (1 colonne chacun dans le grid de 2) */}
          <div className="col-span-1">
            <h4 className="text-white font-bold uppercase tracking-widest mb-4">Liens</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#home" className="hover:text-industrial-orange transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-industrial-orange transition-colors">À Propos</a></li>
              <li><a href="#services" className="hover:text-industrial-orange transition-colors">Services</a></li>
              <li><a href="#partners" className="hover:text-industrial-orange transition-colors">Partenaires</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-white font-bold uppercase tracking-widest mb-4">Horaires</h4>
            <div className="space-y-1 text-xs sm:text-sm">
              <p>Lun-Ven: 08h-18h</p>
              <p>Sam: 08h-13h</p>
              <p className="mt-3 text-industrial-orange italic font-semibold leading-tight">Urgences 24/7 sur appel</p>
            </div>
          </div>
        </div>

        <div className="text-center text-[10px] sm:text-xs text-gray-600 border-t border-gray-900 pt-8">
          <p>&copy; {currentYear} ABC ENTREPRISE. Tous droits réservés.</p>
          <p className="mt-2">Conformément aux normes de sécurité industrielle en vigueur.</p>
        </div>
      </div>
    </footer>
  );
}