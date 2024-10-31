import express from "express"
import Book from '../models/Book.js'
import BookCategory from "../models/BookCategory.js"

const router = express.Router()

/* Get all books in the db */
router.get("/", async (req, res) => {
    try {
        const books = await Book.find({})
                                .populate("transactions")
                                .sort({ _id: -1 })
        res.status(200).json(books)
    }
    catch (err) {
        return res.status(504).json(err);
    }
})

/* Get Book by book Id */
router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
                                .populate("transactions")
        res.json(book)
    }
    catch(err) {
        return res.status(500).json(err)
    }
})

/* Get books by category name*/
router.get("/category/:category", async (req, res) => {
    // const category = req.query.category;
    try {

        const category = await BookCategory.findOne({categoryName:req.params.category});
        console.log(category);
        if(!category){
            res.status(404).json({message:"Category not found"});
        }
        const books = await Book.find({ categories: category._id})
                                .populate("transactions")
        res.status(200).json(books)
    }
    catch (err) {
        return res.status(504).json(err)
    }
})

// router.get('/popularBooks1', async (req,res)=>{
//    try{
//         console.log("popularBooks");
//         const popularBooks = await Book.find()
//             .sort({likes:-1})
//             .limit(10);

//         if (!popularBooks){
//             console.log("NO books");
//             res.status(404).json({success:false,message:"No books"})        
//         }

//         console.log("Books retrived");
//         res.status(200).json({success:true,message:"Bokks retrived",popularBooks})    
//    }catch(err){
//     console.log(err);
//    }
// })

// router.get()
router.get('/popularBooks1', async (req,res)=>{
    // try{
        res.status(200)
        // const recentBooks = await Book.find().limit(5)
        // if(!recentBooks){
        //     console.log("No books")
        //     res.status(400).json({sucess:false,message:"No Books"})
        // }
        // console.log("Books retrived");
        // res.status(200).json({message:"Bokks retrived",recentBooks})
    // }catch(err){
    //     console.log(err);
    //     res.status(504).json(err);
    // }
    
})

// Admin pannel
/* Adding book */
router.post("/addbook", async (req, res) => {
    if (req.body.isAdmin) {
        try {
            const newbook = await new Book({
                bookName: req.body.bookName,
                alternateTitle: req.body.alternateTitle,
                author: req.body.author,
                bookCountAvailable: req.body.bookCountAvailable,
                language: req.body.language,
                publisher: req.body.publisher,
                bookStatus: req.body.bookSatus,
                details:req.body.details,
                categories: req.body.categories,
                image:req.body.image
            })
            const book = await newbook.save()
            // await BookCategory.updateMany({ '_id': book.categories }, { $push: { books: book._id } });
            res.status(200).json(book)
        }
        catch (err) {
            res.status(504).json(err)
        }
    }
    else {
        return res.status(403).json("You dont have permission to delete a book!");
    }
})

/* update book */
router.put("/updatebook/:id", async (req, res) => {
    if (req.body.isAdmin) {
        try {
            await Book.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Book details updated successfully");
        }
        catch (err) {
            res.status(504).json(err);
        }
    }
    else {
        return res.status(403).json("You dont have permission to delete a book!");
    }
})

/* Remove book  */
router.delete("/removebook/:id", async (req, res) => {
    if (req.body.isAdmin) {
        try {
            const _id = req.params.id
            const book = await Book.findOne({ _id })
            await book.remove()
            await BookCategory.updateMany({ '_id': book.categories }, { $pull: { books: book._id } });
            res.status(200).json("Book has been deleted");
        } catch (err) {
            return res.status(504).json(err);
        }
    } else {
        return res.status(403).json("You dont have permission to delete a book!");
    }
})

export default router