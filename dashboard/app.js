import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { getProxyStatus } from "./api";

const App = () => {
  const [proxyStatus, setProxyStatus] = useState(null);

  useEffect(() => {
    getProxyStatus().then((status) => setProxyStatus(status));
  }, []);

  return <Dashboard proxyStatus={proxyStatus} />;
};

export default App;
