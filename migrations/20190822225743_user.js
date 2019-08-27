
exports.up = async function(knex, Promise) {
	await knex.schema.hasTable("user");
	return await knex.schema.createTable("user", table =>{
		table.increments("id").primary(),
		table.string("fullname"),
		table.string("phone"),
		table.string("email"),
		table.string("address"),
		table.string("user-type"),
		table.string("password");

	}); 
  
};

exports.down = function(knex) {
  knex.schema.dropTable('user');
};
