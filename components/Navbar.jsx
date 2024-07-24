import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
        <Link className='text-white my-2 font-bold' href={'/'}>Movie-Suggest</Link>
        <Link className='bg-white my-2 p-2 rounded' href={'/addTask'}>Add Movie</Link>
    </nav>
  )
}
