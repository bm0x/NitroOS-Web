'use client'

import { useState } from 'react'
import Taskbar from './Taskbar'
import TopBar from './TopBar'
import Window from './Window'
import DesktopIcon from './DesktopIcon'
import { useWallpaper } from './WallpaperContext'

interface DesktopProps {
  onLock: () => void
}

interface Window {
  id: number
  app: string
}

interface DesktopIcon {
  name: string
  icon: string
}

export default function Desktop({ onLock }: DesktopProps) {
  const [windows, setWindows] = useState<Window[]>([])
  const { wallpaper } = useWallpaper()

  const openWindow = (app: string) => {
    setWindows([...windows, { id: Date.now(), app }])
  }

  const closeWindow = (id: number) => {
    setWindows(windows.filter(window => window.id !== id))
  }

  const desktopIcons: DesktopIcon[] = [
    { name: 'My Computer', icon: '💻' },
    { name: 'Recycle Bin', icon: '🗑️' },
    { name: 'Settings', icon: '⚙️' },
  ]

  return (
    <div className="relative h-full w-full" style={{backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <TopBar onLock={onLock} />
      <div className="absolute inset-0 p-4 pt-16">
        <div className="grid grid-cols-6 gap-4">
          {desktopIcons.map((icon, index) => (
            <DesktopIcon key={index} name={icon.name} icon={icon.icon} onClick={() => openWindow(icon.name)} />
          ))}
        </div>
        {windows.map((window: Window) => (
          <Window key={window.id} app={window.app} onClose={() => closeWindow(window.id)} />
        ))}
      </div>
      <Taskbar onOpenApp={openWindow} />
    </div>
  )
}

