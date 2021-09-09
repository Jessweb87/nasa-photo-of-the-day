// Import all the files/libraries
import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import {BASE_URL, API_KEY} from './constants/index';


import Title from './components/Title';
import Img from './components/Img';
import Date from './components/Date';
import Copyright from './components/Copyright';
import Explanation from './components/Explanation';
import styled from 'styled-components';


// const GlobalStyle = createGlobalStyle 
// `h1{ font- family: ${pr => pr.theme.fontFamily};
// }`


function App() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState(null);
  const [date, setDate] = useState(null);
  const [explanation, setExplanation] = useState(null);
  const [copyright, setCopyright] = useState(null);



  useEffect(() => {
    axios.get(`${BASE_URL}/?api_key=${API_KEY}`)
    .then(res => {
      console.log(res);
      setImg(res.data.url)
      setTitle(res.data.title)
      setDate(res.data.date)
      setCopyright(res.data.copyright)
      setExplanation(res.data.explanation)
    }).catch(err => {
      console.error(err)
    })
  })
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      {/* <GlobalStyle> */}
      <h1>Nasa Photo of the Day</h1>
      <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
      <Title title = {title} />
      <Date date ={date} />
      <Img img ={img} />
      <Explanation explanation ={explanation} />
      <Copyright copyright ={copyright} />
      {/* </GlobalStyle> */}
    </div>
  );
}

export default App;
