'use client'
export default function UserItem() {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
      <div className="avatar flex min-h-10 min-w-10 items-center justify-center rounded-full bg-emerald-500 text-white font-[700]">
        AM
      </div>
      <div>
        <p className="text-[16px] font-bold">Alexandre Matsushita</p>
        <p className="text-[12px] text-neutral-500">matsuboy.ale@gmail.com</p>
      </div>
    </div>
  )
}
