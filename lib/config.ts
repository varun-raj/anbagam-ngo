// lib/config.ts

export const UPI_ID = "terdod@sbi";

export type Meal = {
  name: string;
  icon: string;
  amount: number;
  note: string; // used in UPI transaction note
};

export type Center = {
  name: string;
  location: string;
  residents: number;
  mapUrl?: string;
  meals: Meal[];
};

export const centers: Center[] = [
  {
    name: "Anbagam Otteri",
    location: "Otteri",
    residents: 60,
    mapUrl: "https://maps.app.goo.gl/j62saTVfFysDU7E47",
    meals: [
      { name: "Breakfast", icon: "🌅", amount: 3500, note: "Breakfast+Otteri" },
      { name: "Lunch",     icon: "🍽️",  amount: 5000, note: "Lunch+Otteri" },
      { name: "Dinner",    icon: "🌙", amount: 5000, note: "Dinner+Otteri" },
      { name: "Snacks",    icon: "🍊", amount: 1500, note: "Snacks+Otteri" },
    ],
  },
  {
    name: "Anbagam Royapetta",
    location: "Royapetta",
    residents: 60,
    mapUrl: "https://maps.app.goo.gl/ygxEX1bByX8bo2Hr9",
    meals: [
      { name: "Breakfast", icon: "🌅", amount: 3500, note: "Breakfast+Royapetta" },
      { name: "Lunch",     icon: "🍽️",  amount: 5000, note: "Lunch+Royapetta" },
      { name: "Dinner",    icon: "🌙", amount: 5000, note: "Dinner+Royapetta" },
      { name: "Snacks",    icon: "🍊", amount: 1500, note: "Snacks+Royapetta" },
    ],
  },
  {
    name: "Anbagam Thirunilai",
    location: "Thirunilai",
    residents: 250,
    mapUrl: "https://maps.app.goo.gl/2W4WGuDhCoBH48PU6",
    meals: [
      { name: "Breakfast", icon: "🌅", amount: 5000,  note: "Breakfast+Thirunilai" },
      { name: "Lunch",     icon: "🍽️",  amount: 10000, note: "Lunch+Thirunilai" },
      { name: "Dinner",    icon: "🌙", amount: 6000, note: "Dinner+Thirunilai" },
      { name: "Snacks",    icon: "🍊", amount: 3000,  note: "Snacks+Thirunilai" },
    ],
  },
];

export function buildUpiLink(amount: number, note: string): string {
  return `upi://pay?pa=${UPI_ID}&pn=Anbagam&am=${amount}&tn=${note}&cu=INR`;
}
