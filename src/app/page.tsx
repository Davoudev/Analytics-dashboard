import AppAreaChart from "@/components/AppAreaChart";
import AppChartBar from "@/components/AppChartBar";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import Script from "next/script";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4  gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg  lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppChartBar />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg  ">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg  ">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg  ">
        <TodoList />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg  lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg  ">
        <CardList title="Popular Content" />
      </div>
      <Script
        src="https://cdn.jotfor.ms/agent/embedjs/0198e5ae56ca745e8b3cb537b88bd052e4f3/embed.js"
        strategy="lazyOnload"
      ></Script>
    </div>
  );
}
