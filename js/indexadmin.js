// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAJc7POlfJDTYYFb-W-Idz1y6MKUg8Kyaw",
    authDomain: "adminlogin-aff5e.firebaseapp.com",
    projectId: "adminlogin-aff5e",
    storageBucket: "adminlogin-aff5e.appspot.com",
    messagingSenderId: "981412236325",
    appId: "1:981412236325:web:2a91f84321f62fcfc183cc"
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