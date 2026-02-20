// Data storage
let tasks = [];

// Add new task
function addTask() {
    const nameInput = document.getElementById("task-name");
    const dateInput = document.getElementById("task-date");

    // Validation
    if (nameInput.value.trim() === "" || dateInput.value === "") {
        alert("Task name and date must be filled!");
        return;
    }

    const task = {
        name: nameInput.value,
        date: dateInput.value
    };

    tasks.push(task);

    nameInput.value = "";
    dateInput.value = "";

    renderTasks(tasks);
}

// Display tasks
function renderTasks(data) {
    const list = document.getElementById("task-list");
    list.innerHTML = "";

    if (data.length === 0) {
        list.innerHTML = `<li class="text-gray-400 text-sm">No tasks available</li>`;
        return;
    }

    data.forEach((task, index) => {
        list.innerHTML += `
            <li class="flex justify-between items-center border-b pb-1">
                <div>
                    <p class="font-medium">${task.name}</p>
                    <p class="text-xs text-gray-500">${task.date}</p>
                </div>
                <button onclick="deleteTask(${index})"
                    class="text-red-500 text-sm">Delete</button>
            </li>
        `;
    });
}

// Delete one task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks(tasks);
}

// Clear all tasks
function clearTasks() {
    tasks = [];
    renderTasks(tasks);
}

// Filter today's tasks
function filterToday() {
    const today = new Date().toISOString().split("T")[0];
    const filtered = tasks.filter(task => task.date === today);
    renderTasks(filtered);
}