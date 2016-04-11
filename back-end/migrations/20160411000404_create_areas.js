exports.up = function(knex, Promise) {
  return knex.schema.createTable('areas', function(table){
    table.increments();
    table.string('code');
    table.string('text');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('areas');
};
