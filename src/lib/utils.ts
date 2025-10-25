import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getRange = (start: string, end: string): string[] => {
  const quarters: string[] = [];

  const [startYear, startQuarter] = start.split(" Q").map(val => Number(val));
  const [endYear, endQuarter] = end.split(" Q").map(val => Number(val));

  for (let year = startYear; year <= endYear; year++) {
    const quarterStart = (year === startYear) ? startQuarter : 1;
    const quarterEnd = (year === endYear) ? endQuarter : 4;
    
    for (let quarter = quarterStart; quarter <= quarterEnd; quarter++) {
      quarters.push(`${year} Q${quarter}`);
    }
  }

  return quarters;
}