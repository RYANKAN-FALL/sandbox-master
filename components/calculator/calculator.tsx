'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

    return {
      monthlyRevenue,
      totalRevenue,
      totalCosts,
      totalProfit
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
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Projected Profit and Loss Summary</h1>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium">Total Revenue</p>
                  <h3 className="text-2xl font-bold">{formatCurrency(metrics.totalRevenue)}</h3>
                  <p className="text-sm text-blue-600">↑ 7.5%</p>
                </div>
                <TrendingUp className="h-5 w-5 text-gray-400" />
              </div>
              <div className="mt-4 flex justify-between text-sm text-gray-600">
                <span>+{formatCurrency(metrics.monthlyRevenue)}</span>
                <button className="ml-2 flex items-center text-gray-500 hover:text-gray-700">
                  Go to Revenue <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium">Total Expenses & Costs</p>
                  <h3 className="text-2xl font-bold">{formatCurrency(metrics.totalCosts)}</h3>
                  <p className="text-sm text-blue-600">↑ 7.5%</p>
                </div>
                <Calculator className="h-5 w-5 text-gray-400" />
              </div>
              <div className="mt-4 flex justify-between text-sm text-gray-600">
                <span>+{formatCurrency(parseFloat(seoInvestment) + parseFloat(additionalExpenses))}</span>
                <button className="ml-2 flex items-center text-gray-500 hover:text-gray-700">
                  Go to Expenses & Costs <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium">Net Profit</p>
                  <h3 className="text-2xl font-bold">{formatCurrency(metrics.totalProfit)}</h3>
                  <p className="text-sm text-blue-600">↑ 7.5%</p>
                </div>
                <PiggyBank className="h-5 w-5 text-gray-400" />
              </div>
              <div className="mt-4 flex justify-between text-sm text-gray-600">
                <span>+{formatCurrency(metrics.monthlyRevenue - (parseFloat(seoInvestment) + parseFloat(additionalExpenses)))}</span>
                <button className="ml-2 flex items-center text-gray-500 hover:text-gray-700">
                  Go to Cashflow <ArrowRight className="ml-1 h-4 w-4" />
                </button>
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
              placeholder="Enter monthly traffic"
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
              placeholder="Enter revenue per customer"
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
              placeholder="Enter SEO investment"
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
              placeholder="Enter additional expenses"
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
            />
            <div className="text-sm text-gray-500">{planningMonths} month</div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}

