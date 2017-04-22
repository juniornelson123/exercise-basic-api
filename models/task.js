var mongoose = require("mongoose")

module.exports = function(app){
	var schema = mongoose.Schema({
		title: {
			type: String,
			required: true,
			index:{
				unique: true
			}
		},

		done: {
			type: Boolean,
			required: true
		}
	})

	return mongoose.model("Task", schema)
}


