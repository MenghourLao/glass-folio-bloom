import React, { useState, useEffect } from 'react';
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Leaf, QrCode, Ban, FileText, TreePine, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Counter animation hook
const useCounter = (endValue: number, duration: number = 2000, isVisible: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentCount = Math.floor(progress * endValue);
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [endValue, duration, isVisible]);

  return count;
};

export default function GoGreenSection() {
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  const greenFeatures = [
    {
      icon: <QrCode className="h-12 w-12 text-[#5D54D9]" />,
      title: "No printed tickets",
      description: "100% digital QR codes",
      bgColor: "bg-[#5D54D9]/20"
    },
    {
      icon: <Ban className="h-12 w-12 text-[#5D54D9]" />,
      title: "No plastic badges",
      description: "Mobile check-ins only",
      bgColor: "bg-[#5D54D9]/20"
    },
    {
      icon: <FileText className="h-12 w-12 text-[#5D54D9]" />,
      title: "No paper brochures",
      description: "Digital event guides",
      bgColor: "bg-[#5D54D9]/20"
    }
  ];

  const impactStats = [
    {
      endValue: 255720,
      suffix: "+",
      label: "Printed Tickets Saved",
      color: "text-[#5D54D9]"
    },
    {
      endValue: 42130,
      suffix: "+",
      label: "Plastic Badges Saved",
      color: "text-[#5D54D9]"
    },
    {
      endValue: 11045,
      suffix: "+",
      label: "Paper Brochures Saved",
      color: "text-[#5D54D9]"
    },
    {
      endValue: 53,
      suffix: "",
      label: "Trees Saved",
      color: "text-[#5D54D9]"
    },
    {
      endValue: 1385,
      suffix: " kg",
      label: "CO₂ Emissions Saved",
      color: "text-[#5D54D9]"
    }
  ];

  // Custom hook for stats visibility
  const statsRef = useScrollAnimation<HTMLDivElement>('visible', { 
    threshold: 0.1,
    animateOnce: true
  });

  // Watch for stats visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsStatsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);
  
  const headingRef = useScrollAnimation<HTMLDivElement>('visible');
  const featuresRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  const quoteRef = useScrollAnimation<HTMLDivElement>('visible', { threshold: 0.1 });
  
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-12 sm:mb-16 fade-up">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-8 w-8 text-green-400 mr-3" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-green-400 uppercase">Go Green with BookMe+</h2>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-medium">
            100% Digital Events. Better for Cambodia.
          </p>
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

        <div ref={statsRef} className="border border-gray-800 rounded-2xl p-8 mb-12 fade-up">
          <h3 className="text-2xl font-bold text-center mb-8 text-white uppercase">Our Environmental Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {impactStats.map((stat, index) => {
              const count = useCounter(stat.endValue, 2000, isStatsVisible);
              
              return (
                <div key={index} className="text-center">
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                    {count.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-300 leading-tight">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div ref={quoteRef} className="relative overflow-hidden rounded-2xl fade-up">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-[#5D54D9] p-8 md:p-12 text-center relative">
            <div className="absolute inset-0 bg-[#5D54D9]/5 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center space-x-4">
                  <Car className="h-6 w-6 text-[#5D54D9]" />
                  <TreePine className="h-6 w-6 text-green-400" />
                </div>
              </div>
              <p className="text-white text-xl md:text-2xl font-semibold max-w-4xl mx-auto leading-relaxed">
                "That's like taking <span className="text-white font-bold">3 cars</span> off Phnom Penh roads for a <span className="text-white font-bold">whole month</span>."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
