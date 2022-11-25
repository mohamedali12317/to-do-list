    let arrayofTasks = [];

    let input = document.querySelector(".input")
    let submit = document.querySelector(".add")
    let tasksDiv = document.querySelector(".tasks")

    getdataFromLocalStorage()

    //  Check if Theres Tasks In Local Storage

    if (localStorage.getItem('tasks')) {

        arrayofTasks = JSON.parse(localStorage.getItem('tasks'));

    }


    // add tasks

    submit.addEventListener("click",function () {

        if (input.value !== "") {
            
            addTaskToArray(input.value);                 // · Add · Task To Array Of Tasks
            input.value = "";                           // · Empty Input Field
        }

    })


    // click on task element

    tasksDiv.addEventListener("click",function(e){

        if (e.target.classList.contains("del")) {
            
            // remove task from local storage

            deletetaskWith(e.target.parentElement.getAttribute("data-id"));


            e.target.parentElement.remove(`del`);

        }

            // task element 

            if (e.target.classList.contains("task")) {

                toggletaskwith(e.target.getAttribute("data-id")); 

                // toggle done class

                e.target.classList.toggle(`done`);
            }

    });


    function deletetaskWith(TaskId){
        // for (let i = 0; i < arrayofTasks.length; i++) {
        //     console.log(`${arrayofTasks[i].id} === ${TaskId}`) ;
            
        // }

        arrayofTasks = arrayofTasks.filter( (task) => task.id != TaskId)
        addDataToLocalStorage(arrayofTasks)
    };



    function toggletaskwith(TaskId) {
             for (let i = 0; i < arrayofTasks.length; i++) {

            if (arrayofTasks[i].id == TaskId) {

               typeof arrayofTasks[i].completed === typeof false ? (arrayofTasks[i].completed = true) : (arrayofTasks[i].completed = false)
             
            //    or i can say ==
             
               // arrayofTasks[i].completed ==  false ? (arrayofTasks[i].completed = true) : (arrayofTasks[i].completed = false)
            };
            
    };

    addDataToLocalStorage(arrayofTasks) 

};


    

    function addTaskToArray(taskText) {
        // console.log(taskText);

        const task = {
            id : Date.now(),
            title : taskText ,
            completed : false,
        };

        // push array of Tasks

        arrayofTasks.push(task);

        // add task to page 

        addElementsToPageFrom(arrayofTasks);

        addDataToLocalStorage(arrayofTasks);

        // for testing 

         console.log(arrayofTasks);

    }


    function addElementsToPageFrom(arrayofTasks) {

        tasksDiv.innerHTML = "" ; 

        // looping on array of Tasks

        arrayofTasks.forEach(function(task){     

            // create main div

            let div = document.createElement("div");

            div.className = "task";

            if (task.completed == true) {
                div.className = `task done`;
            }

            div.setAttribute("data-id", task.id); 

            div.appendChild(document.createTextNode(task.title));
            
            // console.log(div);

            // create delete button 

            let span = document.createElement("span");

            span.className = "del";
            
            span.appendChild(document.createTextNode(`Delete`));

            // append button to main div

            div.appendChild(span);

            // console.log(div);

            // Add Task Div To Tasks Container

            tasksDiv.appendChild(div);

        })
    }
    


  function addDataToLocalStorage(arrayofTasks){

    window.localStorage.setItem('tasks', JSON.stringify(arrayofTasks)); 

    };


  function getdataFromLocalStorage(){
    data = window.localStorage.getItem('tasks');
    if(data){
        let tasks = JSON.parse(data);

        console.log(`this is for only test so i dont need to put that => ${data}`);

        addElementsToPageFrom(tasks);
    };
  };


    // get from local srorage   

        
let obj = {"task": "de"};

console.log(obj);



