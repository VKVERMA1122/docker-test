import express from "express";
import "dotenv/config";
import { Sequelize } from "sequelize";

const app = express();
const PORT = process.env.PORT || 3333;

// Database connection with more detailed options
const sequelize = new Sequelize(process.env.DATABASE_URL, {
	logging: console.log, // Enable SQL query logging
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	retry: {
		max: 5, // Retry connection 5 times
	},
});

// Initialize server with database connection
const startServer = async () => {
	try {
		// Test database connection
		await sequelize.authenticate();
		console.log("✅ Database connection established successfully");

		// Start server only after successful DB connection
		app.listen(PORT, () => {
			console.log(`🚀 Server running on port ${PORT}`);
		});
	} catch (error) {
		console.error("❌ Database connection failed:", error.message);
		// Wait 5 seconds before exiting to see the error in Docker logs
		setTimeout(() => process.exit(1), 5000);
	}
};

app.get("/", (req, res) => {
	res.status(200).json("Hi");
});

// Start the server
startServer();
