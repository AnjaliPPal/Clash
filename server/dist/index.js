import express from "express";
import "dotenv/config";
const app = express();
const PORT = 8000;
console.log("Environment PORT:", process.env.PORT);
app.get("/", (req, res) => {
    return res.send("Hey it is working");
});
app.listen(PORT, () => console.log(`server is running on PORT ${PORT} `));
