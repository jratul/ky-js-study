import JSCode from "@/app/components/JSCode";

const text = `function solution(message) {
  console.log(message);
}`;

export default function StringIntro() {
  return (
    <div>
      <h1>문자열 개요</h1>
      <JSCode code={text} />
    </div>
  );
}
