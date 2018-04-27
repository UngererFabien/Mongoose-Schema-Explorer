const fs = require("fs");

module.exports = function(mongoose) {
	let schemas = mongoose.modelSchemas;
	let schemasKeys = Object.keys(schemas);
	//console.log("schemasKeys: ", schemasKeys);

	// console.log(
	// 	"SCHEMA building: ",
	// 	JSON.stringify(schemas.building.tree, null, "\t")
	// );

	console.log(JSON.stringify(schemas.lease.obj));

	let hierarchy = schemasKeys.map(schemaName => {
		let schema = schemas[schemaName].obj;

		let imports = exploreLevel(schema);

		return {
			name: schemaName,
			size: 1,
			imports: [...new Set(imports)]
		};
	});

	fs.writeFile(
		__dirname + "/data/hierarchy.json",
		JSON.stringify(hierarchy, null, 4),
		{},
		err => {
			console.log("Mongoose hierarchy saved.");
		}
	);
};

function exploreLevel(level) {
	if (Array.isArray(level)) {
		level = level[0];
	}

	let levelImports = [];

	if (level && typeof level == "object") {
		if (!level.ref) {
			for (var key in level) {
				levelImports.push(...exploreLevel(level[key]));
			}
		} else levelImports.push(level.ref);
	}

	return levelImports;
}
