Template.addStock.events({
    'submit #addStock': function (event) {
        // Prevent page refresh upon form submission
        event.preventDefault();

        // Grab the form data
        var data = {
            symbol: event.target.querySelector('#symbol').value
        };

        Meteor.call('addStock', data);

        event.target.reset();
    }
})
