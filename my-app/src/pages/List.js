import React from "react";

// users.map의 입장에서 자식 컴포넌트
function User({userData}) {
  return (
    <tr>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
    </tr>
  );
};

function UserList() {
  const users = [
    { email: "ryu@gmail.com", name: "유재석" },
    { email: "kim@gmail.com", name: "김종국" },
    { email: "song@gmail.com", name: "송지효" },
    { email: "lee@gmail.com", name: "이광수" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        {/* 배열의 수만큼 돌릴 예정 -> 하나하나 돌리면서 userData라는 프로퍼티 이름을 가진 요소를 던짐 -> 위에 User함수를 준 부분에서 같은 값을 받을 수 있음 */}
        {/* map 함수 이용 */}
        {/* user라는 자식 컴포넌트에 데이터 전달하고자 함 -> 프로퍼티로 데이터 전달 가능 => 프로퍼티 이름=userData */}
        {users.map((user => <User userData={user} />))}
      </tbody>
    </table>
  );
};

export default UserList;

/* map 함수를 통해서 4건의 요소 한건한건을 User라는 자식 컴포넌트에 userData라는 프로퍼티 이름으로 하나씩 던져 준 것
-> user 자체 컴포넌트에서는 데이터를 받아옴 -> 그 데이터에는 한건 한건이 들어 있음 -> 거기서 name을 뽑이서 출력, email을 출력... */
