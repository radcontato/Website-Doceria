jQuery(document).ready(function($) {

  var offsetBetween = 20;
  var wookmark;

  
  imagesLoaded('#galeria-incanto', function() {
    wookmark = new Wookmark('#galeria-incanto', {
      offset: offsetBetween,
      fillEmptySpace: true,
      autoResize: true,
      align: 'center'
    });
  });

  // Elemento dos filtros
  var filters = jQuery('#filters li');
  var onClickFilter = function(event) {
    var item = jQuery(event.currentTarget);
    itemActive = item.hasClass('active');
    if (!itemActive) {
      filters.removeClass('active');
      itemActive = true;
    } else {
      itemActive = false;
    }
    item.toggleClass('active');
    wookmark.filter(itemActive ? [item.data('filter')] : []);
  };
  jQuery('#filters').on('click.wookmark-filter', 'li', onClickFilter);
  
  var $fil = jQuery('#filters');
  var $gal = jQuery('#galeria-incanto');
  var $pai = $gal.parent();
  var docWidth = jQuery(document).width();
  if ($pai.width() >= 960) {
    if ( docWidth > 1200) {
      var leftWalk = ((($pai.width() - 1200) / 2) + $pai.scrollLeft() + "px");
      offsetBetween = 40;
      $gal.addClass('grande').css({
        'width': 1200,
        'margin-left': leftWalk
      });
      $fil.css({
        'width': 1200,
        'margin-left': leftWalk
      });
    }
  }
});