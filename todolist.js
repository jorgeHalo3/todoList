let task = document.getElementById('taskType');
let submitButton = document.getElementById('submit');
let taskList = document.getElementById ('taskList');
let sectionTag = document.querySelector("section")

submitButton.addEventListener('click',function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = task.value;
    taskList.appendChild(paragraph);
})