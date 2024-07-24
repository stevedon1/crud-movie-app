import connectToMongoDB from "@/libs/mongodb"
import Task from "@/models/task"
import { NextResponse } from "next/server"

export async function PUT(request, {params}){
    const {id} = params
    const {newTitle: title, newDescription: description} = await request.json()
    await connectToMongoDB()
    await Task.findByIdAndUpdate(id, {title,description})
    return NextResponse.json({message:"Task Updated"},{status:200})
}
export async function GET(request, {params}){
    const {id} = params
    await connectToMongoDB()
    const topic = await Task.findOne({_id:id})
    return NextResponse.json(topic, {status:200})
}