var mongoose = require("mongoose")

module.exports = function(uri){
	mongoose.connect(uri)

	mongoose.set("debug", true)

	mongoose.connection.on("connected", function(){
		console.log(uri)
	})
}





