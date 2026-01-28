import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 px-4 sm:px-0">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <img
                src="images/about.jpg"
                alt="Travail à l'atelier"
                className="rounded-lg shadow-2xl relative z-10 w-full object-cover min-h-[300px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
                }}
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-full h-full border-4 border-industrial-orange -z-0 rounded-lg hidden sm:block"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-industrial-blue text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">Présentation de l'entreprise</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Une structure robuste et <span className="text-industrial-orange">expérimentée</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
              L’Atelier de Câblage et de Bobinage (ACB) est un atelier formel spécialisé en électromécanique, établi à N’Djamena depuis mai 2007. Forts de plus de 15 années d’expérience, nous nous engageons à offrir des services de haute qualité.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
              Notre structure se compose d’un atelier entièrement équipé pour nos interventions techniques et d’une boutique dédiée à la fourniture d’équipements et de pièces de rechange d’origine.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-industrial-blue text-white p-3 rounded-lg shadow-md">
                  <i className="fa-solid fa-industry text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Atelier Équipé</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Dernières technologies d'intervention.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-industrial-orange text-white p-3 rounded-lg shadow-md">
                  <i className="fa-solid fa-cart-shopping text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Boutique Dédiée</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Pièces de rechange certifiées.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}