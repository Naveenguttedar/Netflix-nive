import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => signOut(auth);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser)
    );
    return () => unSubscribe();
  });
  return (
    <AuthContext.Provider value={{ user, signUp, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
