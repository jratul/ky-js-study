import JSCode from "@/app/components/JSCode";

export default function JavascriptMapIter() {
  return (
    <div>
      <h1>javascript - map - 순회</h1>
      <JSCode
        code={`function frequentUser(visits) {
  const visitLog = new Map();
  
  visits.forEach((visit) => {
    if(visit !== 0) {
      const count = visitLog.get(visit) || 0;
      visitLog.set(visit, count + 1);
    }
  });
  
  let totalVisit = visits.length;
  let frequentVisitThreshold = totalVisit / 4;
  
  for (let [user, visitCount] of visitLog) {
    if (visitCount > frequentVisitThreshold) {
      return user;
    }
  }
  
  return -1;
}`}
      />
    </div>
  );
}
