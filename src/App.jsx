import "./styles/App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import {Navbar} from "./components/Navbar.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
