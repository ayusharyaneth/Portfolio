export const getProxyStatus = async () => {
  const response = await fetch("http://localhost:3000/proxy-status");
  return response.json();
};
