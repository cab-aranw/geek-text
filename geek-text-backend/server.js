import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AuthRoute from './routes/Auth/Auth'
import booksRouter from './routes/books.js'
import genresRouter from './routes/genres.js'
import authorsRouter from './routes/authors.js'
const server = express();
dotenv.config(); 



//import AccountManager from './routes/AccountManager/AccountManager'
//============================================Middlewares==========================================
server.use(cors());
server.use(express.json());
//=====================================MongoDb connection & configs===============================
const mongoURI = process.env.mongoURI;
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect(mongoURI, connectionOptions, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Connection to MongoDB was succesful`);
});

//=================================================================================================
server.use(AuthRoute)

server.use('/books', booksRouter);

server.use('/genres', genresRouter);

server.use('/authors', authorsRouter);

server.use(AccountManager);
//===================================Server connection & Configs===================================
const PORT = process.env.PORT || 7000;
server.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
