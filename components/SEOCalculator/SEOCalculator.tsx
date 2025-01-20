"use client";

import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CurrencySelect } from "@/components/SEOCalculator/CurrencySelect";
import IconTotalRevenue from "@/components/ui/icons/IconTotalRevenue";
import IconTotalExpenses from "@/components/ui/icons/IconTotalExpenses";
import IconNetProfit from "@/components/ui/icons/IconNetProfit";
import { TooltipContentCards } from "@/components/SEOCalculator/TooltipContentCard";


export default function SeoCalculator() {
  const [monthlyTrafficIncrease, setMonthlyTrafficIncrease] = useState(3000);
  const [conversionRate, setConversionRate] = useState(20);
  const [averageOrderValue, setAverageOrderValue] = useState(20);
  const [seoCampaignCost, setSeoCampaignCost] = useState(2200);
  const [otherCosts, setOtherCosts] = useState(1500);
  const [forecastMonths, setForecastMonths] = useState(24);
  const [currency, setCurrency] = useState("$");

  const chartData = useMemo(() => {
    const data = [];
    let totalRevenue = 0;
    let totalCosts = 0;
    let cumulativeProfit = 0;
    let cumulativeTraffic = 0;

    for (let month = 1; month <= forecastMonths; month++) {
      cumulativeTraffic += Number(monthlyTrafficIncrease);
      const monthlyRevenue =
        cumulativeTraffic *
        (Number(conversionRate) / 100) *
        Number(averageOrderValue);
      const monthlyCost = Number(seoCampaignCost) + Number(otherCosts);

      totalRevenue += monthlyRevenue;
      totalCosts += monthlyCost;
      cumulativeProfit = totalRevenue - totalCosts;

      data.push({
        month: `Month ${month}`,
        monthlyRevenue: monthlyRevenue,
        totalCosts: totalCosts,
        profit: cumulativeProfit,
      });
    }

    return { data, totalRevenue, totalCosts, totalProfit: cumulativeProfit };
  }, [
    monthlyTrafficIncrease,
    conversionRate,
    averageOrderValue,
    seoCampaignCost,
    otherCosts,
    forecastMonths,
  ]);

  const exportPdf = () => {
    console.log("Exporting PDF...");
    
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <h1 className="text-4xl font-bold mb-8">SEO Campaign Planning Tool</h1>

      <div className="bg-[#F5F8FF] p-8 rounded-lg mb-8">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Projected Profit and Loss Summary
          </h2>
          <div className="flex gap-4">
            <CurrencySelect
              onCurrencyChange={setCurrency}
              initialCurrency={currency}
            />
            <Button className="h-full" variant="default" onClick={exportPdf} >
              Export to PDF
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-semibold text-[#030033] mb-2">
                  Total Revenue
                </p>
                <p className="text-2xl text-[#030033] font-bold">
                  {currency}
                  {' '}
                  {chartData.totalRevenue.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <IconTotalRevenue width={28} height={28} />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-semibold text-[#030033] mb-2">
                  Total Expenses & Costs
                </p>
                <p className="text-2xl text-[#030033] font-bold">
                  {currency}
                  {' '}
                  {chartData.totalCosts.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <IconTotalExpenses width={28} height={28} />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-semibold text-[#030033] mb-2">
                  Net Profit
                </p>
                <p className="text-2xl text-[#030033] font-bold">
                  {currency}
                  {' '}
                  {chartData.totalProfit.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <IconNetProfit width={28} height={28} />
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Estimated monthly traffic growth</Label>
              <TooltipProvider>
                <Tooltip delayDuration={150}>
                  <TooltipTrigger className="bg-transparent hover:outline-none focus:outline-none px-4">
                    <InfoIcon color="#030033" className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-white shadow-md p-4">
                    <TooltipContentCards
                      cards={[
                        {
                          title: "Definition",
                          content:
                            "The estimated percentage increase in your website traffic each month due to your SEO efforts.",
                        },
                        {
                          title: "Example",
                          content:
                            'If you expect your traffic to grow by 5% each month, enter "5" in the field.',
                        },
                        {
                          title: "Tip",
                          content:
                            "Be realistic in your estimation. Consider factors such as your current SEO performance, the competitiveness of your industry, and your planned SEO activities.",
                        },
                      ]}
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              type="number"
              value={monthlyTrafficIncrease}
              onChange={(e) =>
                setMonthlyTrafficIncrease(Number(e.target.value))
              }
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Projected Revenue Per Customer</Label>
              <TooltipProvider>
                <Tooltip delayDuration={150}>
                  <TooltipTrigger className="bg-transparent hover:outline-none focus:outline-none px-4">
                    <InfoIcon color="#030033" className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-white shadow-md p-4">
                    <TooltipContentCards
                      cards={[
                        {
                          title: "Definition",
                          content:
                            "The estimated average revenue you generate from each converted customer.",
                        },
                        {
                          title: "Example",
                          content:
                            'If your average order value is $100, enter "100" in the field.',
                        },
                        {
                          title: "Tip",
                          content:
                            "Consider your pricing strategy, product mix, and any upselling or cross-selling opportunities that could influence revenue per user.",
                        },
                      ]}
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              type="number"
              value={averageOrderValue}
              onChange={(e) => setAverageOrderValue(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Planned monthly SEO investment</Label>
              <TooltipProvider>
                <Tooltip delayDuration={150}>
                  <TooltipTrigger className="bg-transparent hover:outline-none focus:outline-none px-4">
                    <InfoIcon color="#030033" className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-white shadow-md p-4">
                    <TooltipContentCards
                      cards={[
                        {
                          title: "Definition",
                          content:
                            "Your planned monthly budget for SEO activities, including content creation, link building, technical SEO, and other related expenses.",
                        },
                        {
                          title: "Example",
                          content:
                            'If you plan to spend $5,000 per month on SEO, enter "5000" in the field.',
                        },
                        {
                          title: "Tip",
                          content:
                            "Allocate your budget strategically across different SEO activities based on your specific needs and priorities.",
                        },
                      ]}
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              type="number"
              value={seoCampaignCost}
              onChange={(e) => setSeoCampaignCost(Number(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Additional monthly expenses (optional)</Label>
              <TooltipProvider>
                <Tooltip delayDuration={150}>
                  <TooltipTrigger className="bg-transparent hover:outline-none focus:outline-none px-4">
                    <InfoIcon color="#030033" className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-white shadow-md p-4">
                    <TooltipContentCards
                      cards={[
                        {
                          title: "Definition",
                          content:
                            "Any additional expenses related to your SEO strategy that are not included in your planned monthly SEO investment. This could include costs such as website hosting, domain registration, or marketing automation tools.",
                        },
                        {
                          title: "Example",
                          content:
                            'If you have $500 in additional monthly expenses, enter "500" in the field.',
                        },
                        {
                          title: "Tip",
                          content:
                            "Be sure to include all relevant expenses to get an accurate picture of your SEO profitability.",
                        },
                      ]}
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              type="number"
              value={otherCosts}
              onChange={(e) => setOtherCosts(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <Label>Expected Conversion Rate (%)</Label>
              <TooltipProvider>
                <Tooltip delayDuration={150}>
                  <TooltipTrigger className="bg-transparent hover:outline-none focus:outline-none px-4">
                    <InfoIcon color="#030033" className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-white shadow-md p-4">
                    <TooltipContentCards
                      cards={[
                        {
                          title: "Definition",
                          content:
                            "The percentage of website visitors you expect to convert into paying customers. ( or for higher ticket products/services - typically these could be your SALs - sales accepted leads )",
                        },
                        {
                          title: "Example",
                          content:
                            'If you expect 2% of your visitors to make a purchase, enter "2" in the field.',
                        },
                        {
                          title: "Tip",
                          content:
                            "Analyze your historical conversion rates and consider any planned improvements to your website or marketing funnel that could impact conversions.",
                        },
                      ]}
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Slider
              value={[conversionRate]}
              onValueChange={([value]) => setConversionRate(value)}
              max={100}
              step={1}
            />
            <span className="text-sm text-muted-foreground">
              {conversionRate}%
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Planning timeline</Label>
              <div className="py-[20px]"></div>
            </div>
            <Slider
              value={[forecastMonths]}
              onValueChange={([value]) => setForecastMonths(value)}
              max={36}
              step={1}
            />
            <span className="text-sm text-muted-foreground">
              {forecastMonths} months
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          Projected Financial Timeline
        </h2>
        <div className="h- w-full sm:h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                data={chartData.data}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <RechartsTooltip />
                <Legend
                    verticalAlign="top"
                    height={36}
                    formatter={(value) => (
                    <span style={{ color: "black" }}>{value}</span>
                    )}
                />
                <Bar
                    dataKey="monthlyRevenue"
                    fill="#0038FF"
                    name="Monthly Revenue"
                />
                <Line
                    width={2}
                    type="monotone"
                    dataKey="totalCosts"
                    stroke="#FDB022"
                    name="Total Costs"
                />
                <Line
                    width={2}
                    type="monotone"
                    dataKey="profit"
                    stroke="#3CCB7F"
                    name="Profit"
                />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
