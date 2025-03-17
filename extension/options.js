document.getElementById("save").addEventListener("click", () => {
  const proxy = document.getElementById("proxy").value;
  chrome.storage.sync.set({ proxy }, () => alert("Proxy saved!"));
});
