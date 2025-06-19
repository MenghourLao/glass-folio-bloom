
import React from 'react';
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Leaf, QrCode, CreditCard, FileText, TreePine, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function GoGreenSection() {
  const greenFeatures = [
    {
      icon: <QrCode className="h-12 w-12 text-green-400" />,
      title: "No printed tickets",
      description: "100% digital QR codes",
      bgColor: "bg-green-900/20"
    },
    {
      icon: <CreditCard className="h-12 w-12 text-green-400" />,
      title: "No plastic badges",
      description: "Mobile check-ins only",
      bgColor: "bg-green-900/20"
    },
    {
      icon: <FileText className="h-12 w-12 text-green-400" />,
      title: "No paper brochures",
      description: "Digital event guides",
      bgColor: "bg-green-900/20"
    }
  ];

  const impactStats = [
    {
      number: "255,720+",
      label: "Printed Tickets Saved",
      color: "text-green-400"
    },
    {
      number: "42,130+",
      label: "Plastic Badges Saved",
      color: "text-green-400"
    },
    {
      number: "11,045+",
      label: "Paper Brochures Saved",
      color: "text-green-400"
    },
    {
      number: "53",
      label: "Trees Saved",
      color: "text-green-400"
    },
    {
      number: "1,385 kg",
      label: "CO₂ Emissions Saved",
      color: "text-green-400"
    }
  ];
  
  const headingRef = useScrollAnimation<HTMLDivElement>('visible');
  const featuresRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  const statsRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  const quoteRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  
  return (
    <section className="container mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div ref={headingRef} className="text-center mb-12 sm:mb-16 fade-up">
        <div className="flex items-center justify-center mb-4">
          <Leaf className="h-8 w-8 text-green-400 mr-3" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white">Go Green with BookMe+</h2>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg font-medium">
          100% Digital Events. Better for Cambodia.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 stagger-children">
        {greenFeatures.map((feature, index) => (
          <div key={index} className="text-center">
            <div className={`w-20 h-20 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>

      <div ref={statsRef} className="bg-gray-800/50 rounded-2xl p-8 mb-12 fade-up">
        <h3 className="text-2xl font-bold text-center mb-8 text-white">Our Environmental Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-300 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={quoteRef} className="relative overflow-hidden rounded-2xl fade-up">
        <div className="bg-gradient-to-r from-green-500 to-blue-600 p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Car className="h-6 w-6 text-white mr-2" />
            <TreePine className="h-6 w-6 text-white" />
          </div>
          <p className="text-white text-lg md:text-xl font-medium max-w-3xl mx-auto">
            "That's like taking 3 cars off Phnom Penh roads for a whole month."
          </p>
        </div>
      </div>
    </section>
  );
}
