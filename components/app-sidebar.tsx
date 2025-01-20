"use client";

import { 
  Search, 
  ChevronRight, 
  Pin,
  FileText, 
  Map,
  TrendingUpDownIcon,
  HelpCircle,
  Building2,
  Focus,
  Layers,
  Warehouse,
  UserPlus,
  BellDot,
  MonitorPlay,
  ListOrdered,
  Sparkles,
  MessageCircleQuestion,
} from 'lucide-react';
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import DevhausLogo from '@/src/assets/DevhausLogo';
import { NavUser } from './nav-user';
import AbbiyuImg from "@/src/assets/AbbiyuAvatarImage.png";
import { SearchForm } from './search-form';

const data = {
  user: {
    name: "Farilzi Abbiyu",
    email: "abbiyu@devhaus.com.sg",
    avatar: AbbiyuImg,
  },
};

const mainNavItems = [
  { icon: <Building2 strokeWidth={1.5} color="#030033" />, label: "Grand Stand" },
  { icon: <Pin strokeWidth={1.5} color="#030033" className="-rotate-90" />, label: "Pinned", badge: "2" },
  {
    icon: <Focus strokeWidth={1.5} color="#030033" />,
    label: "Deep work zone",
    submenu: [
      { label: "Courses", icon: <MonitorPlay strokeWidth={1.5} color="#030033" /> },
      { label: "Guides", icon: <ListOrdered strokeWidth={1.5} color="#030033" /> },
      { label: "Blueprint", icon: <Map strokeWidth={1.5} color="#030033" /> },
    ],
  },
  { icon: <Layers strokeWidth={1.5} color="#030033" />, label: "Repository" },
  { icon: <FileText strokeWidth={1.5} color="#030033" />, label: "Documents" },
  {
    icon: <MessageCircleQuestion strokeWidth={1.5} color="#030033" />,
    label: "Ask Alfred",
    submenu: [
      { icon: <Sparkles strokeWidth={1.5} color="#030033" />, label: "Plan" },
      { icon: <TrendingUpDownIcon strokeWidth={1.5} color="#030033" />, label: "Forecast", active: true },
    ],
  },
  { icon: <Warehouse strokeWidth={1.5} color="#030033" />, label: "Leader's Hangar" },
];

export function AppSidebar() {
  return (
    <Sidebar variant='inset' collapsible="icon">
      <SidebarHeader>
        <div className="">
          <div className="text-xl font-semibold mb-4 flex items-center gap-2">
            <DevhausLogo width={120} />
          </div>
        </div>
      </SidebarHeader>

      <SearchForm/>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  {item.submenu ? (
                    <Collapsible className="group">
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="w-full gap-3 justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-[#030033]">{item.label}</span>
                          </div>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.submenu.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.label}>
                              <SidebarMenuSubButton>
                                <span className="text-lg mr-2">
                                  {subItem.icon}
                                </span>
                                {subItem.label}
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton className="gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-[#030033]">{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto text-white px-2 py-0.5 rounded-md text-xs bg-[#0038FF]">
                          {item.badge}
                        </span>
                      )}
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="gap-3">
                  <span className="text-lg"><HelpCircle strokeWidth={1.5} color="#030033" /></span>
                  <span>Support</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="gap-3">
                  <span className="text-lg"><UserPlus strokeWidth={1.5} color="#030033" /></span>
                  <span>Invite your team</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="gap-3">
                  <span className="text-lg"><BellDot strokeWidth={1.5} color="#030033" /></span>
                  <span>Notification</span>
                  <span className="ml-auto text-white px-2 py-0.5 rounded-md text-xs bg-[#0038FF]">
                          3
                        </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </SidebarFooter>
    </Sidebar>
  );
}
