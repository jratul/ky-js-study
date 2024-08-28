import JSCode from "@/app/components/JSCode";

const text = `function solution(message) {
  console.log(message);
}`;

export default function StringIntro() {
  return (
    <div>
      <div className="title">문자열 개요</div>
      <JSCode code={text} />
    </div>
  );
}
