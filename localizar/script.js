$(function() {
    
    var wh = ($(window).outerWidth()+200),
        $radar = $('#radar-svg'),
        $radGradient = $('#radar-gradient'),
        $radBeam = $('#radar-beam'),
        deg = -90,
        rad = (wh/2); //   = 621/2
  
    $radar.attr('width', wh).attr('height', wh);  
    $radGradient.attr('y1', rad).attr('y2', rad);
    $radBeam.attr('points','750,0 450,0 ' + rad + ',' + rad);    
    $radar.css({transform: 'rotate('+ deg +'deg)'});
  
    
    (function rotate() {      
      $radar.css({transform: 'rotate('+ deg +'deg)'});
      $('[data-atDeg='+deg+']').stop().fadeTo(0,1).fadeTo(1700,0.2);

        // LOOP
        setTimeout(function() {
            deg = ++deg%360;
            rotate();
        }, 30);
    })();
    
    
});

