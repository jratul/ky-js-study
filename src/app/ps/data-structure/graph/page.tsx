export default function PsDataStructureGraph() {
  return (
    <div>
      <h1>ps - 자료구조 - 그래프</h1>
      <p>
        인접 행렬 : 2차원 배열
        <br />
        인접 리스트 : 연결 리스트
        <br />로 구현
        <br />V : Vertex, E : Edge
      </p>
      <h2>인접 행렬</h2>
      <ul>
        <li>space : O(V^2)</li>
        <li>공간 효율성 낮음, 연결 여부 확인 O(1)</li>
      </ul>
      <h2>인접 리스트</h2>
      <ul>
        <li>space : O(V + E)</li>
        <li>공간 효율성 우수, 연결 여부 확인 O(V)</li>
        <li>최단 경로 알고리즘에 유리</li>
      </ul>
    </div>
  );
}
