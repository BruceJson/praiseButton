SystemJS.config({
  baseURL: '/Hand-Demo/src'
});
SystemJS.import('hand.js').then(function (m) {
  $.extend({
    thumb: m.default.Hand

  });

  $.thumb(0, $('.hand'));

});
