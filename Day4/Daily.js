const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

//output: Array [3, 42, "foo"]
Promise.all([promise1, promise2, promise3])
  .then(console.log)
  .catch((error) => console.log(error));
