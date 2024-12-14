$(function(){
  $('#target').addClass('heading');
});

// 下記コードは画像や外部リソースを持つ場合。DOMロードのみでよければ上記コードでOK
// $(function(){
//   $(window).on('load',() => {
//     $('#target').addClass('heading');
//   });
// });