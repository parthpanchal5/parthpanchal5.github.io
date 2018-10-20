// Initialize Firebase
var config = {
  apiKey: "AIzaSyBuv_50QsbjGlHn4_jjUK1xkmBn35ZrCxI",
  authDomain: "portfolio-1528632391892.firebaseapp.com",
  databaseURL: "https://portfolio-1528632391892.firebaseio.com",
  projectId: "portfolio-1528632391892",
  storageBucket: "portfolio-1528632391892.appspot.com",
  messagingSenderId: "26546998004"
};
firebase.initializeApp(config);

// Reference message collection
let messagesRef = firebase.database().ref('messages');

// Listen form submit
document.getElementById('contactForm').addEventListener("submit", submitForm);

//Submitting form event
function submitForm(e){
  e.preventDefault();
  
  // Get values
  let name = getInput('name');
  let email = getInput('email');
  let message = getInput('message');

  saveMessages(name, email, message);

  // Display alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3s
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  }, 2500);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function for getting form values
function getInput(id){
  return document.getElementById(id).value;
}

// Save msg to firebase: messages
function saveMessages(name, email, message){
  var newMessagesRef = messagesRef.push();
  newMessagesRef.set({
    name: name,
    email: email,
    message: message
  });
}

