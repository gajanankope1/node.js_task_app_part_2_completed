const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req,res,next)=>{
//     res.status(503).send("Site is currently down. check back soon!!");
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log("server is up on port : " + port);
});


// examples

// // for password security in database

// const bcrypt=require("bcryptjs");

// const myFunction=async ()=>{
//     const password="Sang@123";
//     const hashedPassword=await bcrypt.hash(password,8);

//     console.log(password);
//     console.log(hashedPassword);

//     const isMatch=await bcrypt.compare("Sang@123",hashedPassword);
//     console.log(isMatch);
// }
// myFunction();

// jsonwebtoken for authentication

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//     const token = jwt.sign({ _id: "abc@123" }, "theseisnewuser", { expiresIn: "3 seconds" });
//     console.log(token);
//     setTimeout(() => {
//         const data = jwt.verify(token, "theseisnewuser");
//         console.log(data);
//     }, 2000);
// }

// myFunction();