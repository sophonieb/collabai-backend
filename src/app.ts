import express from "express";
import routes from "./routes";
import http from "node:http";

// Express application
const app = express();
// HTTP Server
const server = new http.Server(app);
// Routes
app.use("/api/v1", routes);

export default server;
