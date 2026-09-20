const express = require('express');
const app = express();
const logger = require("./logger.js");
//specify the format will be json
const port = 3000;

app.use(logger);
app.use(express.json());
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(one, two, three, hellomiddleware);
//making our first request
app.get("/hello",(req,res)=>{
  console.log("header value.,",req.headers.myheader)
  //getting paramss
  console.log("parmas value.,",req.query.mparams)
  res.status(200).json({
    "message":"hello"
  })
});
//endpoint post to get the body
app.post("/data", (req, res) => {
  console.log(req.body);

  res.status(201).json({
    message: "data received",
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
