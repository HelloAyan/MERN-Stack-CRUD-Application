import React, {useState} from 'react';
import "./App.css";

function CreateBook(props){
    const {onCreate} = props;

    const [book, setBook] = useState({
        title: "",
        description: ""
    });

    const handleChange = (e) =>{
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        onCreate(book);
    }

    return(
        <form onSubmit={onSubmit} >
            <div className='add-form'>
                <label className='title'>
                    Title: <br />
                    <input name='title' type='text' value={book.title} onChange={(e) => handleChange(e)} /> <br />
                </label>

                <label className='description'>
                    Description: <br />
                    <input name='description' type='text' value={book.description} onChange={(e) => handleChange(e)} /> <br />
                </label>
                <input type="submit" value="Submit" className='submit'/>
                </div>
        </form>
    )
}

export default CreateBook;