exports.up = function(knex, Promise) {
  return knex.schema.createTable('sports', function(table){
    table.increments();
    table.string('city');
    table.string('team');
    table.string('league');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sports');
};
