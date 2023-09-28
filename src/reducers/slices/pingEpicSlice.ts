import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const pingEpicSlice = createSlice({
    name: "pingEpic",
    initialState: {
        ping: "Ping",
        input: ""
    },
    reducers: {
        setPing: (state) => {
            state.ping = "Pong";
        },
        setPong: (state) => {
            state.ping = "Ping";
        },
        inputChange: (state, action: PayloadAction<any>) => {
            state.input = action.payload
        },
        search: (state) => {
            console.log(state.input);
        }
    }
});

export const { setPing, setPong, inputChange, search } = pingEpicSlice.actions;
export const pingEpicSelector = (state: any) => state.pingReducer;
export const pingEpicReducer = pingEpicSlice.reducer;