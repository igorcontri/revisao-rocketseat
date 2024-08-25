function Person(name, age) {
  this.name = name;
  this.age = age;
  this.walk = function () {
    return `${this.name} walking...`;
  };
}

const igor = new Person("Igor", 25);
const ju = new Person("Ju Paula", 23);

console.log(igor);
console.log(ju.walk());
