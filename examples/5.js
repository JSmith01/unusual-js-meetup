function xrange(start, end) {
    let i = start;
    return {
        [Symbol.iterator]: () => ({
            next: function() {
                if (i > end) return { done: true }
                else return { value: i++ }
            }
        })
    }
}

for (let i of xrange(1, 5)) {
    console.log(i);
}
