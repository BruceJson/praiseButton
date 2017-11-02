SystemJS.config({
    baseURL: './',
});
SystemJS.import('src/hand.js').then(function (component) {
    // jquery 继承
    $.extend({
        thumb: (num, $el) => {
            return new component.default.Hand(num, $el);
        }
    });

    // 初始化组件
    $.thumb(0, $('.hand'));
});
