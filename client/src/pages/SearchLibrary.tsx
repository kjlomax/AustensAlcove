//search page for books

import  { useState } from "react";
import {searchedBook} from '../api/bookAPI';
import { BookData } from "../interfaces/BookData";
import '../styles/login.css'
const SearchLibrary = ()=>{
    const [query, setQuery] = useState('');
    const [result, setResult]=useState<BookData[]>([]);
    const [readList, setReadList]=useState<BookData[]>([]);
    const searchedChanged = (event:any)=>{
        setQuery(event.target.value)
    }
    const handleSearch = async()=>{
        if(query.trim()!==''){
            const book = await searchedBook(query);
            setResult(book);
        }
    }
    const addToReadList= (book: BookData)=>{
        setReadList(prevList=>[...prevList, book])
    }
    return(
        <div className="all">
            <input type= "text" value={query} onChange={searchedChanged} placeholder="Please Work Search"/>
            <button onClick={handleSearch}>Search</button>
        <div>
            {result.map((book)=>(
                <div key={book.cover_i}>
                    <h2>{book.title}</h2>
                    <h2>{book.author_name}</h2>
                    {/* <p>{book.description}</p> */}
                    {/* <img src={book.image} alt={book.author} /> */}
                    <button onClick={()=> addToReadList(book)}>Add to Read List</button>
                </div>
            ))}
        </div>
        <div>
            <h2>Your Read List</h2>
            {readList.map((book)=>(
                <div key={book.cover_i}>
                    <h2>{book.title}</h2>
                    <h2>{book.author_name}</h2>
                </div>
            ))}
        </div>
        </div>
    )
};

export default SearchLibrary;
console.log('Rendering SearchLibary');