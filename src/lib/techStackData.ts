// GitHub-style color palette for technologies
export const techColors = {
  // Languages
  python: '#3572A5',
  php: '#4F5D95',
  javascript: '#f1e05a',
  sql: '#e38c00',
  bash: '#89e051',
  
  // Frameworks & Libraries
  django: '#092E20',
  flask: '#000000',
  fastapi: '#009688',
  laravel: '#FF2D20',
  wordpress: '#21759B',
  tensorflow: '#FF6F00',
  pytorch: '#EE4C2C',
  
  // Databases
  postgresql: '#336791',
  mysql: '#4479A1',
  redis: '#DC382D',
  mongodb: '#47A248',
  
  // DevOps & Cloud
  docker: '#2496ED',
  kubernetes: '#326CE5',
  aws: '#FF9900',
  nginx: '#009639',
  linux: '#FCC624',
  
  // AI & CV
  opencv: '#5C3EE8',
  yolo: '#00FFFF',
  ocr: '#FF6B6B',
  
  // Tools
  git: '#F05032',
  vscode: '#007ACC',
  postman: '#FF6C37',
};

export const getTechStackCategories = (t: any) => [
  {
    title: t.programmingLanguages,
    items: [
      { name: 'Python', color: techColors.python, percentage: 95 },
      { name: 'PHP', color: techColors.php, percentage: 80 },
      { name: 'JavaScript', color: techColors.javascript, percentage: 70 },
      { name: 'SQL', color: techColors.sql, percentage: 85 },
      { name: 'Bash', color: techColors.bash, percentage: 75 },
    ]
  },
  {
    title: t.pythonFrameworks,
    items: [
      { name: 'Django', color: techColors.django, percentage: 90 },
      { name: 'FastAPI', color: techColors.fastapi, percentage: 85 },
      { name: 'Flask', color: techColors.flask, percentage: 80 },
    ]
  },
  {
    title: t.webFrameworks,
    items: [
      { name: 'Laravel', color: techColors.laravel, percentage: 75 },
      { name: 'WordPress', color: techColors.wordpress, percentage: 85 },
    ]
  },
  {
    title: t.databases,
    items: [
      { name: 'PostgreSQL', color: techColors.postgresql, percentage: 90 },
      { name: 'MySQL', color: techColors.mysql, percentage: 85 },
      { name: 'Redis', color: techColors.redis, percentage: 75 },
      { name: 'MongoDB', color: techColors.mongodb, percentage: 70 },
    ]
  },
  {
    title: t.artificialIntelligence,
    items: [
      { name: 'PyTorch', color: techColors.pytorch, percentage: 90 },
      { name: 'TensorFlow', color: techColors.tensorflow, percentage: 85 },
      { name: 'YOLO', color: techColors.yolo, percentage: 88 },
      { name: 'OpenCV', color: techColors.opencv, percentage: 92 },
    ]
  },
  {
    title: t.infrastructure,
    items: [
      { name: 'Docker', color: techColors.docker, percentage: 90 },
      { name: 'Linux', color: techColors.linux, percentage: 95 },
      { name: 'Nginx', color: techColors.nginx, percentage: 80 },
      { name: 'AWS', color: techColors.aws, percentage: 75 },
    ]
  },
  {
    title: t.tools,
    items: [
      { name: 'Git', color: techColors.git, percentage: 95 },
      { name: 'VS Code', color: techColors.vscode, percentage: 90 },
      { name: 'Postman', color: techColors.postman, percentage: 85 },
    ]
  },
];
