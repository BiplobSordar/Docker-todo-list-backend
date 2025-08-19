// db.js
import mysql from "mysql2/promise";

const DB_NAME = process.env.DB_NAME || "todo_db";
let db;

// Initialize Database

export async function initDB() {

    // 1️ Connect without DB

    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
    });

    // 2️ Create DB if not exists

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``);

    // 3️  Connect with DB
    db = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        port: 3306,
        database: DB_NAME,
    });

    // 4️ Create table if not exists
    await db.query(`
    CREATE TABLE IF NOT EXISTS todos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      completed BOOLEAN DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

    console.log("✅ Database & table ready");
}

// Export db instance for queries
export function getDB() {
    if (!db) {
        throw new Error("❌ Database not initialized. Call initDB() first.");
    }
    return db;
}
