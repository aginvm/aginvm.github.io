define(
[
    'jquery',
    'underscore',
    'backbone',
    'text!Templates/Footer.html'
],
function (
    $,
    _,
    Backbone,
    PageFooter
) {
    var PageFooter = Backbone.View.extend({
        el: '#pageFooter',
        template: _.template(PageFooter),
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
    return PageFooter;
});