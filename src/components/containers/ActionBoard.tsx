import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import {
  listStateSelector,
  addInToDoList,
  addInProgressList,
  addInCompletedList,
} from "../../reducers/slices/listStateSlice";
import ListBucket from "../molecules/ListBucket";
import classes from "./ActionBoard.module.css";

export interface ActionBoardProps {
  children?: React.ReactNode;
  id?: string;
  action?: string;
}

const ActionBoard = ({ children, id, action }: ActionBoardProps) => {
  const { toDoList, inProgressList, completedList } =
    useAppSelector(listStateSelector);
  const dispatch = useAppDispatch();

  const onAddItem = (bucket: string) => {
    switch (bucket) {
      case "toDo": {
        dispatch(addInToDoList("New Action"));
        break;
      }
      case "inProgress": {
        dispatch(addInProgressList("New Action"));
        break;
      }
      case "completed": {
        dispatch(addInCompletedList("New Action"));
        break;
      }
    }
  };

  console.log({ toDoList, inProgressList, completedList });
  return (
    <div className={classes.actionBoard}>
      <ListBucket
        width="33%"
        label="To Do"
        id="toDo"
        onAddItem={() => onAddItem("toDo")}
        items={toDoList}
      ></ListBucket>
      <ListBucket
        width="33%"
        label="In Progress"
        id="inProgress"
        onAddItem={() => onAddItem("inProgress")}
        items={inProgressList}
      ></ListBucket>
      <ListBucket
        width="33%"
        label="completed"
        id="completed"
        onAddItem={() => onAddItem("completed")}
        items={completedList}
      ></ListBucket>
    </div>
  );
};

export default ActionBoard;
