const _ = require("lodash");

module.exports = function(mongoose) {
	let schemas = mongoose.modelSchemas;
	let schemasKeys = _.keys(schemas);
	console.log("schemasKeys: ", schemasKeys);

	console.log(
		"SCHEMA building: ",
		JSON.stringify(schemas.building, null, "\t")
	);

	schemasKeys.forEach(e => {
		let schema = schemas[e].obj;
		//console.log(schema);
	});
};
