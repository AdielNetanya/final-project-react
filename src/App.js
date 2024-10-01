import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <Routes>
                <Route path="/" element={user ? <Home /> : <Register />} /> {/* Use element prop */}
                <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} /> {/* Replace Redirect with Navigate */}
                <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} /> {/* Replace Redirect with Navigate */}
                <Route path="/profile/:username" element={<Profile />} /> {/* Use element prop */}
            </Routes>
        </Router>
    );
}

export default App;
