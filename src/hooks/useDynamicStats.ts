import { useMemo } from 'react';

interface BaselineConfig {
  baselineDate: Date;
  baselineValues: {
    printedTickets: number;
    plasticBadges: number;
    paperBrochures: number;
    treesSaved: number;
    co2Saved: number;
  };
  weeklyGrowthRates: {
    printedTickets: { min: number; max: number };
    plasticBadges: { min: number; max: number };
    paperBrochures: { min: number; max: number };
    treesSaved: { min: number; max: number };
    co2Saved: { min: number; max: number };
  };
}

const config: BaselineConfig = {
  baselineDate: new Date('2024-01-01'), // BookMe+ launch date
  baselineValues: {
    printedTickets: 200000,
    plasticBadges: 35000,
    paperBrochures: 8000,
    treesSaved: 40,
    co2Saved: 1200,
  },
  weeklyGrowthRates: {
    printedTickets: { min: 2000, max: 3500 },
    plasticBadges: { min: 400, max: 700 },
    paperBrochures: { min: 150, max: 250 },
    treesSaved: { min: 0.3, max: 0.6 },
    co2Saved: { min: 20, max: 35 },
  },
};

export const useDynamicStats = () => {
  return useMemo(() => {
    const now = new Date();
    const weeksElapsed = Math.floor(
      (now.getTime() - config.baselineDate.getTime()) / (1000 * 60 * 60 * 24 * 7)
    );

    // Deterministic "random" based on current week to ensure consistency
    const weekSeed = Math.floor(now.getTime() / (1000 * 60 * 60 * 24 * 7));
    const getWeeklyVariation = (min: number, max: number, offset: number = 0) => {
      const seed = (weekSeed + offset) * 9301 + 49297;
      const random = (seed % 233280) / 233280;
      return min + random * (max - min);
    };

    const calculateStat = (
      baseValue: number,
      growthRate: { min: number; max: number },
      offset: number = 0
    ) => {
      const weeklyGrowth = getWeeklyVariation(growthRate.min, growthRate.max, offset);
      return Math.floor(baseValue + weeklyGrowth * weeksElapsed);
    };

    return {
      printedTickets: calculateStat(config.baselineValues.printedTickets, config.weeklyGrowthRates.printedTickets, 0),
      plasticBadges: calculateStat(config.baselineValues.plasticBadges, config.weeklyGrowthRates.plasticBadges, 1),
      paperBrochures: calculateStat(config.baselineValues.paperBrochures, config.weeklyGrowthRates.paperBrochures, 2),
      treesSaved: calculateStat(config.baselineValues.treesSaved, config.weeklyGrowthRates.treesSaved, 3),
      co2Saved: calculateStat(config.baselineValues.co2Saved, config.weeklyGrowthRates.co2Saved, 4),
    };
  }, []);
};