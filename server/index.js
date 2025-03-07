import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 3333;

app.get("/", (req, res) => {
	res.status(200).json("Hello");
});

app.listen(PORT, () => {
	console.log(`Listening  on port ${PORT}`);
});
