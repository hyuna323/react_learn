import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link>
      </nav>
      {/* 전환 되는 것을 정의 하는 것 */}
      <Routes>
        {/* 브라우저 패스가 바뀔 때마다 어떤 컴포넌트를 mapping해서 보여줄지를 정의해야 함 */}
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/counter" element = {<Counter />} />
      </Routes>
    </div>
    // jsx 문법 html 태그 쓰는 것과 완전히 동일하지 않음
  );
}

export default App;
