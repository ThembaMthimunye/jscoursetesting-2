const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

function addTask(){
    const taskText=taskInput.ariaValueMax.trim()
    if(taskText!=="")
    {
        taskInput.push({text:taskText})
        taskInput.value="";
        displayTasks()
    }
}

function displayTasks(){
    taskList.innerHTML=""
    tasks.forEach((task,index)=>{
    const li=document.createElementById('li')
    li.innerHTML=`{<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for ="task-${index} >${task.text}"></label>} `
    taskList.appendChild(li)
    }
)
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks()
{
    tasks=tasks.filter(task=>!task.completed)
    displayTasks();
}

function Clear(){
    tasks.lenght=0
    displayTasks();
}

addTaskBtn.addEventLister("click",addTask);
clearCompletedBtn.addEventLister("click",clearCompletedTasks)


