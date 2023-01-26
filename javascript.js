

const  btn = document.getElementById("add_btn");
const hideHeading = document.getElementById("empty_list");
      
btn.addEventListener("click", hide);
btn.addEventListener("click", myfun);

function myfun() {
  let input_text=document.getElementById("input_text") 
  if(input_text.value===" "){
    alert("enter task");

  }
  else{
  let list = document.getElementById("list");
  let div= document.createElement("div");
  let listItem = document.createElement("li");
  
let value1 = document.getElementById("input_text").value;
 
  let buttonContainer = document.createElement("div");
  buttonContainer.className="modify-buttons";
   
  let deleteButton = document.createElement("i");
 deleteButton.className="fa-solid   fa-trash";

 let editButton = document.createElement("i");
 editButton.className="fa-solid  fa-pen-to-square";

 let doneButton = document.createElement("i");
 doneButton.className="fa-solid   fa-check";
 let editContainer=document.getElementById("editContainer");
 
  // function for adding and removing the input text
  if (value1 != "") {
    listItem.innerText=input_text.value ;
    list.appendChild(div);
    div.appendChild(listItem);
    div.appendChild(buttonContainer);
    buttonContainer.appendChild(deleteButton)
    buttonContainer.appendChild( editButton )
    buttonContainer.appendChild(doneButton)
   

1//deleting the task
    deleteButton.addEventListener('click', function () {
      div.parentNode.removeChild(div);
     })


    doneButton.addEventListener('click', function() {
   listItem.className="done_task";  
    })


    input_text.value = "";

    editButton.addEventListener('click',function( this){
      editContainer.style.display="flex";

      let editInput=document.getElementById("edit_input" );
      editInput.value = listItem.innerHTML;

      

  })



  
      editDoneButton.addEventListener('click',function(){
        listItem.innerHTML= document.getElementById("edit_input" ).value;
   }

    )

  // edit button action defination
    // let editDoneButton= document.getElementById("editButton");
     


 }

}

}
function hide() {
  hideHeading.style.display = "none";

}