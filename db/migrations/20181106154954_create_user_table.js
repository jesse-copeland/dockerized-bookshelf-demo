
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('name', 60).notNullable();
    table.string('email', 255).unique().notNullable();
    table.string('password', 255).notNullable();
    table.timestamp('create_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
