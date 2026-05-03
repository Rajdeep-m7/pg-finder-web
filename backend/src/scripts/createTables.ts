import { pool } from "../config/db.js";

const createTables = async () => {
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

    --pgs
    CREATE TABLE IF NOT EXISTS pgs (
    id SERIAL PRIMARY KEY,
      owner_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      name VARCHAR(100) NOT NULL,
      description TEXT,
      address VARCHAR(255) NOT NULL,
      city VARCHAR(100) NOT NULL,
      state VARCHAR(100) NOT NULL,
      gender_allowed VARCHAR(20) ,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    --pg locations
    CREATE TABLE IF NOT EXISTS pg_locations (
      id SERIAL PRIMARY KEY,
      pg_id INTEGER NOT NULL REFERENCES pgs(id) ON DELETE CASCADE,
      latitude DECIMAL(10, 8) NOT NULL,
      longitude DECIMAL(11, 8) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    --rooms
    CREATE TABLE IF NOT EXISTS rooms(
      id SERIAL PRIMARY KEY,
      pg_id INTEGER NOT NULL REFERENCES pgs(id) ON DELETE CASCADE,
      room_type VARCHAR(50) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      total_beds INTEGER NOT NULL,
      available_beds INTEGER NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      CHECK (available_beds <= total_beds)
    );

    --amenities
    CREATE TABLE IF NOT EXISTS amenities (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL UNIQUE
    );

    --pg_amenities
    CREATE TABLE IF NOT EXISTS pg_amenities (
      id SERIAL PRIMARY KEY,
      amenity_id INTEGER NOT NULL REFERENCES amenities(id) ON DELETE CASCADE,
      pg_id INTEGER NOT NULL REFERENCES pgs(id) ON DELETE CASCADE,
      UNIQUE(amenity_id, pg_id)
    );

    --bookings
    CREATE TABLE IF NOT EXISTS bookings (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      room_id INTEGER NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
      check_in DATE NOT NULL,
      check_out DATE,
      status VARCHAR(20) CHECK (status IN ('pending','confirmed','rejected','cancelled')) DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    --pg_iamges
    CREATE TABLE IF NOT EXISTS pg_images(
      id SERIAL PRIMARY KEY,
      pg_id INTEGER NOT NULL REFERENCES pgs(id) ON DELETE CASCADE,
      image_url TEXT NOT NULL
    );

    --favorites
    CREATE TABLE IF NOT EXISTS favorites(
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      pg_id INTEGER NOT NULL REFERENCES pgs(id) ON DELETE CASCADE,
      unique(user_id, pg_id)
    );
  `;

  try {
    await pool.query(query);
    console.log("✅ ALL table created successfully");
  } catch (error) {
    console.error("❌ Error creating  table:", error);
  } finally {
    await pool.end();
  }
};

createTables();