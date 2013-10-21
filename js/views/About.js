define(
[
    'jquery',
    'underscore',
    'backbone',
    'text!Templates/About.html',
    'bootstrap'
],
function (
    $,
    _,
    Backbone,
    PageAbout
) {
    var PageAbout = Backbone.View.extend({
        el: '#pageAbout',
        template: _.template(PageAbout),
        initialize:function(){
            this.render();
        },
        
        render: function () {
            this.$el.html(this.template());
        },
        hide: function () {                
            this.$el.hide();
        },
        show: function () {
            this.$el.show();
            
        }
    });
    return PageAbout;
});