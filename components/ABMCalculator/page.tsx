"use client"

import { useState, useEffect } from "react"
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { InfoIcon as InfoCircle, Printer, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { InfoIcon } from "lucide-react"
import { TooltipContentCards } from "../SEOCalculator/TooltipContentCard"

export default function ABMCalculator() {
  // Basic inputs
  const [targetListSize, setTargetListSize] = useState(100)
  const [contactsPerAccount, setContactsPerAccount] = useState(5)
  const [monthlyInvestment, setMonthlyInvestment] = useState(2200)
  const [currency, setCurrency] = useState("USD")

  // Outreach & Engagement inputs
  const [outreachCadence, setOutreachCadence] = useState(5)
  const [initialContactRate, setInitialContactRate] = useState(20)
  const [responseRate, setResponseRate] = useState(15)
  const [meetingBookedRate, setMeetingBookedRate] = useState(20)
  const [opportunityRate, setOpportunityRate] = useState(30)
  const [closeRate, setCloseRate] = useState(15)

  // Time & Cost inputs
  const [timeframe, setTimeframe] = useState(24) // Update default timeframe
  const [costPerContact, setCostPerContact] = useState(1)
  const [costPerOutreach, setCostPerOutreach] = useState(0.5)

  const [chartData, setChartData] = useState([])
  const [summary, setSummary] = useState({
    revenue: 0,
    costs: 0,
    profit: 0,
    dealsCount: 0,
    roi: "0",
  })

  // Calculate metrics
  const calculateMetrics = () => {
    const data = []
    let totalRevenue = 0
    let cumulativeCosts = 0

    // Calculate total contacts and base costs
    const totalContacts = targetListSize * contactsPerAccount
    const baseContactCost = totalContacts * costPerContact
    const monthlyOutreachCost = outreachCadence * costPerOutreach

    for (let i = 1; i <= timeframe; i++) {
      const monthlyRevenue = monthlyInvestment * 0.2 * i
      cumulativeCosts = baseContactCost + monthlyOutreachCost * i + monthlyInvestment * i
      const profit = monthlyRevenue - cumulativeCosts
      totalRevenue += monthlyRevenue

      data.push({
        month: `Month ${i}`,
        monthlyRevenue,
        totalCosts: cumulativeCosts,
        profit,
      })
    }

    return {
      chartData: data,
      summary: {
        revenue: totalRevenue,
        costs: cumulativeCosts,
        profit: totalRevenue - cumulativeCosts,
        dealsCount: Math.floor(
          (totalContacts * initialContactRate * responseRate * meetingBookedRate * opportunityRate * closeRate) /
            100000,
        ),
        roi: (((totalRevenue - cumulativeCosts) / cumulativeCosts) * 100).toFixed(2),
      },
    }
  }

  useEffect(() => {
    const { chartData: newChartData, summary: newSummary } = calculateMetrics()
    setChartData(newChartData)
    setSummary(newSummary)
  }, [
    targetListSize,
    contactsPerAccount,
    monthlyInvestment,
    outreachCadence,
    initialContactRate,
    responseRate,
    meetingBookedRate,
    opportunityRate,
    closeRate,
    timeframe,
    costPerContact,
    costPerOutreach,
  ])

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">ABM Campaign Forecasting Tool</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Target Audience & Reach */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Target Audience & Reach</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Target account list size</Label>
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
                            content: "The number of target accounts you plan to focus on in your ABM campaign.",
                          },
                          {
                            title: "Example",
                            content: 'If you\'re targeting 100 specific companies, enter "100" in this field.',
                          },
                          {
                            title: "Tip",
                            content:
                              "Consider your resources and capacity when determining your target account list size.",
                          },
                        ]}
                      />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Slider
                value={[targetListSize]}
                onValueChange={([value]) => setTargetListSize(value)}
                max={1000}
                step={1}
              />
              <div className="text-right text-sm text-muted-foreground">{targetListSize}</div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Number of contacts per account</Label>
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
                              "The average number of decision-makers or influencers you plan to engage within each target account.",
                          },
                          {
                            title: "Example",
                            content: 'If you typically engage with 5 contacts per company, enter "5" in this field.',
                          },
                          {
                            title: "Tip",
                            content:
                              "Consider different roles and departments that might be involved in the decision-making process.",
                          },
                        ]}
                      />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Slider
                value={[contactsPerAccount]}
                onValueChange={([value]) => setContactsPerAccount(value)}
                max={20}
                step={1}
              />
              <div className="text-right text-sm text-muted-foreground">{contactsPerAccount}</div>
            </div>
          </CardContent>
        </Card>

        {/* Deal Value */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Deal Value</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
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
                            content: "The amount you plan to invest monthly in your SEO efforts for this ABM campaign.",
                          },
                          {
                            title: "Example",
                            content: 'If you\'re allocating $2,200 per month for SEO, enter "2200" in this field.',
                          },
                          {
                            title: "Tip",
                            content:
                              "Consider your overall marketing budget and the importance of SEO in your ABM strategy when determining this amount.",
                          },
                        ]}
                      />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input
                type="number"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label>Currency</Label>
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD - US Dollar</SelectItem>
                  <SelectItem value="EUR">EUR - Euro</SelectItem>
                  <SelectItem value="GBP">GBP - British Pound</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <div className="flex-1">
          <div className="bg-slate-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Summary</h2>
              <Button size="icon" variant="ghost">
                <Printer className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Revenue</span>
                <span>${summary.revenue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Costs</span>
                <span>${summary.costs.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Profit</span>
                <span>${summary.profit.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Deals Closed</span>
                <span>{summary.dealsCount}</span>
              </div>
              <div className="flex justify-between">
                <span>ROI</span>
                <span>{summary.roi}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Outreach & Engagement */}
      <Collapsible>
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Outreach & Engagement</CardTitle>
                <ChevronDown className="h-4 w-4" />
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Outreach Cadence</Label>
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
                              content: "How often you plan to reach out to each contact in your target accounts.",
                            },
                            {
                              title: "Example",
                              content: 'If you plan to reach out 5 times per month, enter "5" in this field.',
                            },
                            {
                              title: "Tip",
                              content: "Consider the balance between persistence and avoiding being overly intrusive.",
                            },
                          ]}
                        />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Slider
                  value={[outreachCadence]}
                  onValueChange={([value]) => setOutreachCadence(value)}
                  max={20}
                  step={1}
                />
                <div className="text-right text-sm text-muted-foreground">{outreachCadence}</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Initial Contact Rate (%)</Label>
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
                              content: "The percentage of contacts you expect to successfully reach initially.",
                            },
                            {
                              title: "Example",
                              content:
                                'If you expect to reach 20% of contacts on the first attempt, enter "20" in this field.',
                            },
                            {
                              title: "Tip",
                              content:
                                "This rate can vary depending on your outreach methods and the quality of your contact data.",
                            },
                          ]}
                        />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Slider
                  value={[initialContactRate]}
                  onValueChange={([value]) => setInitialContactRate(value)}
                  max={100}
                  step={1}
                />
                <div className="text-right text-sm text-muted-foreground">{initialContactRate}%</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Response Rate (%)</Label>
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
                              content: "The percentage of contacted individuals who respond to your outreach.",
                            },
                            {
                              title: "Example",
                              content: 'If you expect a 15% response rate, enter "15" in this field.',
                            },
                            {
                              title: "Tip",
                              content:
                                "This rate can be improved by personalizing your outreach and offering valuable content.",
                            },
                          ]}
                        />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Slider value={[responseRate]} onValueChange={([value]) => setResponseRate(value)} max={100} step={1} />
                <div className="text-right text-sm text-muted-foreground">{responseRate}%</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Meeting Booked Rate (%)</Label>
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
                              content: "The percentage of respondents who agree to schedule a meeting.",
                            },
                            {
                              title: "Example",
                              content:
                                'If you expect to book meetings with 20% of respondents, enter "20" in this field.',
                            },
                            {
                              title: "Tip",
                              content:
                                "This rate can be improved by proposing clear meeting agendas and offering valuable insights.",
                            },
                          ]}
                        />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Slider
                  value={[meetingBookedRate]}
                  onValueChange={([value]) => setMeetingBookedRate(value)}
                  max={100}
                  step={1}
                />
                <div className="text-right text-sm text-muted-foreground">{meetingBookedRate}%</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Opportunity creation rate (%)</Label>
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
                              content: "The percentage of meetings that result in the creation of a sales opportunity.",
                            },
                            {
                              title: "Example",
                              content:
                                'If you expect 30% of meetings to turn into opportunities, enter "30" in this field.',
                            },
                            {
                              title: "Tip",
                              content:
                                "This rate can be improved by having well-qualified leads and a strong sales pitch.",
                            },
                          ]}
                        />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Slider
                  value={[opportunityRate]}
                  onValueChange={([value]) => setOpportunityRate(value)}
                  max={100}
                  step={1}
                />
                <div className="text-right text-sm text-muted-foreground">{opportunityRate}%</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Close rate (%)</Label>
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
                              content: "The percentage of sales opportunities that are successfully closed.",
                            },
                            {
                              title: "Example",
                              content: 'If you expect to close 15% of opportunities, enter "15" in this field.',
                            },
                            {
                              title: "Tip",
                              content:
                                "This rate can be improved by having a strong sales process and effective closing techniques.",
                            },
                          ]}
                        />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Slider value={[closeRate]} onValueChange={([value]) => setCloseRate(value)} max={100} step={1} />
                <div className="text-right text-sm text-muted-foreground">{closeRate}%</div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Time & Cost */}
      <Collapsible>
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Time & Cost</CardTitle>
                <ChevronDown className="h-4 w-4" />
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Timeframe (Months)</Label>
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
                              content: "The duration of your ABM campaign, in months.",
                            },
                            {
                              title: "Example",
                              content: 'If your campaign runs for 12 months, enter "12" in this field.',
                            },
                            {
                              title: "Tip",
                              content: "Consider your sales cycle and the time needed to achieve your desired results.",
                            },
                          ]}
                        />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input type="number" value={timeframe} onChange={(e) => setTimeframe(Number(e.target.value))} min={1} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Cost per Contact</Label>
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
                                "The estimated cost associated with each individual contact in your target accounts.",
                            },
                            {
                              title: "Example",
                              content: 'If the cost per contact is $1, enter "1" in this field.',
                            },
                            {
                              title: "Tip",
                              content: "Consider factors like data acquisition, outreach tools, and personnel time.",
                            },
                          ]}
                        />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  type="number"
                  value={costPerContact}
                  onChange={(e) => setCostPerContact(Number(e.target.value))}
                  min={0}
                  step={0.1}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Cost per Outreach</Label>
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
                              content: "The estimated cost of each individual outreach attempt.",
                            },
                            {
                              title: "Example",
                              content: 'If the cost per outreach is $0.50, enter "0.5" in this field.',
                            },
                            {
                              title: "Tip",
                              content: "Consider the cost of email marketing platforms or other outreach tools.",
                            },
                          ]}
                        />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  type="number"
                  value={costPerOutreach}
                  onChange={(e) => setCostPerOutreach(Number(e.target.value))}
                  min={0}
                  step={0.1}
                />
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Chart */}
      <Card>
        <CardContent className="pt-6">
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} stroke="#9CA3AF" fontSize={12} />
              <YAxis
                tickLine={false}
                axisLine={false}
                stroke="#9CA3AF"
                fontSize={12}
                tickFormatter={(value) => `${value}`}
              />
              <RechartsTooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-4 border rounded-lg shadow-lg">
                        <p className="font-medium">{label}</p>
                        {payload.map((entry, index) => (
                          <div key={index} className="flex items-center gap-2 mt-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                            <span className="text-sm text-gray-600">
                              {entry.name}: ${entry.value.toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Legend
                verticalAlign="top"
                height={36}
                formatter={(value) => <span className="text-sm text-gray-600">{value}</span>}
              />
              <Bar dataKey="monthlyRevenue" fill="#0038FF" name="Monthly Revenue" radius={[4, 4, 0, 0]} />
              <Line
                type="monotone"
                dataKey="totalCosts"
                stroke="#FDB022"
                name="Total Costs"
                strokeWidth={2}
                dot={false}
              />
              <Line type="monotone" dataKey="profit" stroke="#3CCB7F" name="Profit" strokeWidth={2} dot={false} />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

