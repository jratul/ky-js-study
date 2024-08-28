import JSCode from "@/app/components/JSCode";

export default function JavascriptStringConvertNumber() {
  return (
    <div>
      <h1>javascipt - string - convert number</h1>
      <JSCode
        code={`a = Number(str);
b = parseInt(num);`}
      />
    </div>
  );
}
