import Divider from "@/app/components/Divider";
import JSCode from "@/app/components/JSCode";

export default function PsBasicIo() {
  return (
    <div>
      <h1>ps - 기초 - 입출력</h1>
      <h2>fs 모듈로 입출력</h2>
      <JSCode
        code={`const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\\n");
        
const line = input[0].split(" ");
        
const a = parseInt(line[0]);`}
      />
    </div>
  );
}
