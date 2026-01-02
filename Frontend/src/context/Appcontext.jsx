import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);

export const Appcontextprovider = ({ children }) => {
  const [isloggedin, setisloggedin] = useState(false);
  const [user, setUser] = useState(null); // { id, name, role }

  // 🔐 Load auth state on app start
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (token && savedUser) {
      setisloggedin(true);
      setUser(JSON.parse(savedUser));
    } else {
      setisloggedin(false);
      setUser(null);
    }
  }, []);

  // ✅ Login handler
  const login = (token, userData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));

    setisloggedin(true);
    setUser(userData);
  };

  // ✅ Logout handler
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setisloggedin(false);
    setUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        isloggedin,
        user,
        login,
        logout
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useappcontaxt = () => useContext(AppContext);
