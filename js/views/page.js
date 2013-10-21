define(
[
    'jquery',
    'underscore',
    'backbone',
    'constants',
    'views/Header',
    'views/Footer',
    'views/Home',
    'views/About',
    'views/Gallery',
    'views/Contact',
    'views/Services',
    'views/Search'
],
function (
    $,
    _,
    Backbone,
    constants,
    PageHeader,
    PageFooter,
    PageHome,
    PageAbout,
    PageGallery,
    PageContact,
    PageServices,
    PageSearch
    ) {
    var PageView = Backbone.View.extend({
        el: 'body',
        initialize: function () {
            var self = this;
            this.header = new PageHeader();
            this.footer = new PageFooter();
            this.home = new PageHome();
            this.about = new PageAbout();
            this.gallery=new PageGallery();
            this.contact=new PageContact();
            this.services=new PageServices();
            this.search=new PageSearch();
            _.bindAll(this);                 
        },
        showHome: function () {
            this.route = window.location.hash;
            if (this.route.trim() == '')
                this.goTo("home");
            this.showPages(this.home);           
        },                      
        showAbout: function () {
            this.showPages(this.about);
        },
        showGallery: function () {
            this.showPages(this.gallery);
        },
        showContact: function () {
            this.showPages(this.contact);
        },
        showService: function () {
            this.showPages(this.services);               
        },
        showSearch: function () {
            this.showPages(this.search);               
        },
        showPages:function(page){
            this.hideOtherViews();
            page.show();            
        },           
        hideOtherViews: function () {
            if (this.home)
                this.home.hide();
            if (this.about)
                this.about.hide();
            if (this.gallery)
                this.gallery.hide();
            if (this.contact)
                this.contact.hide();
            if (this.services)
                this.services.hide();
            if (this.search)
                this.search.hide();
        }
    });
    return PageView;
});