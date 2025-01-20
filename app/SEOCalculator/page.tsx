"use client";


import SeoCalculator from "@/components/SEOCalculator/SEOCalculator";
import { AppSidebar } from "@/components/app-sidebar"
import SEOCalculator from "@/components/calculator/calculator";
import { SliderDemo } from "@/components/sandbox/SliderDemo";

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Slider } from "@radix-ui/react-slider";

import * as React from "react"



export default function Page() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <SidebarProvider>
      <AppSidebar side="left" />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4 relative">
            <SidebarTrigger />
            <div className="flex bg-white rounded-xl shadow-md ">
            </div>
          </div> 
        </header>
        <div className=" flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="">
            <SeoCalculator />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}