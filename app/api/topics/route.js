import connectToMongoDB from "@/libs/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectToMongoDB();
  await Task.create({ title, description });
  return NextResponse.json({ message: "Task created" }, { status: 201 });
}

export async function GET() {
  await connectToMongoDB();
  const topics = await Task.find();
  return NextResponse.json({ topics });
}
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectToMongoDB();
  await Task.findByIdAndDelete(id);
  return NextResponse.json({ message: "Task deleted" }, { status: 200 });
}
