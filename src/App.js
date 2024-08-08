/* eslint-disable */

import './App.css';
import {useState} from 'react';

function App() {
  
  let post = '강남 우동 맛집';
  const [title, setTitle] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학'])
  let [goodCnt, setGoodCnt] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red', fontSize : '18px'}}>blog</h4>
      </div>
      <div className="list">
        <h4>{title[0]} <span onClick={()=>{setGoodCnt(goodCnt+1)}}>👍</span> {goodCnt} </h4>
        <p>2월 17일 발행</p>
      </div>
      
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
