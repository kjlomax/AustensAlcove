import { useState } from "react";
import { searchBooks } from '../api/bookAPI';
import { BookData } from "../interfaces/BookData";
import '../styles/login.css';

const SearchLibrary = () => {
  const [query, setQuery] = useState('');
  const [bookList, setBookList] = useState<BookData[]>([]);
//   const [randomBook ] = useState<BookData | null>(null); 
  const [wantToReadList, setWantToReadList] = useState<BookData[]>([]);
  const [doneReadingList, setDoneReadingList] = useState<BookData[]>([]);

//   useEffect(() => {
//     const fetchRandomBook = async () => {
//       try {
//         const data = await searchBooksID();
//         if (data) {
//           setRandomBook(data);
//         }
//       } catch (error) {
//         console.error('Error fetching random book:', error);
//       }
//     };

//     fetchRandomBook();
//   }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    if (query.trim() === '') return;
    try {
      const data = await searchBooks(query);
      setBookList(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const addToWantToReadList = (book: BookData) => {
    setWantToReadList((prevList) => [...prevList, book]);
  };

  const markAsRead = (book: BookData) => {
    if (!doneReadingList.some(b => b.cover_id === book.cover_id)) {
      setDoneReadingList((prevList) => [...prevList, book]);
      setWantToReadList((prevList) => prevList.filter(b => b.cover_id !== book.cover_id));
    }
  };

  const addToDatabase = async (book: BookData) => {
    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });
      const result = await response.json();
      console.log('Book saved:', result);
    } catch (error) {
      console.error('Error saving book to database:', error);
    }
  };
  console.log(bookList);

  return (
    <div className="all">
      <h1>Search the Alcove's Library</h1>

      <section>
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search for a book"
        />
        <button onClick={handleSearch}>Search</button>
      </section>

      <h2>Search Results</h2>
      <section>
        {bookList.length === 0 ? (
          <p>No books found</p>
        ) : (
          bookList.map((book) => (
            <div key={book.cover_id} className="book-card">
              <h2>{book.title}</h2>
              <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
              <img 
                src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} 
                alt={book.title} 
              />
              <button onClick={() => addToWantToReadList(book)}>Add to Want to Read List</button>
              <button onClick={() => addToDatabase(book)}>Save to Database</button>
            </div>
          ))
        )}
      </section>

      {/* {randomBook && (
        <section className="random-book">
        {(
          <>
            <h2>Random Book</h2>
            <h3>{randomBook.title}</h3>
            <p>{randomBook.author_name.join(', ')}</p>
            <img src={randomBook.cover_url} alt={randomBook.title} />
            <button onClick={() => addToDatabase(randomBook)}>Save to Database</button>
          </>
        )}
      </section>
      )} */}

      <h2>Want to Read List</h2>
      <section className="want-to-read-list">
        {wantToReadList.length === 0 ? (
          <p>No books in your "Want to Read" list</p>
        ) : (
          wantToReadList.map((book) => (
            <div key={book.cover_id} className="book-card">
              <h2>{book.title}</h2>
              <p>{book.author_name?.join(', ')}</p>
              <button onClick={() => markAsRead(book)}>Mark as Read</button>
            </div>
          ))
        )}
      </section>

      <h2>Done Reading List</h2>
      <section className="done-reading-list">
        {doneReadingList.length === 0 ? (
          <p>No books in your "Done Reading" list</p>
        ) : (
          doneReadingList.map((book) => (
            <div key={book.cover_id} className="book-card">
              <h2>{book.title}</h2>
              <p>{book.author_name?.join(', ')}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default SearchLibrary;
