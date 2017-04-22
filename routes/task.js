module.exports = function(app){
	var Task = app.controllers.task

	app.get("/tasks", Task.all)
	app.get("/tasks/:id", Task.get)
	app.post("/tasks",Task.create)
	app.put("/tasks/:id", Task.update)
	app.delete("/tasks/:id", Task.remove)

}