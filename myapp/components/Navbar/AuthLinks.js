import React from 'react'
import Link from 'next/link';
import { authOptions } from '@/lib/auth';
import {getServerSession} from "next-auth";
import LoginWithGoogle from '../Buttons/LoginWithGoogle';
import LogoutButton from '../Buttons/Logout';

const AuthLinks = async () => {
    const session = await getServerSession(authOptions);
    const email = session?.user.email

  return (
    <div className='flex items-center gap-2'>
    {!!session && (
             <>
               <Link
               className='links'
               href={'/dashboard/${email}'}>
                 Hello, {session?.user?.name}
               </Link>
               <LogoutButton />
             </>
           )}
           {!session && (
             <>
             <LoginWithGoogle />
             </>
           )}
    </div>
  )
}

export default AuthLinks