"use server";

interface EconomicData {
  month: string;
  gdp_growth: number;
  unemployment_rate: number;
  id: string;
}

export async function getEconomicData() {
  try {
    const response = await fetch(
      "https://68b199cca860fe41fd5efbd8.mockapi.io/monthlyEconomicData"
    );
    if (!response.ok) {
      throw new Error("خطا در دریافت داده‌ها");
    }
    const data: EconomicData[] = await response.json();
    return data;
  } catch (error) {
    console.error("خطا در دریافت داده‌ها:", error);
    return [];
  }
}
