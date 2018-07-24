function signUp() {
  var email = document.getElementsByClassName('guestEmail')[0].value;
  var password = document.getElementsByClassName('guestPassword')[0].value;
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });

}


function signIn() {
    var email = document.getElementsByClassName('guestEmail').value;
    var password = document.getElementsByClassName('guestPassword').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      document.getElementsByClassName('signup').disabled = false;
      windows.location("homepage.html");
    });
  document.getElementsByClassName('signup').disabled = true;
}

function initApp() {
  document.getElementsByClassName('signin').addEventListener('click', signIn, false);
  document.getElementsByClassName('signup').addEventListener('click', signUp, false);
}