import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import {
    getFirestore,
    collection,
    onSnapshot,
    addDoc,
    deleteDoc,
    updateDoc,
    doc,
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhPyXDZYVzNeaGrCDcB499ZaIC-pLcVl8",
    authDomain: "fir-sandbox-87b78.firebaseapp.com",
    projectId: "fir-sandbox-87b78",
    storageBucket: "fir-sandbox-87b78.appspot.com",
    messagingSenderId: "806568202521",
    appId: "1:806568202521:web:a1a63a7ab903c9127a7588",
};
// Initialize Firebase
initializeApp(firebaseConfig);

// reference to database
const _db = getFirestore();
// reference to users collection in database
const _usersRef = collection(_db, "users");
// global variable: users array & selectedUserId
let _users = [];
let _selectedUserId = "";

// ========== READ ==========

// onSnapshot: listen for realtime updates
onSnapshot(_usersRef, (snapshot) => {
    _users = snapshot.docs.map((doc) => {
        const user = doc.data();
        user.id = doc.id;
        return user;
    });
    appendUsers(_users);
    showLoader(false);
});
// append users to the DOM
function appendUsers(users) {
    let htmlTemplate = "";
    users.map((user) => {
        htmlTemplate += /*html*/ `
    <article>
      <h3>${user.name}</h3>
      <p><a href="mailto=${user.mail}">${user.mail}</a></p>
      <button id="btn-select" onclick="selectUser('${user.id}')">Update</button>
      <button id="btn-delete" onclick="deleteUser('${user.id}')">Delete</button>
    </article>
    `;
    });
    document.querySelector("#content").innerHTML = htmlTemplate;
}

// ========== CREATE ==========
// add a new user to firestore (database)
function createUser() {
    console.log("Create Clicked!");

    let name = document.querySelector("#name");
    let mail = document.querySelector("#mail");

    const user = {
        name: name.value,
        mail: mail.value,
    };
    console.log(user);
    addDoc(_usersRef, user);
    document.querySelector("#userForm").reset();
}

// ========== UPDATE ==========

function selectUser(id) {
    _selectedUserId = id;
    const user = _users.find((user) => user.id == _selectedUserId);

    document.querySelector("#name-update").value = user.name;
    document.querySelector("#mail-update").value = user.mail;

    document
        .querySelector("#form-update")
        .scrollIntoView({ behavior: "smooth" });
}

function updateUser() {
    let name = document.querySelector("#name-update");
    let mail = document.querySelector("#mail-update");

    const user = {
        name: name.value,
        mail: mail.value,
    };

    const docRef = doc(_usersRef, _selectedUserId);
    updateDoc(docRef, user);
    document.querySelector("#form-update").reset();
}

// ========== DELETE ==========
function deleteUser(id) {
    console.log(id);
    const docRef = doc(_usersRef, id);
    deleteDoc(docRef);
}

// =========== Loader functionality =========== //

function showLoader(show = true) {
    const loader = document.querySelector("#loader");
    if (show) {
        loader.classList.remove("hide");
    } else {
        loader.classList.add("hide");
    }
}

// =========== attach events =========== //
document.querySelector("#btn-create").onclick = () => createUser();
document.querySelector("#btn-update").onclick = () => updateUser();
window.deleteUser = (id) => deleteUser(id);
window.selectUser = (id) => selectUser(id);
