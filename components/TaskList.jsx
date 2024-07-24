import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {HiPencilAlt} from 'react-icons/hi'

const getTopics =async()=>{
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        cache:"no-store"
      })
      if(!res.ok){
        throw new Error("Failed to fetch New Movies")
      }
      return res.json()
    } catch (error) {
      console.log("Error loading topics:", error)
    }
}

export default async function TaskList() {
  const topics = await getTopics()
  return (
    <>
    {topics.topics.length < 1 && 
      <div className='flex items-center justify-center flex-col '>
        <h2 className='text-red-600 font-bold text-xl'>No Listed Movies yet.</h2>
        <Link className='bg-slate-900 my-2 py-2 px-4 hover:bg-slate-800 text-white rounded' href={'/addTask'}>Click to Add Movies</Link>
      </div>
    }
    {topics.topics.map(topic =>(
      <div key={topic._id} className='p-4 border border-slate-300 my-3 flex justify-between items-start gap-5 rounded'>
      <div>
          <h2 className='font-bold text-2xl'>{topic.title}</h2>
          <div>{topic.description}</div>
      </div>
      <div className='flex gap-2'>
          <RemoveBtn id={topic._id}/>
          <Link href={`/editTask/${topic._id}`}>
              <HiPencilAlt size={24}/>
          </Link>
      </div>
   </div>
    ))}
     
    </>
  )
}
