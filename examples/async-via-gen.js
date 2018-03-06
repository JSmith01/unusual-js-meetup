function* main() {
    let result = yield new Promise(
            resolve => {
                setTimeout( () => { resolve(5); }, 2000);
            });
    result += 10;
    console.log(result);
}

let m = main();
m.next().then(m.next);
