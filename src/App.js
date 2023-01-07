import "./App.scss";
import Navbar from "./components/navbar";
// import Workspace from "./components/workspace";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
