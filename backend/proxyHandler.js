const checkProxyHealth = async (req, res) => {
  try {
    const response = await fetch("https://proxy-check-service.com/status");
    const data = await response.json();
    res.json({ status: data.status, activeProxies: data.activeProxies });
  } catch (err) {
    res.status(500).json({ error: "Failed to check proxy health" });
  }
};

module.exports = { checkProxyHealth };
