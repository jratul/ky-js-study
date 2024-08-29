import JSCode from "@/app/components/JSCode";

export default function PgHashWanjoo() {
  return (
    <div>
      <h1>프로그래머스 - 해시 - 완주하지 못한 선수</h1>
      <a
        href="https://school.programmers.co.kr/learn/courses/30/lessons/42576"
        target="_blank"
      >
        문제 링크
      </a>
      <h2>내 코드</h2>
      <JSCode
        code={`function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(let i=0;i<participant.length;++i) {
        if(participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}`}
      />
    </div>
  );
}
