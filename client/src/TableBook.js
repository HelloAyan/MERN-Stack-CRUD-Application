import React, {useState} from 'react';
import { getBooksAPI } from './apis/books';

function TableBook(props){
    const {book} = props;

    return(
        <table>
            <tr>
                <td>Title</td>
                <td>Description</td>
            </tr>
            {
                books.map(book =>{
                    return(
                        <tr key={book._id}>
                            <td>book.title</td>
                            <td>book.description</td>
                        </tr>
                    )
                })
            }
        </table>
    )
}