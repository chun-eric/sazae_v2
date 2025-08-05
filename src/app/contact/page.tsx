"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  // Building, 
  // Globe,
  Send,
  // MessageSquare,
  Calendar,
  // Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    service: '',
    message: '',
    preferredContact: 'email'
  });

  const handleSubmit = () => {
    console.log('Contact form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 mt-20">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-2">
              🤝 Let's Start Your Digital Transformation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get In Touch With
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                {" "}Our SaaS Experts
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ready to streamline your operations and accelerate growth? Our team is here to help you 
              choose the right SaaS solutions for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Phone className="h-8 w-8 text-blue-500" />,
                title: "Call Us",
                description: "Speak directly with our SaaS consultants",
                contact: "+61 439 999 650",
                action: "Call Now",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: <Mail className="h-8 w-8 text-cyan-500" />,
                title: "Email Us", 
                description: "Send us your detailed requirements",
                contact: "support@sazae.com.au",
                action: "Send Email",
                gradient: "from-cyan-500 to-cyan-600"
              },
              {
                icon: <Calendar className="h-8 w-8 text-purple-500" />,
                title: "Book a Meeting",
                description: "Schedule a free consultation call",
                contact: "Free 30-min consultation",
                action: "Schedule Now",
                gradient: "from-purple-500 to-purple-600"
              }
            ].map((option, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gray-50 rounded-full w-fit">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription className="text-base">{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 font-semibold text-gray-800">{option.contact}</div>
                  <Button className={`bg-gradient-to-r ${option.gradient} hover:opacity-90 text-white w-full`}>
                    {option.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-16 bg-gradient-to-br ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Bring Your Project to Life
            </h2>
            <p className="text-lg text-gray-600">
              Share your goals below, and our experts will craft a strategic proposal to get you there. <br/> Expect a custom plan in your inbox within 24 hours.
              </p>
          </div>

          <Card className="bg-white/95 backdrop-blur-sm border shadow-lg max-w-5xl">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl text-gray-800 mb-2 mt-3">
                Inquiry Form
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                The more details you provide, the better we can help you
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700 font-semibold">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      placeholder="Your first name"
                      className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700 font-semibold">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      placeholder="Your last name"
                      className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+61 xxx xxx xxx"
                      className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Company Information */}
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

                <div className="grid md:grid-cols-2 gap-6">
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
                    <Label htmlFor="service" className="text-gray-700 font-semibold">Service Interest</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="odoo">Odoo ERP</SelectItem>
                        <SelectItem value="servicenow">ServiceNow</SelectItem>
                        <SelectItem value="hubspot">HubSpot CRM</SelectItem>
                        <SelectItem value="boomi">Boomi Integration</SelectItem>
                        <SelectItem value="mendix">Mendix Low-Code</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                        <SelectItem value="multiple">Multiple Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-semibold">Project Details</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your project, current challenges, goals, timeline, and any specific requirements..."
                    rows={14}
                    className="border-2 border-gray-200 focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Preferred Contact Method */}
                <div className="space-y-2">
                  <Label className="text-gray-700 font-semibold">Preferred Contact Method</Label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                        className="text-blue-500"
                      />
                      <span className="text-gray-700">Email</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                        className="text-blue-500"
                      />
                      <span className="text-gray-700">Phone</span>
                    </label>
                  </div>
                </div>

                <Button 
                  type="button" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 py-4"
                  onClick={handleSubmit}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Inquiry
                </Button>
              </div>
              
              <div className="text-center text-sm text-gray-600 mt-6 flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>We'll respond within 24 hours with a tailored solution proposal</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Global Presence
            </h2>
            <p className="text-xl text-gray-600">
              Serving clients across Australia, Japan, and Vietnam
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                country: "Australia",
                city: "Sydney",
                flag: "🇦🇺",
                address: "Level 5, 115 Pitt Street\nSydney NSW 2000",
                phone: "+61 439 999 650",
                email: "sydney@sazae.com.au",
                hours: "Mon-Fri: 9:00 AM - 6:00 PM AEST",
                isHQ: true
              },
              {
                country: "Japan",
                city: "Tokyo",
                flag: "🇯🇵",
                address: "Partnership Office\nTokyo Business District",
                phone: "Available via Sydney",
                email: "tokyo@sazae.com.au",
                hours: "Mon-Fri: 9:00 AM - 6:00 PM JST",
                isHQ: false
              },
              {
                country: "Vietnam",
                city: "Development Center",
                flag: "🇻🇳",
                address: "Technical Development\nPartnership Location",
                phone: "Available via Sydney",
                email: "vietnam@sazae.com.au",
                hours: "Mon-Fri: 9:00 AM - 6:00 PM ICT",
                isHQ: false
              }
            ].map((office, index) => (
              <Card key={index} className="border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl">{office.flag}</span>
                    {office.isHQ && (
                      <Badge className="bg-blue-100 text-blue-800 text-xs">Headquarters</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{office.city}</CardTitle>
                  <CardDescription className="text-lg font-medium">{office.country}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-gray-600 whitespace-pre-line">{office.address}</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <div className="text-sm text-gray-600">{office.phone}</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <div className="text-sm text-gray-600">{office.email}</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <div className="text-sm text-gray-600">{office.hours}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical SaaS implementation take?",
                answer: "Implementation timelines vary by platform and complexity. Odoo implementations typically take 2-4 months, while ServiceNow projects can range from 3-6 months. We provide detailed timelines during our initial consultation."
              },
              {
                question: "Do you provide ongoing support after implementation?",
                answer: "Yes, we offer comprehensive ongoing support including system maintenance, user training, customizations, and technical assistance to ensure your SaaS solutions continue to deliver value."
              },
              {
                question: "Can you help with Japan-Australia business expansion?",
                answer: "Absolutely! Our unique expertise in both Japanese and Australian business practices allows us to provide specialized consulting for companies expanding between these markets, including regulatory compliance and cultural considerations."
              },
              {
                question: "What makes Sazae different from other SaaS consultants?",
                answer: "Our boutique approach combines deep technical expertise with cultural intelligence across Australia, Japan, and Vietnam. We're an 11-year Boomi partner with proven experience in multiple SaaS platforms and cross-cultural business understanding."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-800">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;