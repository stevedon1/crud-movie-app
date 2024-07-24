import EditTaskForm from '@/components/EditTaskForm'

const getTaskById=async(id)=>{
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
      cache:"no-store"
    })
    if(!res){
      throw new Error("Failed to fetch movie")
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function EditTask({params}) {
  const {id} = params
  const movie = await getTaskById(id)
  const {title, description} = movie
  return (
    <EditTaskForm id={id} title={title} description={description}/>
  )
}
