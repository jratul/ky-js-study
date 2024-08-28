import JSCode from "@/app/components/JSCode";

export default function JavascriptArrayConcat() {
  return (
    <div>
      <h1>javascript - array - concat</h1>
      <JSCode
        code={`const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr = arr1.concat(arr2, [11,12], [13]);`}
      />
    </div>
  );
}
