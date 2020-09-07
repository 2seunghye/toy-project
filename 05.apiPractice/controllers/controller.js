export const handleHome = (req, res) => res.render('home');

export const handleSearch = (req, res) => {
  const request = require('request');

  const CLIENT_ID = 'xCvrl_U0lyrQtQ0oKAoP';
  const CLIENT_SECRET = 'OZ4wI3tMMQ';

  const option = {
    query: req.query.term, //이미지 검색 텍스트
    display: 1, //가져올 갯수
  };

  if (option.query == '') {
    redirectHome();
    return;
  }

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
      let content = JSON.parse(body); //json으로 파싱
      if (content.total == 0) {
        redirectHome();
      } else {
        console.log(content);
        render(body);
      }
    }
  );

  function redirectHome() {
    res.render('home');
  }

  function render(data) {
    data = JSON.parse(data);
    res.render('search', {
      title: `${data.items[0].title.replace('<b>', '').replace('</b>', '')}`,
      actor: `${data.items[0].actor}`.substr(0, data.items[0].actor.length - 1),
      subtitle: `${data.items[0].subtitle}`,
      director: `${data.items[0].director}`.substr(0, data.items[0].director.length - 1),
      link: `${data.items[0].link}`,
      userRating: `${data.items[0].userRating}`,
    });
  }
};
