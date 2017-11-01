class Hand {
  constructor(num, $el) {
    this.num = num;
    this.$el = $el;
    this.bindClickAction();
  }

  bindClickAction() {
    this.$el.click(_.debounce(() => {
      console.log('点击了第：' + this.num + '次');
      //   初始化次数提示
      this.initNumTip();

      if (this.num >= 10) {
        this.num = 0;
        this.$el.addClass('disabled');
      } else {
        this.$el.removeClass('disabled');
        this.num = plus(this.num);
        $('.plus').addClass('animate');
        setTimeout(function () {
          $('.plus').removeClass('animate');
        }, 1000);
      }
    }, 1000));
  }

  initNumTip() {
    this.$el.find('#clickIndex').text(this.num);
  }
}

export default { Hand };
