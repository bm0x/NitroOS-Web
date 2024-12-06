import { Button } from "@/components/ui/button"

interface TaskbarProps {
  onOpenApp: (app: string) => void;
}

export default function Taskbar({ onOpenApp }: TaskbarProps) {
  const apps = ['Browser', 'Terminal', 'FileExplorer', 'Settings']

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gray-800 p-2 flex justify-center space-x-2">
      {apps.map(app => (
        <Button key={app} onClick={() => onOpenApp(app)}>
          {app}
        </Button>
      ))}
    </div>
  )
}

