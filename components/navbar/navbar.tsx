import React from 'react'
import Image from "next/image"
import Link from "next/link"

type Props = {}

const Navbar = () => {
  return (
    <nav className="w-full bg-white relative top-0 z-[170] drop-shadow-lg">
        <div className="flex justify-between items-center px-8 py-4">
            <div className="flex items-center">
              <Link href="/">
              <Image src="logo-blue.svg" alt="logo" width={120} height={40} />
              </Link>
              <h1 className="ml-4 text-xl font-medium font-sans">A Tour Of JSON Schema</h1>
            </div>
        </div>
    </nav>
  )
}

export default Navbar


