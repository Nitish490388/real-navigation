import express from "express"
import morgan from "morgan";
import dotenv from "dotenv";

const app = express();

app.use(express.json({limit: "25mb"}));
app.use(morgan('common'));

app.get("/", (req, res) => {
    res.send("Ok from server")
});

app.listen("8080", () => {
    console.log("Server is listening at port", 8080);
    
});