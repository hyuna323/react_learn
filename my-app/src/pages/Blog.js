import React, {useState} from "react";
import "./../css/Blog.css";
import logo from "../img/logo.svg";

function Blog() {

  const [글제목, 글제목변경] = useState(["여자 코트 추천", "인덕원 감성 카페"]);
  // a = 여자 코트 추천이라는 진짜 데이터 들어감
  // b = 여자 코트 추천 state 정정해주는 함수가 들어감

  const posts = "인덕원 맛집";
  return (
    <div className="Blog">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{글제목[0]}</h3>
        <p>2월 14일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default Blog;
