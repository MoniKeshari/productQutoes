// Remove Duplicates from an Array

// const arr = [1, 2, 2, 3, 4, 4, 5];
// // Output: [1, 2, 3, 4, 5]

// const removeDuplicacy=(arr)=>{
//     let newArr=[];
//     for(let i=0; i<arr.length; i++){
//         let isDuplicate=false;
//         for(let j=0; j<newArr.length; j++){
//           if(arr[i]===newArr[j]){
//             isDuplicate=true;
//             break;
//           }
//         }
//          if(!isDuplicate){
//             newArr.push(arr[i]);

//          }

//     }
//     return newArr;
// }
// console.log(removeDuplicacy(arr))

//flattened arr

// const arr = [1, [2, [3, 4], 5]];
// // Output: [1, 2, 3, 4, 5]

// const flattedArr = (arr) => {
//   let newarr = [];
//   for (let data of arr) {
//     if (Array.isArray(data)) {
//       let nestedArr = flattedArr(data);
//       for (let nestedData of nestedArr) {
//         newarr.push(nestedData);
//       }
//     } else {
//       newarr.push(data);
//     }
//   }
//   return newarr;
// };
// console.log(flattedArr(arr));

// intersection of two arr

// const a = [1, 2, 3];
// const b = [2, 3, 4];
// // Output: [2, 3]

// const intersectionArr=(a,b)=>{
// let updatedArr=[];
//     for(let i=0; i<a.length; i++){
//       let  isCommon=false;
//         for(let j=0; j<b.length; j++){
//             if(a[i]===b[j]){
//                   isCommon=true;
//             }
//         }
//         if(isCommon){
//             updatedArr.push(a[i])
//         }
//     }
//     return updatedArr;

// }
// console.log(intersectionArr(a,b));

// Find the First Non-Repeating Element

// const arr = [1, 2, 2, 3, 3, 4, 5];
// // Output: 1

// const nonRepetaingArr=(arr)=>{
//     let obj={}
//     for(let i=0; i<arr.length; i++){
//          if(obj[arr[i]]){
//             obj[arr[i]]++
//          }else{
//             obj[arr[i]]=1
//          }
//     }
//     let res;
//     let value
//     for(let data in obj){
//         if(obj[data]===1){
//             res=obj[data];
//             value=res;
//         }
//     }
//     return {[res]:value};
// }
// console.log(nonRepetaingArr(arr));

// Reverse a String Without Using .reverse()
// const str = "hello";
// // Output: "olleh"

// const reverseStr = (str) => {
//   let newstr = "";
//   for (let i = str.length-1; i >= 0; i--) {
//     newstr += str[i];
//   }
//   return newstr;
// };
// console.log(reverseStr(str));

// // check Anagram

// const str1 = "listen";
// const str2 = "silent";
// // Output: true

// const isAnagram=(a,b)=>{
//     let str1data=a.split("").sort().reverse().join("");
//         let str2data=b.split("").sort().reverse().join("");
//         if(str1data===str2data){
//             return true;
//         }

//     return false
// }
// console.log(isAnagram(str1,str2));

// // Compress a String (Basic Run Length Encoding)

// const input = "aaabbccccd";
// // Output: "a3b2c4d1"
// let obj={};
// for(let i=0; i<input.length;i++){
//  if(obj[data]){
//     obj[data]++
//  }else{
//         obj[data]=1;

//  }
// }
// console.log(obj);

// Find the First Non-Repeating Character

// const str = "aabbcde";
// // // Output: "c"

// let obj = {};
// for (let data of str) {
//   if (obj[data]) {
//     obj[data]++;
//   } else {
//     obj[data] = 1;
//   }
// }
// let res;
// let key;
// for (let value in obj) {
//   if (obj[value] === 1) {
//     res=value;
//     break;

//   }

// }
// console.log(res);

// const nums = [2, 7, 11, 15];
// const target = 9;

// const targetData = (arr, t) => {
//  for(let i=0; i<arr.length; i++){
//    for(let j=i+1; j<arr.length; j++){
//       if(arr[i]+arr[j]===t){
//          return [arr[i],arr[j]]
//       }
//    }
//  }
// };
// console.log(targetData(nums, target));

// function arrayRotation(arr, numberOfRotation){
//     for(let i=0; i<numberOfRotation; i++){
//         arr.unshift(arr.pop());
//     }
//     return arr;
// }

// console.log(arrayRotation([1,2,3,4,5], 3))


// const arr = [{ name: "sai" }, { name: "Nang" }, { name: "sai" }, { name: "Nang" }, { name: "111111" }];

// const arr = [
//     { apple: 4, orange: 7, grape: 3 },
//     { guava: 6, lemon: 4, banana: 8 },
//     { orange: 5, pineapple: 7, apple: 7 },
//     { apple: 4, orange: 7, grape: 3 }, // Duplicate of the first object
// ];
// const removeDuplicacy=(arr)=>{
//    let res=[];
//    for(let i=0; i<arr.length; i++){
//       let isExist=false;
//       for(let j=0; j<res.length; j++){
//          if(JSON.stringify(arr[i])===JSON.stringify(res[j])){
//             isExist=true;
//             break;
//          }
//       }

//       if(!isExist){
//          res.push(arr[i])
//       }
//    }
//    return res;
// }
// console.log(removeDuplicacy(arr))


const person = {
  name: "Alice",
  greet: () => {
    console.log("Hi, I'm " + this.name);
  }
};
person.greet(); // Output: Hi, I'm undefined
