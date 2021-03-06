$(function () {
  $('.del').click(function (e) {
    var target = $(e.target),
      id = target.data('id'),
      tr = $('.item-id-' + id);
      console.log(tr.length)
      console.log(location.pathname)
    $.ajax({
        type: 'DELETE',
        url: location.pathname + '?id=' + id
      })
      .done(function (results) {        
        if (results.success === 1) {
          if (tr.length > 0) {
            tr.remove()
          }
        }
      })
  })

  $('#douban').blur(function () {
    var douban = $(this),
      id = douban.val()
    if (id) {
      $.ajax({
        url: 'https://api.douban.com/v2/movie/subject/' + id,
        type: 'GET',
        cache: true,
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'callback',
        success: function (data) {
          $('#inputTitle').val(data.title)
          $('#inputDirector').val(data.directors[0].name)
          $('#inputCountry').val(data.countries[0])
          $('#inputPoster').val(data.images.large)
          $('#inputYear').val(data.year)
          $('#inputSummary').val(data.summary)
        }
      })
    }
  })
})