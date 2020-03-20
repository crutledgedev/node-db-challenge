
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Lambda', description: 'Training Kit and Lectures'},
        {id: 2, name: 'W3Schools', description: 'Reference'},
        {id: 3, name: 'MDN', description: 'All things Mozilla'}
      ]);
    });
};
