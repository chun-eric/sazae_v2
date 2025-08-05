import React from "react";
import { Button } from '@/components/ui/button';
import { Lightbulb, FileText, Award, Globe, Database, Building } from 'lucide-react';
// import { GlobeDemo } from "./BigGlobe";

const Hero = () => {
  return (
    <section className="pt-40 sm:pt-32 lg:pt-44 pb-20 lg:pb-30 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The SaaS Experts Japanese Businesses Trust Across 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  Asia Pacific
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Sazae helps Japanese companies streamline operations and accelerate growth across Japan, Australia, and Vietnam with proven IT SaaS solutions and deep cultural understanding.
              </p>
            </div>
            

             {/* The button */}
            <div 
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-4 flex items-center justify-center rounded-md gap-2.5 max-w-[50%] cursor-pointer"
          >
              <Lightbulb className="h-5 w-5" />
              <span className="text-xl">Talk to an Expert</span>
            </div>
          

            {/* Real Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-3 pt-6 lg:pt-8 max-w-[80%]">
              {[
                { number: "11th", label: "Year Boomi\nPartner", icon: <Award className="h-4 w-4 sm:h-5 sm:w-5" /> },
                { number: "3", label: "Countries\nServed", icon: <Globe className="h-4 w-4 sm:h-5 sm:w-5" /> },
                { number: "6+", label: "SaaS\nPlatforms", icon: <Database className="h-4 w-4 sm:h-5 sm:w-5" /> },
                { number: "2015", label: "Founded\nin Sydney", icon: <Building className="h-4 w-4 sm:h-5 sm:w-5" /> }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-blue-500">
                    {item.icon}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{item.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600 whitespace-pre-line">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual - Video Container */}
          <div className="relative mt-8 lg:mt-0 hidden lg:block">
            <div className="relative z-10 bg-white rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl p-4 sm:p-6 lg:p-8 border border-blue-100">
              <div className="aspect-square rounded-xl lg:rounded-2xl relative overflow-hidden">
                {/* Video Element */}
                <video
                  src="/videos/sazae_video.mp4"
                  className="w-full h-full object-cover rounded-xl lg:rounded-2xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  onError={(e) => {
                    console.error('Video failed to load:', e);
                    // Hide video and show fallback
                    e.currentTarget.style.display = 'none';
                 
                  }}
                >
                  <source src="/videos/sazae_video.mp4" type="video/mp4" />
                </video>
                
                {/* Fallback content - hidden by default */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl lg:rounded-2xl flex items-center justify-center relative overflow-hidden" style={{display: 'none'}}>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 lg:mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/30 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-white rounded-full opacity-90"></div>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1 lg:mb-2">Sazae</h3>
                    <p className="text-blue-100 text-sm sm:text-base">Strong Defense • Good Fortune</p>
                    <p className="text-xs sm:text-sm text-blue-200 mt-1 lg:mt-2">Turbo Cornutus - Japanese Sea Snail</p>
                  </div>
                  <div className="absolute -top-6 -left-6 lg:-top-10 lg:-left-10 w-24 h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-32 h-32 lg:w-40 lg:h-40 bg-cyan-300/20 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-full h-full bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl lg:rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;