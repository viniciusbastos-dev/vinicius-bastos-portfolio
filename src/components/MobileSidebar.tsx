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
import { Button } from "./ui/button";
import { SheetTitle } from "./ui/sheet";
import { LINKS } from "@/config/routes";
import { X } from "lucide-react";

export default function MobileSidebar() {
  return (
    <Sidebar side="right">
      <SheetTitle className="sr-only">Menu</SheetTitle>

      <SidebarHeader>
        <SidebarTrigger>
          <X />
        </SidebarTrigger>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {LINKS.map((link) => (
                <SidebarMenuItem key={link.href}>
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
                  <Button variant="custom" size="small">
                    Currículo
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
