import React from 'react';

export default function Partners() {
  const partners = [
    { name: "BDT", logo: "images/partner_bdt.png" },
    { name: "TchadElec", logo: "images/partner_tchadelec.png" },
    { name: "CIMAF-Tchad", logo: "images/partner_cimaf.png" },
    { name: "RAZEL-Tchad", logo: "images/partner_razel.png" },
    { name: "Arab Contractor", logo: "images/partner_arab.png" },
    { name: "Tractafric Equipements", logo: "images/partner_tractafric.png" },
    { name: "CGCOC", logo: "images/partner_cgcoc.png" },
    { name: "SOPEIN-T", logo: "images/partner_sopein.png" },
    { name: "EXCEL", logo: "images/partner_excel.png" },
    { name: "SOBOIS-T", logo: "images/partner_sobois.png" },
    { name: "S3C", logo: "images/partner_s3c.png" },
    { name: "SOPRA-T", logo: "images/partner_sopra.png" }
  ];

  return (
    <section id="partners" className="py-20 md:py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-industrial-blue text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">Ils nous font confiance</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Nos <span className="text-industrial-orange">Partenaires</span></h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Nous avons établi des collaborations solides avec des entreprises reconnues au Tchad, témoignant de notre engagement à fournir des services fiables.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-2">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 sm:p-6 border border-gray-100 rounded-lg bg-gray-50/50 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md min-h-[100px]"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  // Si l'image n'existe pas, on affiche le texte
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-center font-semibold text-gray-700 text-xs sm:text-sm md:text-base leading-tight">${partner.name}</span>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}