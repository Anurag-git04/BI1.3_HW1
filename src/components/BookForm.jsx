import { useState } from "react"

const BookForm = ()=>{
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        publishedYear: '',
        genre: [],
        language: '',
        country: '',
        rating: 0,
        summary: '',
        coverImageUrl: ''
    })

    const handleChange = async(e)=>{
        const {name , value} = e.target
        setFormData((prev)=> ({
            ...prev,
            [name]:value
        }))
    }

    const handleGenreChange = (e) => {
        const { options } = e.target;
        const selected = [];
        for (let option of options) {
          if (option.selected) selected.push(option.value);
        }
        setFormData((prev) => ({ ...prev, genre: selected }));
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();

        console.log(formData)
        console.log(JSON.stringify(formData))
        const response = fetch(`https://be-4-assignment1-tawny.vercel.app/books`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        if(!response){
            console.log("Book not updated")
        }else{
            console.log("Book Updated")
        }
    }
    

    return (
        <div>
            <h2>Add New Book </h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label> <br />
                <input name="title" value={formData.title} onChange={handleChange} required />
                <br /><br />

                <label>Author:</label> <br />
                <input name="author" value={formData.author} onChange={handleChange} required />
                <br /><br />

                <label>Published Year:</label> <br />
                <input type="number" name="publishedYear" value={formData.publishedYear} onChange={handleChange} required />
                <br /><br />

                <label>Genre (Select multiple):</label> <br />
                <select name="genre" multiple onChange={handleGenreChange}>
                    <option value="Fiction">Fiction</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Romance">Romance</option>
                    <option value="Sci-fi">Sci-fi</option>
                    <option value="Biography">Biography</option>
                    <option value="History">History</option>
                    <option value="Other">Other</option>
                </select>
                <br /><br />

                <label>Language:</label> <br />
                <input name="language" value={formData.language} onChange={handleChange} required />
                <br /><br />

                <label>Country:</label> <br />
                <input name="country" value={formData.country} onChange={handleChange} required />
                <br /><br />

                <label>Rating:</label> <br />
                <input type="number" name="rating" min="0" max="10" value={formData.rating} onChange={handleChange} />
                <br /><br />

                <label>Summary:</label> <br />
                <textarea name="summary" value={formData.summary} onChange={handleChange} />
                <br /><br />

                <label>Cover Image URL:</label> <br />
                <input name="coverImageUrl" value={formData.coverImageUrl} onChange={handleChange} />
                <br /><br />

                <button type="submit">Add Book</button>
            </form>
        </div>
    )
} 

export default BookForm