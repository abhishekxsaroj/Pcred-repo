 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDGw5cGpSAIx93o3VsIuYno5ZFN7uXrdhc",
    authDomain: "pcredventure-abea7.firebaseapp.com",
    databaseURL: "https://pcredventure-abea7-default-rtdb.firebaseio.com",
    projectId: "pcredventure-abea7",
    storageBucket: "pcredventure-abea7.appspot.com",
    messagingSenderId: "318039518607",
    appId: "1:318039518607:web:04aab02e2016aa2f93affa",
    measurementId: "G-ZTEEJX6J4Q"
  };
  firebase.initializeApp(firebaseConfig);
  
  var contactFormDB = firebase.database().ref("contactForm");
  
  document
    .getElementById("contactForm")
    .addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var message = document.getElementById("message").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
  
    saveMessages(
        message,
        name,
      email,
      phone,
     
    );
  
    //enable alert
    document.querySelector(".alert").style.display = "block";
  
    //remove alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

      //reset the form
  document
  .getElementById("contactForm").reset();
  }
  
  const saveMessages = (
    message,
    name,
    email,
    phone,
   
  ) => {
    var newcontactForm = contactFormDB.push();
  
    newcontactForm.set({
      message: message,
      name: name,
      email: email,
      phone: phone,
    
    });
  };
  
  const getElementById = (id) => {
    return document.getElementById(id).value;
  };
  