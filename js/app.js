(function() {

//Model

var Task = Backbone.Model.extend();

var task1 = new Task({
	title: 'do it!',
	completed: true

});

console.log(task1);
	
})();