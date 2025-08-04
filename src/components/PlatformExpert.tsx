"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  CheckCircle
} from 'lucide-react';

const PlatformExpert: React.FC = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);


  const platforms = [
    {
      id: 'odoo',
      name: 'Odoo ERP',
      tagline: 'Scale Your Japanese Business Globally',
      description: 'Complete ERP management across Japan, Australia & Vietnam operations',
      logo: 'https://www.odoo.com/web/image/website/1/logo/Odoo?unique=689cb34',
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
      description: 'CRM that respects Japanese business practices while enabling international growth',
      logo: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png',
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
      logo: 'https://boomi.com/wp-content/uploads/boomi-logo-white.svg',
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
      logo: 'https://logos-world.net/wp-content/uploads/2021/04/ServiceNow-Logo.png',
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
      logo: 'https://www.acquia.com/sites/default/files/2021-09/acquia-logo-white.svg',
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
      logo: 'https://www.mendix.com/wp-content/uploads/mendix-logo-blue.svg',
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
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-2">
            🚀 Platform Expertise
          </Badge>
          <h2 className="text-6xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Trusted SaaS Partner Across 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Three Strategic Markets
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're the specialized consulting firm that Japanese businesses rely on for SaaS implementations 
            that work seamlessly across Japan, Australia, and Vietnam. Our deep understanding of Japanese 
            business culture combined with multi-market technical expertise ensures your technology 
            investments deliver the growth you need in every region.
          </p>
        </div>

        {/* Geographic Coverage Visual */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🇯🇵</span>
                </div>
                <div className="font-semibold text-gray-800">Japan</div>
                <div className="text-sm text-gray-600">Home Base</div>
              </div>
              <div className="flex items-center">
                <ArrowRight className="h-6 w-6 text-gray-400" />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🇦🇺</span>
                </div>
                <div className="font-semibold text-gray-800">Australia</div>
                <div className="text-sm text-gray-600">Expansion Hub</div>
              </div>
              <div className="flex items-center">
                <ArrowRight className="h-6 w-6 text-gray-400" />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🇻🇳</span>
                </div>
                <div className="font-semibold text-gray-800">Vietnam</div>
                <div className="text-sm text-gray-600">Operations Center</div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {platforms.map((platform) => (
            <Card 
              key={platform.id}
              className="group hover:shadow-2xl transition-all duration-500  border-0 overflow-hidden cursor-pointer"
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
                    {/* Company Logo */}
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center p-2">
                      <img 
                        src={platform.logo} 
                        alt={platform.logoAlt}
                        className="max-w-full max-h-full object-contain filter brightness-0 invert"
                        onError={(e) => {
                          // Fallback to platform-specific icon if logo fails to load
                          console.log(`Logo failed to load for ${platform.name}`);
                        }}
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
                  {platform.features.slice(0, hoveredPlatform === platform.id ? 4 : 4).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                </div>

                {/* Market Coverage */}
                <div className="border-t pt-4 mb-4">
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

        {/* Platform Logos Strip - Alternative Display */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-8">Trusted Partners & Platforms</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
            {platforms.map((platform) => (
              <div key={`logo-${platform.id}`} className="flex items-center justify-center h-12 w-32">
                <img 
                  src={platform.logo} 
                  alt={platform.logoAlt}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Scale Your Japanese Business Globally?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how our platform expertise can help you achieve seamless operations 
              across Japan, Australia, and Vietnam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-200 hover:bg-blue-50 text-blue-700"
              >
                Download Platform Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};






export default PlatformExpert;