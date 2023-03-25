var firebaseConfig = {
    apiKey: "AIzaSyC8PGopkmL0s-wlfpoZP49yZfXSvzjNfSM",
    authDomain: "project-d4889.firebaseapp.com",
    databaseURL: "https://project-d4889-default-rtdb.firebaseio.com",
    projectId: "project-d4889",
    storageBucket: "project-d4889.appspot.com",
    messagingSenderId: "373033968037",
    appId: "1:373033968037:web:d1069c85dd7256d9ed084c"
  };
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("userName");
document.getElementById("title_1").innerHTML = "Welcome " + userName + " to the World of Chats";
    

