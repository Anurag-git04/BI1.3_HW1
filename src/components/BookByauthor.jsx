import useFetch from "../useFetch"

const BookByAuthor=({author})=>{
    const {data,loading,error} = useFetch(`https://be-4-assignment1-tawny.vercel.app/books/author/${author}`) 
    console.log("New")
    console.log(data)
    return data ? <div>
        <h1>Book By {data[0].author}</h1>
        <ul>
            {
                data.map((book)=>(
                    <li key={book._id}>{book.title}</li>
                ))
            }
        </ul>
    </div> : loading && <p>Loading...</p>
}

export default BookByAuthor