        // Your web app's Firebase configuration
       // Your web app's Firebase configuration
       var firebaseConfig = {
        apiKey: "AIzaSyDCeXbLR-SvaW3CYeqMAifJGy20OpnzGCY",
        authDomain: "complaintform-b5b0c.firebaseapp.com",
        projectId: "complaintform-b5b0c",
        storageBucket: "complaintform-b5b0c.appspot.com",
        messagingSenderId: "1082180938753",
        appId: "1:1082180938753:web:86ad18a9cc0869347c2400"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
        
          var nameV, roomV ,phoneV,typeV, complaintV;
        
        function Ready(){
                    nameV = document.getElementById('namebox').value;
                    roomV = document.getElementById('roombox').value;
                    phoneV = document.getElementById('phonebox').value;
                    typeV = document.getElementById('typebox').value;
                    complaintV = document.getElementById('complaintbox').value;
                }
        
                document.getElementById('insert').onclick = function(){
                    Ready();
                    firebase.database().ref('student/'+roomV).set({
                        Nameofstudent: nameV,
                        RoomNo: roomV,
                        PhoneNumber:phoneV,
                        ComplaintType : typeV,
                        Complaint: complaintV
                    });
                    
                }

        

        

       