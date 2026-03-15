import express from 'express';
import mongoose from 'mongoose';
import studentRouter from './routes/studentsRouter.js';
import userRouter from './routes/userRouter.js';
import jwt from 'jsonwebtoken';
import e from 'express';
import productRouter from './routes/productRouter.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();



const app = express()
app.use(cors());

const connectionString = process.env.MONGO_URI;

mongoose.connect(connectionString).then(
    () => {
        console.log("Connected to MongoDB");
    }
).catch(
    (error) => {
        console.log("Error connecting to MongoDB: ", error);
    }
);

//middleware to parse json data
app.use(express.json());
app.use(
    (req, res, next) => {
        let token = req.headers['authorization'];
        if (token) {
            token = token.replace('Bearer ', '');
            jwt.verify(token, process.env.JWT_SECRET,
                (err, decoded) => {
                    if (decoded == null) {
                        res.json(
                            {
                                message: "Invalid token"
                            }
                        )
                        return
                    } else {
                        req.user = decoded;
                    }
                }
            )
        }
        next();
    }
)

app.use('/api/students', studentRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);


app.listen(5000,
    () => {
        console.log("Server is running on port 5000");
    })

app.delete('/',
    () => {
        console.log("delete request received ");
    })  