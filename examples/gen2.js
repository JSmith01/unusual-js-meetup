function* xrange(from, to, step = 1) {
    for (let i = from; i <= to; i += step) {
        yield i;
    }
}


function* shifts() {
    yield* xrange(1, 9);
    yield 0;
}

for (let shiftNr of shifts()) {
    console.log(shiftNr);
}
