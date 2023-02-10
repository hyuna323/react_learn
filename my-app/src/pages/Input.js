import React, {useState} from "react";

function Input() {
  // useState의 초기값은 빈별
  const [txtValue, setTextValue] = useState("");

  // onChange가 일어날때마다 이벤트 실행
  function onChange(e) {
    // e.target = 아래의 input 태그를 의미하는 것
    setTextValue(e.target.value)
  };

  // input 태그에 들어가는 값이 어떻게 바뀌는지 보기
  return (
    <div>
      {/* value의 값에 useState("")로 생성한 txtValue라는 변수를 작성해줘야 함 */}
      {/* value={txtValue} = txtValue의 값으로 적어주라 = 내가 작성한 값을 보여주라 */}
      <input type="text" value={txtValue} onChange={onChange} />
      <br />
      <p>{txtValue}</p>
    </div>
  );
};

export default Input;
