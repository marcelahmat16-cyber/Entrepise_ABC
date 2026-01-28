import React from 'react';

export default function Services() {
  const specialties = [
    {
      title: 'Bobinage Électrique',
      description: 'Bobinage de moteurs et générateurs électriques : réparation, maintenance préventive et fabrication sur mesure pour assurer la performance de vos équipements.',
      image: 'images/service_bobinage.jpg',
      fallback: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Fourniture de Pièces',
      description: 'Approvisionnement en pièces de rechange d’origine et prestation mécanique de précision pour garantir la fiabilité de vos systèmes industriels.',
      image: 'images/service_pieces.jpg',
      fallback: 'https://images.unsplash.com/photo-1530124560677-baffc02cd99e?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Conseil & Expertise',
      description: 'Audit technique, planification d’interventions et conseil stratégique personnalisé pour optimiser la longévité de vos installations électromécaniques.',
      image: 'images/service_conseil.jpg',
      fallback: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-industrial-blue text-sm font-bold uppercase tracking-widest mb-2">Nos Domaines d'Intervention</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
          Une Expertise <span className="text-industrial-orange">Certifiée</span>
        </h3>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          ABC ENTREPRISE met à votre disposition des solutions techniques robustes pour garantir la continuité et l'efficacité de vos opérations industrielles.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {specialties.map((spec, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-64 w-full overflow-hidden">
                {/* Overlay subtil */}
                <div className="absolute inset-0 bg-industrial-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                
                <img 
                  src={spec.image} 
                  alt={spec.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== spec.fallback) {
                      target.src = spec.fallback;
                    }
                  }}
                />
                
                {/* Ligne d'accentuation animée */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-industrial-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h4 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-industrial-blue transition-colors">
                  {spec.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                  {spec.description}
                </p>
                <div className="mt-auto pt-4">
                  <span className="inline-flex items-center text-industrial-orange font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                    En savoir plus <i className="fa-solid fa-arrow-right ml-2"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
