import { MatchService } from "../services/match.service";

import { Request, Response } from "express";

const matchService = new MatchService();

export class MatchController {
  async CreateMatch(req: Request, res: Response) {
    const response = await matchService.CreateMatch(req, res);
    res.status(200).send({ match: response });
  }
  async CreateMatchUsingDiffId(req: Request, res: Response) {
    const response = await matchService.CreateMatchUsingDiffId(req, res);
    res.status(200).send({ match: response });
  }
}
