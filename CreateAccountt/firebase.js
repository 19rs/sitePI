
const firebaseConfig = {
  apiKey: "AIzaSyBWByiUM_U7xTQapDt5LWINXK5dAg6am6E",
  authDomain: "hybrid-text-138707.firebaseapp.com",
  databaseURL: "https://hybrid-text-138707-default-rtdb.firebaseio.com",
  projectId: "hybrid-text-138707",
  storageBucket: "hybrid-text-138707.appspot.com",
  messagingSenderId: "104703038657",
  appId: "1:104703038657:web:1600a8186467fb5fcbf040",
  measurementId: "G-XQ0VE0HD6P"
  };
  

  firebase.initializeApp(firebaseConfig);
  
 
  const database = firebase.database();
  
  

  document.getElementById("form").addEventListener("submit", function(event) {
      event.preventDefault();
  
      const input = document.getElementsByTagName("input")

      const nome = input[0].value
      const cpf = input[1].value
      const username = input[2].value
      const senha = input[3].value

  
  
  // inserir no db push cria nos e nao substitui, .set substitui
  database.ref('usuarios').push({
    nome: nome,
    cpf: cpf,
    username: username,
    senha: senha
  });
  
  
  });


 
  