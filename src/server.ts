import Express from "express";
import cors from "cors";

import { matchRouter } from "./api/routes/match.router";

const PORT = 3001;
const server = Express();

server.get("/", (_, res) => {
  res.send("Connection success");
});
server.use(cors())
server.use(matchRouter);

server.listen({ port: PORT }, () => {
  console.log(`Listening on port ${PORT}`);
});
