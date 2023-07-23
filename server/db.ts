import { Pool } from 'pg';

const databasePort = process.env.DATABASE_PORT
  ? parseInt(process.env.DATABASE_PORT, 10)
  : 5432;

const pool = new Pool({
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  user: process.env.DATABASE_USER,
  // port: process.env.DATABASE_PORT,
  port: databasePort,
});

export default pool;
