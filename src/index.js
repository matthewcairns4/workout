const express = require("express");
const app = express();
const PORT = 3000;


/** -- Making Routes --
 * All of the following routes can be accessed from: localhost:3000/[YOUR_ROUTE_HERE]
 *  1) "chickenman":
 *      -print out on the page the resulting sum of 8391 + 19282834
 * 
 *  2) "cow":
 *      -print out hello world
 * 
 *  3) "/":
 *      -print out your name twice
 */



app.get("/chickenman", (req, res) => {

    let x = 8391
    let y = 19282834
    let sum = x + y

    console.log(sum)
    res.send("")
})

app.get("/cow", (req, res) => {
    console.log("hello world")
    res.send("")
})


app.get("/", (req, res) => {
    let x = parseInt(req.query.x)
    let y = parseInt(req.query.y)

    let sum = x + y
    console.log(x + y)
    res.send("")
})




app.listen(PORT, () => {
    console.log(`listening on port ${PORT}: http://localhost:3000`);
});