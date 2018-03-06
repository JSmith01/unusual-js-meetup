let a = {
    name: 'abc',
    children: [
        { name:'bcd' }, 
        {
            name:'cde', 
            children: [
                { name: 'def' }, { name:'efg' }
            ]
        }
    ]
};

function* traverse(node) {
    yield node.name;
    if (node.children && node.children.length > 0)
    for (let i = 0; i < node.children.length; i++) {
        yield* traverse(node.children[i]);
    }
}

for(let x of traverse(a)) {
    console.log(x);
}
