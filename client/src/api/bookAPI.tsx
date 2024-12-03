//todo add api that pulls in books based on user search, delete, as well as post whatever the user added during their search
import Auth from '../utils/auth';
import { BookData } from '../interfaces/BookData';

const api_Url = `https://openlibrary.org/search.json`;

// https://openlibrary.org/search.json?title=the+lord+of+the+rings&limit=2&offset=0
// Function to search for books based on user query
const searchBooks = async (query: string): Promise<BookData[]> => {
  try {
      const queryWithPlus = encodeURIComponent(query).replace(/%20/g, '+');
    
      const response = await fetch(`${api_Url}?title=${queryWithPlus}&limit=10&offset=0`);

      if (!response.ok) {
          throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      
      console.log(data);

      return data.docs.map((book: any) => ({
          id: book.key,
          title: book.title,
          author_name: book.author_name || ['Unknown Author'],
          cover_url: book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
              : 'default-cover.jpg',
          cover_id: book.cover_i || 0
      }));
  } catch (error) {
      console.error(`Error fetching books: `, error);
      return [];
  }
};

// Function to save a book to a user's profile
 const saveBook = async (bookData: BookData) => {
    try {
        const response = await fetch(`/api/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`,
            },
            body: JSON.stringify(bookData),
        });
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || 'Failed to save book');
        }
        return result;
    } catch (error) {
        console.error(`Error saving book: `, error);
        throw error;
    }
};

// Function to delete a book from a user's profile
 const deleteBook = async (bookId: string) => {
    try {
        const response = await fetch(`/api/books/${bookId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`,
            },
        });
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || 'Failed to delete book');
        }
        return result;
    } catch (error) {
        console.error(`Error deleting book: `, error);
        throw error;
    }
};

// const searchBooksID = async () => {
//   try {
//     const start = Math.floor(Math.random() * 99999) + 1;
//     console.log(`Searching for book with ID: ${start}`);
//     const response = await fetch(
//       `https://openlibrary.org/books/OL${start}M.json`
//     );
//     const data = await response.json();

//     if (!response.ok || data.Error) {
//       throw new Error('Book not found or invalid response');
//     }
//     if (data.cover_id) {
//       return {
//         title: data.title,
//         author_name: data.author_name || ['Unknown Author'],
//         cover_url: `https://covers.openlibrary.org/b/id/${data.cover_id}-L.jpg`,
//         cover_id: data.cover_id,
//       };
//     } else {
//       return null;
//     }
//   } catch (err) {
//     console.log('An error occurred:', err);
//     return null; // Return null if no valid book is found
//   }
// };

export { searchBooks, saveBook, deleteBook };