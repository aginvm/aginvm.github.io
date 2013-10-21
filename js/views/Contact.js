define(
[
    'jquery',
    'underscore',
    'backbone',
    'text!Templates/Contact.html',
    'bootstrap'
],

function (
    $,
    _,
    Backbone,
    PageContact
) {
    var PageContact = Backbone.View.extend({
        el: '#pageContact',
        template: _.template(PageContact),
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
    return PageContact;
});