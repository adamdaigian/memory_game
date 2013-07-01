$(document).ready(function(){

  var tiles = $('.tile');
  var num_Clicks = 0;
  var selected = [];

  var is_current_selection_a_match = function(){
    var img1src = selected[0].find('img').attr('src');
    var img2src = selected[1].find('img').attr('src');
    return (img2src == img1src);
  }

  var handle_click = function() {
   var tile = $(this);
   if (tile.hasClass('active')) {
      return false;
   }
   if (selected.length == 2) {
      $('.tile.active').removeClass('active');
      selected = [];
   }
   num_Clicks++;
   tile.addClass('active');
   selected.push(tile);
   if (selected.length == 2 || is_current_selection_a_match())
    $.each(selected, function(index, matched_tile) {
    matched_tile.addClass('matched');
    });
  }


  $.each(tiles, function(index, tile) {
    var tile = $(tile);
    tile.on('click', handle_click);
  });

});
