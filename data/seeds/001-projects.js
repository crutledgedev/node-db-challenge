
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Unit 1 Sprint', description: 'HTML, CSS and JS', completed: false },
        {id: 2, name: 'Unit 2 Sprint', description: 'Applied JS and Intro to React', completed: false },
        {id: 3, name: 'Unit 3 Sprint', description: 'Advanced React', completed: false }
      ]);
    });
};
