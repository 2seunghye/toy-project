$.ajax({
  method: 'GET',
  url: 'https://dapi.kakao.com/v3/search/book?target=tditle',
  data: { query: prompt('책 제목을 입력해주세요', '') },
  headers: { Authorization: 'KakaoAK dc9d70e5667aecff7649401efacca9f1' },
}).done(function (msg) {
  console.log(msg);
  $('#search').append(msg.documents[0].title.substr(0, 20));

  $('#title').append(msg.documents[0].title);
  $('#thumbnail').append('<img src=' + msg.documents[0].thumbnail + '>');
  $('#contents').append(msg.documents[0].contents + '...');

  $('#status').append(msg.documents[0].status);
  $('#price').append(msg.documents[0].price);
  $('#sale_price').append(msg.documents[0].sale_price);
  $('#authors').append(msg.documents[0].authors);
  $('#translators').append(msg.documents[0].translators);
  $('#publisher').append(msg.documents[0].publisher);
  $('#datetime').append(msg.documents[0].datetime.substr(0, 10));
});
