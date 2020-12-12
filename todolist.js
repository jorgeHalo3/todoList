let task = document.getElementById('taskType');
let submitButton = document.getElementById('submit');
let taskList = document.getElementById ('taskList');
let sectionTag = document.querySelector("section")
///////events///

////submit///
submitButton.addEventListener('click',function(){
   
if(task.value == "")
  return;
 
var paragraph = document.createElement('p')
    paragraph.innerText = task.value;
    taskList.appendChild(paragraph);
    task.value="";
   
////complete button/////
    const completeButton = document.createElement('input');
    completeButton.type = "checkbox" ;
    completeButton.classList.add("complete-btn");
completeButton.classList.add("check");
    paragraph.appendChild(completeButton)
    completeButton.addEventListener('click', function(){
   if(completeButton.checked)
paragraph.style.textDecoration = "line-through";
else
paragraph.style.textDecoration = "none";
    })

    //// trash////
    const trashButton = document.createElement('input');
trashButton.type ="submit";
trashButton.style.color ="red";
    trashButton.classList.add("trash");
    trashButton.classList.add("trash-btn");
trashButton.value = " X ";
    paragraph.appendChild(trashButton)
    trashButton.addEventListener('click', function(){
        paragraph.remove()
})})
