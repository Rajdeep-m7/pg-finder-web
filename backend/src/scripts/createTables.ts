import { pool } from "../config/db.js";

const createUsersTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      phone VARCHAR(15),
      password TEXT NOT NULL,
      role VARCHAR(20) CHECK (role IN ('admin', 'owner', 'user')) DEFAULT 'user',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(query);
    console.log("✅ Users table created successfully");
  } catch (error) {
    console.error("❌ Error creating users table:", error);
  } finally {
    await pool.end();
  }
};

createUsersTable();