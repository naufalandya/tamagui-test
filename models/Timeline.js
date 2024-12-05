// Timeline.js

class Timeline {
    constructor({ name, date, icon, progress }) {
      this.name = name;
      this.date = date;
      this.icon = icon; // Expected to be a string representing an icon name
      this.progress = progress; // Progress percentage as a decimal (0 to 1)
    }
  }
  
  const getDummyTimelines = () => [
    new Timeline({
      name: 'Site Selection and Survey',
      date: 'Jan 5, 2024',
      icon: 'location-on-outlined',
      progress: 0.1,
    }),
    new Timeline({
      name: 'Design and Engineering',
      date: 'Feb 10, 2024',
      icon: 'architecture-outlined',
      progress: 0.3,
    }),
    new Timeline({
      name: 'Permitting and Approvals',
      date: 'Mar 15, 2024',
      icon: 'gavel-outlined',
      progress: 0.5,
    }),
    new Timeline({
      name: 'Construction Start',
      date: 'Apr 20, 2024',
      icon: 'construction-outlined',
      progress: 0.7,
    }),
    new Timeline({
      name: 'Turbine Installation',
      date: 'Jun 1, 2024',
      icon: 'settings-input-antenna-outlined',
      progress: 0.85,
    }),
    new Timeline({
      name: 'Commissioning',
      date: 'Aug 10, 2024',
      icon: 'power-outlined',
      progress: 1.0,
    }),
    new Timeline({
      name: 'Operational Testing',
      date: 'Aug 20, 2024',
      icon: 'science-outlined',
      progress: 0.6,
    }),
    new Timeline({
      name: 'Commercial Operation Date (COD)',
      date: 'Sep 1, 2024',
      icon: 'verified-outlined',
      progress: 1.0,
    }),
    new Timeline({
      name: 'Post-Commissioning Maintenance',
      date: 'Oct 5, 2024',
      icon: 'settings-applications-outlined',
      progress: 0.2,
    }),
    new Timeline({
      name: 'Community Engagement',
      date: 'Nov 15, 2024',
      icon: 'people-alt-outlined',
      progress: 0.4,
    }),
  ];
  
  export { Timeline, getDummyTimelines };
  