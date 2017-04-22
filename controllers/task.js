module.exports = function(app){
	var Task = app.models.task

	var TaskController = {
		all: function(req, res){
			Task.find({}).then(function(data){
				res.status(200).json(data)
				
			}, function(error){
				res.status(401).json(error)
				
			})	
		},

		get: function(req, res){
			var id = req.params.id

			Task.findById(id).then(function(data){
				res.status(200).json(data)
		
			}, function(error){
				res.status(401).json(error)

			})
		},

		create: function(req, res){
			var task = req.body	

			Task.create(task).then(function(data){
		
				res.status(200).json(data)
		
			},function(error){
		
				res.status(401).json(error)

			})
		},

		update: function(req, res){
			var id = req.params.id
			var task = req.body

			Task.findByIdAndUpdate(id, task).then(function(data){
				res.status(200).json({info: "Atualizado com sucesso"})

			}, function(error){

				res.status(401).json(error)
			})
		},

		remove: function(req, res){
			var id = req.params.id

			Task.findByIdAndRemove(id).then(function(data){
				res.status(200).json({info: "Deletado com sucesso"})

			}, function(error){

				res.status(401).json(error)
			})
			
		}
	}

	return TaskController
}