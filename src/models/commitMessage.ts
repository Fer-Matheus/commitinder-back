import { Diff } from "./diff";
import { Model } from "./model";

export type commitMessage = {
  id: Number;
  message: String;
  diffId: Diff;
  modelId: Model;
};
