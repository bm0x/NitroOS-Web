'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface TopBarProps {
  onLock: () => void;
}

export default function TopBar({ onLock }: TopBarProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute top-0 left-0 right-0 bg-gray-800 p-2 flex justify-between items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={onLock}>Lock</DropdownMenuItem>
          <DropdownMenuItem onClick={() => alert('Restart simulation')}>Restart</DropdownMenuItem>
          <DropdownMenuItem onClick={() => alert('Shutdown simulation')}>Shut Down</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="text-center">
        <div>{currentTime.toLocaleTimeString()}</div>
        <div>{currentTime.toLocaleDateString()}</div>
      </div>
      <div className="w-[100px]"></div>
    </div>
  )
}

