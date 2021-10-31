import React, { useState } from "react";

const withAuth = (Component) => (props) => {
  const [auth, setAuth] = useState(!!localStorage.getItem("user"));

  const handleLogin = () => {
    localStorage.setItem("user", "user");
    setAuth(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuth(false);
  };

  return <Component {...props} onLogin={handleLogin} onLogOut={handleLogout} isAuth={auth}/>;
};

export default withAuth;
