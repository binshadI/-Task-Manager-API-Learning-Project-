const express = require('express');
const tasksRouter = require("./routes/taskRoutes");
const app = express();
const port = 3005;


app.use(express.json());
app.use('/task', tasksRouter);

app.get('/',(req,res)=>{
    res.send("home page..");
});


app.listen(port,(err)=>{
    if(err){
        throw err;
    }
    console.log(`server is running at this prot no ${port}`);
})