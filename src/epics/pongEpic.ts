import { ofType } from "redux-observable";
import { delay, map } from "rxjs/operators";
import { setPing, setPong } from "../reducers/slices/pingEpicSlice";

export const pongEpic = (action$: any, store: any) => {
  return action$.pipe(
    ofType(setPong),
    delay(500),
    map(setPing),
  );
};