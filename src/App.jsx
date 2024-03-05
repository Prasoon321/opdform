import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/Home";
import Opdform from "./components/Opdform";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opdform" element={<Opdform />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
