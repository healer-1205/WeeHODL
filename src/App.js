import "./App.css";
import './App.scss';
// import NavBar from "./components/layouts/NavBar";
import Header from "./components/layouts/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
