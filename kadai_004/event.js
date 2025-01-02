$(function() {
  console.log('loadイベントが発生しました');
});

//  下記のコードを試した結果、コンソールに出力されませんでした。
// $(function() {
//   $(window).on('load',() => {
//     console.log('loadイベントが発生しました');
//   });
// });


$(function() {
  $(window).on('scroll',()=>{
    console.log('scrollイベントが発生しました');
  });
});

