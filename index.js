const _ = require("lodash");

module.exports = function(mongoose) {
	let schemas = mongoose.modelSchemas;
	let schemasKeys = _.keys(schemas);
	//console.log("schemasKeys: ", schemasKeys);

	console.log(
		"SCHEMA building: ",
		JSON.stringify(schemas.building.tree, null, "\t")
	);

	let results = [
		{
			schema: "building"
		}
	];

	schemasKeys.forEach(e => {
		let schema = schemas[e].obj;

		if (Array.isArray(schema)) {
			root = root[0];
		}

		console.log(schema);
	});
};

function exploreLevel(root) {
	if (Array.isArray(root)) {
		root = root[0];
	}

	_.forOwn(root, (val, key) => {});
}

//{} || [{}] || [null] || field
function isReference(val) {
	if (val.ref) return val.ref;
}
