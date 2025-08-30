"use client";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import { getEconomicData } from "@/app/actions/economicData";

const chartConfig = {
  gdp_growth: {
    label: "GDP Growth",
    color: "var(--chart-2)",
  },
  unemployment_rate: {
    label: "Unemployment Rate",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

interface EconomicData {
  month: string;
  gdp_growth: number;
  unemployment_rate: number;
  id: string;
}

const AppAreaChart = () => {
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
      <h1 className="text-lg font-medium mb-6">Economic Trends</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <AreaChart accessibilityLayer data={chartData}>
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
          <defs>
            <linearGradient id="fillGdpGrowth" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-gdp_growth)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-gdp_growth)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient
              id="fillUnemploymentRate"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="var(--color-unemployment_rate)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-unemployment_rate)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="unemployment_rate"
            type="natural"
            fill="url(#fillUnemploymentRate)"
            fillOpacity={0.4}
            stroke="var(--color-unemployment_rate)"
            stackId="a"
          />
          <Area
            dataKey="gdp_growth"
            type="natural"
            fill="url(#fillGdpGrowth)"
            fillOpacity={0.4}
            stroke="var(--color-gdp_growth)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default AppAreaChart;
