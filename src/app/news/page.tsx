"use client"
import React from "react";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
} from 'lucide-react';
import Image from 'next/image';
import blogimage1 from "../../../public/blogImages/blogimage_1.png"
import blogimage2 from "../../../public/blogImages/blogimage_2.png"
import blogimage3 from "../../../public/blogImages/blogimage_3.png"

const News = () => {
  const articles = [
    {
      title: "Boomi Recognized as Leader in 2025 Gartner Magic Quadrant for iPaaS",
      img: blogimage1,
      excerpt: "11th consecutive year of recognition highlights Boomi's continued innovation in integration platforms.",
      date: "Recent",
      category: "Partnership News"
    },
    {
      title: "Odoo AI Features: Business Support Without Complexity",
      img: blogimage2,
      excerpt: "How Odoo's AI tools seamlessly integrate into business workflows for smarter operations.",
      date: "Recent",
      category: "Technology Insights"
    },
    {
      title: "Digital Marketing Seminar: Melbourne March 2025",
      img: blogimage3,
      excerpt: "Co-organized with Ashurst Australia and Melbourne Japanese Chamber of Commerce.",
      date: "Upcoming",
      category: "Events"
    },
    {
      title: "ServiceNow Implementation Best Practices",
      img: blogimage1,
      excerpt: "Key strategies for successful enterprise workflow automation deployments.",
      date: "Recent",
      category: "Technology Insights"
    },
    {
      title: "HubSpot CRM for Japanese Businesses",
      img: blogimage2,
      excerpt: "Adapting Western CRM practices to traditional Japanese business relationships.",
      date: "Recent",
      category: "Business Strategy"
    },
    {
      title: "APAC Expansion Webinar Series",
      img: blogimage3,
      excerpt: "Monthly sessions covering market entry strategies across Asia Pacific.",
      date: "Ongoing",
      category: "Events"
    },
    {
      title: "Mendix Low-Code Revolution",
      img: blogimage1,
      excerpt: "How rapid application development is transforming enterprise software delivery.",
      date: "Recent",
      category: "Technology Insights"
    },
    {
      title: "Cross-Cultural Technology Implementation",
      img: blogimage2,
      excerpt: "Bridging cultural gaps in international technology rollouts.",
      date: "Recent",
      category: "Business Strategy"
    },
    {
      title: "Drupal 10 Migration Workshop",
      img: blogimage3,
      excerpt: "Hands-on session for upgrading your digital presence with the latest Drupal.",
      date: "Upcoming",
      category: "Events"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 pt-52 pb-35">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Insights & News
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and announcements from the world of SaaS and digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden pt-0">
              <div className="relative w-full aspect-video">
                <Image
                  src={article.img}
                  alt={`Featured image for ${article.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
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
  );
};

export default News;