"use server";

interface EconomicData {
  month: string;
  gdp_growth: number;
  unemployment_rate: number;
  id: string;
}

interface ChartData {
  id: string;
  browser: string;
  visitors: number;
  fill: string;
}

export async function getEconomicData() {
  try {
    const response = await fetch(
      "https://68b199cca860fe41fd5efbd8.mockapi.io/monthlyEconomicData"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data: EconomicData[] = await response.json();

    // Modify data to increase range
    const modifiedData = data.map((item, index) => ({
      ...item,
      gdp_growth: [1.5, 3.2, 4.8, 2.0, 3.8, 2.5][index] || item.gdp_growth,
      unemployment_rate:
        [7.0, 6.5, 5.5, 6.0, 4.5, 7.5][index] || item.unemployment_rate,
    }));

    return modifiedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function getChartData() {
  try {
    const response = await fetch(
      "https://68b309bbc28940c9e69dff30.mockapi.io/chartData"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch chart data");
    }
    const data: ChartData[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching chart data:", error);
    return [];
  }
}
