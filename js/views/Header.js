define(
[
    'jquery',
    'underscore',
    'backbone',
    'text!Templates/Header.html',
    'constants',
    'bootstrap'
],

function (
    $,
    _,
    Backbone,
    PageHeader,
    constants
) {
    var PageHeader = Backbone.View.extend({
        el: '#pageHeader',
        template: _.template(PageHeader),
        events:{
            'click .navs li':'navPage'
        },

        initialize:function(){
            this.render();
        },
        
        render: function () {
            this.$el.html(this.template());
            // $(window).scroll(function () {
            //         if ($(window).scrollTop() > 570) {
            //             $('div.rs-logo-div').addClass('fixedHeader');
            //         } else if ($(window).scrollTop() < 570) {
            //             $('div.rs-logo-div').removeClass('fixedHeader');
            //         }                   
            //     });
        },

        navPage:function(event){
            $('.navs li').removeClass('nav-active');
            var route=event.currentTarget.className.trim();
            $(event.currentTarget).addClass('nav-active');
            this.goTo(route);
        },

        hide: function () {                
            this.$el.hide();
        },
        show: function () {
            this.$el.show();
            
        }
    });
    return PageHeader;
});