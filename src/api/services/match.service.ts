import { PrismaClient } from "@prisma/client";
import { Match } from "../../models/match";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class MatchService {
  async CreateMatch(req: Request, res: Response) {
    const diff = await prisma.diffs.findFirst();

    const commitMessages = await prisma.commitMessage.findMany({
      where: {
        diffId: diff?.id,
      },
      take: 2,
    });

    const match: Match = {
      diff: diff!,
      commitMessageA: commitMessages[0],
      commitMessageB: commitMessages[1],
    };

    return match;
  }
  async CreateMatchUsingDiffId(req: Request, res: Response) {
    const id = Number(req.params.id)
    const diff = await prisma.diffs.findFirst({
        where: {
            id: id
        }
    })

    const commitMessages = await prisma.commitMessage.findMany({
      where: {
        diffId: diff?.id,
      },
      take: 2,
    });

    const match: Match = {
      diff: diff!,
      commitMessageA: commitMessages[0],
      commitMessageB: commitMessages[1],
    };

    return match;
  }
}
