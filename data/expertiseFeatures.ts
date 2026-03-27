export type ExpertiseFeature = {
  title: string
  description: string
  iconPath: string
}

const expertiseFeatures: ExpertiseFeature[] = [
  {
    title: 'Ruby on Rails Application Development',
    description:
      'We design and build production-ready Ruby on Rails applications from idea to launch, with clean architecture, scalable APIs, and maintainable codebases tailored to your business goals.',
    iconPath:
      'M3.75 5.25h16.5M3.75 9.75h16.5M8.25 14.25h3.75m-8.25 4.5h16.5a1.5 1.5 0 0 0 1.5-1.5V6.75a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5Z',
  },
  {
    title: 'Ruby on Rails Upgrades',
    description:
      'We upgrade legacy Rails apps safely across framework, Ruby, and dependency versions using phased rollouts, compatibility testing, and zero-downtime deployment practices.',
    iconPath:
      'M12 6v12m0 0 4-4m-4 4-4-4M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5A2.25 2.25 0 0 1 19.5 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25V6.75Z',
  },
  {
    title: 'Code Audits and Performance Optimization',
    description:
      'We run deep code and infrastructure audits to identify bottlenecks, security gaps, and technical debt, then implement practical optimizations that improve speed, stability, and cost.',
    iconPath: 'M3.75 3v18m0 0h18M3.75 15.75l4.5-4.5 3 3 6.75-6.75',
  },
  {
    title: 'Ruby on Rails Maintenance and Support',
    description:
      'We provide ongoing maintenance, incident response, and proactive monitoring to keep your Rails application secure, updated, and reliable as your product evolves.',
    iconPath:
      'M11.25 3v2.25m0 13.5V21m8.25-8.25h2.25M.75 12.75H3m14.364 5.864 1.591 1.591M4.045 4.045l1.591 1.591m11.728 0 1.591-1.591M4.045 20.205l1.591-1.591M14.25 12.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  },
  {
    title: 'Team Augmentation',
    description:
      'Need extra capacity fast? We embed experienced Rails engineers into your team to accelerate delivery, reduce backlog, and collaborate seamlessly with your existing workflows.',
    iconPath:
      'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z',
  },
  {
    title: 'Fractional CTO and Project Management',
    description:
      'We offer technical leadership and delivery oversight to help you define architecture, prioritize roadmaps, manage teams, and execute projects with clear business outcomes.',
    iconPath:
      'M9 12.75 11.25 15l3.75-5.25M6.75 3h10.5A2.25 2.25 0 0 1 19.5 5.25v13.5A2.25 2.25 0 0 1 17.25 21H6.75A2.25 2.25 0 0 1 4.5 18.75V5.25A2.25 2.25 0 0 1 6.75 3Z',
  },
]

export default expertiseFeatures
