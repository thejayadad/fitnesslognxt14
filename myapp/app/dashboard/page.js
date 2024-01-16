import getServerUser from '@/lib/getServerUser'
import React, { Suspense } from 'react'

const DashboardPage = async () => {
    return <>
    <Suspense fallback={<WelcomeMsgFallback />}>
    <WelcomeMsg />
    </Suspense>
    </>
  }
  
  export default DashboardPage
  
  async function WelcomeMsg(){
      const user = await getServerUser()
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

