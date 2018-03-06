const waiter = (time) => new Promise(
    resolve => setTimeout(() => resolve(time), time)
);

async function a() {
    throw new Error('blabla');
    try {
        let a = await waiter(1000);
    } catch (e) {
        //
    }
    

    return await waiter(1000) + await waiter(2000);
}

a().then(v => {
    console.log(v);
})
.catch(e => console.log(e));
