import JSCode from "@/app/components/JSCode";

export default function PsSortFlip() {
  return (
    <div>
      <h1>ps - sort - flip</h1>
      <JSCode
        code={`function mergeAndCount(arr1, arr2) {
  let i = 0;
  let j = 0;
  let merged = [];
  let inversions = 0;

  while (i < arr1.length || j < arr2.length) {
    if (i === arr1.length) {
      merged.push(arr2[j]);
      j++;
    } else if (j === arr2.length) {
      merged.push(arr1[i]);
      i++;
    } else if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
      inversions += (arr1.length - i);
    }
  }
  return [merged, inversions];
}
  
function countInversions(arr) {
  if (arr.length === 1) return [arr, 0];

  const middle = Math.floor(arr.length / 2);
  const [left, leftInversions] = countInversions(arr.slice(0, middle));
  const [right, rightInversions] = countInversions(arr.slice(middle));
  const [merged, mergeInversions] = mergeAndCount(left, right);

  return [merged, leftInversions + rightInversions + mergeInversions];
}

console.log(countInversions([4, 2, 1, 3])); // Prints [ [ 1, 2, 3, 4 ], 4 ]`}
      />
    </div>
  );
}
