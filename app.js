var MaintodoContainer = document.getElementById('todos');
var input = document.querySelector('.todo_input');
var addingButton = document.querySelector('.add-item');
var deleteAllBtn = document.querySelector('.deleteBtn');


addingButton.addEventListener('click',function(e){
   if(input.value.trim()){

    var ulTag = document.createElement('ul');
    ulTag.classList.add('todo_list_container');

    var todolist = document.createElement('div');
    todolist.classList.add('todo-list');

    var litag =document.createElement('li');
    litag.innerHTML = input.value;
    litag.classList.add('todo-item');

    var buttondiv = document.createElement('div');
    buttondiv.classList.add('button');

    var completedbutton = document.createElement('button');
    completedbutton.classList.add('completed');
    completedbutton.innerHTML = '<i class="fas fa-check"></i>';

    
    var editbutton = document.createElement('button');
    editbutton.classList.add('editBtn');
    editbutton.innerHTML = '<i class="fas fa-edit"></i>';
    editbutton.onclick = function(){
        editworking(litag);
    }

    
    var trashbutton = document.createElement('button');
    trashbutton.classList.add('trashBtn');
    trashbutton.innerHTML = '<i class="fas fa-trash"></i>';


    ulTag.appendChild(todolist);
    todolist.appendChild(litag);
    todolist.appendChild(buttondiv);
    buttondiv.appendChild(completedbutton);
    buttondiv.appendChild(editbutton);
    buttondiv.appendChild(trashbutton);

    MaintodoContainer.appendChild(ulTag);

    todolist.addEventListener('click',function(e){
        var items = e.target;
        if(items.classList[0]=== 'completed'){
            var todo = items.parentElement;
            var todo2 = todo.parentElement;
            todo2.classList.add('line-through');
        }
        else if(items.classList[0]=== 'trashBtn'){
            var todo = items.parentElement;
            var todo2 = todo.parentElement;
            var todo3 = todo2.parentElement;
            todo2.classList.add('fall');
            todo3.addEventListener('transitionend',function(){
                todo3.remove();
            })
        }
    });

    input.value ='';
   }

   else if (input.value===''){
    alert("Please Fill the Input Field!!");
   }
})

function editworking(e){
    var editValue = prompt('Edit the Selected Item', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}

function deleteallelements() {
    var getULTAG = document.querySelectorAll('.todo_list_container');
    for(var i=0 ; i<getULTAG.length ; i++){
        getULTAG[i].remove();
    }
    input.value ='';

}