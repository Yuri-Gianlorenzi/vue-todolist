var app = new Vue ({
  el : '#app',
  data : {
    todoList : [
      'inserire il nuovo todo',
      'modificare un todo',
      'creare la lista deleted',
      'spostare il todo nel cestino',
      'pulsante per spostare tutti i todo nel cestino',
      'ripristinare dal cestino un todo',
      'eliminare definitivamente un todo dal cestino',
      'pulsante per eliminare tutti i todo del cestino'
    ],
    deletedList : [],
    newTodo : '',
    changedTodo : ''

  },//fine data

  methods : {
    deleteTodo (todoIndex) {
      //qui usiamo come argomento della funzione l'index dell'elemento, questo verrà passato al metodo splice, che elimina esattamente l'elemento con quell'index
      // alert('Il messaggio verrà spostato nel cestino');
      //ATTENZIONE ALL'ORDINE: PRIMA SI PUSHA E POI SI ELIMINA/SPOSTA, si potrebbe utilizzare una variabile
      this.deletedList.push(this.todoList[todoIndex]);
      //nelle parentesi, prima specifico l'indice dell'elemento su cui lavorare, poi specifico QUANTI ELEMENTI devo eliminare oltre a quello. (se metto 2 elimina quello dell'index e il successivo, se metto 3 elimina i 2 successivi....SE METTO 0, LO AGGIUNGE)
      this.todoList.splice(todoIndex, 1);
      console.log(todoIndex);
    },//fine delete todo

    deleteForver (deletedIndex) {
      // alert('Il messaggio verrà definitivamente eliminato');
      this.deletedList.splice(deletedIndex, 1);
    },//fine deletedForever

    moveToList (deletedIndex) {
      //qui viene riciclato un elemento todo, viene pushato nella todolist l'elemento selezionato, dopo essere stato pushato
      this.todoList.push(this.deletedList[deletedIndex]);
      this.deletedList.splice(deletedIndex, 1);
    },//fine moveToList

    deleteList () {
      //qui spostiamo tutti gli elementi della todoList nella deletedList, usiamo ciclo for della lunghezza dell'array todoList, pushando uno a uno gli elementi nell'array deletedList
      for (let i = 0; i < this.todoList.length; i++) {
        this.deletedList.push(this.todoList[i]);
      }

      // qui rimuoviamo gli elementi dall'array todoList usando splice. SI PUÒ SVUOTARE UN ARRAY  dandogli posizione zero, e un numero di elementi da eliminare pari alla lunghezza dell'array. partirà ad eliminare dal primo elemento (indice 0)
      this.todoList.splice(0, this.todoList.length);

    },//fine moveToTrash

    deleteTrash () {
      //qui rimuoviamo completamente la deletedList
      this.deletedList.splice(0, this.deletedList.length);
    },//fine deleteTrash

    addTodo () {
      // qui inseriamo un nuovo todo nella todolist, usiamo v-model per ascoltare l'input, al click del bottone, se l'utente ha digitato almeno 4 caratteri, questa stringa viene pushata dentro la todoList assieme agli altri elementi dell'array
      // let newTodo = '';
      if (this.newTodo.length < 4) {
        alert('almeno 4 caratteri');
      } else {
        this.todoList.push(this.newTodo);
      }
    },//fine addtodo

    reuseAllDeleted () {
      //qui creiamo la funzione che mi permette di spostare tutto il contenuto della deletedList all'interno della todoList, e cancellare successivamente tutto dalla deletedList
      for (let i = 0; i < this.deletedList.length; i++) {
        this.todoList.push(this.deletedList[i]);
      }

      this.deletedList.splice(0, this.deletedList.length);
    },//fine reuseAllDeletedall

    changeTodo (todoIndex) {
      //qui creiamo la funzione che modifica il singolo elemento della todoList, al click deve partire il prompt, li si ha la possibilitare il todo, sempre che vengano inseriti almeno 4 caratteri
      this.changedTodo = prompt('Modifica il todo', this.todoList[todoIndex]);
      if (this.changedTodo.length > 3) {
        //con questo splice prendiamo l'elemento che ha quel preciso indice selezionato e lo sostutuisca con quello appena digitato dall'utente
        this.todoList.splice(todoIndex, 1, this.changedTodo);
        // this.todoList.splice(todoIndex, 0, this.changedTodo);
      } else {
        alert('devi inserire almeno 4 caratteri');
      }
    }
  }//fine methods
});
