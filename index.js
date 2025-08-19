import express from "express";

import cors from "cors";
import dotenv from "dotenv";
import { getDB, initDB } from "./db-connection.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize DB Before Starting Server
await initDB()
let db=getDB()

app.use(cors());
app.use(express.json());

// Get all todos
app.get("/api/todos", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM todos ORDER BY id DESC");
  res.json(rows);
});

// Add todo
app.post("/api/todos", async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title required" });
  const [result] = await db.query("INSERT INTO todos (title) VALUES (?)", [title]);
  const [newTodo] = await db.query("SELECT * FROM todos WHERE id=?", [result.insertId]);
  res.status(201).json(newTodo[0]);
});

// Update todo
app.put("/api/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  await db.query("UPDATE todos SET title=?, completed=? WHERE id=?", [
    title,
    completed,
    id,
  ]);
  const [updated] = await db.query("SELECT * FROM todos WHERE id=?", [id]);
  res.json(updated[0]);
});

// Delete todo
app.delete("/api/todos/:id", async (req, res) => {
  const { id } = req.params;
  await db.query("DELETE FROM todos WHERE id=?", [id]);
  res.sendStatus(204);
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
