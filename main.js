console.log("Hello world");
console.error("This is error");
console.warn("This is warning");

let age = 30;
age = 35;
console.log(age);

function start() {
  setTimeout(function () {
    for (let i = 0; i <= 10; i++) {
      console.log(i);
    }
  }, 1000);
}
start();

// let i = 0;
// setInterval(() => {
//   i = i + 1;
//   console.log(i);
// }, 2000);

// 3 number ta ses 4 number ta start
