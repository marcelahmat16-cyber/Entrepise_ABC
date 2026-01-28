import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="images/hero.jpg"
          alt="ABC ENTREPRISE - Atelier Industriel"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto">
        <div className="inline-block bg-industrial-orange px-4 py-1 mb-6 text-white text-[10px] sm:text-sm font-bold uppercase tracking-widest animate-pulse">
          Expertise en Électromécanique depuis 2007
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 leading-tight">
          L’Excellence Technique au Service de <span className="text-industrial-orange">Votre Industrie</span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed px-2">
          Atelier de Câblage et de Bobinage (ACB) : Spécialiste de la réparation, de la fabrication et de la maintenance électromécanique à N’Djamena.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-0">
          <a
            href="#services"
            className="w-full sm:w-auto bg-industrial-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded shadow-lg transition duration-300 uppercase tracking-wider text-sm sm:text-base"
          >
            Nos Spécialités
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-industrial-blue text-white font-bold py-4 px-10 rounded shadow-lg transition duration-300 uppercase tracking-wider text-sm sm:text-base"
          >
            Nous Contacter
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <a href="#about" className="text-white text-2xl opacity-60 hover:opacity-100 transition-opacity">
          <i className="fa-solid fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}