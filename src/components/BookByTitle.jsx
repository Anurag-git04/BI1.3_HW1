import useFetch from "../useFetch";

const BookByTitle = ()=>{
    const {data,loading,error} = useFetch(`https://be-4-assignment1-tawny.vercel.app/books/Lean In`)
    console.log(data)
    return data ? <div>
        <h2>{data[0].title}</h2>
        <p><strong>Author:</strong>{data[0].author}</p>
        <p><strong>Release Year:</strong>{data[0].publishedYear}</p>
        <p><strong>Genre:</strong>{data[0].genre.join(", ")}</p>
    </div> : loading && <p>Loading...</p>
}
export default BookByTitle