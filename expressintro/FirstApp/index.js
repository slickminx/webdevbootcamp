//Video 331
const express = require("express");

const app = express()

//COMMENTED OUT IN VIDEO 333
//Every time we call (res.send), we are done for that one request.  We can't have one http request get more than one response.  The below block
//matches every single request
// app.use((req, res) => {
//     //on localhost, click refresh button, serves up a new request in the command line
//     //cmd is reflects each refresh 
//     //each refresh is a new request
//     console.log("We HAVE A NEW REQUEST!!")

//     //in order to respond with content, there two object parameters that must be passed in.
//     //on every request, we have access to request - req (incoming request), response - res (outgoing response)
//     //HTTP request is not a javascript a object - text information
//     //express parses http request and turns data into a object for callback use 
//     //console.logs and console.dirs send data to the cmd and not to the screen
        //console.dir(req);
//    // res.send("Hello, WE GOT YOUR REQUEST. THIS IS THE RESPONSE")
//     res.send("<h1>This is my webpage!<h1>")   
// })

//Routing is common and is not specific to any language
//Routing is taking incoming request and path request and matching to some code or response

//This is the root route
//We are routing an incomging request to an outgoing response
//GET requests only respond to entries in the browser url area
//Doing a POST (ie in POSTMAN), when route has not be been defined, does not work.
//Must defined a POST route

app.get('/', (req, res) => {
    res.send("WELCOME to the homepage!!!!");
})

//defining a pattern, not an exact match
// the colon (:) is a variable
app.get('/r/:subreddit', (req, res) => {
     //Express adds a property to the req object called params
    const { subreddit } = req.params;

    res.send(`<h1>Browsing the ${subreddit} subreddit!</h1>`)
})
app.get('/r/:subreddit/comments/:postId', (req, res) => {
     //Express adds a property to the req object called params
    const { subreddit, postId } = req.params;

    res.send(`<h1>Viewing Post ID: ${ postId } on the ${subreddit} subreddit!</h1>`)
})

app.get('/cats', (req, res) => {
    //res.send returns data to the screen.
    res.send("MEOWW!!!!");

})
app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats. THIS IS DIFFERENT THAN A GET REQUEST');
})
app.get('/dogs', (req, res) => {
    res.send('WOOOF!!')
})

app.get('/search', (req, res) => {
    const { q } = req.query;

    if(!q){
        res.send("NOTHING FOUND IF NOTHING SEARCHED");
    }
    
    //multiple query variables are seperated with a ampersand (&)
    res.send(`<h1>Search results for: ${q}</h1>`);
})

//This error handling has to be at the bottom. 
//Star matches everything
//Routes are matched in order
//If start match is at the top, it will ignore/overide all incoming get routes after it.
app.get('*', (req, res) => {
    res.send("I don't know that path!")
})


// /cats => 'meow'
// /dogs => 'woof'
// '/'  = homepage (root) route

app.listen(8080, () => {
    //server on localhost:_whatever number that is set in the listen.
    //example: localhost:8001
    //run "node index.js" in cmd
    console.log("LISTENING ON PORT 8080")
})
//Addresses for connections on your local machine
//Instead of having all traffic from email (port 25). 
//file transfers (port 3306), http requests (port 80),
//going through one port on your machine
//they have different addresses that have unique numbers that we can use 
//to identify and refer to them  

//If you have more than one server running,
//you had a seperate express app up and running,
//you would need to put it on a seperate port
//it would need to get its own entrance/tunnel into our machine
//have seperate traffic

