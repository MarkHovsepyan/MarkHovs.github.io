// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Programming Languages', 'Javascript'],
  },
  {
    title: 'Node.js',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.js',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Prisma',
    competency: 4,
    category: ['Databases', 'Web Development', 'Javascript'],
  },
  {
    title: 'Sequelize',
    competency: 4,
    category: ['Databases', 'Web Development', 'Javascript'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Programming Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Puppeteer',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases', 'Web Development'],
  },
  {
    title: 'Angular',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'MySQL/PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Databases', 'Web Development', 'Programming Languages'],
  },
  {
    title: 'Matlab',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Programming Languages'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Express.js',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'GPT-3',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Alexa Skills',
    competency: 4,
    category: ['Smart Assistants', 'SMS/Communication'],
  },
  {
    title: 'Twilio',
    competency: 4,
    category: ['Smart Assistants', 'SMS/Communication'],
  },
  {
    title: 'Flask',
    competency: 2,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Web Development', 'Programming Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 2,
    category: ['Web Development', 'Programming Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Programming Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Programming Languages'],
  },
  {
    title: 'Go',
    competency: 2,
    category: ['Programming Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Programming Languages'],
  },
  {
    title: 'R',
    competency: 4,
    category: ['Programming Languages', 'Data Science'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Data Engineering'],
  },
  {
    title: 'GraphQL',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Hadoop',
    competency: 2,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Photoshop',
    competency: 3,
    category: ['Media'],
  },
  {
    title: 'Lightroom',
    competency: 3,
    category: ['Media'],
  },
  {
    title: 'Premiere Pro',
    competency: 4,
    category: ['Media'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Programming Languages'],
  },
  {
    title: 'Assembly',
    competency: 2,
    category: ['Programming Languages'],
  },
  {
    title: 'Public Speaking',
    competency: 4,
    category: ['Other'],
  },
  {
    title: 'Piano',
    competency: 4,
    category: ['Other'],
  },
  {
    title: 'Guitar',
    competency: 2,
    category: ['Other'],
  },
  {
    title: 'Microsoft Office',
    competency: 4,
    category: ['Other'],
  },
  {
    title: 'GNU/Linux',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Armenian',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'English',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Russian',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'German',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'French',
    competency: 1,
    category: ['Languages'],
  },
  // {
  //   title: 'Deep Learning',
  //   competency: 4,
  //   category: ['Paradigms'],
  // },
  // {
  //   title: 'Android Development',
  //   competency: 3,
  //   category: ['Paradigms'],
  // },
  // {
  //   title: 'Hacking & Cyber Security',
  //   competency: 3,
  //   category: ['Paradigms'],
  // },
  // {
  //   title: 'Blockchain',
  //   competency: 3,
  //   category: ['Paradigms'],
  // },
  // {
  //   title: 'NLP',
  //   competency: 4,
  //   category: ['Paradigms'],
  // },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#32b347',
  '#f2ec44',
];

const categories = [...new Set(skills.reduce((acc, { category }) => acc.concat(category), []))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
