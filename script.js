

var todolist = {
    todos: [],
  add: function(text) {
      this.todos.push({
        todotext: text,
        completed: false,
      });

    },
    del: function(position) {
      this.todos.splice(position, 1);
    },
    change: function(position, newtext) {
      this.todos[position].todotext = newtext;
    },
    toggle: function(position) {
      this.todos[position].completed = !(this.todos[position].completed);
    },
    toggleall: function() {
      var alltrue = true;
      this.todos.forEach((todo, i) => {if(todo.completed === false) {alltrue = false; this.toggle(i)}})
      if (alltrue) {this.todos.forEach((todo, i) => todo.completed = false)}
    }
  };
var handlers = {
 toggleall: function(){
   todolist.toggleall();
   view.show();
 },
 addtodo: function() {
   let input = document.getElementById("addtext");
   todolist.add(input.value);
   input.value = "";
   view.show();
 },
 change: function() {
   let input = document.getElementById("changenum");
   let input2 = document.getElementById("changetext");
   todolist.change(input.value, input2.value);
   view.show();
 },
delete: function(position) {
  todolist.del(position);
  view.show();
},
toggle: function() {
  let input = document.getElementById("togglesingle");
  todolist.toggle(input.value);
  view.show();
}
};
var view = {
  show: function() {
    var todosul = document.querySelector("ul");
    todosul.innerHTML = "";
    todolist.todos.forEach((todo, i) => {
      var completedtext = "";
      if (todo.completed === true) {
        completedtext = "[x] " + todolist.todos[i].todotext;
      } else {
        completedtext = "[ ] " + todolist.todos[i].todotext;
      }
            var todoLi = document.createElement("li");
      todoLi.id = i;
      todoLi.textContent = completedtext;
      todosul.appendChild(todoLi);
      todoLi.appendChild(this.button());
    })
  },
  button: function() {
    var deletebutton = document.createElement("button");
    deletebutton.textContent = "Delete";
    deletebutton.className = "deletebutton";


    return deletebutton;
  }
//do it the better way?
};
var theul = document.querySelector("ul");
theul.addEventListener("click", event => {
var elementclicked = event.target;
if (elementclicked.className === "deletebutton") {
  handlers.delete(parseInt(elementclicked.parentNode.id));
    }
   }
 );
