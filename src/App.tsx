import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import BoardPage from "./components/pages/BoardPage";
import PlaygroundPage from "./components/pages/PlaygroundPage";
import {
  API_PLAYGROUND,
  BOARD,
  HOME,
  REDUX_OBSERVABLES,
  DND_PLAYGROUND,
} from "./constants/routes";
import { ReduxObservables } from "./components/pages/ReduxObservables";
import { ApiPlayground } from "./components/pages/ApiPlayground";
import { DndPlayground } from "./components/pages/DnDPlayground";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={HOME} element={<BoardPage />} />
        <Route path={BOARD} element={<PlaygroundPage />} />
        <Route path={REDUX_OBSERVABLES} element={<ReduxObservables />} />
        <Route path={API_PLAYGROUND} element={<ApiPlayground />} />
        {/* <Route path={DND_PLAYGROUND} element={<DndPlayground />} /> */}
      </Routes>
    </div>
  );
}

export default App;
