    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    // const button = document.getElementById("button")

    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    


    const populateTodos = () => {
        for (let i = 0; i < arrayOfTodos.length; i++){
            const o = document.getElementById("todo-list")
            const listItem = document.createElement("li")
            const title = document.createTextNode(arrayOfTodos[i].title)
            listItem.appendChild(title)
            o.appendChild(listItem)
        
        }

  
    }   
    
  
    const filteredTodos = () => {
        document.getElementById("todo-list").innerHTML = "" 
        const idNum = document.getElementById("dropDown").value 
        console.log(idNum)
            
    

        const arrayOfTodosFiltered = arrayOfTodos.filter((toDo) => toDo.userId == idNum); 
        console.log(arrayOfTodosFiltered)
        for (let i = 0; i < arrayOfTodosFiltered.length; i++){
            const o = document.getElementById("todo-list")
            const listItem = document.createElement("li")
            const title = document.createTextNode(arrayOfTodosFiltered[i].title)
            listItem.appendChild(title)
            o.appendChild(listItem)   
        }
    }



    
    
    // filter.addEventListener('click', ()=> {
    //     console.log('click');
    //     const result = arrayOfTodos.filter(todo => todo.userId == document.getElementById("inputID").value)
        
    // }
        

    

    

   

//testing out the newly created branch// 
