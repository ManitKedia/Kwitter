
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyCk6jVwJjnyHLIr0RKnVwoXRPf6K5XQEno",
      authDomain: "class-test-c6f6e.firebaseapp.com",
      projectId: "class-test-c6f6e",
      storageBucket: "class-test-c6f6e.appspot.com",
      messagingSenderId: "118228118829",
      appId: "1:118228118829:web:c5e2852e527b9a1f8bb7a4",
      measurementId: "G-7G2JYL51KS"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";  

    //Start code
    function addRoom() 
    {
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }

     

    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
    }  
    function logout()
    {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }
    //End code