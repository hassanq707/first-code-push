 
// *******************     FIREBASE FUNCTIONALITY     ***************************
const firebaseConfig = {
  apiKey: "AIzaSyAZIlcq1ospwXuoWJAU_Wf-rosd6tGJw1w",
  authDomain: "authentication-c7c4f.firebaseapp.com",
  projectId: "authentication-c7c4f",
  storageBucket: "authentication-c7c4f.appspot.com",
  messagingSenderId: "694347381524",
  appId: "1:694347381524:web:391a3bd69bf27b0a3fa001"
};

const app = firebase.initializeApp(firebaseConfig);

function signUp(){
  var email = document.getElementById('semail');
  var password = document.getElementById('spass');

  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
.then((userCredential) => {
  var user = userCredential.user;
  console.log(user)
  firebase.auth().currentUser.sendEmailVerification()
.then(() => {
  alert('Email has sent to verify your account ')
});
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage)
});
email.value = '';
password.value = '';
}


function login(){
  var email = document.getElementById('lemail');
  var password = document.getElementById('lpass');

  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
.then((userCredential) => {
  var user = userCredential.user;
   console.log(user)
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage)
});
email.value = '';
password.value = '';
}

function forgot(){
  var email = document.getElementById('lemail');

  firebase.auth().sendPasswordResetEmail(email.value)
  .then(() => {
   alert('Email has sent  to reset password')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
  // alert('hello jee')
}

function loginWithGoogle(){
  var provider = new firebase.auth.GoogleAuthProvider();


firebase
.auth()
.signInWithPopup(provider)
.then((result) => {
  /** @type {firebase.auth.OAuthCredential} */
  var credential = result.credential;

  var token = credential.accessToken;
  var user = result.user;
  console.log(user);
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
  var email = error.email;
  var credential = error.credential;
  
});
}


function loginWithGithub(){

  var provider = new firebase.auth.GithubAuthProvider();

  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    var token = credential.accessToken;

    var user = result.user;
    console.log(user)
  
      
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    var email = error.email;
    var credential = error.credential;
  });

}













// **********************   FRONT END FUNCTIONALITY   **************************

var wrapper = document.getElementById('main')

function openMain(){
  wrapper.classList += ' active-popup';
}
function closeMain(){
  wrapper.classList.remove('active-popup')
}
function addActive(){
  wrapper.classList += ' active';
}
function removeActive(){
 wrapper.classList.remove('active')
}

