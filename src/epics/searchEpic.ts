import { ofType } from "redux-observable";
import { interval } from "rxjs";
import { debounce, map } from "rxjs/operators";
import { inputChange, search } from "../reducers/slices/pingEpicSlice";

export const searchEpic = (action$: any, store: any) => {
    return action$.pipe(
        ofType(inputChange),
        debounce(() => interval(500)),
        map(search),
    );
    }