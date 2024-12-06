'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { useWallpaper } from './WallpaperContext'

interface LockScreenProps {
  onUnlock: () => void;
}

export default function LockScreen({ onUnlock }: LockScreenProps) {
  const [currentTime, setCurrentTime] = useState(new Date())
  const { wallpaper } = useWallpaper()

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div 
      className="h-full w-full flex flex-col justify-center items-center"
      style={{backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <div className="text-6xl mb-4">{currentTime.toLocaleTimeString()}</div>
      <div className="text-2xl mb-8">{currentTime.toLocaleDateString()}</div>
      <Button onClick={onUnlock}>Unlock</Button>
    </div>
  )
}

