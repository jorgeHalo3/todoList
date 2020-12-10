let task = document.getElementById('taskType');
let submitButton = document.getElementById('submit');
let taskList = document.getElementById ('taskList');
let sectionTag = document.querySelector("section")
///////events///

////submit///
submitButton.addEventListener('click',function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = task.value;
    taskList.appendChild(paragraph);
    task.value="";
    ////complete button/////
    const completeButton = document.createElement('button');
    completeButton.innerHTML= '<i class = "check"></i>';
    completeButton.classList.add("complete-btn");
    paragraph.appendChild(completeButton)
    completeButton.addEventListener('click', function(){
        completeButton.style.textDecoration = "line-through";
    })

    //// trash////
    const trashButton = document.createElement('button');
    trashButton.innerHTML= '<i class = "trash"></i>';
    trashButton.classList.add("trash-btn");
    paragraph.appendChild(trashButton)
    trashButton.addEventListener('click', function(){
        trashButton.removeChild(paragraph)

})})
