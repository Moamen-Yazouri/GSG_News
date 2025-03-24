import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import React from 'react'

const page = async () => {
  console.log( (await headers()).get('path-name'))
  
  return (
    <div>Admin page</div>
  )
}

export default page
