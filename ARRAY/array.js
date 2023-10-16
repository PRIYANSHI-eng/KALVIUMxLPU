var x = 10;
var y = 20;
var z = 30;

var numArr = [39, 1, 21, 8, 50, 64, 18];
console.log("numArr: ", numArr);

var nameArr = ["Rachel", "Joel", "Lawrence", "Millie", "Cory", "Harold"];
//                0       1       2          3       4       5      < nameArr.length
//* access any single element in the array
// console.log(nameArr[6]);
// console.log(nameArr[6]);
// console.log(nameArr.at(-1));

//^ push <----- inserting new element at end of array
// console.log("nameArr: ", nameArr);
// nameArr.push("Vamashi")
// console.log("nameArr: ", nameArr);

//^ pop <------- removing new element at end of array
// nameArr.pop()
// console.log("nameArr: ", nameArr);

//& splice(ind,no of ele) <------ removing element from particular index
// nameArr.splice(3,1)
// console.log("nameArr: ", nameArr);

//& splice(ind,no of ele,new element) <------ add element from particular index
// nameArr.splice(3,1,"fazil")

//?  Index of particular element
// console.log(nameArr.indexOf("Lawrence"))

//* visit each element in an array using "for loop"
//traverse / traversal
// for (let i = 0; i < nameArr.length; i++) {
//   console.log("i: ", i);
//   console.log(nameArr[i]);
// }

//* visit each element in an array using "forEach" <------ currele,index,totalArray
//!doesnt return an array
//!doesnt modify the original array

// nameArr.forEach((curr,i)=>{
//     console.log(curr);
// })

//^ visit each element in array using "map"  <------ currele,index,totalArray
//& return a NEW array
//!doesnt modify the original array

var newarray = numArr.map((curr) => {
  // console.log(curr+10);
  return curr % 2 == 0;
});
// console.log("newarray: ", newarray);

//& reduce() methods
//& Returns the total sum or some calculations
// var total= 0
// for(let i=0;i<numArr.length;i++){
//     total+=numArr[i]
// }
// console.log("total: ", total);

var sum = numArr.reduce((total, curr) => {
  // console.log("curr: ", curr);
  // console.log("total: ", total);
  // console.log("total+curr: ", total+curr);
  return total + curr;
}, 0);

// console.log("sum: ", sum);

//* filter() methods
//* filters and returns the element

var numbersArray = [-1, 2, 40, -90, 70, -80];

var posArr = numbersArray.filter((e) => {
  return e > 0;
});

var chainArr = numbersArray.map((e) => {
    return e * -2;
}).filter(e=>{
    return e>0 
})
console.log("chainArr: ", chainArr);


