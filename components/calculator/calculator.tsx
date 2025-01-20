'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ArrowRight, HelpCircle, TrendingUp, Calculator, PiggyBank } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

export default function SEOCalculator() {
  const [monthlyTraffic, setMonthlyTraffic] = useState("3000")
  const [revenuePerCustomer, setRevenuePerCustomer] = useState("20")
  const [conversionRate, setConversionRate] = useState(2.5)
  const [seoInvestment, setSeoInvestment] = useState("2200")
  const [additionalExpenses, setAdditionalExpenses] = useState("1500")
  const [planningMonths, setPlanningMonths] = useState(24)
  const [currency, setCurrency] = useState("USD")

  const calculateMetrics = () => {
    const traffic = parseFloat(monthlyTraffic) || 0
    const revenue = parseFloat(revenuePerCustomer) || 0
    const seoCost = parseFloat(seoInvestment) || 0
    const expenses = parseFloat(additionalExpenses) || 0
    
    const monthlyRevenue = traffic * (conversionRate / 100) * revenue
    const totalRevenue = monthlyRevenue * planningMonths
    const totalCosts = (seoCost + expenses) * planningMonths
    const totalProfit = totalRevenue - totalCosts

    // Generate chart data
    const chartData = Array.from({ length: planningMonths }, (_, i) => {
      const month = i + 1
      return {
        month: `Month ${month}`,
        revenue: monthlyRevenue * month,
        costs: (seoCost + expenses) * month,
        profit: (monthlyRevenue * month) - ((seoCost + expenses) * month)
      }
    })

    return {
      monthlyRevenue,
      totalRevenue,
      totalCosts,
      totalProfit,
      chartData
    }
  }

  const metrics = calculateMetrics()

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <TooltipProvider>
      <div className="w-full p-6 space-y-6">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">SEO Campaign Planning Tool</h1>
          
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Projected Profit and Loss Summary</h2>
            <div className="flex items-center gap-4">
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD - US Dollar</SelectItem>
                  <SelectItem value="EUR">EUR - Euro</SelectItem>
                  <SelectItem value="GBP">GBP - British Pound</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Export to PDF</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                    <h3 className="text-2xl font-bold mt-1">{formatCurrency(metrics.totalRevenue)}</h3>
                  </div>
                  <TrendingUp className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Expenses & Costs</p>
                    <h3 className="text-2xl font-bold mt-1">{formatCurrency(metrics.totalCosts)}</h3>
                  </div>
                  <Calculator className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Net Profit</p>
                    <h3 className="text-2xl font-bold mt-1">{formatCurrency(metrics.totalProfit)}</h3>
                  </div>
                  <PiggyBank className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Label>Estimated monthly traffic growth</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Expected increase in monthly website visitors</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Input
                type="number"
                value={monthlyTraffic}
                onChange={(e) => setMonthlyTraffic(e.target.value)}
                className="bg-white"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Label>Projected Revenue Per Customer</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Average revenue generated per customer</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Input
                type="number"
                value={revenuePerCustomer}
                onChange={(e) => setRevenuePerCustomer(e.target.value)}
                className="bg-white"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Label>Expected Conversion Rate (%)</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Percentage of visitors that become customers</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Slider
                value={[conversionRate]}
                onValueChange={(value) => setConversionRate(value[0])}
                max={5}
                step={0.1}
                className="py-4"
              />
              <div className="text-sm text-gray-500">{conversionRate}%</div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Label>Planned monthly SEO investment</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Monthly budget allocated for SEO activities</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Input
                type="number"
                value={seoInvestment}
                onChange={(e) => setSeoInvestment(e.target.value)}
                className="bg-white"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Label>Additional monthly expenses (optional)</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Other monthly costs related to your SEO campaign</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Input
                type="number"
                value={additionalExpenses}
                onChange={(e) => setAdditionalExpenses(e.target.value)}
                className="bg-white"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Label>Planning timeline</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Duration of your SEO campaign in months</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Slider
                value={[planningMonths]}
                onValueChange={(value) => setPlanningMonths(value[0])}
                max={24}
                min={1}
                step={1}
                className="py-4"
              />
              <div className="text-sm text-gray-500">{planningMonths} months</div>
            </div>
          </div>

          <div className="h-[400px] w-full mt-8">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={metrics.chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month" 
                  interval={1}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#2563eb" 
                  name="Monthly Revenue"
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="costs" 
                  stroke="#f59e0b" 
                  name="Total Costs"
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="profit" 
                  stroke="#10b981" 
                  name="Profit"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}

