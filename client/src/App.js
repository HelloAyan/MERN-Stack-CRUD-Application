import React, {useEffect, useState} from 'react';
import './App.css';
import {getBooksAPI, addBookAPI, updateBookAPI, deleteBookAPI} from './apis/books';


function App() {
  const [books, setBooks] = useState([]);
  useEffect(() =>{
    getBooksAPI().then(books => setBooks(books));
  }, [])

  const addBook = (book) => {
    return addBookAPI(book)
    .then(data => {
      setBooks([...books, data])
    })
  }

  const updateBook = (book) => {
    return updateBookAPI(book)
    .then(data => {
      return data;
    })
  }

  const deleteBook = (id) =>{
    return deleteBookAPI(id)
    .then(data => {
      if(data.deletedCount ===1){
        setBooks(books.filter(book => book._id !== id));
      }
    })
  }


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
