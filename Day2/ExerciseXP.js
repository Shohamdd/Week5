let xhr = new XMLHttpRequest();
xhr.open("GET","https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
xhr.responseType = "json";
xhr.send();

xhr.onload = function () {
  if (xhr.status == 200) {
    console.log(typeof xhr.response);
    console.log(xhr.response);
  } else {
    console.log(xhr.status + ": " + xhr.statusText);
  }
};

xhr.onprogress = () => {
  if (xhr.total) {
    console.log(`Received' ${xhr.load / xhr.total}%`);
  } else {
    console.log(`Received' ${xhr.load}`);
  }
};

xhr.onerror = () => {
  console.log("Something is wrong");
};

//Ex2
let xhrNew = new XMLHttpRequest();
xhrNew.open("GET","https://api.giphy.com/v1/gifs/search?q=sun&sunset=2&limit=10&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
xhrNew.responseType = "json";
xhrNew.send();

xhrNew.onload = function () {
  if (xhrNew.status == 200) {
    console.log(typeof xhrNew.response);
    console.log(xhrNew.response);
  } else {
    console.log(xhrNew.status + ": " + xhrNew.statusText);
  }
};

xhrNew.onprogress = () => {
  if (xhrNew.total) {
    console.log(`Received' ${xhrNew.load / xhrNew.total}%`);
  } else {
    console.log(`Received' ${xhrNew.load}`);
  }
};

xhrNew.onerror = () => {
  console.log("Something is wrong");
};
