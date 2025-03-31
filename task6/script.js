document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("task");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") return;
    
    let taskList = document.getElementById("task-list");
    let li = document.createElement("li");
    li.textContent = taskText;
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Өшіру";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
        saveTasks();
    };
    
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    
    saveTasks();
    taskInput.value = "";
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#task-list li").forEach(li => {
        tasks.push(li.textContent.replace("Өшіру", "").trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("task-list");
    tasks.forEach(taskText => {
        let li = document.createElement("li");
        li.textContent = taskText;
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Өшіру";
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
            saveTasks();
        };
        
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
