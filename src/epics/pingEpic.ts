import { ofType } from "redux-observable";
import { delay, map } from "rxjs/operators";
import { setPing, setPong } from "../reducers/slices/pingEpicSlice";

export const pingEpic = (action$: any, store: any) => {
    return action$.pipe(
        ofType(setPing),
        delay(300),
        map(setPong),
    );
};