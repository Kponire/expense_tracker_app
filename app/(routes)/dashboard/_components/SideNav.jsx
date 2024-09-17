"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const SideNav = () => {
    const menuList = [
        {
            id: 1,
            name: "dashboard",
            icon: LayoutGrid,
            path: '/dashboard'
        },
        {
            id: 2,
            name: "Budgets",
            icon: PiggyBank,
            path: '/dashboard/budgets'
        },
        {
            id: 3,
            name: "Expenses",
            icon: ReceiptText,
            path: '/dashboard/expenses'
        },
        {
            id: 4,
            name: "Upgrade",
            icon: ShieldCheck,
            path: '/upgrade'
        } 
    ]
    const path = usePathname();
    useEffect(() => {
        console.log(path);
    }, []);    
  return (
    <div className='h-screen p-5 border shadow-sm'>
        {/* <Image src={} alt='logo' width={160} height={10} /> */}
        SN
        <div className='mt-5'>
            {menuList.map((menu, index) => (
                <Link href={menu.path} key={index}>
                <h2 className={`flex gap-2 items-center text-gray-500 font-medium p-5 cursor-pointer rounded-md hovertext-primary hover:bg-blue-100
                    ${path == menu.path && 'text-primary bg-blue-100'} mb-2
                `}>
                    <menu.icon /> 
                    {menu.name}
                </h2>
                </Link>
            ))}
        </div>
        <div className='fixed bottom-10 p-5 flex gap-2 items-center'>
            <UserButton />
            profile
        </div>
    </div>
  )
}

export default SideNav