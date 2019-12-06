// 测试babal是否生效
console.log("this.is.test.js.new test.?.")

// class Animal {
//   constructor(name, color) {
//     this.name = name
//     this.color = color
//   }
//
//   toString() {
//     console.log('name:' + this.name + ',color:' + this.color)
//   }
// }
//
// const animal = new Animal('dog', 'white')
// animal.toString()
//
// module.exports = Animal

// async function test() {
//   var b = 0;
//   await setTimeout(() => {
//     console.log("b");
//     b = 100;
//   }, 4000);
//   console.log('asdf', b);
//   return b;
// }
// test().then((data)=>{
//   console.log("data", data);
// });


// const getJSON = async function(url) {
//   const promise = new Promise(function(resolve, reject){
//     const handler = function() {
//       if (this.readyState !== 4) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//     const client = new XMLHttpRequest();
//     client.open("GET", url);
//     client.onreadystatechange = handler;
// //     client.responseType = "json";
//     client.responseHeader = "image/png";
// //     client.setRequestHeader("Accept", "application/json");
//     client.send();
//
//   });
//
//   return promise;
// };
//
// getJSON("https://developer.mozilla.org/static/img/embed/promos/fx-dev-logo.bc0781dcd281.png").then(function(json) {
//   console.log('Contents: ' + json);
// }, function(error) {
//   console.error('出错了', error);
// });

// fetch('https://api.github.com/users/superman66')

async function
