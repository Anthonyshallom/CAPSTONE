const API_URL = "http://localhost:5000";

document.addEventListener("DOMContentLoaded", () => {
  const loginSection = document.getElementById("login-section");
  const taskSection = document.getElementById("task-section");
  const loginError = document.getElementById("login-error");
  const taskError = document.getElementById("task-error");
  const taskList = document.getElementById("task-list");


  document.getElementById("loginBtn").addEventListener("click", async () => {
    loginError.textContent = "";  // Clear previous error messages
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();
      localStorage.setItem("token", data.token);
      loginSection.style.display = "none";
      taskSection.style.display = "block";
      loadTasks();
    } catch (error) {
      loginError.textContent = error.message || "Login failed. Please try again.";
    }
  });

  
  document.getElementById("addTaskBtn").addEventListener("click", async () => { console.log("add Task button clicked")
    taskError.textContent = "";  // Clear previous error messages
    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const deadline = document.getElementById("task-deadline").value;
    const priority = document.getElementById("task-priority").value;

    if (!title) {
      taskError.textContent = "Task title is required.";
      return;
    }

    try {NPM
      
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ title, description, deadline, priority })
      });

      if (!response.ok) throw new Error("Failed to add task");

      loadTasks();  // Reload tasks after adding a new one
    } catch (error) {
      taskError.textContent = error.message || "Failed to add task.";
    }
  });

  
  async function loadTasks(filterPriority = "all") {
    taskList.innerHTML = "";  // Clear existing tasks

    try {
      const response = await fetch("/api/tasks", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });

      if (!response.ok) throw new Error("Failed to load tasks");

      const tasks = await response.json();
      const filteredTasks = filterPriority === "all" ? tasks : tasks.filter(task => task.priority === filterPriority);

      filteredTasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.title} - Priority: ${task.priority} - Due: ${new Date(task.deadline).toLocaleDateString()}`;
        taskList.appendChild(li);
      });
    } catch (error) {
      taskError.textContent = error.message || "Failed to load tasks.";
    }
  }

  
  document.getElementById("applyFiltersBtn").addEventListener("click", () => {
    const filterPriority = document.getElementById("filter-priority").value;
    loadTasks(filterPriority);
  });

});
