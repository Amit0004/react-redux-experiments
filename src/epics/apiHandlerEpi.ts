import { ofType } from "redux-observable";
import { debounce, map, switchMap } from "rxjs/operators";
import { interval } from "rxjs";
import { apiError, fetchUser, success } from "../reducers/slices/apiSlice";

export const apiHandlerEpic = (action$: any, store: any) => {
  return action$.pipe(
    ofType(fetchUser),
    debounce(() => interval(500)),
    switchMap(() => {
      return fetch("https://api.github.com/users/moshfeghi")
        .then((response) => response.json())
        .then((data) => {
          success(data);
        })
        .catch((error) => {
          apiError("error");
        });
    })
  );
};
