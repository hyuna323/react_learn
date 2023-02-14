/* eslint-disable */

import React, {useState} from "react";
import "./../css/Blog.css";
import logo from "../img/logo.svg";

function Blog() {

  const [글제목, 글제목변경] = useState(["여자 코트 추천", "인덕원 감성 카페", "react 독학"]);
  // a = 여자 코트 추천이라는 진짜 데이터 들어감
  // b = 여자 코트 추천 state 정정해주는 함수가 들어감

  const [따봉, 따봉변경] = useState(0);
  const posts = "인덕원 맛집";

  // function 제목바꾸기(){
  //   const newArray = [...글제목];
  //   newArray[0] = "남자 코드 추천"
  //   글제목변경(newArray);
  // }

  return (
    <div className="Blog">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={제목바꾸기}>버튼</button> */}
      <div className="list">
      <h3>{글제목[0]} <span onClick={ ()=>{따봉변경(따봉 + 1)} }>💚</span>{따봉}</h3>
        <p>2월 14일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 15일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 16일 발행</p>
      </div>
      <Modal />
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default Blog;
