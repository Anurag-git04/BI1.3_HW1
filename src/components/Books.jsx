import { useState } from 'react'
import useFetch from '../useFetch'

const Books = ()=>{
    const [moviedelete,setdelete] = useState("")
    const {data,loading,error} = useFetch(`https://be-4-assignment1-tawny.vercel.app/books`)
    console.log(data)
    const handleDelete = async(bookId)=>{
        try{
            const response = await fetch(`https://be-4-assignment1-tawny.vercel.app/books/${bookId}`,{
                method:'DELETE'
            })
            if(!response){
                console.log("Not Found")
            }
            const data = response.json()
            console.log("Movie Deleted",response,data)
            alert("Movie Deleted")
            setdelete("Movie Delete Successfully")
            window.location.reload()
        }catch(error){
            console.log("Error while deleting data ",error)
        }
    }
    return <div>
        <h2>All Books</h2>
        <ul>
            {
                data?.map((book)=>(
                    <li key={book._id}>
                        {book.title}
                        <button onClick={()=> handleDelete(book._id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
        {moviedelete}
    </div>
}

export default Books