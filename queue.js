let size = 5;
let front = -1;
let rear = -1;

function setQueue(size) {
    let queue = [size];
    return queue;
}

function isFull() {
    if (front == 0 && rear == size - 1) {
        return true;
    } else {
        return false;
    }
}

function isEmpty() {
    if (front == -1) {
        return true;
    } else {
        return false;
    }
}