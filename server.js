const express = require('express');
const path = require('path');
const port = 5000;
const _db  =  require ('./_dbConnect');
const Router = require ("./route");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");



const app = express();
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.use('api',Router )
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);


dotenv.config();
_db().then(

    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    })
)



