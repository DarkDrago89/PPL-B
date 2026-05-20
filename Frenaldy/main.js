class Handler {
 setNext(nextHandler) { this.next = nextHandler; return nextHandler; }
 handle(req) { return this.next ? this.next.handle(req) : 'Unhandled'; }
}

class Bot extends Handler {
 handle(req) { return req === 'low' ? 'Bot solved' : super.handle(req); }
}

class Human extends Handler {
 handle(req) { return req === 'high' ? 'Human solved' : super.handle(req); }
}

const support = new Bot();
support.setNext(new Human());

console.log(support.handle('low'));  // Output: Bot solved
console.log(support.handle('high')); // Output: Human solved

