
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, projects_id: 1, notes: 'User Interface', description: 'semantic html and css', completed: true },
        {id: 2, projects_id: 1, notes: 'advance User Interface', description: 'CSS compilers and tricks', completed: false },
        {id: 3, projects_id: 2, notes: 'JavaScript', description: 'OMG what have I done?', completed: false },
        {id: 4, projects_id: 3, notes: 'BuildWeek 1', description: 'Wait what? really?', completed: true }
      ]);
    });
};
