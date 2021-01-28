var app = new Vue ({
  el : '#app',
  data : {
    todoList : [
      'creare il logo',
      'creare la lista todo',
      'creare la lista deleted',
      'implementare tulle le funzioni possibili e immaginabili'
    ],
    deletedList : [
      'creare il logo',
      'creare la lista todo',
      'creare la lista deleted',
      'implementare tulle le funzioni possibili e immaginabili'
    ]

  },//fine data

  methods : {
    deleteTodo (todoIndex) {
      //qui usiamo come argomento della funzione l'index dell'elemento, questo verrà passato al metodo splice, che elimina esattamente l'elemento con quell'index
      this.todoList.splice(todoIndex, 1);
    },//fine delete todo

    deleteForver (deletedIndex) {
      this.deletedList.splice(deletedIndex, 1);
    }//fine deletedForever
  }//fine methods
});
