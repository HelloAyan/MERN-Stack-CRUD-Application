export function getBooksAPI(){
    return fetch('http://localhost:5000/books')
    .then(res => res.json)
    .then(data => data);
}

export function addBookAPI(book){
    return fetch('http://localhost:5000/books',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(data => data);
}