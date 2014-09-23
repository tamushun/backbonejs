(function() {

//Model

var Task = Backbone.Model.extend({
	defaults: {
		title: "do something!",
		completed: false
	}
});

var task1 = new Task({
//	title: 'do it!',
	completed: true
});

task1.set('title', 'newTitle');
var title = task1.get('title')

console.log(title);
	
})();