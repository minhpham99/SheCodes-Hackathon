function signUp() {
    var email = document.getElementsByClassName("guestEmail")[0].value;
    var password = document.getElementsByClassName("guestPassword")[0].value;
    if (email.length < 4) {
      alert("Địa chỉ email không hợp lệ");
      return;
    }
    if (password.length < 4) {
      alert("Password không hợp lệ");
      return;
    }
    // Sign in with email and pass.
    // [START createwithemail]]]
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == "auth/weak-password") {
        alert("Password quá yếu");
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
    // [END createwithemail]
  }

  function signIn() {
      var email = document.getElementsByClassName("guestEmail").value;
      var password = document.getElementsByClassName("guestPassword").value;
      if (email.length < 4) {
        alert("Địa chỉ email không hợp lệ");
        return;
      }
      if (password.length < 4) {
        alert("Password không hợp lệ");
        return;
      }
      // Sign in with email and pass.
      // [START authwithemail]
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
        document.getElementsByClassName("signup").disabled = false;
        windows.location("homepage.txt");
        // [END_EXCLUDE]
      });
      // [END authwithemail]
    document.getElementsByClassName("signup").disabled = true;
  }

  function initApp() {
    document.getElementsByClassName("signin").addEventListener("click", signIn, false);
    document.getElementsByClassName("signup").addEventListener("click", signUp, false);
  }
