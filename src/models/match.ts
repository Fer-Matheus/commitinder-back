import { CommitMessage } from "@prisma/client";
import { Diff } from "./diff";

export type Match = {
  diff: Diff;
  commitMessageA: CommitMessage;
  commitMessageB: CommitMessage;
};
