import React from "react";
import { Line } from "react-chartjs-2";

const Dashboard = ({ proxyStatus }) => {
  const data = {
    labels: ["Task 1", "Task 2", "Task 3"],
    datasets: [{ label: "Task Success Rate", data: [90, 85, 95], borderColor: "green" }]
  };

  return (
    <div>
      <h2>Task Status</h2>
      <Line data={data} />

      <h2>Proxy Health</h2>
      {proxyStatus ? (
        <p>Status: {proxyStatus.status} | Active Proxies: {proxyStatus.activeProxies}</p>
      ) : (
        <p>Loading proxy status...</p>
      )}
    </div>
  );
};

export default Dashboard;
