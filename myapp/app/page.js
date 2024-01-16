import getServerUser from '@/lib/getServerUser'
import { wait } from '@/lib/wait'
import React, { Suspense } from 'react'

const HomePage = async () => {
  return <>
  <Suspense fallback={<WelcomeMsgFallback />}>
  <WelcomeMsg />
  </Suspense>
  </>
}

export default HomePage

async function WelcomeMsg(){
    const user = await getServerUser()
  await wait(3000)
  return (
    <h1 className='text-4xl'>
      Welcome, <br />
      {user.email}
    </h1>
  )
}

function WelcomeMsgFallback(){
  return<>
  <h1 className='text-4xl'>
  <div className="skeleton w-64 h-32 dark:bg-gray-800 bg-gray-200"></div>
  </h1>
  </>
}