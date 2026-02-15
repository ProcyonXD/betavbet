// Auto login check
if (localStorage.getItem("betavbet_user")) {
  console.log("User logged in");
}

// Signup
function signup() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Fill all fields");
    return;
  }

  if (localStorage.getItem("user_" + username)) {
    alert("Username taken");
    return;
  }

  const userId = "BVB" + Math.floor(Math.random() * 1000000);

  const userData = {
    username: username,
    password: password,
    userId: userId
  };

  localStorage.setItem("user_" + username, JSON.stringify(userData));
  localStorage.setItem("betavbet_user", username);

  alert("Account created!");
  window.location.href = "profile.html";
}

// Login
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedUser = localStorage.getItem("user_" + username);

  if (!storedUser) {
    alert("User not found");
    return;
  }

  const userData = JSON.parse(storedUser);

  if (userData.password !== password) {
    alert("Wrong password");
    return;
  }

  localStorage.setItem("betavbet_user", username);
  window.location.href = "profile.html";
}

// Profile page
function loadProfile() {
  const currentUser = localStorage.getItem("betavbet_user");
  if (!currentUser) {
    window.location.href = "login.html";
    return;
  }

  const userData = JSON.parse(localStorage.getItem("user_" + currentUser));
  document.getElementById("profileInfo").innerHTML =
    "Username: " + userData.username + "<br>User ID: " + userData.userId;
}
