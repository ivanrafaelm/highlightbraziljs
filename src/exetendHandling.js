function f (x, y = 7, z = 42) {
    return x + y + z
}
let test = f(1) === 50;
console.log(test)