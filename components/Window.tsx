'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useWallpaper } from './WallpaperContext'
import Browser from './Browser'
import React from 'react';

interface WindowProps {
  app: string;
  onClose: () => void;
}

export default function Window({ app, onClose }: WindowProps) {
  const [position, setPosition] = useState({ x: 100, y: 100 })
  const { wallpaper, setWallpaper } = useWallpaper()
  const [newWallpaper, setNewWallpaper] = useState(wallpaper)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const startX = e.pageX - position.x
    const startY = e.pageY - position.y

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.pageX - startX,
        y: e.pageY - startY
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }, { once: true })
  }

  const renderContent = () => {
    switch (app) {
      case 'Browser':
        return <Browser />
      case 'Settings':
        return (
          <div>
            <h2 className="text-lg font-semibold mb-2">Change Wallpaper</h2>
            <Input 
              type="text" 
              value={newWallpaper} 
              onChange={(e) => setNewWallpaper(e.target.value)}
              className="mb-2"
              placeholder="Enter wallpaper URL"
            />
            <Button onClick={() => setWallpaper(newWallpaper)}>Apply</Button>
          </div>
        )
      default:
        return <div>Content for {app}</div>
    }
  }

  return (
    <Card 
      className="absolute shadow-lg"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        width: '400px',
        height: '300px'
      }}
    >
      <CardHeader className="cursor-move" onMouseDown={handleMouseDown}>
        <CardTitle>{app}</CardTitle>
        <Button className="absolute top-2 right-2" onClick={onClose}>Close</Button>
      </CardHeader>
      <CardContent>
        {renderContent()}
      </CardContent>
    </Card>
  )
}

