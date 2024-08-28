export default function PsDataStructurePriorityQueue() {
  return (
    <div>
      <h1>ps - 자료구조 - 우선순위 큐</h1>
      <p>우선순위 큐는 힙을 이용해 구현함</p>
      <h2>힙</h2>
      <ul>
        <li>원소들 중에서 최대, 최소값을 빠르게 찾아내는 자료구조</li>
        <li>삽입, 삭제 : O(logN)</li>
        <li>N개의 데이터를 힙에 넣었다가 모두 꺼내는 작업은 정렬과 동일</li>
        <li>이 경우 시간 복잡도 : O(NlogN)</li>
      </ul>
      <h2>Heapify</h2>
      <p>힙 규칙을 만족하지 않는 부분을 수정함</p>
      <a
        href="https://github.com/ndb796/priorityqueuejs/blob/master/index.js"
        target="_blank"
      >
        priority queue js 구현
      </a>
    </div>
  );
}
