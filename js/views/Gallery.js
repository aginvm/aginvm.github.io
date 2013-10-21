define(
[
    'jquery',
    'underscore',
    'backbone',
    'text!Templates/Gallery.html'
],
function (
    $,
    _,
    Backbone,
    PageGallery
) {
    var PageGallery = Backbone.View.extend({
        el: '#pageGallery',
        template: _.template(PageGallery),
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
    return PageGallery;
});