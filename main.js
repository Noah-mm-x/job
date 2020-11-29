// 'use strict'
// console.log(this)
// (function () {
//   console.log(111)

//   setTimeout(() => {
//     new Promise((res, rej) => {
//       console.log(222)
//       res(11)
//     }).then(() => {
//       console.log(333)
//     })
//   });

//   new Promise((res, rej) => {
//     console.log(444)
//     res(11)
//   }).then(() => {
//     console.log(555)
//   })

//   setTimeout(() => {
//     new Promise((res, rej) => {
//       console.log(666)
//       res(11)
//     }).then(() => {
//       console.log(777)
//     })
//   });

//   console.log(888)
//   // 1,4,8,5,2,3,6,7
// })
// window.onload = function () {
//   (function () {
//     let obj = {}
//     Object.defineProperty(obj, 'val', {
//       set: function (newVal) {
//         document.querySelector('#a').value = newVal
//         document.querySelector('#b').innerHTML = newVal
//       }
//     })
//     console.log(document.querySelector('#a'))
//     document.querySelector('#a').addEventListener('input', function (e) {
//       obj.val = e.target.value
//     })

//     // 发布订阅模式
//     const sub1 = {
//       update: function () {
//         console.log('sub1')
//       }
//     }
//     const sub2 = {
//       update: function () {
//         console.log('sub2')
//       }
//     }
//     const sub3 = {
//       update: function () {
//         console.log('sub3 ')
//       }
//     }
//     function Dep() {
//       this.subs = [sub1, sub2,  sub3]
//     }
//     Dep.prototype.notify = function () {
//       this.subs.forEach(sub => {
//           sub.update()
//       })
//     }
//     let pub = {
//       publish: function () {
//         dep.notify()
//       }
//     }
//     let dep = new Dep()
//     pub.publish()
//   })()
// }
// console.log(1 && 2)
// console.log(name)
// // var name = '22'
// let name = 222
// var name = 11  
// (function () {
//   console.log(name)
//   name = 22 
// })() 

// function test() {
//   console.log(1)
//   sleep(3000)
//   console.log(2)
// }
// function sleep(time) {
//   // console.log(time)
//   // setTimeout(() => {
//   //   console.log(4)
//   //   return;
//   // }, time);
//   let now = +new Date()
// }
// test()
// class Emitter {
//   constructor(max) {
//     this.max = max
//     this.asyncIdx = 0
//   }
//   async *[Symbol.asyncIterator]() {
//     while (this.asyncIdx < this.max) {
//       yield new Promise(res => res(this.asyncIdx++))
//     }
//   } 
// }
// async function asyncCount(){
//   let emitter = new Emitter(5)
//   for await (const x of emitter){
//     console.log(x)
//   }
// }
// asyncCount()

// var name = 'jz'
// console.log(window.name) //jz

let obj = {
  a: 1,
  [Symbol('a')]: 1
}
for (let m in obj) {
  console.log(m)
}
for (let m of Reflect.ownKeys(obj)) {
  console.log(m)
}

console.log(Reflect.ownKeys(obj))