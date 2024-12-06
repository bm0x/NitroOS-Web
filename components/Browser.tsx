import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Browser() {
  const [url, setUrl] = useState("'https://example.com'")

  return (
    <div className="h-full flex flex-col">
      <div className="flex p-2">
        <Input 
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)}
          className="flex-grow mr-2"
        />
        <Button onClick={() => setUrl(url)}>Go</Button>
      </div>
      <iframe src={url} className="flex-grow w-full" />
    </div>
  )
}

