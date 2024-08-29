import JSCode from "@/app/components/JSCode";

export default function PgHashCostume() {
  return (
    <div>
      <h1>프로그래머스 - 해시 - 의상</h1>
      <a
        href="https://school.programmers.co.kr/learn/courses/30/lessons/42578"
        target="_blank"
      >
        문제 링크
      </a>
      <h2>내 코드</h2>
      <JSCode
        code={`function solution(clothes) {
    const kind = {};
    
    for(const cloth of clothes) {
        if(!kind[cloth[1]]) kind[cloth[1]] = 0;
        ++kind[cloth[1]];
    }
    
    return Object.entries(kind).reduce((acc, cur) => acc * (cur[1]+1), 1) -1;
}`}
      />
      <ul>
        <li>key in obj 사용할 수 있음</li>
      </ul>
    </div>
  );
}
