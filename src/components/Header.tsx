'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Phone,
  Menu,
  X,
  ChevronDown,
  Globe
} from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [ selectedLanguage, setSelectedLanguage] = useState("AU")

     const languages = [
    { code: 'AU', name: 'English (Australia)', flag: '🇦🇺' },
    { code: 'CN', name: '中文 (Chinese)', flag: '🇨🇳' },
    { code: 'JP', name: '日本語 (Japanese)', flag: '🇯🇵' }
  ];

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    console.log("Language changed to: ", languageCode)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-blue-100 z-50 shadow-sm py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Sazae
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 ">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  {/* <NavigationMenuLink 
                    href="/" 
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    HOME
                  </NavigationMenuLink> */}
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-blue-600">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4">
                      <div className="grid gap-3">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-800 mb-3 text-normal">Service Solutions</h4>
                          <NavigationMenuLink 
                            href="/services/odoo" 
                            className="block p-2 rounded hover:bg-blue-50 transition-colors"
                          >
                            <div className="font-medium text-gray-900">Odoo ERP</div>
                            <div className="text-sm text-gray-600">Complete business management platform</div>
                          </NavigationMenuLink>
                          <NavigationMenuLink 
                            href="/services/servicenow" 
                            className="block p-2 rounded hover:bg-blue-50 transition-colors"
                          >
                            <div className="font-medium text-gray-900">ServiceNow</div>
                            <div className="text-sm text-gray-600">Enterprise workflow automation</div>
                          </NavigationMenuLink>
                          <NavigationMenuLink 
                            href="/services/hubspot" 
                            className="block p-2 rounded hover:bg-blue-50 transition-colors"
                          >
                            <div className="font-medium text-gray-900">HubSpot CRM</div>
                            <div className="text-sm text-gray-600">Sales & marketing automation</div>
                          </NavigationMenuLink>
                          <NavigationMenuLink 
                            href="/services/boomi" 
                            className="block p-2 rounded hover:bg-blue-50 transition-colors"
                          >
                            <div className="font-medium text-gray-900">Boomi Integration</div>
                            <div className="text-sm text-gray-600">Cloud-based integration platform</div>
                          </NavigationMenuLink>
                          <NavigationMenuLink 
                            href="/services/mendix" 
                            className="block p-2 rounded hover:bg-blue-50 transition-colors"
                          >
                            <div className="font-medium text-gray-900">Mendix Low-Code</div>
                            <div className="text-sm text-gray-600">Rapid application development</div>
                          </NavigationMenuLink>
                            <NavigationMenuLink 
                            href="/services/shopify" 
                            className="block p-2 rounded hover:bg-blue-50 transition-colors"
                          >
                            <div className="font-medium text-gray-900">Shopify</div>
                            <div className="text-sm text-gray-600">E-Commerce  development</div>
                          </NavigationMenuLink>
                          
                     {/* IT Support with Submenu */}
                      <div className="relative group">
                        <NavigationMenuLink 
                          href="/services/itsupport" 
                          className="block p-2 rounded hover:bg-blue-50 transition-colors cursor-pointer"
                        >
                          <div className="font-medium text-gray-900 flex items-center justify-between">
                            IT Support  
                            <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                          </div>
                          <div className="text-sm text-gray-600">Comprehensive IT solutions</div>
                        </NavigationMenuLink>
                        
                        {/* IT Support Submenu */}
                        <div className="absolute left-full top-0 ml-2 w-64 bg-white border border-blue-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[270]">
                          <div className="py-3">
                            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">IT Support Services</div>
                            
                            <a href="/services/itsupport/automation">Automation</a>
                            <a href="/services/itsupport/cloud">Cloud Solutions</a>
                            <a href="/services/itsupport/cyber">Cyber Security</a>
                            <a href="/services/itsupport/managed">Managed Services</a>
                            <a href="/services/itsupport/strategy">Strategy</a>
                          </div>
                        </div>
                      </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="/case-studies" 
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Case Studies
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="/about" 
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="/news" 
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    News
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="/contact" 
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>       
         
        </div>

            {/* Australian Flag & CTA */}
         <div className="flex items-center space-x-3 ml-4 relative">
 {/* Language Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-blue-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700 h-10 px-3"
                  >
                    <span className="mr-2 text-lg">
                      {languages.find(lang => lang.code === selectedLanguage)?.flag}
                    </span>
                    <span className="font-medium text-sm">
                      {selectedLanguage}
                    </span>
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 absolute right-0 mt-2 z-50">
                  {languages.map((language) => (
                    <DropdownMenuItem 
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className="cursor-pointer"
                    >
                      <span className="mr-3 text-lg">{language.flag}</span>
                      <div className="flex flex-col">
                        <span className="font-medium text-sm">{language.code}</span>
                        <span className="text-xs text-gray-500">{language.name}</span>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
             {/* Contact Button */}
              <Button  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg py-3 px-4">
                Get In Touch
              </Button>
            </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              <a href="/" className="block text-sm font-medium text-gray-700 hover:text-blue-600 py-2">
                HOME
              </a>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-900">SERVICES</div>
                <div className="pl-4 space-y-2">
                  <a href="/services/odoo" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Odoo ERP</a>
                  <a href="/services/servicenow" className="block text-sm text-gray-600 hover:text-blue-600 py-1">ServiceNow</a>
                  <a href="/services/hubspot" className="block text-sm text-gray-600 hover:text-blue-600 py-1">HubSpot CRM</a>
                  <a href="/services/boomi" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Boomi Integration</a>
                </div>
              </div>
              <a href="/case-studies" className="block text-sm font-medium text-gray-700 hover:text-blue-600 py-2">
                Case Studies
              </a>
              <a href="/about" className="block text-sm font-medium text-gray-700 hover:text-blue-600 py-2">
                About
              </a>
              <a href="/news" className="block text-sm font-medium text-gray-700 hover:text-blue-600 py-2">
                News
              </a>
              <a href="/contact" className="block text-sm font-medium text-gray-700 hover:text-blue-600 py-2">
                Contact
              </a>
              <div className="pt-4 border-t border-gray-200">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
         
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;