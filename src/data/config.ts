const config = {
  title: "Veerabrahmam Sangani | Full Stack Developer",
  description: {
    long: "Full Stack Engineer with 1+ year of experience building scalable React-based applications and cloud-integrated platforms. Strong foundation in performance optimization and modular UI architecture, with experience integrating REST APIs, WebSockets, and deploying AI-driven and enterprise applications on AWS.",
    short:
      "Veerabrahmam Sangani — Full Stack Developer portfolio focused on React, FastAPI, Node.js and AWS.",
  },
  keywords: [
    "Veerabrahmam Sangani",
    "portfolio",
    "full stack developer",
    "software engineer",
    "web development",
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "Python",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "AWS",
  ],
  author: "Veerabrahmam Sangani",
  email: "veerusangani89@gmail.com",
  site: "https://veerunjoys-portifolio.vercel.app",

  // for github stars button
  githubUsername: "veerunjoys",
  githubRepo: "veerunjoys",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/veerabrahmam-sangani",
    instagram: "https://www.instagram.com/veerunjoys",
    facebook: "https://www.facebook.com/veerunjoys",
    github: "https://github.com/veerunjoys",
  },
};
export { config };
