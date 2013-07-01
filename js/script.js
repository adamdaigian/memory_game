$(document).ready(function(){

  var tiles = $('.tile');
  var num_clicks = 0;

  var handle_click = function() {
   var tile = $(this);
   tile.addClass('active');
  }


  $.each(tiles, function(index, tile) {
    var tile = $(tile);
    tile.on('click', handle_click);
  });

});
