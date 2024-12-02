//todo add api that pulls in books based on user search, delete, as well as post whatever the user added during their search
import Auth from '../utils/auth';
import { BookData } from '../interfaces/BookData';

const api_Url = `https://openlibrary.org/search.json`;

// Function to search for books based on user query
export const searchBooks = async (query: string): Promise<BookData[]> => {
    try {
        const queryWithPlus = encodeURIComponent(query).replace(/%20/g, '+');
        const response = await fetch(`${api_Url}?q=${queryWithPlus}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`,
            },
        });
        const data = await response.json();
        console.log(data);
        return data.docs.map((book: any) => ({
            id: book.key,
            title: book.title,
            author_name: book.author_name || [],
        }));
    } catch (error) {
        console.error(`Error fetching books: `, error);
        return [];
    }
};

// Function to save a book to a user's profile
export const saveBook = async (bookData: BookData) => {
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
export const deleteBook = async (bookId: string) => {
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

export { searchBooks, saveBook, deleteBook };