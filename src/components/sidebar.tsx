'use client'

import {
  Command,
  CommandList,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command'
import UserItem from './userItem'
import {
  Bell,
  Cookie,
  CreditCard,
  Inbox,
  Menu,
  MessageSquare,
  Settings,
  User,
} from 'lucide-react'

export default function Sidebar() {
  const menuList = [
    {
      group: 'General',
      items: [
        {
          link: '/',
          text: 'Profile',
          icon: <User />,
        },
        {
          link: '/',
          text: 'Inbox',
          icon: <Inbox />,
        },
        {
          link: '/',
          text: 'Billing',
          icon: <CreditCard />,
        },
        {
          link: '/',
          text: 'Notifications',
          icon: <Bell />,
        },
      ],
    },
    {
      group: 'Settings',
      items: [
        {
          link: '/',
          text: 'General Settings',
          icon: <Settings />,
        },
        {
          link: '/',
          text: 'Privacy',
          icon: <Cookie />,
        },
        {
          link: '/',
          text: 'Logs',
          icon: <MessageSquare />,
        },
      ],
    },
  ]
  return (
    <div className="flex min-h-screen w-[300px] min-w-[300px] flex-col gap-2 border-r p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }}>
            {menuList.map((menu) => (
              <CommandGroup key={menu.group} heading={menu.group}>
                {menu.items.map((option) => (
                  <CommandItem
                    key={option.text}
                    className="flex items-center justify-start gap-2 cursor-pointer"
                  >
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings / Notifications</div>
    </div>
  )
}
