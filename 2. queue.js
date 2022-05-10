let size = 5;
let queue = new Array(size);
let front = -1;
let rear = -1;

function isFull() {
    if (front == 0 && rear == size - 1) {
        return true;
    }
    return false;

}

function isEmpty() {
    if (front == -1) {
        return true;
    } else {
        return false;
    }
}

function enQueue(item) {
    if (isFull()) {
        console.log("Queue is full");
    } else {
        if (front == -1) {
            front++;
        }
        rear++;
        queue[rear] = item;
        console.log("Inseted item is:" + item);
    }

}

function deQueue() {
    let element;
    if (isEmpty()) {
        console.log("Queue is Empty");
    } else {
        element = queue[front];
        if (front >= rear) {
            front = -1;
            rear = -1;
        } else {
            front++;
        }
        console.log("Deleted item is:" + element)
    }
}

function printQueue(queue1) {
    console.log("--------------\nYour Queue is:");
    for (let i = front; i <= rear; i++) {
        let item = queue1[i];
        console.log(item);
    }
}
enQueue(1);
enQueue(2);
enQueue(3);
enQueue(3);
enQueue(3);
enQueue(3);
printQueue(queue);

deQueue();
deQueue();
deQueue();
deQueue();
deQueue();
deQueue();
printQueue(queue);
console.log(queue, front, rear, queue.length)