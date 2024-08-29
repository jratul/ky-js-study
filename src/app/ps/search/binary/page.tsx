import JSCode from "@/app/components/JSCode";

export default function PsSearchBinary() {
  return (
    <div>
      <h1>ps - 탐색 - 이진 탐색</h1>
      <h2>recursive</h2>
      <JSCode
        code={`function recursiveBinarySearch(books, start, end, bookId) {
    if (start > end) return "Book not found";
    // TODO: Compute the midpoint of the current section
    const mid = Math.floor((start + end)/2);
    // TODO: Add the logic to search for the bookId by comparing it with book at midpoint and decide the next half to search in
    if(bookId === books[mid]) return mid;
    if(bookId > books[mid]) return recursiveBinarySearch(books, mid+1, end, bookId);
    return recursiveBinarySearch(books, start, mid-1,bookId);
}

// Example library array and book ID to search for
const library = [123, 234, 345, 456, 567, 678, 789];
const bookID = 456;
const bookIndex = recursiveBinarySearch(library, 0, library.length - 1, bookID);
console.log("Book index:", bookIndex);`}
      />
      <h2>iterative</h2>
      <JSCode
        code={`function iterativeBinarySearch(books, isbn) {
    let start = 0;
    let end = books.length - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (books[mid].isbn == isbn) return mid;
        else if (books[mid].isbn < isbn) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
}


let books = [
    {'isbn': 1111, 'title': 'The Lord of the Rings'},
    {'isbn': 1121, 'title': 'Harry Potter'},
    {'isbn': 2211, 'title': 'The Hobbit'}
];
let target = 2211;
let result = iterativeBinarySearch(books, target);
console.log(result);`}
      />
    </div>
  );
}
