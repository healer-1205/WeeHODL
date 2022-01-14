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
            <Route exact path="/" component={Home} />
            <Route exact path="/users/signup" component={Login} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
