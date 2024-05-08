import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./components/Registration";
import Success from "./components/Success";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
