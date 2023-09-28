import { configureStore } from "@reduxjs/toolkit";
import { listStateReducer } from "../reducers/slices/listStateSlice";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "../epics";
import { pingEpicReducer } from "../reducers/slices/pingEpicSlice";
import { apiReducer } from "../reducers/slices/apiSlice";

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
    reducer: {
        listState: listStateReducer,
        pingReducer: pingEpicReducer,
        apiSlice: apiReducer,
    },
    middleware: [epicMiddleware]
});

epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;