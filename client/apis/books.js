export function getBooksAPI(){
    return fetch('http://localhost:5000/books')
    .then(res => res)
    .then(data => data);
}