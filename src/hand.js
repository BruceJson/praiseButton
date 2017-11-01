'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hand = function () {
  function Hand(num, $el) {
    _classCallCheck(this, Hand);

    this.num = num;
    this.$el = $el;
    this.bindClickAction();
  }

  _createClass(Hand, [{
    key: 'bindClickAction',
    value: function bindClickAction() {
      var _this = this;

      this.$el.click(_.debounce(function () {
        console.log('点击了第：' + _this.num + '次');
        //   初始化次数提示
        _this.initNumTip();

        if (_this.num >= 10) {
          _this.num = 0;
          _this.$el.addClass('disabled');
        } else {
          _this.$el.removeClass('disabled');
          _this.num = plus(_this.num);
          $('.plus').addClass('animate');
          setTimeout(function () {
            $('.plus').removeClass('animate');
          }, 1000);
        }
      }, 1000));
    }
  }, {
    key: 'initNumTip',
    value: function initNumTip() {
      this.$el.find('#clickIndex').text(this.num);
    }
  }]);

  return Hand;
}();

exports.default = { Hand: Hand };