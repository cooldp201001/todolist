
let btn=document.getElementById("btn");

btn.addEventListener("click",myfun)



function myfun (){
    let list=document.getElementById("list");
    let div= document.createElement("div");
    let listItem = document.createElement("li");
let input= document.getElementById("i");
      listItem.innerText=input.value ;

      let line_container = document.createElement("div");
      line_container.className="modify-buttons";
       
    
      let deleteButton = document.createElement("i");
     deleteButton.className="fa-solid fa-trash";
    
    
     let editButton = document.createElement("i");
     editButton.className="fa-solid fa-pen-to-square";
    
    
     let doneButton = document.createElement("i");
     doneButton.className="fa-solid fa-check";
     
     list.appendChild(div);
     div.appendChild(listItem);
     div.appendChild(line_container);
     line_container.appendChild(deleteButton)
     line_container.appendChild( editButton )
     line_container.appendChild(doneButton)
     
     deleteButton.addEventListener('click', function () {
    

    div.parentNode.removeChild(div);
      })

      doneButton.addEventListener('click', function() {

       listItem.style.textDecoration ="line-through";
          
      })

      input_text.value = "";
}