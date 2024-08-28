import JSCode from "@/app/components/JSCode";

const text = `function solution(message) {
  console.log(message);
}`;

export default function StringIntro() {
  return (
    <div>
      <h1>javascript - string - 개요</h1>
      <JSCode code={text} />
    </div>
  );
}
