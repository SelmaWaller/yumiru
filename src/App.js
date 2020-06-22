import React, { useEffect } from "react";

function App({ children }) {
  useEffect(() => {
    document.title = "ユミル | Yumiru";
  }, []);

  return <>{children}</>;
}

export default App;
