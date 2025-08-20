// db.js
import mysql from "mysql2/promise";


let db;

// Initialize Database

export async function initDB() {



    //Environment Variales

    const DB_HOST = process.env.DB_HOST || "localhost";
    const DB_USER = process.env.DB_USER || "root";
    const DB_PASSWORD = process.env.DB_PASSWORD || "";
    const DB_NAME = process.env.DB_NAME || "todo_db";
    const DB_PORT = process.env.DB_PORT || 3306;





    try {
        // 1️ Connect without DB
        const connection = await mysql.createConnection({
            host: DB_HOST, // কন্টেইনারে 'mysql-db' এবং লোকালি 'localhost'
            user: DB_USER,
            password: DB_PASSWORD,
        });

        // 3️⃣ ডেটাবেস তৈরি করুন যদি না থাকে
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``);
        console.log(`Database '${DB_NAME}' created or already exists.`);



        // 4️⃣ নির্দিষ্ট ডেটাবেসের সাথে পুনরায় কানেক্ট করুন
        db = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME,
            port: DB_PORT,
        });

        await db.query(`
    CREATE TABLE IF NOT EXISTS todos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      completed BOOLEAN DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);


        console.log("✅ Database & table ready");
    } catch (error) {
        console.error("Failed to connect to database:", error);
        process.exit(1); // সংযোগ ব্যর্থ হলে অ্যাপ্লিকেশন বন্ধ করুন
    }





}

// Export db instance for queries
export function getDB() {
    if (!db) {
        throw new Error("❌ Database not initialized. Call initDB() first.");
    }
    return db;
}
