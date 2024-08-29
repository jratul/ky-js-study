import JSCode from "@/app/components/JSCode";

export default function PgHashPhoneNumber() {
  return (
    <div>
      <h1>프로그래머스 - 해시 - 전화번호 목록</h1>
      <a
        href="https://school.programmers.co.kr/learn/courses/30/lessons/42577"
        target="_blank"
      >
        문제 링크
      </a>
      <h2>내 코드</h2>
      <JSCode
        code={`function solution(phone_book) {
    const result = {};
    
    for(const phone of phone_book) {
        for(let i=1;i<phone.length;++i) {
            result[phone.substring(0,i)] = true;
        }
    }
    
    for(const phone of phone_book) {
        if(result[phone]) {
            return false;
        }
    }
    
    return true;
}`}
      />
      <ul>
        <li>substring hash를 미리 다 만들어 놓고 검사</li>
        <li>Set, has를 활용하면 더 좋았을듯</li>
      </ul>
      <h2>타인 코드</h2>
      <JSCode
        code={`function solution(phoneBook) {
    return !phoneBook.sort().some((t,i)=> {
        if(i === phoneBook.length -1) return false;

        return phoneBook[i+1].startsWith(phoneBook[i]);        
    })
}
`}
      />
      <p>
        사전 순서 상 이전 문자열이 접두어가 아니면 그 이전 문자열은 절대
        접두어가 아님을 이용한 듯
      </p>
    </div>
  );
}
