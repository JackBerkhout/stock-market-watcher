Template.stocks.helpers({
    // stocks: function () {
    //     return Stocks.find();
    // }
    stocks: function() {
        var entries;

        if(Session.get('filter') == 'up') {
            entries = Stocks.find({change: {$gt: 0}});
        }
        else if(Session.get('filter') == 'down') {
            entries = Stocks.find({change: {$lt: 0}});
        }
        else {https://stackoverflow.com/tags?page=16&tab=popular
            entries = Stocks.find();
        }

        return entries;
    },
    cssPriceClass: function () {
        var newClass = '';

        if (this.change > 0) {
            newClass = 'price-up';
        } else if (this.change < 0) {
            newClass = 'price-down';
        }

        return newClass;
    }
    // ,
    // sessionExample: function() {
    //     return Session.get('filter');
    // }
});

Template.stocks.events({
    'click .delete': function(event){
        Meteor.call('deleteStock', this._id);
    },
    'change #stock-filter': function(event){
        console.log('selector');
        Session.set('filter', event.target.value);
    }
});
