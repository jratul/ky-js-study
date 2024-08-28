import Divider from "@/app/components/Divider";
import JSCode from "@/app/components/JSCode";

export default function SetIntro() {
  return (
    <div>
      <h1>javascript - Set - 개요</h1>
      <h2>기본 사용</h2>
      <JSCode
        code={`let inventory = new Set(); // Keeps track of unique items

inventory.add("diamond necklace");
inventory.add("gold watch");
inventory.add("pearl earrings");
// has
console.log(inventory.has("diamond necklace")); // Should log 'true'
// size
console.log(jewelryInventory.size);`}
      />
      <Divider />
      <h2>overlap 판정</h2>
      <JSCode
        code={`function audienceOverlap(blog1, blog2) {
    const set1 = new Set(blog1);
    
    return blog2.some((item) => set1.has(item));
}

let blog1 = [1, 2, 3, 4, 5];
let blog2 = [6, 7, 8, 9, 10];

if(audienceOverlap(blog1, blog2)) 
    console.log("Yes, there is an audience overlap between both blogs.");
else 
    console.log("No, there is no audience overlap between both blogs.");`}
      />
    </div>
  );
}
