'use strict';

SystemJS.config({
  baseURL: '/praiseButton/src'
});
SystemJS.import('hand.js').then(function (m) {
  // jquery 继承
  $.extend({
    thumb: function thumb(num, $el) {
      return new m.default.Hand(num, $el);
    }
  });

  // 初始化组件
  $.thumb(0, $('.hand'));
});