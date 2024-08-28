import JSCode from "@/app/components/JSCode";

export default function JavascriptArrayIntro() {
  return (
    <div>
      <h1>javascript - array - 개요</h1>
      <p>javascript array는 기본적으로 stack처럼 사용할 수 있음</p>
      <h2>초기화</h2>
      <JSCode
        code={`const arr1 = [0, 1, 2, 3, 4];
const arr2 = Array.from({ length: 5 }, () => 7)`}
      />
      <h2>이차원 배열</h2>
      <JSCode
        code={`const arr1 = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11]
];`}
      />
      <h2>ES6 이차원 배열</h2>
      <JSCode code={`const arr = Array.from(Array(4), () => new Array(5));`} />
    </div>
  );
}
