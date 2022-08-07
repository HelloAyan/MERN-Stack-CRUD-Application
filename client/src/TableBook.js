import React, {useState} from 'react';
import "./App.css";
import { Link } from 'react-router-dom';


function TableBook(props){
    const {books, onDelete} = props;

    return(
        <table className='table-book'>
            <tr className='header'>
                <td className='title-header'>Title</td>
                <td className='description-header'>Description</td>
            </tr>
            {
                books.map(book =>{
                    return(
                        <tr key={book._id}>
                            <td className='show-title'>{book.title}</td>
                            <td className='show-description'>{book.description}</td>
                            <td className='inputCenter'><button class="updateCenter">Update</button></td>
                            <td className='inputCenter'><button className='deleteCenter' onClick={()=> onDelete(book._id)}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </table>
    )
}
export default TableBook;