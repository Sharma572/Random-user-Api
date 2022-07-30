const fulldetails = document.getElementById("full_detail_container");
const nameElement = document.getElementById("name");
const ageElement = document.getElementById("age");
const emailElement = document.getElementById("email");
const countryElement = document.getElementById("country");
const genderElement = document.getElementById("gender");
const stateElement = document.getElementById("state");
const accountAgeElement = document.getElementById("accAge");
const uidElement = document.getElementById("UID");
const cellElememt = document.getElementById("cell");
const phoneElememt = document.getElementById("phone");
const userNameElement = document.getElementById("username");

const RANDOM_USER_API = "https://randomuser.me/api/";
var age = 24;
var email = "raunak0097@gmail.com";
var phone = "(+91) 8882449931";
let gender = "male";
var country = "India ";

function getRandomUser() {
  return fetch(RANDOM_USER_API)
    .then((res) => res.json())
    .then((res) => res.results[0]);
}

async function renderRandomUser() {
  let randomUser = await getRandomUser();
  
// Name data display
  nameElement.innerText = `${randomUser.name.title}. ${randomUser.name.first} ${randomUser.name.last} `;
  // email data display
  emailElement.innerText = `${randomUser.email}`;
  // age data display
  ageElement.innerText = `${randomUser.dob.age}`;
  // address data display
  stateElement.innerText = `${randomUser.location.state}`;
  countryElement.innerText = `${randomUser.location.country}`;
  // gender data display
  genderElement.innerText = `${randomUser.gender}`;
  // cotanct data display
  cellElememt.innerText = `${randomUser.cell}`;
  phoneElememt.innerText = `${randomUser.phone}`;
//   user id data display
  accountAgeElement.innerText = `${randomUser.registered.age} years`;
  uidElement.innerText = `: ${randomUser.login.uuid}`;
}

renderRandomUser();
