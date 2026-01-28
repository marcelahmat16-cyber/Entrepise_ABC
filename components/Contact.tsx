import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 bg-industrial-blue text-white overflow-hidden relative">
      <div className="absolute right-[-100px] top-[-50px] opacity-5 pointer-events-none select-none hidden lg:block">
        <i className="fa-solid fa-bolt-lightning text-[500px]"></i>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="order-2 lg:order-1">
            <h2 className="text-industrial-orange text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">Localisation et contacts</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Discutons de vos <span className="text-industrial-orange">besoins</span></h3>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4 sm:space-x-5">
                <div className="flex-shrink-0 bg-white/10 p-3 sm:p-4 rounded-lg">
                  <i className="fa-solid fa-location-dot text-xl sm:text-2xl text-industrial-orange"></i>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">Notre Adresse</h4>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Avenue Nelson Mandela à Farcha,<br />N’Djamena, Tchad</p>
                  <p className="text-[10px] sm:text-xs text-industrial-orange mt-2 uppercase tracking-widest font-bold">
                    GPS: 12.127782 / 14.985429
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-5">
                <div className="flex-shrink-0 bg-white/10 p-3 sm:p-4 rounded-lg">
                  <i className="fa-solid fa-phone text-xl sm:text-2xl text-industrial-orange"></i>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">Téléphone</h4>
                  <div className="text-gray-300 text-sm sm:text-base space-y-1">
                    <p>(+235) 63113764</p>
                    <p>(+235) 93085084</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-5">
                <div className="flex-shrink-0 bg-white/10 p-3 sm:p-4 rounded-lg">
                  <i className="fa-solid fa-envelope text-xl sm:text-2xl text-industrial-orange"></i>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">Email</h4>
                  <a href="mailto:acb.equipro@gmail.com" className="text-gray-300 hover:text-industrial-orange transition-colors text-sm sm:text-base break-all sm:break-normal">
                    acb.equipro@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 bg-white rounded-2xl p-6 sm:p-8 text-gray-900 shadow-2xl w-full max-w-lg mx-auto lg:max-w-none">
            <h4 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">Envoyez-nous un message</h4>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Nom Complet</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-industrial-orange focus:border-transparent outline-none transition text-sm sm:text-base"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Téléphone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-industrial-orange focus:border-transparent outline-none transition text-sm sm:text-base"
                    placeholder="+235 ..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Sujet</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-industrial-orange focus:border-transparent outline-none transition text-sm sm:text-base appearance-none bg-white">
                  <option>Demande de devis - Bobinage</option>
                  <option>Fourniture de pièces</option>
                  <option>Intervention technique</option>
                  <option>Autre demande</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-industrial-orange focus:border-transparent outline-none transition text-sm sm:text-base resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-industrial-orange hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg transition duration-300 uppercase tracking-widest text-sm sm:text-base"
                onClick={() => alert("Merci de votre confiance ! Votre message a été reçu.")}
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}