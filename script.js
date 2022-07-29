const imageElement = document.getElementById('image');
const nameElement = document.getElementById('name');
const ageButton = document.getElementById('age');
const emailButton = document.getElementById('email');
const phoneButton = document.getElementById('phone');
const genderButton = document.getElementById('gender');
const additionalInfoElement = document.getElementById('additional-info');
const getUserButton = document.getElementById('getUser');

const RANDOM_USER_API = "https://randomuser.me/api/";
let age = 24;
let email = "raunak0097@gmail.com";
let phone = "(+91) 8882449931";
let gender = "male";

function getRandomUser(){
     return fetch(RANDOM_USER_API).then(res => res.json()).then(res => res.results[0]);
}

async function renderRandomUser(){
    
     let randomUser = await getRandomUser();
     imageElement.src = randomUser.picture.large;
     name_title = randomUser.name.title;
     console.log(name_title);
     nameElement.innerText = `${name_title}. ${randomUser.name.first} ${randomUser.name.last} , ${ randomUser.location.country}`;
     age = randomUser.dob.age;
     country = randomUser.location.country;
     email = randomUser.email;
     phone = randomUser.phone;
     gender = randomUser.gender;

     console.log(gender);
     console.log(randomUser);
     additionalInfoElement.innerText = "";
}



ageButton.addEventListener('click', _ => {
    console.log("age word"); 
    additionalInfoElement.innerText = age;
});
emailButton.addEventListener('click', _ => {
     additionalInfoElement.innerText = email;
});

function showFulldetails(){
     
     additionalInfoElement.innerHTML = age + "<br /><br />" +phone + "<br /><br />"+gender+ "<br /><br />"+email;
}

phoneButton.addEventListener('click', _ => {
     additionalInfoElement.innerText = phone;
});

genderButton.addEventListener('click', _ => {
     additionalInfoElement.innerText = gender;
     
});

getUserButton.addEventListener('click', renderRandomUser);

renderRandomUser();
// function showEmail(){
//      additionalInfoElement.innerText = email;
//      additionalInfoElement.style.color="red";
     
// }
// function hideEmail(){
//      additionalInfoElement.innerText = "";
// }