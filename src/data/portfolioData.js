// Central Portfolio Data Configuration
// Update this file to customize your portfolio

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Hamza Ali",
    jobTitle: "Software Engineer",
    bio: "Experienced Software Engineer specializing in full-stack MERN development, authentication systems, platform architecture, automation, CI/CD pipelines, and backend APIs. Skilled in delivering complete end-to-end systems deployed across Linux, macOS, and Windows servers.",
    email: "hamza.alee83@gmail.com",
    phone: "+92 326 0390170",
    whatsapp: "+92 304 9068858",
    location: "Islamabad, Pakistan",
    avatar: "/profile.png", // Your profile image
  },

  // Social Links
  social: {
    github: "https://github.com/HamzaAliKundi",
    linkedin: "https://www.linkedin.com/in/hamza-ali-a46724243/",
    portfolio: "https://yourportfolio.com",
  },

  // Skills with icon names (will be mapped in Skills component)
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "FaReact" },
        { name: "Next.js", icon: "SiNextdotjs" },
        { name: "TypeScript", icon: "SiTypescript" },
        { name: "Tailwind CSS", icon: "SiTailwindcss" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "FaNode" },
        { name: "Express", icon: "SiExpress" },
        { name: "MongoDB", icon: "SiMongodb" },
        { name: "REST APIs", icon: "FaServer" },
      ],
    },
    {
      category: "Payments & Services",
      items: [
        { name: "Stripe", icon: "SiStripe" },
        { name: "Stripe Connect", icon: "SiStripe" },
        { name: "Clerk", icon: "SiClerk" },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Git", icon: "FaGitAlt" },
        { name: "GitHub Actions", icon: "SiGithubactions" },
        { name: "Linux", icon: "FaLinux" },
        { name: "Nginx", icon: "SiNginx" },
        { name: "CI/CD", icon: "FaCodeBranch" },
      ],
    },
    {
      category: "Other Technologies",
      items: [
        { name: "Python", icon: "FaPython" },
        { name: "Selenium", icon: "SiSelenium" },
        { name: "Cloudinary", icon: "SiCloudinary" },
        { name: "SendGrid", icon: "SiSendgrid" },
        { name: "Machine Learning", icon: "SiTensorflow" },
      ],
    },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "Glizzy Gaming Platform",
      description: "Full-stack gaming marketplace with multi-role dashboards, Electron-based DRM system, and Stripe Connect integration.",
      longDescription: "Built a full-stack gaming marketplace with multi-role dashboards (Admin/Developer/Gamer). Implemented Clerk + JWT authentication with granular permission levels. Built Electron-based DRM system: hardware binding, license validation, automated wrapping. Implemented queue-based concurrent builds for macOS, Windows, and Linux game protection. Integrated Stripe Connect with revenue splitting, multi-game checkout, and transaction logs. Created region-based pricing system with automatic currency conversion and geo-discounts.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "Electron", "Stripe Connect", "MongoDB", "TypeScript"],
      githubUrl: "https://github.com/HamzaAliKundi",
      liveUrl: null,
      featured: true,
    },
    {
      id: 2,
      title: "MiniMuslims",
      description: "Personalized Islamic Book E-commerce platform with RBAC, automated printing, and international shipping.",
      longDescription: "Full-stack platform built using React (TS), Node.js, MongoDB, Stripe payments. Implemented RBAC using JWT with an admin dashboard for order and user management. Integrated Cloudinary, SendGrid, BookVault POD for automated printing and storage. Implemented subscription discounts, international shipping rules, and currency handling. Developed rigorous error-handling architecture improving checkout success rate.",
      image: "/project2.jpg",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe", "Cloudinary"],
      githubUrl: "https://github.com/HamzaAliKundi",
      liveUrl: null,
      featured: true,
    },
    {
      id: 3,
      title: "THE NTR App",
      description: "Backend integrations, automation flows, and API development with data extraction modules.",
      longDescription: "Contributed to backend integrations, automation flows, and API development. Implemented data extraction modules, authentication logic, and internal tools. Provided long-term maintenance, debugging, and optimization support.",
      image: "/project3.jpg",
      technologies: ["Node.js", "Express", "MongoDB", "Selenium", "Python"],
      githubUrl: "https://github.com/HamzaAliKundi",
      liveUrl: null,
      featured: true,
    },
    {
      id: 4,
      title: "U.S Job Seeker Platform",
      description: "Complete frontend UI for a U.S job seeker marketplace with search filters and responsive layouts.",
      longDescription: "Designed and developed the complete frontend UI for a U.S job seeker marketplace. Built reusable components, search filters, form handling, and responsive layouts. Integrated REST APIs for authentication, job listings, and user dashboard features.",
      image: "/project4.jpg",
      technologies: ["React", "JavaScript", "REST APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/HamzaAliKundi",
      liveUrl: null,
      featured: true,
    },
    {
      id: 5,
      title: "EasyBidder",
      description: "Modern bidding platform for auctions and marketplace transactions with real-time updates and secure payment processing.",
      longDescription: "A comprehensive bidding platform built with modern web technologies. Features include real-time auction updates, secure payment processing, user authentication, bid management, and responsive design. Built to provide a seamless experience for both buyers and sellers in the auction marketplace.",
      image: "/project5.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "WebSocket"],
      githubUrl: "https://github.com/HamzaAliKundi",
      liveUrl: "https://easybidder.site",
      featured: true,
    },
    {
      id: 6,
      title: "DragSpace",
      description: "Concert-based web platform with multi-role dashboards for users, performers, venues, and administrators. Serving the USA market.",
      longDescription: "A comprehensive concert management platform built for the USA market. Features include role-based access control with four distinct user types: Users (concert-goers), Performers (artists/musicians), Venues (event spaces), and Admin (platform administrators). Each role has customized dashboards and functionalities. Implemented event management, booking systems, payment processing, and real-time notifications. Built with scalable architecture to handle high traffic during peak concert seasons.",
      image: "/project6.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Role-Based Access Control"],
      githubUrl: "https://github.com/HamzaAliKundi",
      liveUrl: "https://dragspace.com",
      featured: true,
    },
    {
      id: 7,
      title: "DigitalTails",
      description: "Pet tag ordering platform with multi-region support for UK, USA, and Canada. Customizable pet identification solutions.",
      longDescription: "A full-stack e-commerce platform for pet tag ordering serving customers across UK, USA, and Canada. Features include customizable pet tag design, multi-currency support, region-specific shipping rules, and order management system. Implemented secure payment processing, inventory management, and automated order fulfillment workflows. Built responsive design to ensure seamless experience across all supported regions with localized pricing and shipping options.",
      image: "/project7.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Multi-region Support"],
      githubUrl: "https://github.com/HamzaAliKundi",
      liveUrl: "https://digitaltails.com",
      featured: true,
    },
    {
      id: 8,
      title: "Property Price Prediction ML Model",
      description: "Machine learning model for real estate price prediction using scikit-learn.",
      longDescription: "Built and trained ML models in Python using scikit-learn for real estate price prediction. Performed data preprocessing, feature engineering, and model evaluation. Deployed the model as a backend utility for automated price estimation.",
      image: "/project8.jpg",
      technologies: ["Python", "scikit-learn", "Machine Learning", "Data Science"],
      githubUrl: "https://github.com/HamzaAliKundi",
      liveUrl: null,
      featured: false,
    },
  ],

  // Experience
  experience: [
    {
      id: 1,
      company: "Machine Intelligence",
      position: "Software Engineer",
      duration: "Nov 2024 – Present",
      description: "Developing automation systems, backend modules, workflow engines, and scalable API infrastructures. Working on data-driven dashboards, authentication, and cloud-integrated microservices.",
      location: "Remote",
    },
    {
      id: 2,
      company: "NESL-IT",
      position: "MERN Stack Developer",
      duration: "Apr 2024 – Oct 2024",
      description: "Developed a full business development platform from scratch using MERN stack. Built REST APIs, JWT authentication, MongoDB schemas, and frontend UI with React. Designed technical flows by understanding bespoke client requirements. Built a U.S based job seeker web application as the main frontend developer.",
      location: "Remote",
    },
    {
      id: 3,
      company: "MyPro-Appz",
      position: "Node.js Developer",
      duration: "Aug 2023 – Apr 2024",
      description: "Worked with APIs, authentication, Selenium automation, and web scraping workflows. Played a major role in backend development and maintenance of THE NTR App. Built a machine learning model in Python for property price prediction.",
      location: "Remote",
    },
    {
      id: 4,
      company: "Pixel One Solution",
      position: "ReactJS Developer",
      duration: "Dec 2022 – Apr 2023",
      description: "Built UI layouts, API integrations, and reusable components. Participated in code reviews, debugging, and UI improvements.",
      location: "Remote",
    },
  ],

  // Education
  education: [
    {
      id: 1,
      institution: "University of Sargodha",
      degree: "BS in Computer Science",
      duration: "2019 - 2023",
      location: "Sargodha, Pakistan",
    },
  ],

  // Theme Configuration
  theme: {
    primaryColor: "#6366f1", // Indigo
    secondaryColor: "#8b5cf6", // Purple
    accentColor: "#ec4899", // Pink
    backgroundColor: "#0a0a0f",
    surfaceColor: "#1a1a2e",
    textColor: "#ffffff",
    textSecondary: "#a0a0a0",
  },
};
