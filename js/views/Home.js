define(
[
    'jquery',
    'underscore',
    'backbone',
    'text!Templates/Home.html',
    'constants',
    'bootstrap'
],
function (
    $,
    _,
    Backbone,
    PageHome,
    constants
) {
    var PageHome = Backbone.View.extend({
        el: '#pageHome',
        template: _.template(PageHome),
        initialize:function(){
            this.render();
        },
        
        render: function () {
            this.$el.html(this.template());
                $('.carousel').carousel({
                    interval: 2000
                });
        },
        hide: function () {                
            this.$el.hide();
        },
        show: function () {
            this.$el.show();
            
        }
    });
    return PageHome;
});