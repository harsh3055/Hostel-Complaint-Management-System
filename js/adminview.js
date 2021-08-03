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



          function SelectAllData(){
              firebase.database().ref('student').once('value' ,
              function(AllRecords){
                  AllRecords.forEach(
                      function(CurrentRecord){
                     var name = CurrentRecord.val().Nameofstudent;
                     var roomNo = CurrentRecord.val().RoomNo;
                     var phoneNO = CurrentRecord.val().PhoneNumber;
                     var complainttype = CurrentRecord.val().ComplaintType;
                     var complaint = CurrentRecord.val().Complaint;
                     AddItemsToTable(name,roomNo,phoneNO,complainttype,complaint);

                      }

                  );
              });
          }
          window.onload = SelectAllData;

          var stdno = 0;
function AddItemsToTable(name,roomNo,phoneNO,complainttype,complaint){
    var tbody = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    td1.innerHTML = ++stdno;
    td2.innerHTML = name;
    td3.innerHTML = roomNo;
    td4.innerHTML = phoneNO;
    td5.innerHTML = complainttype;
    td6.innerHTML = complaint;
    trow.appendChild(td1);
     trow.appendChild(td2); 
     trow.appendChild(td3); 
     trow.appendChild(td4); 
     trow.appendChild(td5);
     trow.appendChild(td6);
    tbody.appendChild(trow);
}
function Ready(){
    roomV = document.getElementById('roomboxx').value;
   }

document.getElementById('delete').onclick = function(){
    Ready();
    firebase.database().ref('student/'+roomV).remove();
    window.location.reload();
}
