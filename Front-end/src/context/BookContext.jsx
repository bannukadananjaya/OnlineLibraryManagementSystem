import { createContext, useEffect, useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import api from '../api/api';



export const BookContext = createContext(null);

export const BookContextProvider= (props) => {

    const {user} = useContext(AuthContext);
    const [books, setBooks] = useState({});
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    // const [categories,setCategories] = useState([]);
    // const categories = useMemo(() => ["Fiction", "Science", "Technology", "Art", "History"], []);
    // const categories = ['Romance','Science Fiction','Adventure']
    const categories = ['Romance','Science Fiction','Adventure','Fantasy','Biography']
    
    useEffect(() => {
        // const categories = ['Romance','Science Fiction','Adventure','Fantasy','Biography']

        const getBooks = async () => {
            setLoading(true);
            const allBooks = [];
    
            for (const category of categories) {
                try {
                    const response = await api.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=30&key=${process.env.API_KEY}`);
                    
                    if (response.status !== 200) {
                        console.log("Error getting data");
                        setError("Failed to fetch books for category: " + category);
                        break; // Stop if there's an error (optional)
                    }
    
                    const data = response.data;
                    console.log("Fetched books for category:", category);
                    
                    if (data && data.items) {
                        allBooks.push({
                            category,
                            books:data.items
                        }); // Push all book items for each category
                    }
                } catch (err) {
                    console.log("Error fetching books for category:", category, err);
                    setError(err.message || "An error occurred");
                }
            }
    
            setBooks(allBooks);
            console.log("All fetched books:", allBooks);
            setLoading(false);
        }
    
        getBooks();
    
    }, []); // Add categories to the dependency array if it's defined outside the effect
    

    const context = {books,categories,loading} 

    return(
        <BookContext.Provider value={context}>
            {props.children}
        </BookContext.Provider>
    )
}

// export default BookContextProvider;