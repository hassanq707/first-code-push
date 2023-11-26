
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

var list = document.getElementById('list-items');

function addElements() {
    var input = document.getElementById('todo-input');
    var todoText = input.value.trim();

    if (todoText !== '') {
        var key = Math.round(Math.random() * 212121);

    
        firebase.database().ref('UserDetails/' + key).set({
            todo: todoText
        });

        var listElement = document.createElement('li');
        listElement.setAttribute('class', 'listjee');
        var listText = document.createTextNode(todoText);
        listElement.appendChild(listText);
        list.appendChild(listElement);

        // Edit Button
        var editbtn = document.createElement('button');
        editbtn.setAttribute('onclick', 'editbtn(this)');
        editbtn.setAttribute('class', 'button1');
        var editbtnText = document.createTextNode("Edit");
        editbtn.appendChild(editbtnText);
        listElement.appendChild(editbtn);

        // Delete Button
        var delbtn = document.createElement('button');
        delbtn.setAttribute('onclick', 'delbtn(this, ' + key + ')');
        delbtn.setAttribute('class', 'button1');
        var delbtnText = document.createTextNode("Delete");
        delbtn.appendChild(delbtnText);
        listElement.appendChild(delbtn);

        
        input.value = '';
    }
}

// del button
function delbtn(element, key) {
    
    firebase.database().ref('UserDetails/' + key).remove();

    element.parentNode.remove();
}

function editbtn(element) {
    var currentValue = element.previousSibling.nodeValue.trim();
    var updatedValue = prompt("Enter updated value", currentValue);

    if (updatedValue !== null && updatedValue.trim() !== '') {
    
        var key = element.nextSibling.getAttribute('data-key');
        var updateData = {};
        updateData['UserDetails/' + key + '/todo'] = updatedValue;
        firebase.database().ref().update(updateData);

        element.previousSibling.nodeValue = updatedValue;
    }
}
firebase.database().ref('UserDetails').on('child_removed', function (snapshot) {

    var key = snapshot.key;
    var element = document.querySelector('[data-key="' + key + '"]');
    if (element) {
        element.parentNode.remove();
    }
});

