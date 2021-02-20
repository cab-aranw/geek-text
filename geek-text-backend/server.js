import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connect } from "mongoose";
import AuthRoute from './routes/Auth.js'
config(); // Allows us to have access to our environment variables
const server = express();

//============================================Middlewares==========================================
server.use(cors());

//=====================================MongoDb connection & configs===============================
const mongoURI = process.env.mongoURI;
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
connect(mongoURI, connectionOptions, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Connection to MongoDB was succesful`);
});

//=================================================================================================
server.use(AuthRoute)

//===================================Server connection & Configs===================================
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
