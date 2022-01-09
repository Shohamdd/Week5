let nameOf = document.getElementById("name");
let height = document.getElementById("height");
let gender = document.getElementById("gender");
let birthYear = document.getElementById("birth-year");
let homeWorld = document.getElementById("home-world");
let button = document.getElementById("button")

function getData() {
    let xhr = new XMLHttpRequest();
    let randomNum = Math.round(Math.random() * 83);
    xhr.open('GET', `https://www.swapi.tech/api/people/${randomNum}/`);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
        }
        else {
        updateCharacters(xhr.response)
        }
    }
    xhr.onerror = function () {
        console.log('Error');
        printError();
    };
}

function printError() {
    nameOf.innerHTML = 'Oh No! That person isnt avaible.';
    height.innerText = ''
    gender.innerText = ''
    birthYear.innerText = ''
    homeWorld.innerText = ''
}

async function getHomeWorld(homeWorld) {
    try {
        let response = await fetch(homeWorld);
        if (response.status !== 200) {
            throw Error;
        }
        let data = await response.json();
        return (data.name);
    } catch (err) {
        console.log(err);
    }
}

async function updateCharacters(data) {
    nameOf.innerHTML = `Name: ${data.name}`;
    height.innerHTML = `Height: ${data.height}`
    gender.innerHTML = `Gender: ${data.gender}`
    birthYear.innerHTML = `Birth Year: ${data.birth_year}`
    homeWorld.innerHTML = `Home World: ${await getHomeWorld(data.homeworld)}`
}

button.addEventListener('click', getData);
