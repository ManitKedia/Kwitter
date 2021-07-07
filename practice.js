// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCgfcMfKlfxootw4XPy-vkGD9XYGR6L9kw",
    authDomain: "trial-bd5ed.firebaseapp.com",
    databaseURL: "https://trial-bd5ed-default-rtdb.firebaseio.com",
    projectId: "trial-bd5ed",
    storageBucket: "trial-bd5ed.appspot.com",
    messagingSenderId: "483573131616",
    appId: "1:483573131616:web:4ea1bb3f7bdc3449681605",
    measurementId: "G-ZDGXFWTGS2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics;
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding-user"
    })
    localStorage.setItem("user_name", user_name);
    window.location = "practice.html";
}