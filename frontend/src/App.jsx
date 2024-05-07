import "./index.css";
import {BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <div className="h-screen overflow-y-scroll scrollbar scrollbar-thumb-green-200">
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
