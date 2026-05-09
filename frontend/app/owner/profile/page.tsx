import React from 'react'
import OwnerForm from '@/components/OwnerForm'

const page = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <h1 className='text-2xl font-bold'>List your property here</h1>
      <p className='text-gray-500'>Fill in the details to list your property</p>
      <OwnerForm />
    </div>
  )
}

export default page