function *gmap(fn, data) {
    for (let i of data)  yield fn(i);
}


function *gfilter(predicate, data) {
    for (let i of data)
        if (predicate(i)) yield i;
}


let x = [1,2,45];
let gen1 = gmap(i => i * 2, x);
let gen2 = gmap(i => i + 10, gen1);
let result = gfilter(i => i > 1, gen2);
let finalResult = [...result];
