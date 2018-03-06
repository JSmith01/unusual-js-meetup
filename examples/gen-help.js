let sum = 0;

for (let i = 1; i < 5000000; i++) {
    sum += Math.random();
}

let sum2 = 0;
function* doWork() {
    for (let i = 1; i < 5000000; i++) {
        sum2 += Math.random();
        if (i % 50000 === 0) {
            yield;
        }
    }
}

function scheduler(task) {
    setTimeout(
        () => { if (!task.next().done) { scheduler(task); } },
        0
    );
}
