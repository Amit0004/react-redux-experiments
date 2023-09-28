import { useDispatch, useSelector } from "react-redux";
import { apiSelector, fetchUser } from "../../reducers/slices/apiSlice";
import Button from "../atoms/Button";

export interface ApiPlaygroundProps {}

export const ApiPlayground: React.FC<ApiPlaygroundProps> = ({}) => {
  const dispatch = useDispatch();
  const apiData = useSelector(apiSelector);

  const callApi = () => {
    dispatch(fetchUser());
  };
  return (
    <div>
      <h1>Playground</h1>
      <Button onClick={callApi}>Call Api</Button>
    </div>
  );
};
