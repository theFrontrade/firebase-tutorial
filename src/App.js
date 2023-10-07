import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SigninBoxed from "./components/pages/Signin/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SigninBoxed />} />
      </Routes>
    </Router>
  );
}

export default App;
