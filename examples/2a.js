let v = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]: function myIterator() {
        let i = 0;
        let keys = Object.keys(this);
        return {
            next: () => 
                !!keys[i] ? { value: keys[i++], done: false } 
                : { done: true, value: 555}
            }
    }
}

let zzz = [...v];

