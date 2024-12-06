import React from 'react';

interface DesktopIconProps {
  name: string;
  icon: string;
  onClick: () => void;
}

export default function DesktopIcon({ name, icon, onClick }: DesktopIconProps) {
  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
      <div className="text-4xl mb-1">{icon}</div>
      <div className="text-sm text-center bg-gray-800 bg-opacity-75 px-2 py-1 rounded">{name}</div>
    </div>
  )
}

