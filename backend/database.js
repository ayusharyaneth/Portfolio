const { Pool } = require("pg");

const pool = new Pool({
  user: "your_db_user",
  host: "localhost",
  database: "galxe_automation",
  password: "your_db_password",
  port: 5432,
});

exports.getUserByKey = async (key) => {
  const res = await pool.query("SELECT * FROM users WHERE key = $1", [key]);
  return res.rows[0];
};
