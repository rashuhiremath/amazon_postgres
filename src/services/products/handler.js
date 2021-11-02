import pool from "../../database/connect.js";

const getAll = async (_req, res, _next) => {
  try {
    const data = await pool.query("SELECT * FROM products ORDER BY id ASC;");
    res.send(data.rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getById = async (req, res, _next) => {
  try {
    const data = await pool.query("SELECT * FROM products WHERE id=$1", [
      req.params.id,
    ]);
    

    if (data.rows.length === 0) {
      res.status(400).send("User not found");
    } else {
      res.send(data.rows[0]);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createProduct = async (req, res, _next) => {
  try {
    const { name, description, brand,image_url,price,category } = req.body;
    const data = await pool.query(
      "INSERT INTO products(name, description, brand, image_url, price, category ) VALUES($1,$2,$3) RETURNING *;",
      [name, last_name, email]
    );

    res.send(data.rows[0]);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateProductById = async (req, res, next) => {
  try {
    const { name, description, brand,image_url,price,category  } = req.body;
    const data = await pool.query(
      "UPDATE users SET name=$1,last_name=$2,email=$3 WHERE id=$4 RETURNING *;",
      [name, description, brand,image_url,price,category , req.params.id]
    );
    res.send(data.rows[0]);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteProductById = async (req, res, next) => {
  try {
    await pool.query("DELETE FROM products WHERE id=$1", [req.params.id]);
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const usersHandler = {
  getAll,
  getById,
  createProduct,
  updateProductById,
  deleteProductById,
};

export default usersHandler;