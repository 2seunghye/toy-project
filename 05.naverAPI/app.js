// require: node_modules를 가져오는 것
const express = require('express');
// app이라는 변수에 express를 실행해서 담은 것
const app = express();
const PORT = 4000;

function handleListening() {
  console.log(`✅listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);

function handleHome(req, res) {
  res.send('Hello from home!');
}

app.get('/', handleHome);

const request = require('request');
const CLIENT_ID = 'xCvrl_U0lyrQtQ0oKAoP';
const CLIENT_SECRET = 'OZ4wI3tMMQ';
const option = {
  query: '나의 소녀시대', //이미지 검색 텍스트
  display: 1, //가져올 이미지 갯수
};

request.get(
  {
    uri: 'https://openapi.naver.com/v1/search/movie.json',
    qs: option,
    headers: {
      'X-Naver-Client-Id': CLIENT_ID,
      'X-Naver-Client-Secret': CLIENT_SECRET,
    },
  },
  function (err, res, body) {
    let json = JSON.parse(body); //json으로 파싱
    console.log(json);
  }
);

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//   res.send('hello world');
// });
