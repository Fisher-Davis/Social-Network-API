const express = require("express");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();



db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
});
