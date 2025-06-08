
import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventCategory } from "@/data/eventData";

interface EventCategoryTabsProps {
  activeTab: string;
}

export default function EventCategoryTabs({ activeTab }: EventCategoryTabsProps) {
  return (
    <div className="mb-8 md:mb-12 flex justify-center">
      <TabsList className="inline-flex flex-wrap h-auto p-2 gap-2 bg-muted/50 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg">
        <TabsTrigger 
          value="concert" 
          className="text-sm md:text-base px-4 md:px-6 py-3 whitespace-nowrap rounded-xl font-medium transition-all duration-300 hover:scale-105 data-[state=active]:shadow-md data-[state=active]:bg-primary data-[state=active]:text-white"
        >
          Concert
        </TabsTrigger>
        <TabsTrigger 
          value="sport" 
          className="text-sm md:text-base px-4 md:px-6 py-3 whitespace-nowrap rounded-xl font-medium transition-all duration-300 hover:scale-105 data-[state=active]:shadow-md data-[state=active]:bg-primary data-[state=active]:text-white"
        >
          Sport
        </TabsTrigger>
        <TabsTrigger 
          value="workshop" 
          className="text-sm md:text-base px-4 md:px-6 py-3 whitespace-nowrap rounded-xl font-medium transition-all duration-300 hover:scale-105 data-[state=active]:shadow-md data-[state=active]:bg-primary data-[state=active]:text-white"
        >
          Workshop & Meetup
        </TabsTrigger>
        <TabsTrigger 
          value="arts" 
          className="text-sm md:text-base px-4 md:px-6 py-3 whitespace-nowrap rounded-xl font-medium transition-all duration-300 hover:scale-105 data-[state=active]:shadow-md data-[state=active]:bg-primary data-[state=active]:text-white"
        >
          Arts & Exhibition
        </TabsTrigger>
        <TabsTrigger 
          value="fundraising" 
          className="text-sm md:text-base px-4 md:px-6 py-3 whitespace-nowrap rounded-xl font-medium transition-all duration-300 hover:scale-105 data-[state=active]:shadow-md data-[state=active]:bg-primary data-[state=active]:text-white"
        >
          Fundraising Events
        </TabsTrigger>
      </TabsList>
    </div>
  );
}
