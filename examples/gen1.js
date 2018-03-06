function * gen() {
    while (true) {
        yield 1;
    }
    yield 555;
    yield 3;

    return 0;
}

let g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

