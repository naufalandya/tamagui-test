// Project.js

class Project {
    constructor({ name, description, deadline }) {
      this.name = name;
      this.description = description;
      this.deadline = deadline;
    }
  }
  
  const projectsList = [
    new Project({ name: 'Power Plant 1', description: 'Status: Construction', deadline: '2024-10-01' }),
    new Project({ name: 'Power Plant 2', description: 'Status: Budgeting', deadline: '2024-12-15' }),
    new Project({ name: 'Power Plant 3', description: 'Status: Legal Review', deadline: '2025-01-30' }),
    new Project({ name: 'Power Plant 4', description: 'Status: Commissioning', deadline: '2025-03-22' }),
    new Project({ name: 'Power Plant 5', description: 'Status: Construction', deadline: '2025-06-10' }),
    new Project({ name: 'Power Plant 6', description: 'Status: Budgeting', deadline: '2025-08-18' }),
    new Project({ name: 'Power Plant 7', description: 'Status: Legal Review', deadline: '2025-09-27' }),
    new Project({ name: 'Power Plant 8', description: 'Status: Commissioning', deadline: '2025-11-03' }),
    new Project({ name: 'Power Plant 9', description: 'Status: Construction', deadline: '2026-01-12' }),
    new Project({ name: 'Power Plant 10', description: 'Status: Budgeting', deadline: '2026-03-21' }),
  ];
  
  export { Project, projectsList };
  