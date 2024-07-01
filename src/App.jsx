import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Pos from "./Poss";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={""} element={<Pos />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
