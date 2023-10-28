
// Configure o Firebase com suas credenciais
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
  // Inicialize o Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Referência ao banco de dados Firebase
  const database = firebase.database();
  
  let id = 1
  


  document.getElementById("form").addEventListener("submit", function(event) {
      event.preventDefault();
  
      const input = document.getElementsByTagName("input")

      const nome = input[0].value
      const cpf = input[1].value
      const username = input[2].value
      const senha = input[3].value

  
  
  // Escreva dados no banco de dados
  database.ref('usuarios').push({
    id: id++,
    nome: nome,
    cpf: cpf,
    username: username,
    senha: senha
  });
  
  
  });

  
  
  