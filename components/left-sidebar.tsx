"use-client"

import { AppSidebar } from "./app-sidebar";
import { SidebarProvider } from "./ui/sidebar";
import { useState } from "react";

export default function LeftSidebar() {
  const [open, setOpen] = useState(false);
  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <AppSidebar side="left"/>
    </SidebarProvider>
  );
}