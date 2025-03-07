import express from "express";
import "dotenv/config";
import { Sequelize } from "sequelize";

const app = express();
const PORT = process.env.PORT || 3333;

// Database connection
const sequelize = new Sequelize(process.env.DATABASE_URL);

// Test database connection
async function testConnection() {
	try {
		await sequelize.authenticate();
		console.log("Database connection established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}

testConnection();

app.get("/", (req, res) => {
	res.status(200).json("Hello World");
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
