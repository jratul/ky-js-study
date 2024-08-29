import JSCode from "@/app/components/JSCode";

export default function PgHashPonketmon() {
  return (
    <div>
      <h1>프로그래머스 - 해시 - 폰켓몬</h1>
      <a
        href="https://school.programmers.co.kr/learn/courses/30/lessons/1845"
        target="_blank"
      >
        문제 링크
      </a>
      <h2>타인 코드</h2>
      <JSCode
        code={`function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length
}`}
      />
      <p>Set 구조 분해 할당을 통한 중복 제거</p>
    </div>
  );
}
