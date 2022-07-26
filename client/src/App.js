import './App.css';
import {getBooksAPI, addBookAPI, updateBookAPI, deleteBookAPI} from './apis/books';


function App() {
  const [books, setBooks] = useState([]);
  useEffect(() =>{
    getBooksAPI().then(books => setBooks(books));
  }, [])


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
