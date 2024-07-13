import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
   <footer className='border-t'>
    <div className='flex-center wrapper flex-between flex flex-col
    gap-4 p-5 text-center sm:flex-row'>
      <Link href='/'>
        <Image
           src="/echoeventlogo.svg"
           alt="logo"
           height={70}
           width={160}
        />
      </Link>
      <p>EchoEvents. All Rights reserved</p>
    </div>
   </footer>
  )
}

export default Footer
