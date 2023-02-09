import React, {useState} from "react";

function Counter() {
  const [num, setNumber] = useState(0);
  // num = usestate(0)라는 값을 기본 값으로 갖는 변수 = 0
  // setNumber = num이라는 변수에 대한 setter함수
  
  // 버튼 +1에 대한 함수
  function increase() {
    setNumber(num + 1);
    // num = num + 1;와 같은 의미 BUT, 해당 방식으로는 상태 관리가 안되고 위처럼 작성해야만 상태 관리가 됨
  }

  // 버튼 -1에 대한 함수
  function decrease() {
    setNumber(num - 1);
  }
  
  // +1 버튼을 누르면 1씩 증가, -1 버튼 누르면 1씩 감소되는 것 만들기
  return (
    <div>
      {/* 버튼 click시 마다 function increase() 함수를 호출 */}
      <button onClick={increase}>+1</button>
      {/* onClick은 중괄호를 이용해야 함 */}
      <button onClick={decrease}>-1</button>
      <p>{num}</p>
      {/* p태그에 보여줄 것인데 보여줄땐 중괄호 이용 -> num 값이 출력이 됨 */}
    </div>
  );
};

export default Counter;
