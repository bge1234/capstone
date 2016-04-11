exports.up = function(knex, Promise) {
  return knex.schema.createTable('cities', function(table){
    table.increments();
    table.string('city');
    table.string('state');
    table.string('state_abbreviation');
    table.string('latitude');
    table.string('longitude');
    table.integer('population');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cities');
};
