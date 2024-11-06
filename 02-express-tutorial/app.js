const express = require("express");
const router = require("./routes/people");


const app = express();

// PARSE FORM DATA
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/people',router)



app.listen(5000, () => {
  console.log(`Server listening on port 5000`);
});
