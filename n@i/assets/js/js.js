// JavaScript functions and DOM manipulation go here
$(document).ready(function () {
  $('html').niceScroll({
    zindex: 1e6,
    cursorcolor: 'rgba(51, 51, 51, 0.8)',
    cursorborder: '1px solid rgba(51, 51, 51, 0.8)',
    cursorborderradius: '0'
  });

  $('.live-tile, .list-tile, .copy-tile, .tile-strip .flip-list > li').css({
    'height': (($('#accordion').height() - 30) / 2) + 'px'
  });

  $(window).resize(function () {
    $('.live-tile, .list-tile, .copy-tile, .tile-strip .flip-list > li').css({
      'height': (($('#accordion').height() - 30) / 2) + 'px'
    });
  });

  $(".live-tile").liveTile();

  // charts
  var c1 = $("#c1").get(0).getContext("2d");
  var c2 = $("#c2").get(0).getContext("2d");
  var c3 = $("#c3").get(0).getContext("2d");
  var c4 = $("#c4").get(0).getContext("2d");
  var c1New = new Chart(c1);
  var c2New = new Chart(c2);
  var c3New = new Chart(c3);
  var c4New = new Chart(c4);

  var data = {
    d1: [
      {
        value: 300,
        color: "rgba(46, 204, 113, 1.0)"
      }, {
        value: 60,
        color: "rgba(46, 204, 113, 0.15)"
      }
    ],
    d2: [
      {
        value: 250,
        color: "rgba(46, 204, 113, 1.0)"
      }, {
        value: 110,
        color: "rgba(46, 204, 113, 0.15)"
      }
    ],
    d3: [
      {
        value: 100,
        color: "rgba(46, 204, 113, 1.0)"
      }, {
        value: 260,
        color: "rgba(46, 204, 113, 0.15)"
      }
    ],
    d4: [
      {
        value: 360,
        color: "rgba(46, 204, 113, 1.0)"
      }, {
        value: 0,
        color: "rgba(46, 204, 113, 0.15)"
      }
    ]
  };

  c1New.Doughnut(data.d1, {
    percentageInnerCutout: 94,
    segmentShowStroke: false,
    animateRotate: false
  });

  c2New.Doughnut(data.d2, {
    percentageInnerCutout: 94,
    segmentShowStroke: false,
    animateRotate: false
  });

  c3New.Doughnut(data.d3, {
    percentageInnerCutout: 94,
    segmentShowStroke: false,
    animateRotate: false
  });

  c4New.Doughnut(data.d4, {
    percentageInnerCutout: 94,
    segmentShowStroke: false,
    animateRotate: false
  });
});
