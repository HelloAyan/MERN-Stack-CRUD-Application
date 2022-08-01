import React, {useState} from 'react';
import "./App.css";

function TableBook(props){
    const {books} = props;

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
                        </tr>
                    )
                })
            }
        </table>
    )
}
export default TableBook;