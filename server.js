const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_, res) => res.send("1CryptKeep is live!"));
app.listen(port, () => console.log(`Listening on ${port}`));
