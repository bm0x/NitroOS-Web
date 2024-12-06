'use client'

import { useState } from 'react'
import Desktop from '../components/Desktop'
import LockScreen from '../components/LockScreen'
import { WallpaperProvider } from '../components/WallpaperContext'

export default function Home() {
  const [isLocked, setIsLocked] = useState(true)

  return (
    <WallpaperProvider>
      <main className="h-screen w-screen overflow-hidden bg-gray-900 text-white">
        {isLocked ? (
          <LockScreen onUnlock={() => setIsLocked(false)} />
        ) : (
          <Desktop onLock={() => setIsLocked(true)} />
        )}
      </main>
    </WallpaperProvider>
  )
}

