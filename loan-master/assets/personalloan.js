// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDGw5cGpSAIx93o3VsIuYno5ZFN7uXrdhc",
    authDomain: "pcredventure-abea7.firebaseapp.com",
    databaseURL: "https://pcredventure-abea7-default-rtdb.firebaseio.com",
    projectId: "pcredventure-abea7",
    storageBucket: "pcredventure-abea7.appspot.com",
    messagingSenderId: "318039518607",
    appId: "1:318039518607:web:2392e540633bdfdb93affa",
    measurementId: "G-Z30NX807FN"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var personalloanFormDB = firebase.database().ref("personalloanForm");
  
  document
    .getElementById("personal-loan-form")
    .addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("city").value;
    var companyName = document.getElementById("companyName").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var monthlySalary = document.getElementById("monthlySalary").value;
  
    saveMessages(
      firstName,
      lastName,
      email,
      phone,
      city,
      companyName,
      jobTitle,
      monthlySalary,
      
    );
  
    //enable alert
    document.querySelector(".alert").style.display = "block";
  
    //remove alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

      //reset the form
  document
  .getElementById("personal-loan-form").reset();
  }
  
  const saveMessages = (
    firstName,
    lastName,
    email,
    phone,
    city,
    companyName,
    jobTitle,
    monthlySalary,
    
  ) => {
    var newpersonalloanForm = personalloanFormDB.push();
  
    newpersonalloanForm.set({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      city: city,
      companyName: companyName,
      jobTitle: jobTitle,
      monthlySalary: monthlySalary,
      
    });
  };
  
  const getElementById = (id) => {
    return document.getElementById(id).value;
  };
  