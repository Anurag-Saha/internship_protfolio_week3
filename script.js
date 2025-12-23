console.log("JS Connected");

// DARK MODE
const themeBtn = document.createElement("button");
themeBtn.textContent = "🌙 Theme";
document.querySelector("header .container").appendChild(themeBtn);

if (localStorage.getItem("dark") === "true") {
  document.body.classList.add("dark-mode");
}

themeBtn.onclick = () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "dark",
    document.body.classList.contains("dark-mode")
  );
};

// SHOW / HIDE ABOUT
document.getElementById("toggleAbout").onclick = () => {
  const about = document.getElementById("aboutText");
  about.style.display = about.style.display === "none" ? "block" : "none";
};

// IMAGE SLIDER
const images = ["image/1.jpg", "image/2.jpg", "image/3.jpg"];
let i = 0;
const slider = document.getElementById("slider");

document.getElementById("next").onclick = () => {
  i = (i + 1) % images.length;
  slider.src = images[i];
};

document.getElementById("prev").onclick = () => {
  i = (i - 1 + images.length) % images.length;
  slider.src = images[i];
};

// TODO LIST
document.getElementById("addTodo").onclick = () => {
  const input = document.getElementById("todoInput");
  if (input.value === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  const del = document.createElement("button");
  del.textContent = "X";
  del.onclick = () => li.remove();

  li.appendChild(del);
  document.getElementById("todoList").appendChild(li);
  input.value = "";
};

// FORM VALIDATION
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

form.onsubmit = (e) => {
  e.preventDefault();

  if (!email.value.includes("@")) {
    msg.textContent = "Invalid email";
    msg.style.color = "red";
    return;
  }

  if (message.value.length < 10) {
    msg.textContent = "Message too short";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Message sent!";
  msg.style.color = "green";
  form.reset();
};
