var x=5;
console.log(x);
function y(){
  console.log(x);
}
y();






// {
//     y:undefined;  //script
//     x:undefined;
// }

// x:undefined;  //global
// console.log(x)
      // console.log(y)
      // console.log(e)

      // var x=10;
      // console.log(x);
      // let x = 4;
      // let y=10;
      // const e=20;
    //   function print() {
    //     for (var i = 0; i <= 2; i++) {
    //       //     setTimeout(()=>{
    //       //     console.log(i);
    //       // },100);
    //       return (i) => {
    //         setTimeout(() => {
    //           console.log(i);
    //         }, 100);
    //       };
    //     }
    //   }
    //   var x = print();
    //   console.log(x);

    //   for (var i = 0; i <= 2; i++) {
    //     (function (i) {
    //       setTimeout(() => {
    //         console.log(i);
    //       }, 0);
    //     })(i);
    //   }

      //    function print(i){
      //     setTimeout(()=>{
      //         console.log(i);
      //     },100);
      //    }
      //    console.log(i);
      //    for(let i=10;i<14;i++){
      //         console.log(i);
      //    }
      //    console.log(i)
      // var x=29;
      // console.log(x);
      // {
      //     let y=10; //shadow first by this y's value
      //     console.log(y);
      // }
      // console.log(y);
      // const e=4;
    //   var a = 25;
    //   console.log(this.a);
    // var ob={
    //     name:"dugu ",
    //     age:"20",
    //     x: this.age,
    //     xyz:()=>{
    //         console.log(this.age);
    //     }
        
    // }
    // var age=20;
    // console.log(ob.x);
    // ob.xyz();
        let obj = {
    name: "khushal",
    age: "20",
    country: "India",
    xyz: function () {
        return () => {
        console.log(this.name);
        }
    }
    }
    obj.xyz()()
    // console.log(ob.name);
    // console.log(ob.lastName);
    //   function x(a){
    //     //  this.a = 19;
        
    //     console.log(window.a);
    //     console.log(this.a);
    //     console.log(a);

    //   }

    //   x(20);

console.log(x);
console.log(y);
var x=7;
let y=10;
const b =10;