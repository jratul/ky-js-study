import JSCode from "@/app/components/JSCode";

export default function JavascriptArrayIndexOf() {
  return (
    <div>
      <h1>javascript - array - index of</h1>
      <JSCode
        code={`const arr = [7, 3, 5, 6, 6, 2, 1];
console.log(arr.indexOf(6)); // 3
console.log(arr.indexOf(8)); // -1`}
      />
    </div>
  );
}
