//---------------------------------
// Your own functions here
//---------------------------------


function sayHello() {
    //do something
}
//sayHello();    //invoke function

//------------------------------------------------
// Call this function when the "logout" button is clicked
//-------------------------------------------------
function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("logging out user");
      }).catch((error) => {
        // An error happened.
      });
}

function insertNameFromFirestore(user) {
  db.collection("users").doc(user.uid).get().then(userDoc => {
      console.log(userDoc.data().name)
      userName = userDoc.data().name;
      console.log(userName)
      document.getElementById("name-goes-here").innerHTML = userName;
  })

}