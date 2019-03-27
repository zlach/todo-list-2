

// var button = document.getElementById("#submit-btn"), count = 0;

// button.onclick = function(){
//     count += 1;
// };

// var n = 0;

// function increment(){
//     n++;
//     return n;
// }

let todo_array = [];

function doEntry(){

    console.clear();

    let todo_item = document.querySelector("#task-input");

    if (todo_item.value === "") {
        alert("Need A Value")
    } else {
        todo_array.push(todo_item.value);

        console.table(todo_array)

        console.log(todo_array[0])

        console.log(todo_array)

        listEntries();

        // listEntries(todo_item)

        todo_item.value = "";
    }

    return false;
}

// function listEntries(todo_item){
//     var iDiv = document.createElement('li');
//     iDiv.className = 'entry animated bounceInLeft';
//     iDiv.innerHTML = `<button class='x' onclick='remove(${i})'>X</button>` + todo_item;
//     document.querySelector("#entries").appendChild(iDiv);
// }


function listEntries(){
    var list = document.getElementById("entries")

    list.innerHTML = '';

    if (todo_array.length !== 0) {
        for(var i = 0; i < todo_array.length; i++) {
            var iDiv = document.createElement('li');
            iDiv.className = 'entry animated bounceInLeft';
            iDiv.innerHTML = `<button class='x' onclick='remove(${i})'>X</button>` + todo_array[i];
            document.querySelector("#entries").appendChild(iDiv);
        }
    }
}

function remove(item){

    todo_array.splice(item, 1);

    listImmobileEntries();
}

function listImmobileEntries(){
    var list = document.getElementById("entries")

    list.innerHTML = '';

    if (todo_array.length !== 0) {
        for(var i = 0; i < todo_array.length; i++) {
            var iDiv = document.createElement('li');
            iDiv.className = 'entry animated';
            iDiv.innerHTML = `<button class='x' onclick='remove(${i})'>X</button>` + todo_array[i];
            document.querySelector("#entries").appendChild(iDiv);
        }
    }
}

// function returnEntry(todo_item){
//     var iDiv = document.createElement('div');
//     iDiv.className = 'entry';
//     iDiv.innerHTML = todo_item.value + "<button class='x' onclick='remove()'>X</button>";
//     document.querySelector("#entries").appendChild(iDiv);
// }

// function returnEntry(todo_array){
//     let entries = document.querySelector('#entries');
//     entries.innerHTML = todo_array.value;
// }

// var button = document.getElementById("#submit-btn");

// button.addEventListener("click", counter());

// function counter(){
//     let x = 0;
//     x += 1;
// }

// remove
