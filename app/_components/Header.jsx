"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const {user, isSignedIn} = useUser();  
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
        <div className='font-bold text-3xl'> Trackr </div>
        {isSignedIn ? 
            <div className='flex justify-between gap-2 text-primary items-center'>
              <Link href={'/dashboard'}>
                <h2 className='hover:underline'> Dashboard </h2>
              </Link>
              <UserButton/>
            </div> :
            <Link href={'/sign-in'} >
                <Button> Get Started </Button>
            </Link>
        }
    </div>
  )
}

export default Header