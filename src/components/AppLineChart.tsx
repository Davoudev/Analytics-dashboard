"use client";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { getEconomicData } from "@/app/actions/economicData";

const chartConfig = {
  gdp_growth: {
    label: "GDP Growth",
    color: "var(--chart-1)",
  },
  unemployment_rate: {
    label: "Unemployment Rate",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

interface EconomicData {
  month: string;
  gdp_growth: number;
  unemployment_rate: number;
  id: string;
}

const AppLineChart = () => {
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
    <ChartContainer config={chartConfig} className="mt-6">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="gdp_growth"
          type="monotone"
          stroke="var(--color-gdp_growth)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="unemployment_rate"
          type="monotone"
          stroke="var(--color-unemployment_rate)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
};

export default AppLineChart;
