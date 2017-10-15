$(function () {

  $.ajax({
    url: 'https://www.codeschool.com/users/danreeves74.json',
    dataType: "jsonp",
    success: function (response) {
      var elements = [];
      for (var i = 0; i < response.courses.completed.length; i++) {
        var course = response.courses.completed[i];
        var pic = course.badge;
        var title = course.title;
        var url = course.url;
        var element = "<div class='course'><h3 class='title'>"+title+"</h3><img src='"+pic+"'/><a href='"+url+"' target='_blank' class='btn btn-primary'>See Course</a></div>";
        elements.push(element);
      }
      $('#badges').append(elements);
    }
  });

});
