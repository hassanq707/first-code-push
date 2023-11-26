var sidenav = document.getElementById('side-nav')
var menubtn = document.getElementById('menu-btn')
var menu = document.getElementById('menu')

sidenav.style.right = '-250px'
menubtn.onclick = function () {
    if (sidenav.style.right == '-250px') {
        sidenav.style.right = '0';
        menu.src = './close.png';
    }
    else {
        sidenav.style.right = '-250px';
        menu.src = './menu.png';

    }

}
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});


const firebaseConfig = {
    apiKey: "AIzaSyAZIlcq1ospwXuoWJAU_Wf-rosd6tGJw1w",
    authDomain: "authentication-c7c4f.firebaseapp.com",
    databaseURL: "https://authentication-c7c4f-default-rtdb.firebaseio.com",
    projectId: "authentication-c7c4f",
    storageBucket: "authentication-c7c4f.appspot.com",
    messagingSenderId: "694347381524",
    appId: "1:694347381524:web:391a3bd69bf27b0a3fa001"
};

const app = firebase.initializeApp(firebaseConfig);

function getValue() {
    var name = document.getElementById('name')
    var number = document.getElementById('number')
    var email = document.getElementById('email')
    var time = document.getElementById('time')
    var text = document.getElementById('textarea')



    var obj = {
        name: name.value,
        number: number.value,
        email: email.value,
        time: time.value,
        text: text.value
    }

    var key = Math.round(Math.random() * 212121)

    firebase.database().ref('ClientOrders/' + key).set(obj)


     name.value=''
     number.value=''
        email.value=''
        time.value = ''
        text.value=''

        Swal.fire({
            title: "Successfully!",
            text: "Your form has been submitted.We will contact you ASAP!",
            icon: "success"
          });
}