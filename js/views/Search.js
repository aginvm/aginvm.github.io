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
    PageSearch
) {
    var PageSearch = Backbone.View.extend({
        el: '#pageSearch',
        template: _.template(PageSearch),
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
    return PageSearch;
});