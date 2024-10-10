import { Router } from "express";
import { MatchController } from "../controllers/match.controller";

const matchRouter = Router();
const matchController = new MatchController();

matchRouter.get("/match", matchController.CreateMatch)
matchRouter.get("/match/:id", matchController.CreateMatchUsingDiffId)

export {matchRouter}