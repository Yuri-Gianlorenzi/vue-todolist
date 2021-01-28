var app = new Vue ({
  el : '#app',
  data : {
    indexImg : 0,
    image : [
      'img/butch.jpg',
      'img/jules&vincent.jpg',
      'img/marcellus.jpg',
      'img/miawallace.jpg'
    ],
    imgNote : [
      'Butch',
      'Jules & Vincent',
      'Marcellus',
      'Mia'
    ]
  },

  //il mounted parte prima che l'utente veda qualcosa, e fa partire la funzione addEventListener. quando l'utente preme qualcosa, parte la funzione arrowchange (NEI METHODS), questa a sua volta, richiama la funzione prevImg SE SI PREME LA FRECCIA SINISTRA, richiama la funzione nextImg SE SI PREME LA FRECCIA DESTRA
  mounted() {
    window.addEventListener('keyup', function(e) {
      app.arrowChange(e);
    });
  },
  //con l'indicazione successiva va bene uguale, e credo sia più corretta
  // created() {
        //self indica se stesso, è simile a windows (self = window)
  //   self.addEventListener('keyup', function(e) {
        //app riguarda l'intera istanza vue
  //     app.arrowChange(e);
  //   });
  // },

  methods : {
    //attenzione alla lunghezza nell'array, l'indice dell'ultimo elemento dell'array è la lunghezza dell'array - 1
    nextImg() {
      //forma estesa if
      // if (this.indexImg < this.image.length - 1) {
      //   this.indexImg = this.indexImg + 1;
      // } else {
      //   this.indexImg = 0;
      // }

      //forma abbreviata if
      (this.indexImg < this.image.length - 1) ? this.indexImg = this.indexImg + 1 : this.indexImg = 0;
    },//fine nextImg

    prevImg() {
      // if (this.indexImg <= 0) {
      //   this.indexImg = this.image.length - 1;
      // } else {
      //   this.indexImg = this.indexImg - 1;
      // }

      (this.indexImg <= 0) ? this.indexImg = this.image.length - 1 : this.indexImg = this.indexImg - 1;
    },//fine prevImg

    changeImg(indexImgActive) {
      this.indexImg = indexImgActive;
      //questa funzione prende un indice(numero) come argomento, quel numero viene assegnato al indexImg, che è quello che "decide" quale immagine vedere.
      //l'argomento gli viene datto nell'html e è l'indice dell'array imgNote. esempio: clicco sul terzo nome [indice di imgnote = 2], indexImg diventa 2, e dunque si vedrà l'immagine con indice 2 dell'array image
    },//fine changeImg


    arrowChange(e) {

      //tasto sinistro
      if(e.keyCode == 37) {
        // (this.indexImg <= 0) ? this.indexImg = this.image.length - 1 : this.indexImg = this.indexImg - 1;
        this.prevImg();

      } else if (e.keyCode == 39) {
        // (this.indexImg < this.image.length - 1) ? this.indexImg = this.indexImg + 1 : this.indexImg = 0;
        this.nextImg();

      }//tasto destro
    }


  }//fine methods
});





// window.addEventListener('keyup', function(e) {
//   console.log(e.keyCode);
// });
