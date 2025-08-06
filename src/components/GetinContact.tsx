"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  CheckCircle
} from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';


const GetinContact = () => {
  return   (
       
        <div className="text-center pt-16 pb-16 px-6">
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-blue-100 md:max-w-4xl mx-auto max-w-xl pb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 pt-4">
              Ready to Scale Your Japanese Business Globally?
            </h3>
            <p className="text-gray-600 mb-6 ">
              Let's discuss how our platform expertise can help you achieve <br/> seamless operations 
              across Asia Pacific.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                >
                Schedule Free Consultation
                {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
              </Button>
              </Link>
              {/* <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-200 hover:bg-blue-50 text-blue-700"
              >
                 Schedule Free Consultation
              </Button> */}
            </div>
          </div>
        </div>
  )
};

export default GetinContact;
