'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function EditTaskForm({id,title,description}) {
  const router = useRouter()
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
        method: "PUT",
        headers:{
          "Content-type":"application/json"
        },
        body: JSON.stringify({newTitle,newDescription})
      })
      if(!res.ok){
        throw new Error("Failed to update movie")
      }
      router.refresh()
      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
         <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <input onChange={(e)=>setNewTitle(e.target.value)}
            value={newTitle}
            className='border border-slate-500 px-8 py-2' placeholder='Update Movie Title' type='text'/>
            <input onChange={(e)=>setNewDescription(e.target.value)}
            value={newDescription}
            className='border border-slate-500 px-8 py-2' placeholder='Update Movie Description' type='text'/>
            <button type='submit' className='bg-yellow-500 hover:bg-yellow-600 font-bold text-white px-6 py-3 w-fit rounded'>Update Movie</button>
        </form>
    </div>
  )
}
