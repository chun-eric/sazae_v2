import React from "react";
import { Button } from '@/components/ui/button';
import { Lightbulb, FileText, Award, Globe, Database, Building } from 'lucide-react';

 const Hero = () => {
  return  (
      <section className="pt-44 pb-30 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
            
              <h1 className={`text-3xl md:text-6xl font-bold text-gray-900 leading-tight `}>

                  The SaaS Experts Japanese Businesses Trust Across 
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-bold text-7xl">
                    {" "}Asia Pacific
                  </span>
                </h1>
                <p className="text-lg text-gray-600 leading-medium max-w-2xl">
                  We help Japanese companies streamline operations and accelerate growth across Japan, Australia, and Vietnam with proven SaaS solutions and deep cultural understanding.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="xl" 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4"
                >
                  <Lightbulb className="mr-2 h-5 w-5 " />
                  Consult with our Expert
                </Button>
              
              </div>

              {/* Real Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {[
                  { number: "11th", label: "Year Boomi\nPartner", icon: <Award className="h-5 w-5" /> },
                  { number: "3", label: "Countries\nServed", icon: <Globe className="h-5 w-5" /> },
                  { number: "6+", label: "SaaS\nPlatforms", icon: <Database className="h-5 w-5" /> },
                  { number: "2009", label: "Founded\nin Sydney", icon: <Building className="h-5 w-5" /> }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2 text-blue-500">
                      {item.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{item.number}</div>
                    <div className="text-sm text-gray-600 whitespace-pre-line">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual - Turbo Cornutus (Sazae) Theme */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded-full opacity-90"></div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Sazae</h3>
                    <p className="text-blue-100">Strong Defense • Good Fortune</p>
                    <p className="text-sm text-blue-200 mt-2">Turbo Cornutus - Japanese Sea Snail</p>
                  </div>
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-300/20 rounded-full blur-3xl"></div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200 to-cyan-200 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
  )
};

export default Hero;
