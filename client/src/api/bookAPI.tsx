//todo add api that pulls in books based on user search, delete, as well as post whatever the user added during their search

const api_Url = `https://openlibrary.org/search.json`;
export const searchedBook = async (query:string)=>{
    try {
        const queryWithPlus = encodeURIComponent(query).replace(/%20/g, '+');
        const response = await fetch (`${api_Url}?q=${queryWithPlus}`);
        const data = await response.json();
        console.log(data);
        return data.item;
    } catch (error) {
        console.error(`error fetching book: `, error);
        return [];
    }
}