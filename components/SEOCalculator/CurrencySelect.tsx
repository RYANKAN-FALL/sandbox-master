import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const currencyOptions = [
  { value: "$", label: "USD - US Dollar" },
  { value: "€", label: "EUR - Euro" },
  { value: "£", label: "GBP - British Pound" },
  { value: "¥", label: "JPY - Japanese Yen" },
  { value: "₹", label: "INR - Indian Rupee" },
  { value: "C$", label: "CAD - Canadian Dollar" },
  { value: "A$", label: "AUD - Australian Dollar" },
  { value: "CHF", label: "CHF - Swiss Franc" },
  { value: "CN¥", label: "CNY - Chinese Yuan" },
  { value: "KR₩", label: "KRW - South Korean Won" },
]

interface CurrencySelectProps {
  onCurrencyChange: (currency: string) => void
  initialCurrency?: string
}

export function CurrencySelect({ onCurrencyChange, initialCurrency = "$" }: CurrencySelectProps) {
  const [currency, setCurrency] = useState(initialCurrency)

  const handleCurrencyChange = (value: string) => {
    setCurrency(value)
    onCurrencyChange(value)
  }

  return (
    <Select value={currency} onValueChange={handleCurrencyChange}>
      <SelectTrigger className="text-[#030033] w-[180px] bg-white drop-shadow-sm h-full">
        <SelectValue placeholder="Select currency" />
      </SelectTrigger>
      <SelectContent>
        {currencyOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

