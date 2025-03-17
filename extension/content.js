console.log("Galxe automation script loaded.");

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "startTasks") {
    console.log("Starting automation...");
    executeTasks();
  }
});

function executeTasks() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    if (button.innerText.includes("Join")) {
      button.click();
      console.log("Joined task");
    }
  });

  setTimeout(() => {
    console.log("Completed all tasks.");
  }, 3000);
}
