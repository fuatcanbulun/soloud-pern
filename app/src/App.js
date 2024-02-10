import React, { useEffect, useState } from "react";

import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import { StoreProvider } from "./contexts/StoreContext";
import { checkToken } from "./services/token";

function App() {
  const [authorization, setAuthorization] = useState(false);

  useEffect(() => {
    tryToken();
  }, []);

  const tryToken = async () => {
    const isTokenValid = await checkToken();
    if (isTokenValid === true) {
      setAuthorization(true);
    } else {
      setAuthorization(false);
    }
  };

  return (
    <StoreProvider>
      {authorization ? <Home /> : <Login setAuthorization={setAuthorization} />}
    </StoreProvider>
  );
}

export default App;
