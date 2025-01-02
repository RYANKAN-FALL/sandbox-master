"use-client"

import { AppSidebar } from "./app-sidebar";
import { SidebarProvider } from "./ui/sidebar";
import { useState } from "react";

export default function RightSidebar() {
  const [open, setOpen] = useState(false);
  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <AppSidebar side="right"/>
    </SidebarProvider>
  );
}