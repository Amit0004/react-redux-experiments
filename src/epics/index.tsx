import { combineEpics } from "redux-observable";
import { apiHandlerEpic } from "./apiHandlerEpi";
import { pingEpic } from "./pingEpic";
import { pongEpic } from "./pongEpic";
import { searchEpic } from "./searchEpic";

export const rootEpic = combineEpics(
  pingEpic,
  pongEpic,
  searchEpic,
  apiHandlerEpic
);
