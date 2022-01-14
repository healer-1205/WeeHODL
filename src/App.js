import "./App.css";
import './App.scss';
// import NavBar from "./components/layouts/NavBar";
// import Header from "./components/layouts/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Login } from "./components/Login";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="users/signup" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
