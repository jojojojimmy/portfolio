export const myProjects = [
    {
    id: 1,
    title: "Fluenty",
    description:
      "Web Platform",
    subDescription: [
      "A full-stack web platform built with Django and React that connects Brazilian language students with native Canadian instructors, featuring role-based dashboards for students, instructors, and school admins, a scheduling system with Google Meet integration, quiz-based progress tracking, and instructor feedback tools and deployed via Docker with Supabase handling authentication and database management."
    ],
    href: "https://www.youtube.com/watch?si=LJXohXDsvFchV1Ba&v=N_T5LnHEnsg&feature=youtu.be",
    ctaLabel: "View Demo",
    logo: "",
    image: "/assets/projects/fluenty.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Django", path: "/assets/logos/django.svg" },
      { id: 3, name: "Supabase", path: "/assets/logos/supabase.svg" },
      { id: 4, name: "Docker", path: "/assets/logos/docker.svg" },
    ],
  },
  {
    id: 2,
    title: "Flux",
    description:
      "Mock Interview Platform",
    subDescription: [
      "Built a full-stack AI mock interview platform integrating OpenAI Whisper for speech-to-text and GPT-4o-mini for real-time feedback via RESTful APIs, with secure Supabase session handling that auto-deletes user data after use, email notifications via Nodemailer, and a scalable Node.js backend deployed on Render."
    ],
    href: "https://hacked2025.onrender.com/",
    ctaLabel: "View Project",
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "OpenAI", path: "/assets/logos/openai.svg" },
      { id: 4, name: "Supabase", path: "/assets/logos/supabase.svg" },
      { id: 5, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    title: "QuickScanQuestPro",
    description:
      "Android App",
    subDescription: [
      "An Android event management app that lets organizers create and manage events while attendees discover and join nearby activities, featuring QR code check-ins, real-time Firebase sync, geolocation heatmaps, push notifications, and role-based access and covering the full event lifecycle from creation to attendee management."
    ],
    href: "https://github.com/jojojojimmy/QuickScanQuestPro",
    ctaLabel: "View Repo",
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "Java", path: "/assets/logos/java.svg" },
      { id: 2, name: "Firebase", path: "/assets/logos/firebase.svg" },
      { id: 3, name: "Android Studio", path: "/assets/logos/androidstudio.svg" },
    ],
  },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    job: "Fluenty",
    date: "January 2025 – April 2025",
    contents: [
      "Built and deployed a full-stack web platform connecting Brazilian students with Canadian instructors, owning the complete software lifecycle from requirements through production.",
      "Designed role-specific dashboards for 3 user types using React, Tailwind, and Django.",
      "Maintained 90% code coverage with Selenium and established a CI/CD pipeline integrated with SonarQube.",
      "Deployed via Docker on cloud infrastructure with Supabase handling database management and authentication.",
    ],
  },
  {
    title: "Footwear Advisor",
    job: "Sport Chek",
    date: "July 2024 – August 2025",
    contents: [
      "Provided personalized footwear recommendations to customers across athletic and lifestyle categories, driving satisfaction and repeat visits.",
      "Managed inventory, restocking, and visual merchandising to maintain an organized and appealing sales floor.",
      "Assessed customer needs and activity levels to match them with appropriate footwear for performance and comfort.",
      "Built rapport with customers through knowledgeable, friendly service contributing to consistent upsell opportunities.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    job: "Imtac",
    date: "May 2024 – June 2024",
    contents: [
      "Developed a full-stack Employee Management System using Angular and Spring Boot with a focus on security, performance, and scalable data architecture.",
      "Implemented role-based access control (RBAC) and secure authentication using Spring Security.",
      "Designed and normalized PostgreSQL schemas to support scalable employee records and permissions.",
      "Optimized SQL queries and indexing strategies, reducing query execution time by 30%.",
    ],
  },
  {
    title: "Computer Solutions Advisor",
    job: "Best Buy",
    date: "August 2023 – December 2023",
    contents: [
      "Advised customers on technology products and solutions, translating complex technical specifications into clear recommendations tailored to individual needs.",
      "Consistently matched customers with the right hardware, software, and accessories based on use case and budget.",
      "Maintained up-to-date knowledge of the latest consumer tech trends, products, and competitor offerings.",
      "Collaborated with team members to meet sales targets and deliver a high-quality in-store experience.",
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/joshuajimmy-cs/",
    icon: "/assets/socials/linkedin.svg",
  },
  {
    name: "Github",
    href: "https://github.com/jojojojimmy",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Gmail",
    href: "mailto:joshuajimmy26@gmail.com",
    icon: "/assets/socials/gmail.svg",
  },

];