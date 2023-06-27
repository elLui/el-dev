"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import PropTypes from "prop-types";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { clsx } from "clsx";
import { it } from "node:test";

const MainNav = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {siteConfig.navigation.map((item, index) => {
            return (
              <Link href={item.id} key={item.id}>
                <NavigationMenuLink>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                </NavigationMenuLink>
              </Link>
            );
          })}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
MainNav.propTypes = {};
export default MainNav;
