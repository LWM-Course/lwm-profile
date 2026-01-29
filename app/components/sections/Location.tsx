import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

export const Location = () => {
  return (
    <Section id="location" background="orange">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Lokasi Kami</h2>
        <p className="text-gray-700">Kunjungi cabang terdekat kami untuk konsultasi langsung.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map Iframe */}
        <div className="lg:col-span-2 h-96 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.052605809071!2d106.82397131536968!3d-6.256801995471168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1088c306603%3A0x628043644913610!2sJakarta!5e0!3m2!1sen!2sid!4v1629858385310!5m2!1sen!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Card */}
        <div className="lg:col-span-1">
          <Card className="h-full bg-white flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-bl-full -mr-8 -mt-8"></div>
             <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Hubungi Kami</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:info@lwm.com" className="text-brand-orange hover:underline">info@lwm.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telepon / WhatsApp</p>
                      <a href="tel:+6281234567890" className="text-brand-orange hover:underline">+62 812 3456 7890</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Alamat Pusat</p>
                      <p className="text-gray-600">Jl. Pendidikan No. 123, Jakarta Selatan, DKI Jakarta</p>
                    </div>
                  </div>
                </div>
             </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
