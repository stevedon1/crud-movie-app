"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function AddTask() {
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const router = useRouter()
  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(!title || !description){
      alert("Both title and description are required")
    }
    try {
     const res = await fetch("http://localhost:3000/api/topics",{
        method:"POST",
        headers:{
          "Content-type":"aplication/json"
        },
        body: JSON.stringify({title,description})
      })
      if(res.ok){
        if(title && description){
          router.push("/")
        }
      }else{
        throw new Error("Failed to add a movie")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className=''>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <input onChange={(e)=>setTitle(e.target.value)}
            value={title}
             className='border border-slate-500 px-8 py-2' placeholder='Add Movie Title' type='text'/>
            <input onChange={(e)=>setDescription(e.target.value)}
            value={description}
            className='border border-slate-500 px-8 py-2' placeholder='Add Movie Description' type='text'/>
            <button type='submit' className='bg-green-600 hover:bg-green-700 font-bold text-white px-6 py-3 w-fit rounded'>Add to list</button>
        </form>
    </div>
  )
}
