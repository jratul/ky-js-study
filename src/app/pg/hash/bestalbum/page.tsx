import JSCode from "@/app/components/JSCode";

export default function PgHashBestAlbum() {
  return (
    <div>
      <h1>프로그래머스 - 해시 - 베스트앨범</h1>
      <h2>내 코드</h2>
      <JSCode
        code={`function solution(genres, plays) {
    const chart = {};
    
    for(let i=0;i<genres.length;++i) {
        const genre = genres[i]
        if(!(genre in chart)) {
            chart[genre] = {
                total: 0,
                list: []
            }
        }
        
        const info = chart[genre];
        
        info.total += plays[i];
        info.list.push({id: i, plays : plays[i]});
        
    }
    
    const answer = [];
    
    const sorted = Object.values(chart).sort((a,b) => b.total - a.total);
    
    sorted.forEach((info) => {
        info.list.sort((a, b) => {
            if(a.plays !== b.plays) {
                return b.plays - a.plays;
            } else {
                return a.id - b.id;
            }
        });
        
        answer.push(...info.list.slice(0,2).map(song => song.id));
    });
    
    return answer;
}`}
      />
      <h2>실수했던 점</h2>
      <ul>
        <li>genre in chart 할 때 괄호로 감싸야 함</li>
        <li>concat은 원본 array를 바꾸는게 아니라 새로운 array를 리턴함</li>
      </ul>
    </div>
  );
}
