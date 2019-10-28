let parentFn = () => {
  let a = 10;
  return (b) => {
    console.log(a + b);
  }
}

let addTen = parentFn();
addTen(6);