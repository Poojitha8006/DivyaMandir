// LOGIN FUNCTION
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "admin") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    alert("Invalid Username or Password");
  }
}

// LOGOUT FUNCTION
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

// PROTECT INDEX PAGE
if (window.location.pathname.includes("index.html")) {
  if (!localStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
  }
}
