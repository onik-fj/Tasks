//Расширить методы массивов
Array.prototype.firstItem = function () {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    return arr[0];
  }
};
Array.prototype.lastItem = function () {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    return arr[arr.length - 1];
  }
};
Array.prototype.randomItem = function () {
  let arr = this;
  let item = Math.floor(Math.random() * (arr.length - 1));
  for (let i = 0; i < arr.length; i++) {
    return arr[item];
  }
};
let array = [4, 2, 3, 4, 7, 9, 0];

let resultFirst = array.firstItem();

let resultLast = array.lastItem();

let resultRandom = array.randomItem();

console.log(resultFirst);
console.log(resultLast);
console.log(resultRandom);

//Задание 2 Своя реализация для создания нового класса

function createClass({ constructor, ...props }) {
  return function (catName) {                                         
    constructor.call(this, catName);                                  
    Object.keys(props).map((prop) => (this[prop] = props[prop]));    
  };                                                                  
}
const Cat = createClass({
  constructor(name) {
    this.name = name;
  },
  meow() {
    console.log(`Meow, ${this.name}`);
  },
  color: "black",
});
const ted = new Cat("Ted");
ted.meow();
console.log(ted.color);

//Задание 3 Наследование(замена extends)
class A{
  constructor(name, color){
      this.name=name
      this.color=color
      this.say= function(){
          console.log(this.name, this.color);
      }
  }
  move(){
    return console.log("Go "+ this.name);
  }
};
class B{
  constructor(name){
      this.name=name;
  }
};
let parentClass = new A("Jay", "White");
let heirClass = new B("David");
function Extend(child, parent){
  return Object.setPrototypeOf(child, parent);
};
Extend(heirClass, parentClass);
heirClass.say();
heirClass.move();