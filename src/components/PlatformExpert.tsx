"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, ArrowDown,
  CheckCircle
} from 'lucide-react';
import Image from "next/image";
import japanFlag from "../../public/logos/japan.png"
import australiaFlag from "../../public/logos/australia.png"
import vietnamFlag from "../../public/logos/vietnam.png"
import mendixLogo from "../../public/logos/mendix.png.png"
import acquiaLogo from "../../public/logos/acquia.png.png"
import drupalLogo from "../../public/logos/drupal.png.png"
import hubspotLogo from "../../public/logos/hubspot.png.png"
import odooLogo from "../../public/logos/odoo.png.png"
import servicenowLogo from "../../public/logos/servicenow.png.png"
import boomiLogo from "../../public/logos/boomi.png.png"

const PlatformExpert: React.FC = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);

  const platforms = [
    {
      id: 'odoo',
      name: 'Odoo ERP',
      tagline: 'Scale Your Business Globally',
      description: 'Complete ERP management across Japan, Australia & Vietnam operations',
      logo: odooLogo,
      logoAlt: 'Odoo Logo',
      gradient: 'from-purple-500 to-purple-700',
      features: [
        'Multi-currency & multi-language support',
        'Japanese business process compliance',
        'Cross-border inventory management',
        'Integrated financial reporting'
      ],
      markets: ['🇯🇵 Japan', '🇦🇺 Australia', '🇻🇳 Vietnam']
    },
    {
      id: 'hubspot',
      name: 'HubSpot CRM',
      tagline: 'Japanese Sales Excellence',
      description: 'CRM that respects Japanese business practices & enabling international growth',
      logo: hubspotLogo,
      logoAlt: 'HubSpot Logo',
      gradient: 'from-orange-500 to-red-600',
      features: [
        'Japanese-style relationship management',
        'Multi-market sales pipeline tracking',
        'Cultural communication preferences',
        'Regional marketing automation'
      ],
      markets: ['🇯🇵 Japan', '🇦🇺 Australia', '🇻🇳 Vietnam']
    },
    {
      id: 'boomi',
      name: 'Boomi Integration',
      tagline: 'Connect Markets Seamlessly',
      description: '11-year partnership delivering bulletproof connections across regions',
      logo: boomiLogo,
      logoAlt: 'Boomi Logo',
      gradient: 'from-blue-500 to-blue-700',
      features: [
        'Real-time data synchronization',
        'Cross-border compliance automation',
        'Legacy system integration',
        'API management & security'
      ],
      markets: ['🇯🇵 Japan', '🇦🇺 Australia', '🇻🇳 Vietnam'],
      badge: '11-Year Partner'
    },
    {
      id: 'servicenow',
      name: 'ServiceNow',
      tagline: 'Enterprise Operations',
      description: 'Workflow automation that maintains your quality standards globally',
      logo: servicenowLogo,
      logoAlt: 'ServiceNow Logo',
      gradient: 'from-gray-700 to-gray-900',
      features: [
        'Japanese quality process workflows',
        'Multi-site IT service management',
        'Compliance tracking & reporting',
        'Change management protocols'
      ],
      markets: ['🇯🇵 Japan', '🇦🇺 Australia', '🇻🇳 Vietnam']
    },
    {
      id: 'acquia',
      name: 'Acquia Drupal',
      tagline: 'International Digital Presence',
      description: 'Drupal expertise for consistent brand experience internationally',
      logo: acquiaLogo,
      logoAlt: 'Acquia Logo',
      gradient: 'from-blue-400 to-cyan-600',
      features: [
        'Multi-language content management',
        'Regional brand consistency',
        'Local market customization',
        'Performance optimization'
      ],
      markets: ['🇯🇵 Japan', '🇦🇺 Australia', '🇻🇳 Vietnam']
    },
    {
      id: 'mendix',
      name: 'Mendix Low-Code',
      tagline: 'Custom Solutions for Japanese Business',
      description: 'Low-code development that understands your unique requirements',
      logo: mendixLogo,
      logoAlt: 'Mendix Logo',
      gradient: 'from-cyan-500 to-blue-600',
      features: [
        'Rapid Japanese business app development',
        'Cultural workflow customization',
        'Multi-market deployment',
        'Agile development methodology'
      ],
      markets: ['🇯🇵 Japan', '🇦🇺 Australia', '🇻🇳 Vietnam']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 lg:pt-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-2">
            🚀 Platform Expertise
          </Badge>
         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 mt-4 height-auto leading-tight">
  Your Trusted SaaS Partner Across 
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
    Three Strategic Markets
  </span>
</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a boutique IT consulting firm that Japanese businesses trust for SaaS implementations 
            across Japan, Australia, and Vietnam. Our deep understanding of Japanese 
            business culture combined with deep technical expertise ensures your technology 
            investments deliver the growth you need.
          </p>
        </div>

        {/* Geographic Coverage Visual */}
   <div className="flex justify-center mb-16 px-4">
  <div className=" p-4 sm:p-6 md:p-8  w-full max-w-2xl">
    <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8 space-y-6 md:space-y-0">
      
      {/* Japan */}
      <div className="text-center flex flex-col items-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
          <Image src={japanFlag} width={30} height={30} alt="japan flag" className="rounded-sm sm:w-10 sm:h-10" />
        </div>
        <div className="font-semibold text-gray-800 text-sm sm:text-base">Japan</div>
        <div className="text-xs sm:text-sm text-gray-600">Home Base</div>
      </div>
      
      {/* Arrow */}
      <div className="flex items-center justify-center md:flex-none">
        <ArrowDown className="h-6 w-6 text-gray-400 md:hidden" />
        <ArrowRight className="h-6 w-6 text-gray-400 hidden md:block" />
      </div>
      
      {/* Australia */}
      <div className="text-center flex flex-col items-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
          <Image src={australiaFlag} width={30} height={30} alt="australian flag" className="rounded-sm sm:w-10 sm:h-10" />
        </div>
        <div className="font-semibold text-gray-800 text-sm sm:text-base">Australia</div>
        <div className="text-xs sm:text-sm text-gray-600">Expansion Hub</div>
      </div>
      
      {/* Arrow */}
      <div className="flex items-center justify-center md:flex-none">
        <ArrowDown className="h-6 w-6 text-gray-400 md:hidden" />
        <ArrowRight className="h-6 w-6 text-gray-400 hidden md:block" />
      </div>
      
      {/* Vietnam */}
      <div className="text-center flex flex-col items-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
          <Image src={vietnamFlag} width={30} height={30} alt="vietnam flag" className="rounded-sm sm:w-10 sm:h-10" />
        </div>
        <div className="font-semibold text-gray-800 text-sm sm:text-base">Vietnam</div>
        <div className="text-xs sm:text-sm text-gray-600">Operations Center</div>
      </div>
      
    </div>
  </div>
</div>

        {/* Platform Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {platforms.map((platform) => (
            <Card 
              key={platform.id}
              className="group hover:shadow-2xl transition-all duration-500 relative overflow-hidden cursor-pointer bg-white p-0 pb-10"
              onMouseEnter={() => setHoveredPlatform(platform.id)}
              onMouseLeave={() => setHoveredPlatform(null)}
            >
              {/* Platform Header with Logo */}
              <div className={`h-32 bg-gradient-to-br ${platform.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 flex items-center justify-between p-6 h-full">
                  <div className="flex-1">
                    {platform.badge && (
                      <Badge className="mb-2 bg-white/20 text-white border-white/30 text-xs">
                        {platform.badge}
                      </Badge>
                    )}
                    <div className="text-white text-lg font-bold">{platform.name}</div>
                    <div className="text-white/90 text-sm font-medium mt-1">{platform.tagline}</div>
                  </div>
                  <div className="flex-shrink-0">
                    {/* Company Logo - FIXED VERSION */}
                    <div className="w-16 h-16 bg-white/97 rounded-lg flex items-center justify-center p-2 shadow-lg">
                      <Image
                        src={platform.logo}
                        alt={platform.logoAlt}
                        width={48}  
                        height={48}  
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              </div>
              
              <CardHeader className="pb-4">
                <CardDescription className="text-base text-gray-600">
                  {platform.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Key Features */}
                <div className="space-y-3 mb-6">
                  <div className="text-sm font-semibold text-gray-800 mb-2">Key Capabilities:</div>
                  {platform.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Market Coverage */}
                <div className="border-t pt-4 mb-6">
                  <div className="text-sm font-semibold text-gray-800 mb-2">Market Coverage:</div>
                  <div className="flex flex-wrap gap-2">
                    {platform.markets.map((market, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {market}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  size="sm"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformExpert;