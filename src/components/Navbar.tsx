'use client'

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string })  {

  const [active, setActive] = useState<string | null>(null);

  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
         <Link href="/">
            <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
         </Link>

         <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-0">
               <HoveredLink href="/web-dev">All Course</HoveredLink>
               <HoveredLink href="/interface-design">Music Theory</HoveredLink>
               <HoveredLink href="/seo">Advance Composition</HoveredLink>
               <HoveredLink href="/branding">Music Production</HoveredLink>
            </div>
         </MenuItem>
         <Link href="/">
            <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
         </Link>

      </Menu>
    </div>
  )
}

export default Navbar