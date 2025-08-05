import React from 'react';
import { MapPin, Users, Award, Globe, Calendar, Building2 } from 'lucide-react';
import ceo from "../../../public/about/ceo_mini.jpg"
import cto from "../../../public/about/cto_mini.png"
import Image from 'next/image';

const AboutUsPage = () => {
  const stats = [
    { number: "2015", label: "Founded" },
    { number: "3", label: "Countries" },
    { number: "6+", label: "Platforms" },
    { number: "100+", label: "Projects" }
  ];

  const offices = [
    {
      city: "Sydney",
      country: "Australia",
      address: "Level 1/105-109 George Street, Parramatta NSW 2150",
      isHeadquarters: true
    },
    {
      city: "Melbourne", 
      country: "Australia",
      address: "Level 8 West, Ground 16, Melbourne VIC 3000"
    },
    {
      city: "Tokyo",
      country: "Japan", 
      address: "Regus Kyoboshi, Kokyoboshi Dori Shiromachi, Chuo City, Tokyo"
    },
     {
      city: "Kyoto",
      country: "Japan", 
      address: "Takanoha Square, Kamiyanagi cho, Kyoto Shi Shimogyo Ku, Chuo City, Kyoto"
    },
      {
      city: "Kyoto",
      country: "Japan", 
      address: "Tsuruga, Miyazu, Kyoto"
    },
    {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      address: "364 Nguyen Tat Tru Dist 4, Binh Thanh District"
    }
  ];

  const platforms = [
    { name: "Odoo", color: "bg-purple-100 text-purple-800" },
    { name: "ServiceNow", color: "bg-green-100 text-green-800" },
    { name: "HubSpot", color: "bg-orange-100 text-orange-800" },
    { name: "Boomi", color: "bg-blue-100 text-blue-800" },
    { name: "Mendix", color: "bg-indigo-100 text-indigo-800" },
    { name: "Shopify", color: "bg-emerald-100 text-emerald-800" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
        

          {/* Leadership Team */}
          <div className="mb-20 pt-30">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Leadership Team</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* CEO Card */}
              <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                <div className="flex items-start space-x-6">
                  <div className="w-30 h-30 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    <Image src={ceo} width={100} height={100} alt="ceo ayumi mizoshiri" className='rounded'></Image>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900">Ayumi Mizoshiri</h4>
                    <p className="text-blue-600 font-medium mb-3">CEO & Founder</p>
                    <p className="text-gray-600 text-md leading-relaxed">
                      Founded Sazae in 2015 with a vision to help Japanese businesses succeed globally. 
                      Previously led system development at IT companies in Osaka, bringing deep expertise 
                      in enterprise solutions and cross-cultural business development.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTO Card */}
              <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                <div className="flex items-start space-x-6">
                     <div className="w-30 h-30 rounded-md flex items-center justify-center text-white font-bold text-2xl">
                    <Image src={cto} width={100} height={100} alt="cto logan chiang" className='rounded'></Image>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900">Logan Chiang</h4>
                    <p className="text-green-600 font-medium mb-3">Chief Technology Officer</p>
                    <p className="text-gray-600 text-md leading-relaxed">
                      Leads our technical strategy and platform implementations across APAC. 
                      Expert in enterprise integrations and scalable SaaS solutions with 
                      extensive experience in multi-regional deployments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Offices */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Our Global Locations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    <div>
                      <h4 className="font-bold text-gray-900">{office.city}</h4>
                      <p className="text-sm text-gray-600">{office.country}</p>
                    </div>
                    {office.isHeadquarters && (
                      <span className="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">HQ</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{office.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Company Values/Mission */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              To empower Japanese businesses with world-class technology solutions that enable 
              seamless expansion across Asia Pacific, while maintaining the precision and 
              excellence that defines Japanese business culture.
            </p>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-2">Cross-Cultural Excellence</h4>
                <p className="text-blue-100 text-sm">Deep understanding of Japanese business culture and APAC markets</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-2">Platform Mastery</h4>
                <p className="text-blue-100 text-sm">Certified experts in leading enterprise SaaS platforms</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-2">Partnership Approach</h4>
                <p className="text-blue-100 text-sm">Long-term relationships built on trust and measurable results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;