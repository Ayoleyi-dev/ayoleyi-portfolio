import { readFileSync, existsSync } from 'node:fs';

const read = (path) => readFileSync(path, 'utf8');
const projects = read('src/components/Projects.jsx');
const hero = read('src/components/Hero.jsx');
const experience = read('src/components/Experience.jsx');
const contact = read('src/components/Contact.jsx');
const html = read('index.html');
const app = read('src/App.jsx');

const requiredRepos = [
  'Public-Health-Data-Warehouse-Analytics-Pipeline',
  'Jumia-Phone-Market-Webscraping-EDA',
  'Hytale-Data-Analysis-Project',
  'PII-Data-Privacy-QA-Pipeline',
  'AI-Document-Extraction-QA-Validator',
  'Excel-Chocolate-Sales-Analysis'
];

const errors = [];
function expect(condition, reason) {
  if (!condition) errors.push(reason);
}

for (const name of requiredRepos) {
  expect(projects.includes('https://github.com/Ayoleyi-dev/' + name), 'Missing project repository link: ' + name);
}
expect(projects.includes('PROJECT_STORY.md'), 'Missing Hytale project story link');
expect(projects.includes('CASE_STUDY.md'), 'Missing warehouse case study link');
expect(projects.includes('Live dashboard'), 'Missing live dashboard link');
expect(hero.includes('Data analytics'), 'Hero no longer leads with analytics');
expect(hero.includes('Biochemistry undergraduate'), 'Actual undergraduate degree background missing');
expect(contact.includes('latest role-specific CV'), 'Current CV handoff guidance missing');
expect(app.includes('href="#projects"') && app.includes('href="#experience"') && app.includes('href="#contact"'), 'Missing navigation anchors');
expect(html.includes('name="description"') && html.includes('rel="canonical"'), 'Missing basic SEO metadata');
expect(!/Public-Health-Data-Warehouse-Analytics-Pipeline-(?=["'\/])/i.test(projects), 'Broken healthcare repository URL');
const copy = [hero, projects, experience, contact, html].join('\n');
for (const phrase of ['Majoring in Bioinformatics', 'quantifiable increase in sales', 'superior lead compound compared to clinical standards']) {
  expect(!copy.includes(phrase), 'Outdated or unsupported statement: ' + phrase);
}
for (const file of ['public/images/ayoleyi.png', 'public/videos/powerbi-demo.mp4', 'public/favicon.svg']) {
  expect(existsSync(file), 'Missing local asset: ' + file);
}
expect((projects.match(/github: 'https:\/\/github\.com\/Ayoleyi-dev\//g) || []).length === 6, 'Expected six flagship GitHub projects');

if (errors.length) {
  for (const error of errors) console.error('FAIL:', error);
  process.exitCode = 1;
} else {
  console.log('PASS: portfolio content, project links, assets and positioning checks');
}
