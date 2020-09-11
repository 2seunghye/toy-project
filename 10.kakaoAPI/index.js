$.ajax({
  method: 'GET',
  url: 'https://dapi.kakao.com/v3/search/book?target=tditle',
  data: { query: prompt('책 제목을 입력해주세요', '') },
  headers: { Authorization: 'KakaoAK dc9d70e5667aecff7649401efacca9f1' },
}).done(function (msg) {
  console.log(msg);
  var data = msg.documents[0];
  $('#search').append(data.title.substr(0, 20));

  $('#title').append(data.title);
  $('#thumbnail').append('<img src=' + data.thumbnail + '>');
  $('#contents').append(data.contents + '...');

  $('#status').append(data.status);
  $('#price').append(data.price);
  $('#sale_price').append(data.sale_price);
  $('#authors').append(data.authors);
  $('#translators').append(data.translators);
  $('#publisher').append(data.publisher);
  $('#datetime').append(data.datetime.substr(0, 10));
});

// 검색어를 받아올 때 까지 안뜨게 ..????????
