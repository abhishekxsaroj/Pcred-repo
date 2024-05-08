 // Import the functions you need from the SDKs you need

const { default: firebase } = require("firebase/compat/app");

 
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDGw5cGpSAIx93o3VsIuYno5ZFN7uXrdhc",
    authDomain: "pcredventure-abea7.firebaseapp.com",
    databaseURL: "https://pcredventure-abea7-default-rtdb.firebaseio.com",
    projectId: "pcredventure-abea7",
    storageBucket: "pcredventure-abea7.appspot.com",
    messagingSenderId: "318039518607",
    appId: "1:318039518607:web:fd4e3830c00ffc2693affa",
    measurementId: "G-VJ5WB38S73"
  }
  firebase.initializeApp(firebaseConfig);
  firebase.auth();

  
  var businessloanFormDB = firebase.database().ref("businessloanForm");
  
  document
    .getElementById("business-loan-form")
    .addEventListener("submit", submitForm);
  
  function submitForm(e) {
    try{
      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var city = document.getElementById("city").value;
      var companyName = document.getElementById("companyName").value;
      var companyTurnover = document.getElementById("companyTurnover").value;
      var companyFormationYear = document.getElementById("companyFormationYear").value;
      var cibilScore = document.getElementById("cibilScore").value;
      var gstRegistered = document.getElementById("gstRegistered").value;
      var itrfiled = document.getElementById("itrfiled").value;

      saveMessages(
        firstName,
        lastName,
        email,  
        phone,
        city,
        companyName,
        companyTurnover,
        companyFormationYear,
        cibilScore,
        gstRegistered,
        itrfiled,
        
      );

      //enable alert
    document.querySelector(".alert").style.display = "block";
  
    //remove alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

      //reset the form
  document
  .getElementById("business-loan-form").reset();
  }catch(error){
    
console.error("firebase error",error);

  }
    }
  
    
  
   
  
    
  
  const saveMessages = (
    firstName,
    lastName,
    email,
    phone,
    city,
    companyName,
    companyTurnover,
    companyFormationYear,
    cibilScore,
    gstRegistered,
    itrfiled,
    
    
  ) => {
    var newbusinessloanForm = businessloanFormDB.push();
  
    newbusinessloanForm.set({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      city: city,
      companyName: companyName,
      companyTurnover: companyTurnover,
      companyFormationYear: companyFormationYear,
      cibilScore: cibilScore,
      gstRegistered: gstRegistered,
      itrfiled: itrfiled,
      
    });
  };
  
  const getElementById = (id) => {
    return document.getElementById(id).value;
  };
  