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
      alert('Il messaggio verrà spostato nel cestino');
      //nelle parentesi, prima specifico l'indice dell'elemento su cui lavorare, poi specifico quanti elementi devo eliminare oltre a quello. (se metto 2 elimina quello dell'index e il successivo, se metto 3 elimina i 2 successivi....)
      this.todoList.splice(todoIndex, 1);
    },//fine delete todo

    deleteForver (deletedIndex) {
      alert('Il messaggio verrà definitivamente eliminato');
      this.deletedList.splice(deletedIndex, 1);
    }//fine deletedForever
  }//fine methods
});
