import React, {useState} from "react";

function Input2() {
  // 여러개의 데이터를 한번에 처리해야 할 때
  // 변수명 끝에 s를 붙여주고 useState를 object형태로 정의하여 keyvalue로 선언
  const [inputs, setInputs] = useState({
    // 기본값은 ""(빈값)
    name: "",
    email: "",
    tel: "" 
  });

  // object 분해기법 이용 -> input object에 있는 name, email, tel을 빼온 것
  // 이렇게 해야지 바로 사용할 수 있음
  const {name, email, tel} = inputs;

  // onChange가 일어날때마다 이벤트 실행
  function onChange(e) {
    const value = e.target.value;
    const id = e.target.id;
    // 어떤 값을 변경할 것인지 정리해줌
    // 주의!! inputs[id] = value;로 작성하면 상태 관리가 안됨 => 중간에 keyvalue값을 바꿔줄 경우 바꼈는지 인식이 안됨(자바스크립트 원리와 비슷) => 따라서, react에서는 변경된걸 인지할 수 있는 방식을 사용해야 함
    setInputs({
      // 깊은 복사를 하여 새로운 object를 만들어야 함 깊은복사는 아래의 방식 ...을 사용
      // ...input에는 위의 keyvalue가 들어온 것
      ...inputs,
      // 만약 id 'name'을 변경하면 name: value와 같은 형태로 나옴 -> 기존에 있던 name:""가 없어지고 name: value로 업데이트 됨
      [id]: value
    })
  };
  // onChange event가 일어날때 어떤 input 박스를 변경하고 있는지를 id를 보면 알 수 있음

  // input 태그에 들어가는 값이 어떻게 바뀌는지 보기
  return (
    <div>
      <div>
        <label>이름</label>
        {/* 위의 useState라는 object에서 잡은 keyvalue가 연결된 것 */}
        {/* 어떤 값이 변경되고 있는지를 알기 위해 <id>/<name> 사용 */}
        <input type="text" id="name" value={name} onChange={onChange} />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" id="email" value={email} onChange={onChange} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" id="tel" value={tel} onChange={onChange} />
      </div>
      <p>이름: {name}</p>
      <p>이메일: {email}</p>
      <p>전화번호: {tel}</p>
    </div>
  );
};

export default Input2;
