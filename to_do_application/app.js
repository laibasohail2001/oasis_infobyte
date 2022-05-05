var list = document.getElementById("list");
function addtodo()
{
    var todo_items = document.getElementById("to-do-app");
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_items.value)
    li.appendChild(liText)
    var delbtn = document.createElement('button')
    var deltext = document.createTextNode("DELETE")
    delbtn.setAttribute("class","btn1")
    delbtn.setAttribute("onclick","deleteitem(this)")
    delbtn.appendChild(deltext)

    todo_items.value=""
    var editbtn = document.createElement('button')
    var editText = document.createTextNode("EDIT");
    editbtn.appendChild(editText);
    editbtn.setAttribute("class","btn1")
    editbtn.setAttribute("onclick","edititem(this)");
    
    li.appendChild(editbtn)
    li.appendChild(delbtn)
    list.appendChild(li)
    console.log(li)
}

function deleteitem(e) {
    e.parentNode.remove()
}
function deleteall() {
    list.innerHTML = ""
}
function edititem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editvalue = prompt("enter the updated item",val)
    e.parentNode.firstChild.nodeValue = editvalue;
}