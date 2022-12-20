import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import { AuthProvider } from "./context/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div className="max-w-7xl hide-scrollbar text-white m-auto">
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          {/* <Route path="/Netflix-nive" element={<Home />}></Route> */}
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
