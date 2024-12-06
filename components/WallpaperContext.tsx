"'use client'"

import React, { createContext, useState, useContext } from 'react'

const WallpaperContext = createContext<{
  wallpaper: string
  setWallpaper: (url: string) => void
}>({
  wallpaper: "'/default-wallpaper.jpg'",
  setWallpaper: () => {},
})

export const WallpaperProvider = ({ children }: { children: React.ReactNode }) => {
  const [wallpaper, setWallpaper] = useState("'/default-wallpaper.jpg'")

  return (
    <WallpaperContext.Provider value={{ wallpaper, setWallpaper }}>
      {children}
    </WallpaperContext.Provider>
  )
}

export const useWallpaper = () => useContext(WallpaperContext)

