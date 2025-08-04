import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import Image from "next/image";


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
         <div className="w-12 h-12 rounded-xl flex items-center justify-center">
          <Image src="/sazae_logo.png" alt="Company Logo" width={250} height={250} />
        </div>
           
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm pr-3">
              Boutique team of expert IT consultants, business strategists, and technology <br/> architects. 
              We assess your digital presence, identify growth opportunities, <br/>  and enhance operational efficiencies.
            </p>
            <div className="space-y-2 text-gray-400 text-sm">
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
                <span>support@sazae.com.au</span>
              </div>
            </div>
          </div>
          
          <div className="">
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-blue-400 transition-colors cursor-pointer text-sm">
                <a href="/services/odoo">Odoo ERP Implementation</a>
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer text-sm">
                <a href="/services/servicenow">ServiceNow Solutions</a>
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer text-sm">
                <a href="/services/hubspot">HubSpot CRM & Marketing</a>
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer text-sm">
                <a href="/services/boomi">Boomi Integration</a>
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer text-sm">
                <a href="/services/mendix">Mendix Low-Code</a>
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer text-sm">
                <a href="/services/drupal">Drupal Development</a>
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer text-sm">
                <a href="/services/transformation">Digital Transformation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Sazae</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-blue-400 transition-colors cursor-pointer text-sm">
                <a href="/about">Mission</a>
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer text-sm">
                <a href="/about#story">Our Team</a>
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer text-sm">
                <a href="/case-studies">Case Studies</a>
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer text-sm">
                <a href="/news">News</a>
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer text-sm">
                <a href="/careers">Careers</a>
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer text-sm">
                <a href="/contact">Contact Us</a>
              </li>
            
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
              <a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 hover:bg-blue-400/10">
                <a href="https://linkedin.com/company/sazae" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 hover:bg-blue-400/10">
                <a href="https://twitter.com/sazae" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </Button>
                 <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 hover:bg-blue-400/10">
                <a href="https://facebook.com/sazae" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </Button>
                 <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 hover:bg-blue-400/10">
                <a href="https://wantedly.com/sazae" target="_blank" rel="noopener noreferrer">
                  Wantedly
                </a>
              </Button>
           
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;