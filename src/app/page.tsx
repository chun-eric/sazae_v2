"use client"

// import Image from "next/image";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Textarea } from '@/components/ui/textarea';
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";


import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Globe, 
  Zap, 
  // Shield,
  Target,
  // Lightbulb,
  // BarChart3,
  // Clock,
  Award,
  // ChevronDown,
  // Play,
  // Star,
  // Phone,
  // Mail,
  // MapPin,
  Settings,
  Database,
  Cpu,
  Network,
  // Building,
  // Calendar,
  // FileText
} from 'lucide-react';
import Hero from "@/components/Hero";
import PlatformExpert from "@/components/PlatformExpert";
import {  TimelineSelection } from "@/components/TimelineSelection";
import GetinContact from "@/components/GetinContact";
import { MarqueeDemo } from "@/components/Clients";

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
    
    {/* Import Hero */}
    <Hero/>
    <PlatformExpert/>
    <MarqueeDemo/>
    <TimelineSelection/>

      {/* Our Expertise */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-4xl font-bold text-gray-900 mb-4">
              SaaS Expertise Across Multiple Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a Boutique team of expert IT consultants, business strategists, and technology architects specializing in leading SaaS platforms serving the APAC region.
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
      </section> */}

      {/* Transformation Journey */}
      {/* <section id="story" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
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
      </section> */}


      {/* Geographic Presence */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
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
      </section> */}

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
    img: "/blogimages/blogimage_1.png", // Correct path
    excerpt: "11th consecutive year of recognition highlights Boomi's continued innovation in integration platforms.",
    date: "Recent",
    category: "Partnership News"
  },
  {
    title: "Odoo AI Features: Business Support Without Complexity",
    img: "/blogimages/blogimage_2.png", // Correct path
    excerpt: "How Odoo's AI tools seamlessly integrate into business workflows for smarter operations.",
    date: "Recent",
    category: "Technology Insights"
  },
  {
    title: "Digital Marketing Seminar: Melbourne March 2025",
    img: "/blogimages/blogimage_3.png", // Correct path
    excerpt: "Co-organized with Ashurst Australia and Melbourne Japanese Chamber of Commerce.",
    date: "Upcoming",
    category: "Events"
  }
].map((article, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden pt-0">
                <img
            src={article.img}
            alt={`Featured image for ${article.title}`}
            className="w-full aspect-video object-cover border-md"
          />
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

     
     <GetinContact/>
      
    </div>
  );
};

export default SazaeHomepage;