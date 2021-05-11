const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  express.static(path.join(__dirname, "academy-app"), {
    redirect: "/",
    index: "index.html",
  })
);

app.listen(PORT, () => {
  console.log(`the app is running on port ${PORT}`);
});