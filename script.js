const imageElement = document.getElementById("image");
const nameElement = document.getElementById("name");
const agedata = document.getElementById("age");
const emaildata = document.getElementById("email");
const phonedata = document.getElementById("phone");
const genderdata = document.getElementById("gender");
const Countrydata = document.getElementById("country");
const getUserButton = document.getElementById("getUser");
const additionalInfoElement = document.getElementById("additional-info");
const display_details = document.getElementById("display_details");

const RANDOM_USER_API = "https://randomuser.me/api/";
var age = 24;
var email = "raunak0097@gmail.com";
let phone = "(+91) 8882449931";
let gender = "male";

function getRandomUser() {
  return fetch(RANDOM_USER_API)
    .then((res) => res.json())
    .then((res) => res.results[0]);
}

async function renderRandomUser() {
  let randomUser = await getRandomUser();

  imageElement.src = randomUser.picture.large;
  name_title = randomUser.name.title;
  nameElement.innerText = `${name_title}. ${randomUser.name.first} ${randomUser.name.last} , ${randomUser.gender}`;
  age = randomUser.dob.age;
  country = randomUser.location.country;
  email = randomUser.email;
  phone = randomUser.phone;
  gender = randomUser.gender;
  agedata.innerText = age;
  emaildata.innerHTML = email;
  phonedata.innerText = phone;
  Countrydata.innerHTML = country;
  console.log(country);
  console.log(randomUser);
  Countrydata.innerText = country;
}

getUserButton.addEventListener("click", renderRandomUser);

getRandomUser();
