import React from 'react';
import { Section } from '../ui/Section';

export const TopTeachers = () => {
  return (
    <Section className="bg-orange-50/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Teachers Visual Composition */}
          <div className="relative">
             {/* Background Decoration */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
             
             {/* Teachers Images Row */}
             <div className="flex items-end justify-center gap-2 md:gap-4 mb-0 relative z-10 px-4">
                {/* Teacher 1: Luqman */}
                <div className="w-1/3 flex flex-col items-center">
                   <div className="w-full max-w-[140px] aspect-[3/4] bg-gray-200 rounded-t-2xl relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-300"></div>
                      {/* Avatar Placeholder */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[85%] bg-gray-800 rounded-t-xl overflow-hidden">
                        <img 
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Luqman&clothing=graphicShirt&top=shortHair&hairColor=black&skinColor=light" 
                          alt="Kak Luqman"
                          className="w-full h-full object-cover"
                        />
                      </div>
                   </div>
                </div>

                {/* Teacher 2: Umam (Center - Larger) */}
                <div className="w-1/3 flex flex-col items-center -mb-0">
                   <div className="w-full max-w-[160px] aspect-[3/4] bg-gray-200 rounded-t-2xl relative overflow-hidden shadow-xl z-10 transform scale-110 origin-bottom">
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-300"></div>
                       {/* Avatar Placeholder */}
                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[85%] bg-gray-800 rounded-t-xl overflow-hidden">
                        <img 
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Umam&clothing=blazerAndShirt&top=shortHair&hairColor=black&skinColor=brown" 
                          alt="Kak Umam"
                          className="w-full h-full object-cover"
                        />
                      </div>
                   </div>
                </div>

                {/* Teacher 3: Pingkan */}
                <div className="w-1/3 flex flex-col items-center">
                   <div className="w-full max-w-[140px] aspect-[3/4] bg-gray-200 rounded-t-2xl relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-300"></div>
                       {/* Avatar Placeholder */}
                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[85%] bg-gray-800 rounded-t-xl overflow-hidden">
                        <img 
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pingkan&clothing=collarAndSweater&top=hijab&hairColor=black&skinColor=light" 
                          alt="Kak Pingkan"
                          className="w-full h-full object-cover"
                        />
                      </div>
                   </div>
                </div>
             </div>

             {/* Teal Platform Line */}
             <div className="h-2.5 w-full bg-teal-400 rounded-full mb-8 relative z-20 shadow-md mx-auto max-w-lg"></div>

             {/* Teachers Details Row */}
             <div className="grid grid-cols-3 gap-2 md:gap-4 text-center px-0 md:px-4">
                {/* Detail 1 */}
                <div className="flex flex-col items-center">
                   <h3 className="font-bold text-gray-900 text-sm md:text-lg">Kak Luqman</h3>
                   <div className="flex items-center gap-1 mb-1.5 mt-0.5">
                     <span className="text-yellow-500 text-xs">🏅</span>
                     <p className="text-[10px] md:text-xs text-brand-orange font-bold uppercase tracking-tight">Master Teacher Kimia</p>
                   </div>
                   <p className="text-[10px] md:text-xs text-gray-500 leading-tight mb-2 px-1">Lulusan Magister Kimia Universitas Gadjah Mada</p>
                   <div className="font-bold text-gray-900 text-sm">⭐ 4.90 <span className="text-gray-400 font-normal text-xs">/5</span></div>
                </div>

                {/* Detail 2 */}
                <div className="flex flex-col items-center">
                   <h3 className="font-bold text-gray-900 text-sm md:text-lg">Kak Umam</h3>
                   <div className="flex items-center gap-1 mb-1.5 mt-0.5">
                     <span className="text-yellow-500 text-xs">🏅</span>
                     <p className="text-[10px] md:text-xs text-brand-orange font-bold uppercase tracking-tight">Master Teacher Matematika</p>
                   </div>
                   <p className="text-[10px] md:text-xs text-gray-500 leading-tight mb-2 px-1">Lulusan Matematika S2 Universitas Indonesia</p>
                   <div className="font-bold text-gray-900 text-sm">⭐ 4.99 <span className="text-gray-400 font-normal text-xs">/5</span></div>
                </div>

                {/* Detail 3 */}
                <div className="flex flex-col items-center">
                   <h3 className="font-bold text-gray-900 text-sm md:text-lg">Kak Pingkan</h3>
                   <div className="flex items-center gap-1 mb-1.5 mt-0.5">
                     <span className="text-yellow-500 text-xs">🏅</span>
                     <p className="text-[10px] md:text-xs text-brand-orange font-bold uppercase tracking-tight">Master Teacher Sosiologi</p>
                   </div>
                   <p className="text-[10px] md:text-xs text-gray-500 leading-tight mb-2 px-1">Lulusan Pendidikan Sosiologi UPI</p>
                   <div className="font-bold text-gray-900 text-sm">⭐ 4.94 <span className="text-gray-400 font-normal text-xs">/5</span></div>
                </div>
             </div>
          </div>

          {/* Right Column: Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Belajar bersama <br/>
              <span className="text-brand-orange">Master Teacher</span> <br/>
              lulusan PTN favorit
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Memberikan cara belajar yang suportif dan menyenangkan, sehingga kamu lebih paham materi dan jago mengerjakan soal-soal sulit.
            </p>

            <ul className="space-y-6">
              {[
                'Lulusan terbaik dari PTN favorit',
                'Pengalaman mengajar sampai dengan 10 tahun',
                'Berprestasi di tingkat nasional dan internasional'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </Section>
  );
};
