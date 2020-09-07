export const localMiddleware = (req, res, next) => {
  res.locals.siteName = 'apiPractice';

  //   const request = require('request');
  //   let content;

  //   const CLIENT_ID = 'xCvrl_U0lyrQtQ0oKAoP';
  //   const CLIENT_SECRET = 'OZ4wI3tMMQ';

  //   const option = {
  //     query: req.query.term, //이미지 검색 텍스트
  //     display: 1, //가져올 이미지 갯수
  //   };

  //   request.get(
  //     {
  //       uri: 'https://openapi.naver.com/v1/search/movie.json',
  //       qs: option,
  //       headers: {
  //         'X-Naver-Client-Id': CLIENT_ID,
  //         'X-Naver-Client-Secret': CLIENT_SECRET,
  //       },
  //     },
  //     function (err, res, body) {
  //       content = JSON.parse(body); //json으로 파싱
  //       console.log(body);
  //       res.locals.title = `${content.items[0].title}`;

  //       //   console.log(body);
  //       //   console.log(body);
  //     }
  //   );

  next();
};
