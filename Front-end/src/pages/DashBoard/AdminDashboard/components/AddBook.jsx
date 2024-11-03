import { useContext, useEffect, useState } from 'react'
import "../AdminDashboard.css"
import api from '../../../../api/api'
import { AuthContext } from '../../../../context/AuthContext'
import { Dropdown } from 'semantic-ui-react'

function AddBook() {

    const [isLoading, setIsLoading] = useState(false)
    const { user } = useContext(AuthContext)
    const [data,setData] = useState({});
    const [allCategories,setAllCategories] = useState([])
    const [selectedCategories,setSelectedCategories]= useState()

    const handleInput = (e) => {
        const newInput = {[e.target.name]:e.target.value}
        setData({...data,...newInput})
    }
   
    const [recentAddedBooks, setRecentAddedBooks] = useState([])

    useEffect(()=>{

        const getRecentBooks = async()=>{
            try{    
                const respose = await api.get('/books/recentbooks');
                const responseData = respose.data;

                if(respose.status===200){
                    console.log("Get recent Books");
                    setRecentAddedBooks(responseData);
                }else{
                    console.log("Error geting recent books");
                }
                
            }catch(err){
                console.log(err);
            }
        }
        const getCategories = async()=>{
            try{    
                const respose = await api.get('/categories');
                const responseData = respose.data;

                if(respose.status===200){
                    console.log("Get recent Books");
                    setAllCategories(responseData);
                }else{
                    console.log("Error geting recent books");
                }
                
            }catch(err){
                console.log(err);
            }
        }
        getCategories();
        getRecentBooks();

    },[])


    /* Adding book function */
    const addBook = async (e) => {
        e.preventDefault()
        setIsLoading(true)
      
        try {
            const response = await api.post("/books/addbook", {
                isAdmin:user.isAdmin,
                ...data
            })
            if (recentAddedBooks.length >= 5) {
                recentAddedBooks.splice(-1)
            }
            setRecentAddedBooks([response.data, ...recentAddedBooks])
            alert("Book Added Successfully 🎉")
        }
        catch (err) {
            console.log(err)
        }
        setIsLoading(false)
    }

    console.log(recentAddedBooks)
    console.log(allCategories)
    console.log(data)

    const dropdownOptions = allCategories.map(category => ({
        key: category._id, // Unique identifier
        value: category._id, // Value to be used for selection
        text: category.categoryName // Text to display in the dropdown
    }));
    return (
        <div>
            <p className="dashboard-option-title">Add a Book</p>
            <div className="dashboard-title-line"></div>
            <form className='addbook-form' onSubmit={addBook}>

                <label className="addbook-form-label" htmlFor="bookName">Book Name<span className="required-field">*</span></label><br />
                <input className="addbook-form-input" type="text" name="bookName" onChange={(e) => { handleInput(e) }} required></input><br />

                <label className="addbook-form-label" htmlFor="alternateTitle">AlternateTitle</label><br />
                <input className="addbook-form-input" type="text" name="alternateTitle" onChange={(e) => {handleInput(e)}}></input><br />

                <label className="addbook-form-label" htmlFor="author">Author Name<span className="required-field">*</span></label><br />
                <input className="addbook-form-input" type="text" name="author" onChange={(e) => {handleInput(e)}} required></input><br />

                <label className="addbook-form-label" htmlFor="language">Language</label><br />
                <input className="addbook-form-input" type="text" name="language" onChange={(e) => {handleInput(e)}}></input><br />

                <label className="addbook-form-label" htmlFor="publisher">Publisher</label><br />
                <input className="addbook-form-input" type="text" name="publisher" onChange={(e) => {handleInput(e)}}></input><br />

                <label className="addbook-form-label" htmlFor="copies">No.of Copies Available<span className="required-field">*</span></label><br />
                <input className="addbook-form-input" type="text" name="copies" onChange={(e) => {handleInput(e)}} required></input><br />

                <label className="addbook-form-label" htmlFor="details">Details</label><br />
                <input className="addbook-form-input" type="text" name="details"onChange={(e) => {handleInput(e)}}></input><br />

                <label className="addbook-form-label" htmlFor="categories">Categories<span className="required-field">*</span></label><br />
                <div className="semanticdropdown">
                    <Dropdown
                        placeholder='Categories:'
                        fluid
                        multiple
                        search
                        selection
                        options={dropdownOptions}
                        value={selectedCategories}
                        onChange={(event, value) => setSelectedCategories(value.value)}
                    />
                </div>

                <label className="addbook-form-label" htmlFor="image">Image</label><br />
                {/* <input className="addbook-form-input" type="text" name="image" value={image} onChange={(e) => { setimage(e.target.value) }}></input><br /> */}

                <input className="addbook-submit" type="submit" value="SUBMIT" disabled={isLoading}></input>
            </form>
            <div>
                <p className="dashboard-option-title">Recently Added Books</p>
                <div className="dashboard-title-line"></div>
                <table className='admindashboard-table'>
                    <tr>
                        <th>S.No</th>
                        <th>Book Name</th>
                        <th>Added Date</th>
                    </tr>
                    {
                        recentAddedBooks.map((book, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{book.bookName}</td>
                                    <td>{book.createdAt.substring(0, 10)}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default AddBook