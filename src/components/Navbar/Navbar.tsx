'use client';

import React, { useState } from 'react';
import { Menu, MenuItem } from '@/components/ui/navbar-menu';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        'fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 hidden md:block ',
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={'#home'}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <Link href={'#projects'}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
          ></MenuItem>
        </Link>

        <Link href={'#contact'}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>

        <Link href={'#services'}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Services"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
