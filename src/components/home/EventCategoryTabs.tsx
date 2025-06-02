
import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventCategory } from "@/data/eventData";

interface EventCategoryTabsProps {
  activeTab: string;
}

export default function EventCategoryTabs({ activeTab }: EventCategoryTabsProps) {
  return (
    <div className="mb-6 md:mb-8">
      <TabsList className="inline-flex flex-wrap justify-center w-full h-auto p-1 gap-1">
        <TabsTrigger value="concert" className="text-xs md:text-sm px-3 py-2 whitespace-nowrap">
          Concert
        </TabsTrigger>
        <TabsTrigger value="sport" className="text-xs md:text-sm px-3 py-2 whitespace-nowrap">
          Sport
        </TabsTrigger>
        <TabsTrigger value="workshop" className="text-xs md:text-sm px-3 py-2 whitespace-nowrap">
          Workshop & Meetup
        </TabsTrigger>
        <TabsTrigger value="arts" className="text-xs md:text-sm px-3 py-2 whitespace-nowrap">
          Arts & Exhibition
        </TabsTrigger>
        <TabsTrigger value="fundraising" className="text-xs md:text-sm px-3 py-2 whitespace-nowrap">
          Fundraising Events
        </TabsTrigger>
      </TabsList>
    </div>
  );
}
