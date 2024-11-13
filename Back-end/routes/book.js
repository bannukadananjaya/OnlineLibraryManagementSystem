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

// Get categories

router.get("/category", async(req,res)=>{
    const category = await BookCategory.find({});
    if(category){
        return res.status(200).json({success:true,category});
    }
    res.status(404).json({message:"Category not found"});
})
/* Get books by category name*/
router.get("/category/:category", async (req, res) => {
    // const category = req.query.category;
    try {

        const category = await BookCategory.findOne({categoryName:req.params.category});
        console.log(category);
        if(!category){
            return res.status(404).json({message:"Category not found"});
        }
        const books = await Book.find({ categories: category._id})                  
        res.status(200).json(books)
    }
    catch (err) {
        return res.status(504).json(err)
    }
})

router.get('/popularbooks', async (req,res)=>{
   try{
        console.log("popularBooks");
        const popularBooks = await Book.find()
            .sort({likes:-1})
            .limit(9);

        if (!popularBooks || popularBooks.length === 0){
            console.log("NO books");
            return res.status(404).json({success:false,message:"No books"})        
        }

        console.log("Books retrived");
        res.status(200).json({success:true,message:"Bokks retrived",popularBooks})    
   }catch(err){
    console.log(err);
   }
})

// router.get()
router.get('/recentbooks', async (req, res) => {
    try {
        const recentBooks = await Book.find()
                                      .sort({ createdAt: -1 }) // Sort by most recent first
                                      .limit(5);

        if (recentBooks.length === 0) {
            console.log("No books");
            return res.status(404).json({ success: false, message: "No Books" });
        }

        console.log("Books retrieved");
        res.status(200).json(recentBooks);
    } catch (err) {
        console.log(err);
        res.status(504).json(err);
    }
});

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

// Admin pannel
/* Adding book */
router.post("/addbook", async (req, res) => {
    console.log(req.body);
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
            console.log("Book addded")
        }
        catch (err) {
            console.log(err)
            res.status(504).json(err)
        }
    }
    else {
        return res.status(403).json("You dont have permission to add a book!");
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