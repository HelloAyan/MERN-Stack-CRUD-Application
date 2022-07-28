import React, {useState} from 'react';

function TableBook(props){
    const {book} = props;

    return(
        <table>
            <tr>
                <td>Title</td>
                <td>Description</td>
            </tr>
        </table>
    )
}