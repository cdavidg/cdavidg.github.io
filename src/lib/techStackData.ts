// GitHub-style color palette for technologies
export const techColors = {
  // Languages
  python: '#3572A5',
  php: '#4F5D95',
  javascript: '#f1e05a',
  typescript: '#3178c6',
  sql: '#e38c00',
  bash: '#89e051',
  
  // Frontend Frameworks
  react: '#61DAFB',
  nextjs: '#000000',
  vue: '#4FC08D',
  svelte: '#FF3E00',
  vite: '#646CFF',
  
  // Backend Frameworks
  django: '#092E20',
  flask: '#000000',
  fastapi: '#009688',
  laravel: '#FF2D20',
  wordpress: '#21759B',
  express: '#000000',
  nestjs: '#E0234E',
  
  // CMS & Web Frameworks
  woocommerce: '#96588A',
  elementor: '#92003B',
  
  // Mobile
  flutter: '#02569B',
  reactnative: '#61DAFB',
  
  // AI & ML
  tensorflow: '#FF6F00',
  pytorch: '#EE4C2C',
  opencv: '#5C3EE8',
  yolo: '#00FFFF',
  ocr: '#FF6B6B',
  
  // Databases
  postgresql: '#336791',
  mysql: '#4479A1',
  redis: '#DC382D',
  mongodb: '#47A248',
  sqlite: '#003B57',
  mariadb: '#003545',
  
  // State Management & Data
  redux: '#764ABC',
  zustand: '#443E38',
  reactquery: '#FF4154',
  
  // CSS & Styling
  tailwind: '#06B6D4',
  css: '#563d7c',
  styledcomponents: '#DB7093',
  
  // DevOps & Cloud
  docker: '#2496ED',
  kubernetes: '#326CE5',
  aws: '#FF9900',
  nginx: '#009639',
  linux: '#FCC624',
  githubactions: '#2088FF',
  
  // Testing
  jest: '#C21325',
  pytest: '#0A9EDC',
  playwright: '#2EAD33',
  cypress: '#17202C',
  
  // Queue & Workers
  celery: '#37814A',
  rabbitmq: '#FF6600',
  
  // Monitoring
  sentry: '#362D59',
  prometheus: '#E6522C',
  grafana: '#F46800',
  
  // Tools
  git: '#F05032',
  vscode: '#007ACC',
  postman: '#FF6C37',
  eslint: '#4B32C3',
  prettier: '#F7B93E',
};

export const getTechStackCategories = (t: any) => [
  {
    title: t.programmingLanguages,
    items: [
      { name: 'Python', color: techColors.python, percentage: 95 },
      { name: 'PHP', color: techColors.php, percentage: 80 },
      { name: 'TypeScript', color: techColors.typescript, percentage: 85 },
      { name: 'JavaScript', color: techColors.javascript, percentage: 90 },
      { name: 'SQL', color: techColors.sql, percentage: 85 },
      { name: 'Bash', color: techColors.bash, percentage: 75 },
      { name: 'HTML', color: '#e34c26', percentage: 90 },
      { name: 'CSS', color: techColors.css, percentage: 85 },
      { name: 'C++', color: '#f34b7d', percentage: 70}
    ]
  },
  {
    title: t.frontendFrameworks || 'Frontend',
    items: [
      { name: 'React', color: techColors.react, percentage: 90 },
      { name: 'Next.js', color: techColors.nextjs, percentage: 85 },
      { name: 'Vite', color: techColors.vite, percentage: 85 },
      { name: 'Tailwind CSS', color: techColors.tailwind, percentage: 90 },
      { name: 'Redux', color: techColors.redux, percentage: 75 },
      { name: 'Zustand', color: techColors.zustand, percentage: 70 },
    ]
  },
  {
    title: t.backendFrameworks || 'Backend',
    items: [
      { name: 'Django', color: techColors.django, percentage: 90 },
      { name: 'FastAPI', color: techColors.fastapi, percentage: 85 },
      { name: 'Flask', color: techColors.flask, percentage: 80 },
      { name: 'Laravel', color: techColors.laravel, percentage: 75 },
      { name: 'Express', color: techColors.express, percentage: 70 },
      { name: 'NestJS', color: techColors.nestjs, percentage: 65 },
    ]
  },
  {
    title: t.artificialIntelligence,
    items: [
      { name: 'PyTorch', color: techColors.pytorch, percentage: 90 },
      { name: 'TensorFlow', color: techColors.tensorflow, percentage: 85 },
      { name: 'OpenCV', color: techColors.opencv, percentage: 92 },
      { name: 'YOLO', color: techColors.yolo, percentage: 88 },
    ]
  },
  
  {
    title: t.cmsFrameworks || 'CMS & Web Frameworks',
    items: [
      { name: 'WordPress', color: techColors.wordpress, percentage: 90 },
      { name: 'Joomla', color: techColors.woocommerce, percentage: 85 },
      { name: 'Drupal', color: techColors.elementor, percentage: 75 },
    ]
  },
  {
    title: t.mobileFrameworks || 'Mobile',
    items: [
      { name: 'Flutter', color: techColors.flutter, percentage: 85 },
      { name: 'React Native', color: techColors.reactnative, percentage: 70 },
    ]
  },
  {
    title: t.databases,
    items: [
      { name: 'PostgreSQL', color: techColors.postgresql, percentage: 90 },
      { name: 'MySQL', color: techColors.mysql, percentage: 85 },
      { name: 'Redis', color: techColors.redis, percentage: 80 },
      { name: 'MongoDB', color: techColors.mongodb, percentage: 70 },
      { name: 'SQLite', color: techColors.sqlite, percentage: 80 },
      { name: 'MariaDB', color: techColors.mariadb, percentage: 75 },
    ]
  },
  
  {
    title: t.devops || 'DevOps & Cloud',
    items: [
      { name: 'Docker', color: techColors.docker, percentage: 90 },
      { name: 'Kubernetes', color: techColors.kubernetes, percentage: 75 },
      { name: 'Linux', color: techColors.linux, percentage: 95 },
      { name: 'Nginx', color: techColors.nginx, percentage: 80 },
      { name: 'AWS', color: techColors.aws, percentage: 75 },
      { name: 'GitHub Actions', color: techColors.githubactions, percentage: 85 },
    ]
  },
  {
    title: t.queueWorkers || 'Queue & Workers',
    items: [
      { name: 'Celery', color: techColors.celery, percentage: 85 },
      { name: 'RabbitMQ', color: techColors.rabbitmq, percentage: 75 },
    ]
  },
  {
    title: t.testing || 'Testing',
    items: [
      { name: 'pytest', color: techColors.pytest, percentage: 90 },
      { name: 'Jest', color: techColors.jest, percentage: 85 },
      { name: 'Playwright', color: techColors.playwright, percentage: 80 },
      { name: 'Cypress', color: techColors.cypress, percentage: 75 },
    ]
  },
  {
    title: t.monitoring || 'Monitoring',
    items: [
      { name: 'Sentry', color: techColors.sentry, percentage: 85 },
      { name: 'Prometheus', color: techColors.prometheus, percentage: 70 },
      { name: 'Grafana', color: techColors.grafana, percentage: 70 },
    ]
  },
  {
    title: t.tools,
    items: [
      { name: 'Git', color: techColors.git, percentage: 95 },
      { name: 'VS Code', color: techColors.vscode, percentage: 95 },
      { name: 'Postman', color: techColors.postman, percentage: 85 },
      { name: 'ESLint', color: techColors.eslint, percentage: 85 },
      { name: 'Prettier', color: techColors.prettier, percentage: 85 },
    ]
  },
];
