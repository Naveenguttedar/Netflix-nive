import Hero from "./pages/Hero";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import { AuthProvider } from "./context/Auth";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="max-w-7xl hide-scrollbar text-white m-auto">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route
            exact
            path="/hero"
            element={
              // <ProtectedRoute>
              <Hero />
              // </ProtectedRoute>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          {/* <Route path="/Netflix-nive" element={<Home />}></Route> */}
          <Route path="/account" element={<Account />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
