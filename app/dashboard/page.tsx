"use client";


import { AppSidebar } from "@/components/app-sidebar"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import Link from "next/link"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {  ChevronDown, ChevronsUpDown } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Terminal } from "lucide-react"
import { AlertCircle } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { Badge } from "@/components/ui/badge"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb"

import { Slash } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"

import { ChevronRight } from "lucide-react"

import { Mail } from "lucide-react"

import { Loader2 } from "lucide-react"

import * as React from "react"
 
 


import { CarouselPlugin } from "@/components/sandbox/carouselPlugins"
import { AreaCharts } from "@/components/sandbox/AreaChart";
import { CheckboxDemo } from "@/components/sandbox/CheckboxDemo";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ComboboxDemo } from "@/components/sandbox/ComboboxDemo";
import { CommandDemo } from "@/components/sandbox/CommandDemo";
import CompanyLogo from "@/components/sandbox/companyLogo";
import RightSidebar from "@/components/right-sidebar";
import { ContextMenuDemo } from "@/components/sandbox/ContextMenuDemo";
import { DataTableDemo } from "@/components/sandbox/DataTableDemo";
import { DialogDemo } from "@/components/sandbox/DialogDemo";
import { DrawerDemo } from "@/components/sandbox/DrawerDemo";
import { DropdownMenuDemo } from "@/components/sandbox/DropdownMenuDemo";
import { DatePickerDemo } from "@/components/sandbox/DatePickerDemo";
import { InputForm } from "@/components/sandbox/Form";
import { HoverCardDemo } from "@/components/sandbox/HoverCardDemo";
import { InputDemo } from "@/components/sandbox/InputDemo";
import { InputOTPDemo } from "@/components/sandbox/InputOTPDemo";
import { LabelDemo } from "@/components/sandbox/LabelDemo";
import { MenubarDemo } from "@/components/sandbox/MenubarDemo";
import { PaginationDemo } from "@/components/sandbox/PaginationDemo";
import { PopoverDemo } from "@/components/sandbox/PopoverDemo";
import { ProgressDemo } from "@/components/sandbox/ProgressDemo";
import { RadioGroupDemo } from "@/components/sandbox/RadioGroupDemo";
import { ResizableDemo } from "@/components/sandbox/ResizableDemo";
import { ScrollAreaDemo } from "@/components/sandbox/ScrollAreaDemo";
import { SelectDemo } from "@/components/sandbox/SelectDemo";
import { SeparatorDemo } from "@/components/sandbox/SeparatorDemo";
import { SheetDemo } from "@/components/sandbox/SheetDemo";
import { SkeletonDemo } from "@/components/sandbox/SkeletonDemo";
import { SliderDemo } from "@/components/sandbox/SliderDemo";
import { SonnerDemo } from "@/components/sandbox/SonnerDemo";
import { SwitchDemo } from "@/components/sandbox/SwitchDemo";
import { TableDemo } from "@/components/sandbox/TableDemo";
import { TabsDemo } from "@/components/sandbox/TabsDemo";
import { TextareaDemo } from "@/components/sandbox/TextareaDemo";
import { ToggleDemo } from "@/components/sandbox/ToggleDemo";
import { ToggleGroupDemo } from "@/components/sandbox/ToggleGroupDemo";
import { TooltipDemo } from "@/components/sandbox/TooltipDemo";



export default function Page() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <SidebarProvider>
      <AppSidebar side="left" />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4 relative">
            <div className="flex bg-white rounded-xl shadow-md ">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <h1 className="text-lg font-semibold">Style Guide</h1>
            </div>
          </div> 
        </header>
        <div className=" flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Accordion</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-bold">Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-bold">Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-bold">Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Alert</h2>
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Alert Dialog</h2>
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button variant="outline">Show Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your account
                      and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Avatar</h2>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Badge</h2>
              <Badge className="w-fit">Badge</Badge>
              <Badge variant="secondary" className="w-fit">Secondary</Badge>
              <Badge variant="outline" className="w-fit">Outline</Badge>
              <Badge variant="destructive" className="w-fit">Destructive</Badge>
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Breadcrumb</h2>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <Slash />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <Slash />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <Slash />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1">
                        Components
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>Documentation</DropdownMenuItem>
                        <DropdownMenuItem>Themes</DropdownMenuItem>
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <Slash />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/docs/components">Components</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink>
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink>
                      <Link href="/components">Components</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Button</h2>
              <Button variant={"default"} className="w-fit">Click me</Button>
              <Button variant={"secondary"} className="w-fit">Click me</Button>
              <Button variant={"destructive"} className="w-fit">Click me</Button>
              <Button variant="outline" className="w-fit">Outline</Button>
              <Button variant="ghost" className="w-fit">Ghost</Button>
              <Button variant="link" className="w-fit">Link</Button>
              <Button variant="outline" size="icon">
                <ChevronRight />
              </Button>
              <Button>
                <Mail /> Login with Email
              </Button>
              <Button disabled>
                <Loader2 className="animate-spin" />
                Please waits
              </Button>
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Calender</h2>
              <Calendar
                mode="single"
                selected={new Date()}
                className="rounded-md border justify-items-center bg-[#F5F8FF] w-fit"
              />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Card</h2>
              <Card className="w-[400px] shadow-lg">
                <CardHeader className="flex flex-row gap-2 p-4 space-y-0">
                  <Badge variant="outline" className="w-fit">Go to market</Badge>
                  <Badge variant="outline" className="w-fit">Go to market</Badge>
                </CardHeader>
                <CardContent className="px-4 pt-1">
                  <img src="https://github.com/shadcn.png" alt="@shadcn"  className="rounded-xl w-[434px]" />
                </CardContent>
                <CardContent className="flex flex-col gap-2 p-4">
                  <CardTitle>Financial Planning & Analysis</CardTitle>
                  <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between p-4 gap-12">
                    <CompanyLogo />
                    <div className="flex flex-row gap-3 items-center">
                      <DatePickerDemo />
                      <Button className="rounded-2xl">Learn New Skill</Button>
                    </div>
                </CardFooter>
              </Card>
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Carousel</h2>
              <div className="mx-auto max-w-xs">
                <CarouselPlugin /> 
                {/* Harus buat card baru */}
              </div>
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Chart</h2>
                <AreaCharts />
                {/* Harus buat card baru */}
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Checkbox</h2>
              <CheckboxDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Collapsible</h2>
              <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="w-[350px] space-y-2"
              >
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-sm font-semibold">
                    @peduarte starred 3 repositories
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  @radix-ui/primitives
                </div>
                <CollapsibleContent className="space-y-2">
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    @radix-ui/colors
                  </div>
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    @stitches/react
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Combobox</h2>
              <ComboboxDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Command</h2>
              <CommandDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">ContextMenu</h2>
              <ContextMenuDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">DataTable</h2>
              <DataTableDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">DataTable</h2>
              <DatePickerDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Dialog</h2>
                <DialogDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Drawer</h2>
              <DrawerDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">DropdownMenu</h2>
              <DropdownMenuDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">InputForm</h2>
              <InputForm  />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">HoverCard</h2>
              <HoverCardDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Input</h2>
              <InputDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">InputOTP</h2>
              <InputOTPDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Label</h2>
              <LabelDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Menubar</h2>
              <MenubarDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Pagination</h2>
              <PaginationDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">PopOver</h2>
              <PopoverDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Progress</h2>
              <ProgressDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">RadioGroup</h2>
              <RadioGroupDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Resizable</h2>
              <ResizableDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">ScrollArea</h2>
              <ScrollAreaDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Select</h2>
              <SelectDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Separator</h2>
              <SeparatorDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Sheet</h2>
              <SheetDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Skeleton</h2>
              <SkeletonDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Slider</h2>
              <SliderDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Sonner</h2>
              <SonnerDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Switch</h2>
              <SwitchDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Table</h2>
              <TableDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Tabs</h2>
              <TabsDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">TextArea</h2>
              <TextareaDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">Toggle</h2>
              <ToggleDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">ToggleGroup</h2>
              <ToggleGroupDemo />
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md">
              <h2 className="text-lg font-semibold">ToolTip</h2>
              <TooltipDemo />
            </div>
          </div>
        </div>
      <RightSidebar />
      </SidebarInset>
    </SidebarProvider>
  )
}