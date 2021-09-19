// ========== GLOBAL VARIABLES ==========

const _baseUrl = "https://api.jsonbin.io/v3/b/6142f487aa02be1d44493b6d";
const _headers = {
	"X-Master-Key":
		"$2b$10$yXtf3jr2oK/eU70ltpOs1ers5RS4wtrg6vE5aGxGJIUhMjlrrXOCe",
	"Content-Type": "application/json",
};

let _users = [];
let _selectedUser;
// ========== READ ==========

/**
 * Fetchs person data from jsonbin
 */
async function loadUsers() {
	const url = _baseUrl + "/latest"; // make sure to get the latest version
	const response = await fetch(url, { headers: _headers });
	// todo ...
	const data = await response.json();
	console.log(data);
	_users = data.record;
	appendUsers(_users);
	//console.log(_users);
}

loadUsers();

// Append users to the DOM
let appendUsers = () => {
	let htmlTemplate = "";
	for (let user of _users) {
		htmlTemplate += `
        <article class="user_article">
        <h3>${user.name}</h3>
        <p>${user.age}</p>
        <p><a href="mailto:${user.mail}">${user.mail}</a></p>
        <button name="button" onclick="selectUser(${user.id})">EDIT</button>
        <button name="button" onclick="deleteUser(${user.id})">DELETE</button>
        </article>
        `;
	}
	document.querySelector("#user_view").innerHTML = htmlTemplate;
	showLoader(false);
};

// ========== CREATE ==========
let createUser = async () => {
	showLoader(true);
	let name_input = document.querySelector("#name");
	let age_input = document.querySelector("#age");
	let mail_input = document.querySelector("#mail");
	const id_input = parseInt(Math.random() * 10000000000);

	const form = document.querySelector("#user_create_form");

	const newUser = {
		name: name_input.value,
		age: age_input.value,
		mail: mail_input.value,
		id: id_input,
	};
	_users.push(newUser);

	await updateJSONBIN(_users);

	navigateTo("#/");
	form.reset();
};

// ========== UPDATE ==========

let selectUser = (id) => {
	_selectedUser = _users.find((user) => user.id == id);

	let nameInput = document.querySelector("#name-update");
	let ageInput = document.querySelector("#age-update");
	let mailInput = document.querySelector("#mail-update");

	nameInput.value = _selectedUser.name;
	ageInput.value = _selectedUser.age;
	mailInput.value = _selectedUser.mail;

	navigateTo("#/update");
};

let updateUser = async () => {
	showLoader(true);
	let nameInput = document.querySelector("#name-update");
	let ageInput = document.querySelector("#age-update");
	let mailInput = document.querySelector("#mail-update");

	const form = document.querySelector("#user_update_form");

	let index = _users.findIndex((user) => user.id == _selectedUser.id);

	_users[index].name = nameInput.value;
	_users[index].age = ageInput.value;
	_users[index].mail = mailInput.value;

	await updateJSONBIN(_users);

	form.reset();

	navigateTo("#/");
};

// ========== Search ==========
/**
 * Search for user by name
 */
let search = (searchValue) => {
	searchValue = searchValue.toLowerCase();
	console.log(searchValue);

	const searchResults = _users.filter((user) => {
		const name = user.name.toLowerCase();
		if (name.includes(searchValue)) {
			return user;
		}
	});
	console.log(searchResults);
	appendUsers(searchResults);
};

// ========== DELETE ==========

let deleteUser = async (id) => {
	showLoader(true);
	_selectedUser = _users.find((user) => user.id == id);
	let result = confirm(`Delete ${_selectedUser.name}?`);
	if (result === true) {
		_users = _users.filter((user) => user.id !== id);
		await updateJSONBIN(_users);
	}
};

// ========== Services ==========
/**
 * Updates the data source on jsonbin with a given users arrays
 * @param {Array} users
 */
async function updateJSONBIN(users) {
	// put users array to jsonbin
	const response = await fetch(_baseUrl, {
		method: "PUT",
		headers: _headers,
		body: JSON.stringify(users),
	});
	const result = await response.json();
	appendUsers(result.record);
}

// ========== Loader ==========
/**
 * Show loader when fetching data
 */
let showLoader = (show) => {
	let loader = document.querySelector("#loader");
	if (show) {
		loader.classList.remove("hide");
	} else {
		loader.classList.add("hide");
	}
};
