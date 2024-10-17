import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./contextApi/context";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";
import { useContext, useEffect} from "react";

function App() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const ProtectedRoute = ({ children }) => {
    console.log(children);
    return loggedInUser ? children : <Navigate to="/" />;
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      // Parse the user data and set the authentication state
      setLoggedInUser(JSON.parse(storedUser)); // Assuming you have setUser state
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
