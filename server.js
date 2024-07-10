const path = require('path');
const cors = require('cors');
const express = require('express');

const dotenv = require("dotenv");
dotenv.config();

const email = require('./modules/emailSend');

const exception = require('./exceptions/exceptions');


const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(exception.exception)

app.post("/email", async (req, res) => {

  const emailSpecs = req.body;
  o = await email.EmailSending(emailSpecs);

  res.ok();
})


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
