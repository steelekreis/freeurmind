function myFunction () {
    var x = document.getElementById("myInput")
    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}

function Login(e) {
    e.preventDefault()
    var Username = document.getElementById("Username").value
    var Password = document.getElementById("myInput").value
    console.log (Username)
    if (!Password || !Username) {
        document.getElementById("error").innerText = "Please Enter Username and Password"
}
  else if(Password.length < 8 ) {
    document.getElementById("error").innerText = "Password Must Be 8 Characters"
  } 
  else{
    localStorage.setItem("Username", Username)
      window.location.assign("./Homepage.html")
  }
}
var button = document.getElementById("loginBtn")
button.addEventListener("click", Login)
