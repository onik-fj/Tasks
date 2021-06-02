//1 задание реализация sortedUniq
let arr= [1,1,2,4,6,8,9,9,77,80,87,87];
let newArr= [];
function sortedUniq(array) {
    return (array && array.length) ? baseSortedUniq(array) : [];
  }
function baseSortedUniq(array) {
    array.forEach(function(item, i) {
      if(array[i]!==array[i-1]){
        newArr.push(item);
      }
    })
    return newArr;
  }
console.log(sortedUniq(arr));


function sortedUniq2(arr) {
  return Array.from(new Set(arr));
}
console.log(sortedUniq2(arr));


//2 задание реализация isEquals
let a = [2, 3, { a: { f: 2, g: [2, "das"] }, b: 5 }, [2, 7]];
let b = [2, 3, { a: { f: 2, g: [2, "das"] }, b: 5 }, [2, 7]];

const u = new Set([5, 1, { a: [2, 5], n: 8 }, 2, 3]);
const i = new Set([5, 1, { a: [2, 5], n: 8 }, 2, 3]);

let map = new Map([
  ["1", "str1"],
  [1, { a: 2 }],
  [true, "bool1"],
]);
let map2 = new Map([
  ["1", "str1"],
  [1, { a: 2 }],
  [true, "bool1"],
]);

let xDate = new Date('2013-05-23');
let yDate = new Date('2013-05-23');

function isEquals(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }
  switch (typeof a) {
    case "object":
      
      if (Array.isArray(a)) {
        if (a.length === b.length) {
          return a.every((item, i) => isEquals(item, b[i]));
        } else {
          return false;
        }
      }
      
      if (a instanceof Set || a instanceof Map) {
        const a1 = Array.from(a),
              b1 = Array.from(b);
        if (a1.length == b1.length) {
          return a1.every((item, i) => isEquals(item, b1[i]));
        } else {
          return false;
        }
      }
      
      if (a instanceof RegExp|| a instanceof Error){
        return String(a) === String(b)
      }
      if (a instanceof Date){
        return a.getTime() === b.getTime()
      }
      else {
        let arr = Object.entries(a);
        let arr2 = Object.entries(b);
        if (arr.length === arr2.length) {
          return arr.every((item, i) => isEquals(item, arr2[i]));
        } else {
          return false;
        }
      }
      break;
    case "number":
    case "string":
    case "boolean":
      return a === b;
      break;
    case "symbol":
      return false;
      break;
    default:
      return false;
      break;
  }
}

console.log(isEquals(a, b));
console.log(isEquals(map, map2));
console.log(isEquals(new Error("sda"),new Error("sda")));
console.log(isEquals(xDate,yDate));

//3 задание
let firstArr = [ 2, 1, 7, 1, 1, 1];
let otherArr = [[2, 3],[3, 5],[4,8,6,8,9,6]];
function isEqualMy(array,other) {
    function flatDeep(other, d = 1) {
    return d > 0
      ? other.reduce(
          (acc, val) =>
            acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
          []
        )
      : other.slice();
  }
  let otherValue = flatDeep(other, Infinity)
  return array.filter(item => !otherValue.includes(item))
}
console.log(isEqualMy(firstArr,otherArr));