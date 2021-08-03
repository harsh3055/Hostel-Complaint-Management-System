// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = 
  {
    apiKey: "AIzaSyC9RlRCooOmAdvZnJ3ABOd981r1UeTqlu4",
    authDomain: "login-64673.firebaseapp.com",
    databaseURL: "https://login-64673-default-rtdb.firebaseio.com",
    projectId: "login-64673",
    storageBucket: "login-64673.appspot.com",
    messagingSenderId: "663420581884",
    appId: "1:663420581884:web:02cc147cd8be5c97522479",
    measurementId: "G-3ZV8DVBWN5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth.Auth.Persistence.LOCAL;

  $("#btn-signup").click(function()
  {
         var email = $('#email').val();
         var password = $('#password').val();
              
         if(email != "" && password != "")
         {
                var result = firebase.auth().signInWithEmailAndPassword(email, password);
                result.catch(function(error){
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    console.log(errorCode);
                    console.log(errorMessage);

                    window.alert("Message :" + errorMessage);
                });
         }
         else
         {
             windows.alert("Please fill out all fields");
         }

  });

  $("#btn-logout").click(function()
  {
        firebase.auth().signOut();
  });