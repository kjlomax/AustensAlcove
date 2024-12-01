
const getBook = async()=>{
    try {
        const response = await fetch ('/api/books',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            },
        });

    const data = await response.json();
    console.log(data)
    if (!response.ok) {
        throw new Error('Could not fetch books!');
    }
    return data;
    } catch (err) { 
        console.log(`Could not fetch book data`)
        return Promise.reject(`Could not fetch book data`)
    }
}
const storeBook = async()=>{
    try {
        const response = await fetch ('/api/store',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
        });

    const data = await response.json();
    console.log(data)
    if (!response.ok) {
        throw new Error('Could not save books!');
    }
    return data;
    } catch (err) { 
        console.log(`Could not save book data`)
        return Promise.reject(`Could not save book data`)
    }
}
export  {getBook,storeBook};