import fs from "fs-extra";
import path from "path";
import pool from "./connect.js";

const tablesFilePath = path.join(process.cwd(), "src/database/tables.sql");

const createDefaultTables = async () => {
  try {
    
    const buffer = await fs.readFile(tablesFilePath);
   
    const tablesSQLQuery = buffer.toString();
    
    await pool.query(tablesSQLQuery);
    console.log(`✅ Default tables are created.`);
  } catch (error) {
    console.log(error);
  }
};

export default createDefaultTables;