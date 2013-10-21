define(
[
    'jquery',
    'underscore',
    'backbone',
    'text!Templates/Services.html',
    'bootstrap'
],
function (
    $,
    _,
    Backbone,
    PageServices
) {
    var PageServices = Backbone.View.extend({
        el: '#pageServices',
        template: _.template(PageServices),
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
    return PageServices;
});