(function () {
  let form = document.getElementById("form");

  form.addEventListener("submit", writeJson);
})();

function writeJson(event) {
  event.preventDefault();
  let main = document.getElementById("main");
  let name = document.getElementById("name");
  let lastName = document.getElementById("lastName");

  let objectJson = {
    name: name.value,
    lastname: lastName.value,
  };

  let new1 = document.createElement("new");
  let newText = document.createTextNode(JSON.stringify(objectJson));
  new1.appendChild(newText);

  main.appendChild(new1);
}
