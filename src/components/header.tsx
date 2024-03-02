'use client'

import { useState } from 'react'
import { BellIcon } from 'lucide-react'
import { CommandDemo } from './command'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type NotificationType = {
  id: number;
  text: string;
  date: string,
  read: boolean
}
export default function Header() {
  const [notifications, setNotifications] = useState<NotificationType[]>([
    {
      id: 1,
      text: 'This is a notification',
      date: '02-01-2015',
      read: true
    },
    {
      id: 2,
      text: 'This is another notification',
      date: '02-08-2016',
      read: false
    }

  ])

  return (
    <div className="grid grid-cols-2 gap-4 border-b p-4">
      <CommandDemo />
      <div className='flex items-center justify-end'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className='relative'>
            <div className={`absolute -top-2 -right-2 h-3 w-3 rounded-full my-1 ${notifications.find(x => x.read === true) ? 'bg-green-500': 'bg-neutral-200'}`}>
            </div>
            <BellIcon className="h-4 w-4" />
          </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>

            {notifications.map(notification => (
              <DropdownMenuItem 
              key={notification.id} 
              className='py-2 px-3 cursor-pointer hover:bg-neutral-500 transition flex items-center gap-2' 
              >
                <div className={`h-3 w-3 rounded-full my-1 ${!notification.read ? 'bg-green-500': 'bg-neutral-200'}`}></div>
                <div>
                <p>{notification.text}</p>
                <p className='text-xs text-neutral-500'>{notification.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </div>
  )
}
