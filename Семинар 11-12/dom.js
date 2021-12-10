console.log(`Задание 1`);
let city1={};
city1.name = 'ГородN';
city1.population = "10 млн.";
console.log(city1);
console.log(`Задание 2`);
let city2 = {name: "ГородM", population: '1e6'};
console.log(city2);
console.log(`Задание 3`);
function getName() {
  return this.name;
}
city1.getName = getName;
city2.getName = getName;
console.log(city1.getName());
console.log(city2.getName());
console.log(`Задание 4`);
function exportStr() {
  return `name=${this.name}\npopulation=${this.population}\n`; 
}
city1.exportStr = exportStr;
city2.exportStr = exportStr;
console.log(city1.exportStr());
console.log(city2.exportStr());
console.log(`Задание 5`);
function getObj () { 
  return this 
}
city1.getCity = getObj;
city2.getCity = getObj;
console.log('name: ' + city1.getCity().name + '\npopulation: ' + city1.getCity().population + '\n-----------------------');
console.log('name: ' + city2.getCity().name + '\npopulation: ' + city2.getCity().population);
console.log(`Задание 6`);
let obj = {}
obj.method1 = function() {
    return this
}
obj.method2 = function() {
    return this
}
obj.method3 = function() {
    return "метод 3"
}
console.log(obj.method1().method2().method3())
console.log(`Задание 7`);
let d1 = [45, 78, 10, 3];
d1[7] = 100;
console.log(d1);
console.log(d1[6]);
console.log(d1[7]);
console.log(`Задание 8`);
let d2 = [45, 78, 10, 3];
let sum = 0;
for(let i in d2) {
    sum += d2[i];
}
console.log(sum);
console.log(`Задание 9`);
let d3 = [45, 78, 10, 3];
d3[7] = 100;
let sum1 = 0;
for(let i in d3) {
    sum1 += d3[i];
}
console.log(sum1);
console.log(`Задание 10`);
let d4 = [45, 78, 10, 3];
function my(a,b) {
  return b-a;
}
console.log(d4.sort(my));
console.log(`Задание 12`);
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(vec_2) {
  let x_x1 = this.x + vec_2.x;
  let y_y1 = this.y + vec_2.y;
  return new Vector(x_x1, y_y1);
};
Vector.prototype.minus = function(vec_2) {
  let x_x1 = this.x - vec_2.x;
  let y_y1 = this.y - vec_2.y;
  return new Vector(x_x1, y_y1);
};
Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);
console.log(`Задание 13`);
function StretchCell(inner, width, height) {
	this.inner = inner;
	this.width = width;
	this.height = height;
}
function repeat(string, times) {
	let result = "";
	for (let i = 0; i < times; ++i)
		result += string;
	return result;
}
function TextCell(text) {
	this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) { return Math.max(width, line.length); }, 0);
};
TextCell.prototype.minHeight = function() {
	return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
	let result = [];
	for (let i = 0; i < height; ++i) {
		let line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};
StretchCell.prototype.minWidth = function() {
	return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
	return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height);
}
let sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));
console.log(`Задание 14`);
function logFive (next){
  len=next.length;
  if (len>5){
      len =5;
  }
  for (var i = 0; i < len; i++) {
      console.log(next[i]);
  }
}
function ArSeq(arr){
  logFive(arr)
}
function RangeSeq(from, to){
  let numbers = []
  for (let i = from; i <= to; i++) {
    numbers.push(i)
  }
  logFive(numbers)
}
logFive(new ArSeq([1, 2]));
console.log(`--------------`);
logFive(new RangeSeq(100, 1000));
console.log(`Задание 15`);
let c1 = "Екатеринбург и Москва";
c1 = c1.split(" и ");
let Card = new Object();
Card.from = c1[0];
Card.to = c1[1];
Card.show = function() {
    return Card.from + "->" + Card.to;
}
console.log(Card.show());
console.log(`Задание 16`);
class Human {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
  getInfo() {
    return `${this.name} ${this.age} ${this.height}`;
  }
  get firstName() {
    return this.name;
  }
}
let humans = [new Human("Коля", 23, 180), new Human("Даша", 19, 170), new Human("Ваня", 18, 192), new Human("Петя", 45, 178), new Human("Вася", 34, 197), new Human("Джони", 40, 168), new Human("Катя", 37, 160), new Human("Петя", 29, 200), new Human("Соня", 21, 172), new Human("Женя", 25, 175)];
console.log("getInfo");
for (let i of humans)
  console.log(i.getInfo())
console.log("firstname");
for (let i of humans)
  console.log(i.firstName);
console.log(`Задание 18`);
let dt1 = new Date('2045-01-01');
console.log(dt1)
console.log(`Задание 19`);
var dt2= Date.now();
console.log(dt2);
console.log(`Задание 20`);
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
console.log(daysInMonth(2,2012));