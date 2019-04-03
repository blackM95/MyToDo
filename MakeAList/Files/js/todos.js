$('ul').on('click', 'li', function () {
  $(this).toggleClass('clickedli');

});

$('ul').on('click', 'span', function (e) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });

  e.stopPropagation();
});

$('input[type="text"]').keypress(function (e) {
  if (e.which === 13) {
    var list = $(this).val();
    $('ul').append('<li><span class="delete"><i class="fas fa-book-dead"></i></span> ' + list + '</li>');
  }
});

$('#plus-sign').on('click', function () {
  $('input[type="text"]').fadeToggle(500);
});
