function addTask() {
    let taskInput = document.getElementById("taskInput").value;
    let startTime = document.getElementById("startTime").value;
    let startAmPm = document.getElementById("startAmPm").value;
    let endTime = document.getElementById("endTime").value;
    let endAmPm = document.getElementById("endAmPm").value;
    
    if (taskInput === "" || startTime === "" || endTime === "") {
        alert("Please fill in all fields.");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `${taskInput} ( ${startTime} ${startAmPm} - ${endTime} ${endAmPm} ) 
        <button class='edit-btn' onclick='editTask(this)'>Edit</button>
        <button class='delete-btn' onclick='deleteTask(this)'>Delete</button>`;
    taskList.appendChild(li);
    
    document.getElementById("taskInput").value = "";
    document.getElementById("startTime").value = "";
    document.getElementById("endTime").value = "";
}

function deleteTask(btn) {
    btn.parentElement.remove();
}

function editTask(btn) {
    let li = btn.parentElement;
    let taskDetails = li.childNodes[0].nodeValue;
    let [taskText, timeRange] = taskDetails.split(" (");
    let [startTime, endTime] = timeRange.replace(")", "").split(" - ");
    
    document.getElementById("taskInput").value = taskText.trim();
    document.getElementById("startTime").value = startTime.trim().split(" ")[0];
    document.getElementById("startAmPm").value = startTime.trim().split(" ")[1];
    document.getElementById("endTime").value = endTime.trim().split(" ")[0];
    document.getElementById("endAmPm").value = endTime.trim().split(" ")[1];
    
    li.remove();
}
