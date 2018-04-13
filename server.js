const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");


const PORT = process.env.PORT || 3001;
const app = express();

require("./routes/api-routes.js")(app);

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
else {
  require('dotenv').config();
}

// Add routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect('mongodb://localhost/personas').then(
    () =>
{
    console.log("successfully connected to mongo server.");
    app.listen(port, (err) => {
        if (err){
            console.log(err);
        }else{
            console.log("listening at port 3000!");
        }
        
    });
    
},
err =>
{
    console.log("not able to connect to mongo server", err);
}
);

app.listen(PORT, function() {
  console.log(`Server now on port ${PORT}!`);
});