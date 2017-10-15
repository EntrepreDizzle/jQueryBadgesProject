$(function () {

  $.ajax({
    url: 'https://www.codeschool.com/users/danreeves74.json',
    dataType: jsonp,
    success: function (response) {
      console.log(response);
    }
  });

});
