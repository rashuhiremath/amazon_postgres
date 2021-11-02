import express from "express";
import usersRoute from "./services/products/route.js";
import createDefaultTables from "./database/create_table.js";

const server = express();

const { PORT } = process.env;

server.use(express.json());

server.use("/users", usersRoute);

server.listen(PORT, async () => {
  console.log(`✅ Server is running on port ${PORT}`);
  await createDefaultTables();
});

server.on("error", console.log);