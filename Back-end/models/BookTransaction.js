import mongoose from "mongoose"

const BookTransactionSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Book',
        require: true
    },
    transactionType: { //Issue or Reservation
        type: String,
        require: true,
    },
    issueDate: {
        type: String,
        require: true,
    },
    returnDate: {
        type: String,
        require: true,
    },
    transactionStatus: {
        type: String,
        default: "Active"
    }
},
    {
        timestamps: true
    }
);

export default mongoose.model("BookTransaction", BookTransactionSchema)