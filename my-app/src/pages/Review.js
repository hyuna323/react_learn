import { useState, useEffect } from "react";
import axios from 'axios';

export default function Review () {
  const [review, setReview] = useState("글자를 입력하세요.");
  function fnReviewChage(e) {
    setReview(e.target.value);
  };

  useEffect(() => {
    console.log(review);
  }, []);

  useEffect( async () => {
    // fetch('./data/dataSample,json')
    // .then(res => res.json())
    // .then(console.log)
    const resolve = await fetch('./data/dataSample.json')
    const data = await resolve.json();
    console.log(data);
  }, []);

  return (
    <div className="review_area">
      <form method="POST" action="#">
        <fieldset>
          <legend>리뷰작성</legend>
          <input id="reviewText" name="review__Text" value="" onChange={fnReviewChage}/>
          <p>{review}</p>
          {/* <button type="button">내용 전송</button> */}
        </fieldset>
      </form>
    </div>
  );
};
