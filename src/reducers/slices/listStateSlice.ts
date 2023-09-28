import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListState {
  toDoList: any[];
  inProgressList: any[];
  completedList: any[];
}

const initialState: ListState = {
  toDoList: [],
  inProgressList: [],
  completedList: [],
};

export const listStateSlice = createSlice({
  name: "listState",
  initialState,
  reducers: {
    addInToDoList: (state, action: PayloadAction<any>) => {
        state.toDoList.push(action.payload);
    },
    addInProgressList: (state, action: PayloadAction<any>) => {
        state.inProgressList.push(action.payload);
    },
    addInCompletedList: (state, action: PayloadAction<any>) => {
        state.completedList.push(action.payload);
    }
  },
});

export const { addInToDoList, addInProgressList, addInCompletedList } = listStateSlice.actions;
export const listStateSelector = (state: any) => state.listState;
export const listStateReducer = listStateSlice.reducer;
