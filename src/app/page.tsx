"use client"

import Image from "next/image";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Globe, 
  Zap, 
  Shield,
  Target,
  Lightbulb,
  BarChart3,
  Clock,
  Award,
  ChevronDown,
  Play,
  Star,
  Phone,
  Mail,
  MapPin,
  Settings,
  Database,
  Cpu,
  Network,
  Building,
  Calendar,
  FileText
} from 'lucide-react';

// Types for better TypeScript support
interface StoryStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  metrics?: string;
  isActive?: boolean;
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  targetAudience: string;
  gradient: string;
}

const SazaeHomepage: React.FC = () => {
  const [currentStoryStep, setCurrentStoryStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: '',
    companySize: ''
  });

  // Story steps that guide the customer journey
  const storySteps = [
    {
      step: 1,
      title: "Your Business Systems Are Disconnected",
      description: "Manual processes, isolated platforms, and operational inefficiencies are limiting your growth potential.",
      icon: <TrendingUp className="h-8 w-8 text-red-400" />,
      metrics: "Common challenge across growing businesses"
    },
    {
      step: 2,
      title: "We Assess Your Digital Readiness",
      description: "Our SaaS experts analyze your current systems and design a comprehensive digital transformation roadmap.",
      icon: <Target className="h-8 w-8 text-blue-400" />,
      metrics: "Comprehensive free assessment"
    },
    {
      step: 3,
      title: "Expert Implementation & Cultural Bridge",
      description: "We implement world-class SaaS solutions with unique Japan-Australia business expertise and technical excellence.",
      icon: <Zap className="h-8 w-8 text-cyan-400" />,
      metrics: "Proven cross-cultural implementation experience"
    },
    {
      step: 4,
      title: "Your Business Achieves Operational Excellence",
      description: "Streamlined operations, integrated systems, and accelerated growth become your sustainable competitive advantage.",
      icon: <Award className="h-8 w-8 text-green-400" />,
      metrics: "Long-term partnership and support"
    }
  ];

  const services: ServiceCardProps[] = [
    {
      title: "Odoo ERP Solutions",
      description: "Complete business management platform for growing companies seeking integrated operations.",
      icon: <Database className="h-12 w-12 text-white" />,
      features: [
        "Full ERP Implementation",
        "Inventory & Manufacturing",
        "Sales & CRM Integration",
        "Financial Management",
        "E-commerce Integration",
        "Custom Module Development"
      ],
      targetAudience: "Growing SMBs",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "ServiceNow Implementation",
      description: "Enterprise workflow automation and IT service management for large organizations.",
      icon: <Settings className="h-12 w-12 text-white" />,
      features: [
        "IT Service Management",
        "Workflow Automation",
        "Asset Management",
        "Employee Service Portal",
        "Performance Analytics",
        "Custom Application Development"
      ],
      targetAudience: "Enterprise",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "HubSpot CRM & Marketing",
      description: "Complete customer relationship and marketing automation platform for sales growth.",
      icon: <Users className="h-12 w-12 text-white" />,
      features: [
        "CRM Implementation",
        "Marketing Automation",
        "Sales Pipeline Management",
        "Content Management",
        "Analytics & Reporting",
        "Integration Services"
      ],
      targetAudience: "Sales-focused businesses",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Boomi Integration Platform",
      description: "Cloud-based integration platform connecting applications, data, and processes seamlessly.",
      icon: <Network className="h-12 w-12 text-white" />,
      features: [
        "Application Integration",
        "Data Synchronization",
        "API Management",
        "Workflow Automation",
        "Master Data Management",
        "B2B/EDI Integration"
      ],
      targetAudience: "Multi-system organizations",
      gradient: "from-purple-500 to-blue-600"
    },
    {
      title: "Mendix Low-Code Platform",
      description: "Rapid application development platform for custom business solutions and digital innovation.",
      icon: <Cpu className="h-12 w-12 text-white" />,
      features: [
        "Custom App Development",
        "Low-Code Solutions",
        "Mobile Applications",
        "Process Automation",
        "Legacy System Modernization",
        "Agile Development"
      ],
      targetAudience: "Innovation-focused companies",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Japan-Australia Business Bridge",
      description: "Specialized consulting for companies expanding between Japanese and Australian markets.",
      icon: <Globe className="h-12 w-12 text-white" />,
      features: [
        "Cross-Cultural Business Analysis",
        "Market Entry Strategy",
        "Regulatory Compliance",
        "Localized Implementation",
        "Bilingual Project Management",
        "Cultural Change Management"
      ],
      targetAudience: "International expansion",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  // Auto-advance story steps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryStep((prev) => (prev + 1) % storySteps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you! Your assessment request has been received. We\'ll contact you within 24 hours.');
  };

  const StoryStep: React.FC<StoryStepProps> = ({ step, title, description, icon, metrics, isActive }) => (
    <div className={`transform transition-all duration-700 ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-60'}`}>
      <Card className={`h-full border-0 shadow-lg ${isActive ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-l-blue-500' : 'bg-white/80 backdrop-blur-sm'}`}>
        <CardHeader className="text-center pb-4">
          <div className={`mx-auto mb-4 p-4 rounded-full ${isActive ? 'bg-white shadow-md' : 'bg-gray-50'}`}>
            {icon}
          </div>
          <Badge variant={isActive ? "default" : "secondary"} className={`mb-2 ${isActive ? 'bg-blue-500' : ''}`}>
            Step {step}
          </Badge>
          <CardTitle className="text-xl font-bold text-gray-800">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center pt-0">
          <CardDescription className="text-base mb-4 text-gray-600">{description}</CardDescription>
          {metrics && (
            <div className={`text-sm font-semibold p-3 rounded-lg ${isActive ? 'text-blue-700 bg-blue-100' : 'text-gray-600 bg-gray-100'}`}>
              {metrics}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );

  const ServiceCard: React.FC<ServiceCardProps> = ({ 
    title, 
    description, 
    icon, 
    features, 
    targetAudience, 
    gradient
  }) => (
    <Card className="h-full hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 border-0 overflow-hidden">
      <div className={`h-32 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex items-center justify-between p-6 h-full">
          <div className="flex-1">
            <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
              {targetAudience}
            </Badge>
            <div className="text-white text-lg font-bold">{title}</div>
          </div>
          <div className="flex-shrink-0">
            {icon}
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      </div>
      
      <CardHeader className="pb-4">
        <CardDescription className="text-base text-gray-600">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-blue-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Sazae
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#insights" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Insights</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg">
              <Phone className="mr-2 h-4 w-4" />
              Free Consultation
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-2">
                  🌊 Your SaaS Transformation Partner
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Turn Your Business Systems Into Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                    {" "}Competitive Advantage
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  We help Australian and Japanese businesses streamline operations, enhance efficiency, 
                  and accelerate growth with proven SaaS solutions and cultural intelligence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4"
                >
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Start Your Digital Assessment
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-blue-200 hover:bg-blue-50 text-blue-700 text-lg px-8 py-4"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Our Success Stories
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

      {/* Our Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our SaaS Expertise Across Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Boutique team of IT consultants, business strategists, and technology architects specializing in leading SaaS platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Solutions",
                description: "ServiceNow and Boomi implementations for large-scale operations and complex integrations.",
                icon: <Building className="h-12 w-12 text-white" />,
                platforms: ["ServiceNow", "Boomi", "Mendix"],
                gradient: "from-blue-500 to-blue-600"
              },
              {
                title: "Business Growth",
                description: "Odoo ERP and HubSpot solutions designed to scale with your growing business needs.",
                icon: <TrendingUp className="h-12 w-12 text-white" />,
                platforms: ["Odoo", "HubSpot", "Drupal"],
                gradient: "from-cyan-500 to-cyan-600"
              },
              {
                title: "Cultural Bridge",
                description: "Unique expertise in Japan-Australia business practices and technology implementation.",
                icon: <Globe className="h-12 w-12 text-white" />,
                platforms: ["Cross-Cultural", "Bilingual", "Compliance"],
                gradient: "from-blue-600 to-purple-600"
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-24 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
                  {item.icon}
                  <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {item.platforms.map((platform, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Journey */}
      <section id="story" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Digital Transformation Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven approach to assess, design, implement, and optimize your business systems for sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {storySteps.map((step, index) => (
              <StoryStep
                key={index}
                {...step}
                isActive={currentStoryStep === index}
              />
            ))}
          </div>

          <div className="flex justify-center space-x-2">
            {storySteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStoryStep(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  currentStoryStep === index 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SaaS Solutions We Specialize In
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From ERP implementation to low-code development, we deliver comprehensive SaaS solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Presence */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Serving Australia, Japan & Vietnam
              </h2>
              <p className="text-xl opacity-90">
                With offices and partnerships across three countries, we bring global expertise with local understanding to every project.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1">Sydney</div>
                  <div className="text-blue-100">Headquarters</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">Tokyo</div>
                  <div className="text-blue-100">Partnership</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">Vietnam</div>
                  <div className="text-blue-100">Development</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="aspect-square bg-white/20 rounded-xl flex items-center justify-center">
                <MapPin className="h-24 w-24 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Insights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Insights & News
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Boomi Recognized as Leader in 2025 Gartner Magic Quadrant for iPaaS",
                excerpt: "11th consecutive year of recognition highlights Boomi's continued innovation in integration platforms.",
                date: "Recent",
                category: "Partnership News"
              },
              {
                title: "Odoo AI Features: Business Support Without Complexity",
                excerpt: "How Odoo's AI tools seamlessly integrate into business workflows for smarter operations.",
                date: "Recent",
                category: "Technology Insights"
              },
              {
                title: "Digital Marketing Seminar: Melbourne March 2025",
                excerpt: "Co-organized with Ashurst Australia and Melbourne Japanese Chamber of Commerce.",
                date: "Upcoming",
                category: "Events"
              }
            ].map((article, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                  <CardDescription className="text-base">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business Systems?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get your free Digital Readiness Assessment and discover how SaaS solutions can streamline your operations and accelerate growth.
            </p>
          </div>

          <Card className="bg-white/95 backdrop-blur-sm text-gray-900 border-0 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-gray-800 mb-2">
                Free Digital Readiness Assessment
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Discover your transformation opportunities in just 5 minutes
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-semibold">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-semibold">Business Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@company.com"
                      className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-700 font-semibold">Company Name *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Your company name"
                    className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="companySize" className="text-gray-700 font-semibold">Company Size</Label>
                  <Select value={formData.companySize} onValueChange={(value) => setFormData({...formData, companySize: value})}>
                    <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-100">51-100 employees</SelectItem>
                      <SelectItem value="101-500">101-500 employees</SelectItem>
                      <SelectItem value="500+">500+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="challenge" className="text-gray-700 font-semibold">Primary Business Challenge</Label>
                  <Textarea
                    id="challenge"
                    value={formData.challenge}
                    onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                    placeholder="What's your biggest operational or technology challenge right now?"
                    rows={4}
                    className="border-2 border-gray-200 focus:border-blue-500 transition-colors resize-none"
                  />
                </div>
                
                <Button 
                  type="button" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 py-4"
                  onClick={handleFormSubmit}
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Get My Free Assessment
                </Button>
              </div>
              
              <div className="text-center text-sm text-gray-600 mt-6 flex items-center justify-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Your information is secure and will never be shared. You'll receive your personalized assessment within 24 hours.</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Sazae
                </div>
              </div>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Boutique team of IT consultants, business strategists, and technology architects. 
                We assess your digital presence, identify growth opportunities, and enhance operational efficiencies.
              </p>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>Level 5, 115 Pitt Street, Sydney NSW 2000, Australia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span>+61 439 999 650</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>hello@sazae.com.au</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Odoo ERP Implementation</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">ServiceNow Solutions</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">HubSpot CRM & Marketing</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Boomi Integration</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Mendix Low-Code</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Drupal Development</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Digital Transformation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">About Sazae</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Our Story</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Success Stories</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Blog & Insights</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Partnerships</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Contact Us</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Japan-Australia Bridge</li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                &copy; 2025 Sazae Pty Ltd. All rights reserved.
              </div>
              <div className="flex space-x-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              </div>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 hover:bg-blue-400/10">
                  LinkedIn
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 hover:bg-blue-400/10">
                  Twitter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SazaeHomepage;