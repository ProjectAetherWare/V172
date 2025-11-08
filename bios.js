function updateTime() {
  const now = new Date();
  const t = now.toTimeString().split(" ")[0];
  document.getElementById("time").textContent = t;
}
setInterval(updateTime, 1000);
updateTime();

const menuItems = document.querySelectorAll(".menu-item");
let selected = 0;

function refreshMenu() {
  menuItems.forEach((el, i) => el.classList.toggle("selected", i === selected));
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    selected = (selected + 1) % menuItems.length;
    refreshMenu();
  } else if (e.key === "ArrowUp") {
    selected = (selected - 1 + menuItems.length) % menuItems.length;
    refreshMenu();
  } else if (e.key === "Enter") {
    alert("Booting " + menuItems[selected].textContent + " soon...");
  }
});

document.getElementById("exitBtn").onclick = () => window.close();
