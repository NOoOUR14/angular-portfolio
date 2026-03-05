const mongoose = require("mongoose");
const Project = require("./models/project");

mongoose.connect("mongodb://127.0.0.1:27017/portfolio")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

const projects =
  [
  {
    "id": 1,
    "name": "Vibe Stitch E-commerce",
    "summary": "A specialized MEAN stack platform for Gen Z fashion and custom apparel.",
    "description": "A comprehensive e-commerce solution featuring product browsing, shopping cart functionality, and secure checkout. Includes a full administrative dashboard for inventory and order management.",
    "projectLink": "https://github.com/your-repo/vibe-stitch",
    "tags": ["Angular", "Node.js", "Express", "MongoDB", "Bootstrap"]
  },
  {
    "id": 2,
    "name": "Smart Library Manager",
    "summary": "An intelligent system for organizing books and tracking library loans.",
    "description": "A web application that simplifies book searching and monitors return deadlines with an automated notification system for members and staff.",
    "projectLink": "https://github.com/your-repo/library-app",
    "tags": ["JavaScript", "HTML5", "CSS3", "JSON", "Local Storage"]
  },
  {
    "id": 3,
    "name": "Task Master Pro",
    "summary": "A professional task management tool for software development teams.",
    "description": "Helps teams organize tasks using a Kanban-style interface, allowing for priority setting, time tracking, and progress reporting across multiple projects.",
    "projectLink": "https://github.com/your-repo/task-master",
    "tags": ["TypeScript", "Angular", "Firebase", "Angular Material"]
  },
  {
    "id": 4,
    "name": "Portfolio Backend API",
    "summary": "A robust REST API designed to power personal portfolio websites.",
    "description": "Provides secure endpoints for managing projects, technical skills, and contact form submissions. Implements JWT for secure administrative access.",
    "projectLink": "https://github.com/your-repo/portfolio-api",
    "tags": ["Node.js", "Express", "Mongoose", "JWT", "Postman"]
  },
  {
    "id": 5,
    "name": "Weather Pulse",
    "summary": "Real-time weather forecasting application with global city coverage.",
    "description": "Integrates with the OpenWeather API to provide 7-day forecasts, featuring dynamic charts to visualize temperature fluctuations and humidity levels.",
    "projectLink": "https://github.com/your-repo/weather-app",
    "tags": ["React", "API Integration", "Chart.js", "Tailwind CSS"]
  },
  {
    "id": 6,
    "name": "Handmade Gifts Boutique",
    "summary": "Showcase platform for artisanal gifts and laser-engraving services.",
    "description": "A design-focused project allowing users to view handmade products with options for personalization and direct ordering via messaging integrations.",
    "projectLink": "https://github.com/your-repo/handmade-store",
    "tags": ["Angular", "UI/UX", "Bootstrap", "Responsive Design"]
  },
  {
    "id": 7,
    "name": "Chef's Secret Recipes",
    "summary": "A community-driven platform for sharing and rating global recipes.",
    "description": "Allows chefs to upload recipes, categorize them by cuisine type, and include step-by-step video tutorials for the user community.",
    "projectLink": "https://github.com/your-repo/recipes-web",
    "tags": ["PHP", "MySQL", "jQuery", "CSS3"]
  },
  {
    "id": 8,
    "name": "Job Finder Bot",
    "summary": "Automated Telegram bot for tracking tech job openings in Egypt.",
    "description": "Scrapes top job boards daily and sends instant alerts to users based on their specific technical skills and experience levels.",
    "projectLink": "https://github.com/your-repo/job-bot",
    "tags": ["Python", "Web Scraping", "Telegram API", "Automation"]
  },
  {
    "id": 9,
    "name": "Fitness Tracker App",
    "summary": "Mobile-first application for tracking workouts and daily nutrition.",
    "description": "Enables users to build customized workout routines and calculate daily caloric needs based on physical metrics and fitness goals.",
    "projectLink": "https://github.com/your-repo/fitness-app",
    "tags": ["Flutter", "Dart", "Firebase Auth", "NoSQL"]
  },
  {
    "id": 10,
    "name": "Crypto Insight Dashboard",
    "summary": "Analytical dashboard for monitoring cryptocurrency market trends.",
    "description": "Displays real-time price data and market analysis using advanced visualization tools to help users track digital asset performance.",
    "projectLink": "https://github.com/your-repo/crypto-app",
    "tags": ["Vue.js", "Axios", "Vuetify", "Real-time Data"]
  }];

Project.insertMany(projects)
.then(() => {
  console.log("✅ Projects added!");
  mongoose.connection.close();
})
.catch(err => console.log(err));
