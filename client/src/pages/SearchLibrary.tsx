import { useState } from "react";
import { searchedBook } from '../api/bookAPI';
import { BookData } from "../interfaces/BookData";
import '../styles/SearchLibrary.css'; // Correct import for your CSS file
// import AUTH from '../utils/auth';

const SearchLibrary = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState<BookData[]>([]);
    const [wantToReadList, setWantToReadList] = useState<BookData[]>([]);
    const [doneReadingList, setDoneReadingList] = useState<BookData[]>([]);

    const searchedChanged = (event: any) => {
        setQuery(event.target.value);
    };

    const handleSearch = async () => {
        if (query.trim() !== '') {
            const book = await searchedBook(query);
            setResult(book);
        }
    };

    const addToWantToReadList = (book: BookData) => {
        setWantToReadList(prevList => [...prevList, book]);
    };

    const markAsRead = (book: BookData) => {
        if (!doneReadingList.some(b => b.cover_i === book.cover_i)) {
            setDoneReadingList((prevList) => [...prevList, book]);
            setWantToReadList((prevList) => prevList.filter(b => b.cover_i !== book.cover_i));
        }
    };

    const saveListToDatabase = async (list: BookData[], listName: string) => {
        try {
            const response = await fetch('/api/save-list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    listName,
                    books: list,
                }),
            });
            const data = await response.json();
            console.log('List saved:', data);
        } catch (error) {
            console.error('Error saving list:', error);
        }
    };

    const saveAllLists = () => {
        if (wantToReadList.length > 0) {
            saveListToDatabase(wantToReadList, 'Want to Read');
        }
        if (doneReadingList.length > 0) {
            saveListToDatabase(doneReadingList, 'Done Reading');
        }
    };

    return (
        <div className="all">
            <h1>Search the Alcove's Library</h1>
            <div className="search-bar">
                <input 
                    type="text" 
                    value={query} 
                    onChange={searchedChanged} 
                    placeholder="Search for a book" 
                    className="input-box"
                />
                <button onClick={handleSearch} className="button">Search</button>
            </div>
            <div className="result-list">
                {result.map((book) => (
                    <div key={book.cover_i} className="book-item">
                        <h2>{book.title}</h2>
                        <h3>{book.author_name ? book.author_name.join(', ') : "Unknown Author"}</h3>
                        {book.cover_i && (
                            <img
                                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                alt={book.title}
                            />
                        )}
                        <button onClick={() => addToWantToReadList(book)} className="button">Add to Want to Read List</button>
                    </div>
                ))}
            </div>
            <div className="want-to-read-list">
                <h2>Want to Read List</h2>
                {wantToReadList.map((book) => (
                    <div key={book.cover_i} className="book-item">
                        <h2>{book.title}</h2>
                        <h3>{book.author_name}</h3>
                        <button onClick={() => markAsRead(book)} className="button">Mark as Read</button>
                    </div>
                ))}
            </div>
            <div className="done-reading-list">
                <h2>Done Reading List</h2>
                {doneReadingList.map((book) => (
                    <div key={book.cover_i} className="book-item">
                        <h2>{book.title}</h2>
                        <h3>{book.author_name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchLibrary;
