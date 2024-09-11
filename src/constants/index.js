import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpeg";

export const HERO_CONTENT = `I am a passionate full-stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Tailwind CSS, as well as back-end technologies like Node.js, Actix Web, MySQL, PostgreSQL, and MongoDB. Additionally, I have experience with Redis, Kafka, and Express.js, allowing me to build efficient and maintainable solutions across the entire stack.`;

export const ABOUT_TEXT = `
I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. I have experience working with a variety of technologies, including React, Next.js, Node.js, Actix Web, MySQL, PostgreSQL, and MongoDB, as well as Redis and Kafka for scalable backend solutions. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges.

I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Currently, I’m expanding my skill set by exploring Three.js to create immersive 3D web experiences. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "Unify Library",
    image: project1,
    url:"https://github.com/krisn2/unify",
    description:
      "This Rust crate provides an abstraction layer for integrating multiple payment gateways, including Stripe, Razorpay, and Cashfree. It allows for easy switching between different payment providers through a common interface.",
    technologies: ["Rust", "Stripe", "Razorpay", "Cashfree"],
  },
  {
    title: "Shortly URL Shortener",
    image: project4,
    url:"https://github.com/krisn2/shortUrl",
    description:
      "A URL shortener built with ejs, Node.js, and MongoDB. It allows users to shorten and share long URLs with ease.",
    technologies: [ "ejs", "Node.js", "Express", "mongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "framer-motion", "Vite"],
  },
  {
    title: "Blog Application",
    image: project2,
    url:"https://github.com/krisn2/blogsite",
    description:
      "A full-stack blog application that allows users to create, read, update, and delete blog posts. The application uses ejs, Node.js, and mongoDB.",
    technologies: ["ejs", "Bootstrap", "ejs", "Node.js", "mongoDB"],
  },

];

export const CONTACT = {
  address: "Juna mondha Rohidaspura Chhatrapati Sambhajinagar, Maharastra, India",
  phoneNo: "+91 9359848364",
  email: "krishnasarone08@gmail.com",
};
