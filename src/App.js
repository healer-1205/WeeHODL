import "./App.css";
import './App.scss';
// import NavBar from "./components/layouts/NavBar";
// import Header from "./components/layouts/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/useAuth";
import { Login } from "./components/Login";
import 'bootstrap/dist/css/bootstrap.css';
import { PrivateRoute } from "./components/PrivateRoute";
import { User } from "./components/users/User";

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <Header /> */}
        <div>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="user"
              element={
                <PrivateRoute>
                  <User />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
