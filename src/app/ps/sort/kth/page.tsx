import JSCode from "@/app/components/JSCode";

export default function PsSortKth() {
  return (
    <div>
      <h1>ps - sort - kth</h1>
      <JSCode
        code={`function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low;

  for (let j = low + 1; j <= high; j++) {
    if(arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i], arr[low]] = [arr[low], arr[i]];
  return i;
}
  
function findKthSmallest(numbers, k) {
  if (!numbers || numbers.length < k) return Number.MIN_SAFE_INTEGER;
  return kthSmallest(numbers, 0, numbers.length - 1, k);
}

function kthSmallest(arr, start, end, k) {
  if (k > 0 && k <= end - start + 1) {
    let pos = partition(arr, start, end);
    if (pos - start === k - 1) {
      return arr[pos];
    }
    if (pos - start > k - 1) {
      return kthSmallest(arr, start, pos - 1, k);
    }
    return kthSmallest(arr, pos + 1, end, k - pos + start - 1);
  }
  return Number.MAX_SAFE_INTEGER;
}

console.log(findKthSmallest([1, 7, 2, 4, 2, 1, 6], 5));  // Prints 4`}
      />
    </div>
  );
}
