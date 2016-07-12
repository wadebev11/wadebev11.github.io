  function addToTaskList() {
    var text = document.getElementById("inputBox").value;
    var li = document.createElement("li");
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskList").lastChild.innerHTML = "<input class=\"item\" type=\"checkbox\">" + text;
    document.getElementById("inputBox").select();
  }
  
  function clearCompleted() {
    var list = document.getElementById("taskList");
    var lis = list.getElementsByTagName("li");
    var inputs = list.getElementsByClassName("item");
    for (var i = 0; i < lis.length; i++) {
      if (inputs[i].checked) {
        document.getElementById("taskList").removeChild(lis[i]);
        i--;
      }
    }
  }
  
  function clearAll() {
    var listItems = document.getElementById("taskList").getElementsByTagName("li");
    for (var i = 0; i < listItems.length; i++) {
      document.getElementById("taskList").removeChild(listItems[i]);
      i--;
    }
  }
  
  function displayAll() {
    var list = document.getElementById("taskList");
    var lis = list.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) { 
      lis[i].style.visibility = "visible";
    }
  }
  
  function displayCompleted() {
    displayAll();
    var list = document.getElementById("taskList");
    var lis = list.getElementsByTagName("li");
    var inputs = list.getElementsByClassName("item");
    for (var i = 0; i < lis.length; i++) {
      if (!inputs[i].checked) {
        lis[i].style.visibility = "hidden";
      }
    }
  }
  
  function displayToDo() {
    displayAll();
    var list = document.getElementById("taskList");
    var lis = list.getElementsByTagName("li");
    var inputs = list.getElementsByClassName("item");
    for (var i = 0; i < lis.length; i++) {
      if (inputs[i].checked) {
        lis[i].style.visibility = "hidden";
      }
    }
  }