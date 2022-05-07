// -------------------------Stack-------------------------
// Last In First Out
// LIFO
// i.e: STACK OF Plates
// --------------------------------------------

// creating stack
function createStack() {
    let stack = [];
    return stack;
}

function checkEmpty(stack) {
    return stack.length == 0;
}

function push(stack, item) {
    stack.push(item)
    console.log("push item is: " + item)
}

function pop(stack) {
    if (checkEmpty(stack)) {
        console.log("stack is empty")
    }
    let popItem = stack.pop();
    console.log("Pop item is: " + popItem);

}

function printStack(stack) {
    console.log("Your Stack is:");
    for (let i = 0; i < stack.length; i++) {
        let item = stack[i];
        console.log(item);
    }
}

let stack = createStack();
push(stack, 1);
push(stack, 2);
push(stack, 3);
pop(stack);
printStack(stack);
console.log(stack);