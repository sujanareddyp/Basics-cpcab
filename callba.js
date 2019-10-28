function tryCall (age, loc) {
  console.log(this.name + " age: " + age + "loc " + loc)
}

var newObj = {
  name: "Vilva "
}
var newObj1 = {
  name: "Rajiv2"
}
tryCall.call(newObj, 2, "ban");
tryCall.apply(newObj1, [3, "hsr"]);
var bindedFn = tryCall.bind(newObj, 2, "ban");
console.log(bindedFn());