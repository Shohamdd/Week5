//Ex1

function compareToTen(number) {
  return new Promise((resolve, reject) =>
    number > 10
      ? resolve(number + " is greater than 10, success!")
      : reject(number + " is smaller than 10, error!")
  );
}

compareToTen(13)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

compareToTen(6)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//Ex2

let exe2 = new Promise((resolve) => setTimeout(() => resolve("success"), 4000))
  .then((result) => console.log(result))
  .catch("Oooops something went wrong");

setTimeout(
  () =>
    Promise.resolve("success")
      .then((res) => console.log(res))
      .catch("Oooops something went wrong"),
  4000
);

//Ex3

Promise.resolve(3).then((result) => console.log(result));
Promise.reject("Booo").catch((err) => console.log(err));
