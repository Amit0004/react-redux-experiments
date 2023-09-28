import { useDispatch, useSelector, useStore } from "react-redux";
import {
  inputChange,
  pingEpicSelector,
  setPing,
} from "../../reducers/slices/pingEpicSlice";
import Button from "../atoms/Button";
import { Circle } from "../atoms/Circle";

export interface ReduxObservalesProps {}

export const ReduxObservables = ({}: ReduxObservalesProps) => {
  const dispatch = useDispatch();
  const buttonLabel = useSelector(pingEpicSelector);
  const store = useStore();

  const onClickHandler = () => {
    dispatch(setPing());
    console.log({ store: store.getState() });
  };
  const isPing = buttonLabel?.ping === "Ping";
  const isPong = buttonLabel?.ping === "Pong";

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    dispatch(inputChange(e.currentTarget.value));
  };
  return (
    <div>
      <h1>Redux Observables</h1>
      <hr />
      <Button onClick={onClickHandler}>{buttonLabel.ping}</Button>
      <div style={{ display: "flex", gap: "10px" }}>
        {isPing ? (
          <Circle color="green" size="50px" />
        ) : (
          <Circle color="silver" size="50px" />
        )}
        {isPong ? (
          <Circle color="red" size="50px" />
        ) : (
          <Circle color="silver" size="50px" />
        )}
      </div>
      <input type="text" onKeyUp={(e) => onKeyUp(e)} />
    </div>
  );
};
