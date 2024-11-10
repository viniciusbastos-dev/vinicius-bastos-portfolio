import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "./ui/sidebar";
import Link from "next/link";
import { Links } from "@/config/config";
import { X } from "@phosphor-icons/react/dist/ssr";
import Button from "./Button";
import { SheetTitle } from "./ui/sheet";

interface Props {}

const MobileSidebar: React.FC<Props> = () => {
  return (
    <Sidebar side="right">
      <SheetTitle className="sr-only">Menu</SheetTitle>

      <SidebarHeader>
        <SidebarTrigger icon={<X weight="bold" />} />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {Links.map((link, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link href={link.href} className="text-lg">
                      <link.icon />
                      {link.text}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button small>Currículo</Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default MobileSidebar;
