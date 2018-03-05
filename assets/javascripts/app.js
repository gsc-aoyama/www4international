var Hanmberger = (function(){
  function Hanmberger(){
    this.$html = $('html')
    this.$el = $('[js-hamburger]')
    this.$content = this.$el.find('[js-hamburger_content]')
    this.initialize()
  }

  Hanmberger.prototype = {
    initialize: function(){
      $('body').prepend( this.$el.html() )
      this.$el.find('.m-hamburger_content').removeClass( 'm-hamburger_content' )
      this.$el.find('[js-hamburger_btn]').remove()
      this.setClickEvent()
    },
    setClickEvent: function() {
      $('[js-hamburger_btn]').on('click', (e)=>{
        if(this.$html.hasClass('is-hamburger_animation')){
          return false;
        }
        this.$html.addClass('is-hamburger_animation');
        this.toggleHumburgerClass();
        return false;
      });
    },
    toggleHumburgerClass: function() {
      const isActiveHamburger = this.$html.hasClass('is-active_hamburger')

      if(isActiveHamburger){
        this.$html.removeClass('is-active_hamburger');
        this.$html.addClass('is-active_end');
      }else{
        this.$html.addClass('is-active_hamburger');
      }

      this.$html.one('transitionend', ()=>{
        if(isActiveHamburger){
          this.$html.removeClass('is-active_hamburger is-active_end')
        }
        this.$html.removeClass('is-hamburger_animation');
      });
    }
  };
  return Hanmberger;
})();


$(function(){
  new Hanmberger();
  console.log('test');
})