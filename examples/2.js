
let v = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]: function() { 
        return {}
    }
}


for (let i in v) {
    console.log(i);
}


for (let i of v) {
    console.log(i);
}
