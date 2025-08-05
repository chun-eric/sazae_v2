'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu,
  X,
  ChevronDown,
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
import Link from 'next/link';
import Image from 'next/image';
import headerLogo from "../../public/header_logo.png";
import { Comfortaa } from 'next/font/google';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['400', '700']
});

const Header: React.FC = () => {
  const [isITSupportOpen, setIsITSupportOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("AU");

  const languages = [
    { code: 'AU', name: 'English (Australia)', flag: '🇦🇺' },
    { code: 'CN', name: '中文 (Chinese)', flag: '🇨🇳' },
    { code: 'JP', name: '日本語 (Japanese)', flag: '🇯🇵' }
  ];

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    console.log("Language changed to: ", languageCode);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-blue-100 z-50 shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Link href="/">
              <Image src={headerLogo} width={80} height={80} alt="logo" />
            </Link>
            <Link href="/">
              <div 
                className={`text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight capitalize ml-[-5px] ${comfortaa.className}`}
              >
                Sazae
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Menu - Hidden on mobile/tablet */}
          <div className="hidden xl:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2 lg:space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-md font-medium text-gray-700 hover:text-blue-600 px-2 lg:px-3">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-6 relative min-h-0 overflow-visible">
                      <ul className="space-y-2">
                        <li className="font-semibold text-gray-800 mb-3 text-normal">Service Solutions</li>
                        
                        <li>
                          <NavigationMenuLink href="/services/odoo" className="block p-2 rounded hover:bg-blue-50 transition-colors">
                            <div className="font-medium text-gray-900">Odoo ERP</div>
                            <div className="text-sm text-gray-600">Complete business management platform</div>
                          </NavigationMenuLink>
                        </li>
                        
                        <li>
                          <NavigationMenuLink href="/services/servicenow" className="block p-2 rounded hover:bg-blue-50 transition-colors">
                            <div className="font-medium text-gray-900">ServiceNow</div>
                            <div className="text-sm text-gray-600">Enterprise workflow automation</div>
                          </NavigationMenuLink>
                        </li>
                        
                        <li>
                          <NavigationMenuLink href="/services/hubspot" className="block p-2 rounded hover:bg-blue-50 transition-colors">
                            <div className="font-medium text-gray-900">HubSpot CRM</div>
                            <div className="text-sm text-gray-600">Sales & marketing automation</div>
                          </NavigationMenuLink>
                        </li>
                        
                        <li>
                          <NavigationMenuLink href="/services/boomi" className="block p-2 rounded hover:bg-blue-50 transition-colors">
                            <div className="font-medium text-gray-900">Boomi Integration</div>
                            <div className="text-sm text-gray-600">Cloud-based integration platform</div>
                          </NavigationMenuLink>
                        </li>
                        
                        <li>
                          <NavigationMenuLink href="/services/mendix" className="block p-2 rounded hover:bg-blue-50 transition-colors">
                            <div className="font-medium text-gray-900">Mendix Low-Code</div>
                            <div className="text-sm text-gray-600">Rapid application development</div>
                          </NavigationMenuLink>
                        </li>
                        
                        <li>
                          <NavigationMenuLink href="/services/shopify" className="block p-2 rounded hover:bg-blue-50 transition-colors">
                            <div className="font-medium text-gray-900">Shopify</div>
                            <div className="text-sm text-gray-600">E-Commerce development</div>
                          </NavigationMenuLink>
                        </li>
                        
                        <li>
                          <div
                            className="block p-2 rounded hover:bg-blue-50 transition-colors w-full text-left cursor-pointer"
                            onMouseEnter={() => setIsITSupportOpen(true)}
                            onMouseLeave={() => setIsITSupportOpen(false)}
                          >
                            <div className="font-medium text-gray-900 flex items-center justify-between">
                              IT Support
                              <span className="ml-2">&rarr;</span>
                            </div>
                            <div className="text-sm text-gray-600">Comprehensive IT solutions</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/case-studies" className="px-2 lg:px-4 py-2 text-md font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    Case Studies
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/about" className="px-2 lg:px-4 py-2 text-md font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/news" className="px-2 lg:px-4 py-2 text-md font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    News
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/contact" className="px-2 lg:px-4 py-2 text-md font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right-side Elements */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Language Selector - Hidden on small screens */}
            <div className="hidden sm:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-blue-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700 h-8 sm:h-10 px-2 sm:px-3 data-[state=open]:ring-0"
                  >
                    <span className="mr-1 sm:mr-2 text-sm sm:text-lg">
                      {languages.find(lang => lang.code === selectedLanguage)?.flag}
                    </span>
                    <span className="font-medium text-xs sm:text-sm">
                      {selectedLanguage}
                    </span>
                    <ChevronDown className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 max-h-64 overflow-y-auto right-0 z-50">
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
            </div>
            
            {/* CTA Button - Responsive */}
            <Link href="/contact" className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg px-3 py-1 sm:px-4 sm:py-3 text-xs sm:text-sm sm:block rounded-lg transition-colors">
              Get In Touch
            </Link>

            {/* Mobile Menu Button */}
            <div className="xl:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 h-8 w-8 sm:h-10 sm:w-10"
              >
                {isMobileMenuOpen ? <X className="h-4 w-4 sm:h-6 sm:w-6" /> : <Menu className="h-4 w-4 sm:h-6 sm:w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3 max-h-[70vh] overflow-y-auto">
              <Link href="/" className="block text-sm font-medium text-gray-700 hover:text-blue-600 py-2">
                HOME
              </Link>
              
              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-900">SERVICES</div>
                <div className="pl-4 space-y-2">
                  <Link href="/services/odoo" className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                    Odoo ERP
                  </Link>
                  <Link href="/services/servicenow" className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                    ServiceNow
                  </Link>
                  <Link href="/services/hubspot" className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                    HubSpot CRM
                  </Link>
                  <Link href="/services/boomi" className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                    Boomi Integration
                  </Link>
                  <Link href="/services/mendix" className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                    Mendix Low-Code
                  </Link>
                  <Link href="/services/shopify" className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                    Shopify
                  </Link>
                  
                  {/* IT Support Submenu */}
                  <div className="pt-2">
                    <div className="text-sm font-medium text-gray-700 mb-2">IT Support</div>
                    <div className="pl-4 space-y-1">
                      <Link href="/services/itsupport/automation" className="block text-xs text-gray-600 hover:text-blue-600 py-1">
                        Automation
                      </Link>
                      <Link href="/services/itsupport/cloud" className="block text-xs text-gray-600 hover:text-blue-600 py-1">
                        Cloud Solutions
                      </Link>
                      <Link href="/services/itsupport/cyber" className="block text-xs text-gray-600 hover:text-blue-600 py-1">
                        Cyber Security
                      </Link>
                      <Link href="/services/itsupport/managed" className="block text-xs text-gray-600 hover:text-blue-600 py-1">
                        Managed Services
                      </Link>
                      <Link href="/services/itsupport/strategy" className="block text-xs text-gray-600 hover:text-blue-600 py-1">
                        Strategy
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link href="/case-studies" className="block text-sm font-medium text-gray-700 hover:text-blue-600 py-2">
                Case Studies
              </Link>
              <Link href="/about" className="block text-sm font-medium text-gray-700 hover:text-blue-600 py-2">
                About
              </Link>
              <Link href="/news" className="block text-sm font-medium text-gray-700 hover:text-blue-600 py-2">
                News
              </Link>
              <Link href="/contact" className="block text-sm font-medium text-gray-700 hover:text-blue-600 py-2">
                Contact
              </Link>
              
              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-200 sm:hidden">
                <div className="text-sm font-semibold text-gray-900 mb-2">LANGUAGE</div>
                <div className="space-y-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors ${
                        selectedLanguage === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
                      }`}
                    >
                      <span className="mr-3 text-lg">{language.flag}</span>
                      <div className="flex flex-col">
                        <span className="font-medium text-sm">{language.code}</span>
                        <span className="text-xs text-gray-500">{language.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <Link 
                  href="/contact"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-sm py-3 rounded-lg block text-center transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;