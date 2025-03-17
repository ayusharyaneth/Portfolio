chrome.runtime.onInstalled.addListener(() => {
  console.log("Galxe Task Automator Installed.");
});

chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    details.requestHeaders.push({
      name: "User-Agent",
      value: getRandomUserAgent(),
    });
    return { requestHeaders: details.requestHeaders };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "requestHeaders"]
);

function getRandomUserAgent() {
  const userAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/90.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/92.0",
    "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 Chrome/91.0",
  ];
  return userAgents[Math.floor(Math.random() * userAgents.length)];
}
