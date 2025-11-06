$(function() {

  // 文字色を黒⇄赤に変える
  $('#change-color').on('click', function() {
    const target = $('#target');
    const currentColor = target.css('color');
    if (currentColor === 'rgb(0, 0, 0)') { // 黒
      target.css('color', 'red');
    } else {
      target.css('color', 'black');
    }
  });

  // 文字内容を変える
  $('#change-text').on('click', function() {
    $('#target').text('Hello！');
  });

  // フェードアウト
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });

  // フェードイン
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });

});