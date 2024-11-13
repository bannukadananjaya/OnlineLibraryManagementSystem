import mongoose from "mongoose";

const db = async () => {
    try{
        await mongoose.connect(
            process.env.MONGO_URL,
            {
              useCreateIndex: true,
              useNewUrlParser: true,
              useUnifiedTopology: true,
            }
          );
        console.log("MONGODB CONNECTED");
    }catch(err){
        console.log(err);
    }
  
    
};

export default db;
