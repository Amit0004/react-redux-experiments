import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const apiSlice = createSlice({
    name: "apiSlice",
    initialState: {
        status: '',
        data: {},
        numberOfTrigger: 0,
    },
    reducers: {
        success: (state, action: PayloadAction<any>) => {
            state.status = 'success';
            state.data = action.payload;
        },
        apiError: (state, action: PayloadAction<any>) => {
            state.status = 'error';
        },
        fetchUser: (state) => {
            state.numberOfTrigger++;
        }
    }
});

export const { success, apiError, fetchUser } = apiSlice.actions;
export const apiSelector = (state: any) => state.apiSlice;
export const apiReducer = apiSlice.reducer;
