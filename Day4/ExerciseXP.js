//Ex1
fetch("https://swapi.dev/api/starships/9/")
    .then(response => response.json())
    .then(console.log);

let fetchData = async () => {
  let data = await fetch("https://swapi.dev/api/starships/9/");
  let jsData = await data.json();

  console.log(jsData);
};

fetchData();

//Ex2
Outputs:
console.log ->> calling'
console.log->> resolved)
