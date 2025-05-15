'use client';

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ModeToggle } from "../app/mode-toggle"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold">
        TaskNinja ⚔️
      </Link>
    <div className="flex gap-4">
        <Link href="/tasks">
          <Button variant="ghost">Tasks</Button>
        </Link>
        <Link href="/about">
          <Button variant="ghost">About</Button>
        </Link>
          <ModeToggle />
      </div>
    </nav>
  )
}

