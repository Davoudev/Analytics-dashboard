"use client";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import { getEconomicData } from "@/app/actions/economicData";

const chartConfig = {
  gdp_growth: {
    label: "GDP Growth",
    color: "var(--chart-1)",
  },
  unemployment_rate: {
    label: "Unemployment Rate",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

interface EconomicData {
  month: string;
  gdp_growth: number;
  unemployment_rate: number;
  id: string;
}

const AppChartBar = () => {
  const [chartData, setChartData] = useState<EconomicData[]>([]);

  // Initial data fetch
  useEffect(() => {
    const fetchData = async () => {
      const data = await getEconomicData();
      setChartData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Economic Data</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <CartesianGrid vertical={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="gdp_growth" fill="var(--color-gdp_growth)" radius={4} />
          <Bar
            dataKey="unemployment_rate"
            fill="var(--color-unemployment_rate)"
            radius={4}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default AppChartBar;
