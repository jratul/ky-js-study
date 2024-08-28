import JSCode from "@/app/components/JSCode";

export default function JavascriptQueueIntro() {
  return (
    <div>
      <h1>javascript - queue - 개요</h1>
      <h2>queue 구현</h2>
      <JSCode
        code={`class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}`}
      />
      <h2>사용</h2>
      <JSCode
        code={`const queue = new Queue();

queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.enqueue(1);

while(queue.getLength() != 0) {
  console.log(queue.dequeue());
}`}
      />
    </div>
  );
}
