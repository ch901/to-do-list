const toDoItems = document.getElementsByClassName ("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function(event){
    if (event.key === "enter");
    addItem();
})
functionaddItem(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divChild.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", function(){
        checkIcon.style.color = "limegreen"
    })
}